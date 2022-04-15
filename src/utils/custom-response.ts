import { TCustomResponse } from "CustomResponse";

export class CustomResponse {
    private success: boolean;
    private data: Record<string , unknown> | string;

    constructor (success: boolean, data: Record<string , unknown> | string){
        this.success = success;
        this.data = data;
        this.makeResponse();
    }
    public makeResponse () : TCustomResponse {
        let response = {success: this.success}
        if(this.success) return {...response, data: this.data as Record<string, unknown>}
        return {...response, message: this.data as string}
    }
}