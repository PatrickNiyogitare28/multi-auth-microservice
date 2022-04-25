/*eslint curly: ["error", "multi-or-nest"]*/
import 'dotenv/config';
import { Request, Response } from 'express';
import { Inject } from 'typescript-ioc';
import { CustomResponse } from '../../utils/custom-response';
import { EStatusCode } from '../../enums/EStatusCode';
import { BitBucketService } from '../../service/bitbucket-service/bitbucket.service';

const { OK, BAD_REQUEST, NOT_FOUND } = EStatusCode;
export class BitBucketSearchController {
  private bitbucketService: BitBucketService;
  private query: string;
  constructor(@Inject bitbucketService: BitBucketService) {
    this.bitbucketService = bitbucketService;
    this.query = `${process.env.BITBUCKET_API}`;
  }

  public async searchRepositories(req: Request, res: Response): Promise<Response> {
    const { username } = req.query;
    if (!username)
      return res.status(BAD_REQUEST).send(new CustomResponse(false, { message: 'user name is required' }));
    const data = await this.bitbucketService.searchByQuery(this.query + `/repositories/${username}`, process.env.BITBUCKET_ACCESS_TOKEN);
    return res.status(OK).send(new CustomResponse(true, data));
  }
}
