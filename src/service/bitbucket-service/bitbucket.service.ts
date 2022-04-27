/* eslint-disable  @typescript-eslint/no-explicit-any */

import axios from 'axios';
const { get } = axios;
export class BitBucketService {
  public async searchByQuery(query: string, authToken?: string): Promise<Record<string, unknown>> {
    let response;
    try {
      const res = await get(query+`?auth_token=${authToken}`);
      response = res?.data;
    } catch (e: any) {
      return e;
    }
    return response;
  }
}
