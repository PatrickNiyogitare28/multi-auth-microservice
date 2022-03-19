import { TCustomResponse } from "CustomResponse";

export class CustomResponse {
    private success: boolean;
    private data: Record<string , unknown>;

    constructor (success: boolean, data: Record<string , unknown>){
        this.success = success;
        this.data = data;
        this.makeResponse();
    }

    public makeResponse () : TCustomResponse {
        return {
          success: this.success,
          data: this.data
        };
    }
}