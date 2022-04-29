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

  public async searchWorkplaceRepositories(req: Request, res: Response): Promise<Response>{
    const {workplace} = req.params;
    const data = await this.bitbucketService.searchByQuery(this.query+`/workspaces/${workplace}/projects`, this.BITBUCKET_AUTH_TOKEN);
    return res.status(OK).send(new CustomResponse(true, data));
  }

  public async searchIssues(req: Request, res: Response): Promise<Response> {
    const {workspace, repoSlug} = req.params;
    const data = await this.bitbucketService.searchByQuery(this.query+`/repositories/${workspace}/${repoSlug}/issues`);
    return res.status(OK).send(new CustomResponse(true, data));
  }
}

