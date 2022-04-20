/* eslint-disable  @typescript-eslint/no-explicit-any */

import axios from 'axios';
const { get } = axios;
export class GithubService {
  public async searchByQuery(query: string, accessToken?: string): Promise<Record<string, unknown>> {
    let response;
    try {
      const res = await get(query, {
        headers: { Authorization: `token ${accessToken}` },
      });
      response = res?.data;
    } catch (e: any) {
      return e;
    }
    return response;
  }
}
