/*eslint curly: ["error", "multi-or-nest"]*/
import 'dotenv/config';
import { Request, Response } from 'express';
import { Inject } from 'typescript-ioc';
import { CustomResponse } from '../../utils/custom-response';
import { EStatusCode } from '../../enums/EStatusCode';
import { GithubService } from '../../service/github-service';

const { OK, BAD_REQUEST, NOT_FOUND } = EStatusCode;
export class GithubSearchController {
  private githubService: GithubService;
  private query: string;
  constructor(@Inject githubService: GithubService) {
    this.githubService = githubService;
    this.query = `${process.env.GITHUB_API}/search`;
  }

  public async searchRepository(req: Request, res: Response): Promise<Response> {
    const { name } = req.query;
    const { authorization } = req.headers;

    if (!name)
      return res.status(BAD_REQUEST).send(new CustomResponse(false, { message: 'Repository name is required' }));
    const data = await this.githubService.searchByQuery(this.query + `/repositories?q=${name}`, authorization);
    return res.status(OK).send(new CustomResponse(true, data));
  }

  public async searchUserByUserName(req: Request, res: Response): Promise<Response> {
    const { username } = req.query;
    const { authorization } = req.headers;

    if (!username)
      return res.status(BAD_REQUEST).send(new CustomResponse(false, { message: 'Username name is required' }));
    const data = await this.githubService.searchByQuery(this.query + `/users?q=${username}`, authorization);
    return res.status(OK).send(new CustomResponse(true, data));
  }

  public async searchIssues(req: Request, res: Response): Promise<Response> {
    const { q } = req.query;
    const { authorization } = req.headers;

    if (!q) return res.status(BAD_REQUEST).send(new CustomResponse(false, { message: 'Query is required' }));
    const data = await this.githubService.searchByQuery(this.query + `/issues?q=${q}`, authorization);
    return res.status(OK).send(new CustomResponse(true, data));
  }

  public async getOrganizationByOrgName(req: Request, res: Response): Promise<Response> {
    const { organizationName } = req.params;
    const { authorization } = req.headers;

    if (!organizationName)
      return res.status(BAD_REQUEST).send(new CustomResponse(false, { message: 'Organization name is required' }));
    const data = await this.githubService.searchByQuery(
      `${process.env.GITHUB_API}/orgs/${organizationName}`,
      authorization
    );
    const jsonData = JSON.parse(JSON.stringify(data));
    if (jsonData?.status === 404)
      return res
        .status(NOT_FOUND)
        .send(new CustomResponse(false, `Organization with name [${organizationName}] not found`));
    return res.status(OK).send(new CustomResponse(true, data));
  }
}
