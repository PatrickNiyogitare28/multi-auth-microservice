/* eslint-disable  @typescript-eslint/no-explicit-any */

import axios from 'axios';
const {get} = axios;
export class GithubService {
    public async searchByQuery (query: string) : Promise<Record<string, unknown>> {
        let response;
        try{
            const res = await get(query, {headers: {'Accept': 'application/vnd.github.v3+json'}});
            response = res?.data;
        }
        catch(e:any){
            console.log(e.response);
            return e?.response;
        }
        return response;
    }
}