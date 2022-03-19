/* eslint-disable  @typescript-eslint/no-explicit-any */

import axios from 'axios';
const {get} = axios;
export class StackExchangeApiService {
    public async searchByOneTag (query: string) : Promise<Record<string, unknown>> {
        const res = await get(query);
        return res?.data;
    }
}