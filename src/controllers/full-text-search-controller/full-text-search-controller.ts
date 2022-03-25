/*eslint curly: ["error", "multi-or-nest"]*/
import 'dotenv/config';
import {Request, Response} from 'express';
import { StackExchangeApiService }  from '@service/stack-exchange-service';
import { Inject } from 'typescript-ioc';
import { CustomResponse } from '../../utils/custom-response';
import { EStatusCode } from '../../enums/EStatusCode';

const {OK, BAD_REQUEST} = EStatusCode;
export class FullTextSearchText {
    private stackExchangeApiService: StackExchangeApiService;
    private query: string;
    constructor(@Inject stackExchangeApiService: StackExchangeApiService){
        this.stackExchangeApiService = stackExchangeApiService;
        this.query = `${process.env.STACKEXCHANGE_API}/search/advanced?key=${process.env.STACKEXCHANGE_APPS_KEY}&site=stackoverflow&order=desc&sort=activity&filter=default`;
    }

    public async searchByFullText(req: Request, res: Response): Promise<Response>{
       const {text} = req.query;
       if(!text) return res.status(BAD_REQUEST).send(new CustomResponse(false, {message: "text is required"}));
       const data = await this.stackExchangeApiService.searchByQuery(this.query+`&q=${text}`);
       return res.status(OK).send(new CustomResponse(true, data));
    }
}