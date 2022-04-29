/*eslint curly: ["error", "multi-or-nest"]*/
import 'dotenv/config';
import { Request, Response } from 'express';
import { Inject } from 'typescript-ioc';
import { CustomResponse } from '../../utils/custom-response';
import { EStatusCode } from '../../enums/EStatusCode';
import { BitBucketService } from '../../service/bitbucket-service/bitbucket.service';

const { OK, BAD_REQUEST } = EStatusCode;
export class BitBucketSearchController {
  private bitbucketService: BitBucketService;
  private BITBUCKET_AUTH_TOKEN:string;
  private query: string;
  constructor(@Inject bitbucketService: BitBucketService) {
    this.bitbucketService = bitbucketService;
    this.query = `${process.env.BITBUCKET_API}`;
    this.BITBUCKET_AUTH_TOKEN = process.env.BITBUCKET_AUTH_TOKEN as string;
  }

  public async searchUserRepositories(req: Request, res: Response): Promise<Response> {
    const { username } = req.query;
    if (!username)
      return res.status(BAD_REQUEST).send(new CustomResponse(false, { message: 'user name is required' }));
    const data = await this.bitbucketService.searchByQuery(this.query + `/repositories/${username}`, this.BITBUCKET_AUTH_TOKEN);
    return res.status(OK).send(new CustomResponse(true, data));
  }

  public async searchWorkSpaceRepositories(req: Request, res: Response): Promise<Response>{
    const {workspace} = req.params;
    const data = await this.bitbucketService.searchByQuery(this.query+`/workspaces/${workspace}/projects`, this.BITBUCKET_AUTH_TOKEN);
    return res.status(OK).send(new CustomResponse(true, data));
  }

  public async searchIssues(req: Request, res: Response): Promise<Response> {
    const {workspace, repoSlug} = req.params;
    const data = await this.bitbucketService.searchByQuery(this.query+`/repositories/${workspace}/${repoSlug}/issues`, this.BITBUCKET_AUTH_TOKEN);
    return res.status(OK).send(new CustomResponse(true, data));
  }

  public async searchFileSource(req: Request, res: Response) : Promise<Response>{
    const {workspace, repository} = req.params;
    const {filePath} = req.query;
    if(!filePath) return res.status(BAD_REQUEST).send(new CustomResponse(false, { message: 'File path is required'}));
    const data = await this.bitbucketService.searchByQuery(this.query+`/repositories/${workspace}/${repository}/${filePath}`, this.BITBUCKET_AUTH_TOKEN);
    return res.status(OK).send(new CustomResponse(true, data));
  }
}

