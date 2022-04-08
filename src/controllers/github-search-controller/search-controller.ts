/*eslint curly: ["error", "multi-or-nest"]*/
import 'dotenv/config';
import {Request, Response} from 'express';
import { Inject } from 'typescript-ioc';
import { CustomResponse } from '../../utils/custom-response';
import { EStatusCode } from '../../enums/EStatusCode';
import { GithubService } from '../../service/github-service';

const {OK, BAD_REQUEST} = EStatusCode;
export class GithubSearchController {
    private githubService: GithubService;
    private query: string;
    constructor(@Inject githubService: GithubService){
        this.githubService = githubService;
        this.query = `${process.env.GITHUB_API}/search/repositories`;
    }

    public async searchRepository(req: Request, res: Response): Promise<Response>{
       const {name} = req.query;
       if(!name) return res.status(BAD_REQUEST).send(new CustomResponse(false, {message: "Repository name is required"}));
       const data = await this.githubService.searchByQuery(this.query+`?q=${name}`);
       return res.status(OK).send(new CustomResponse(true, data));
    }
}