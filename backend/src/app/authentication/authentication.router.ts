import express from 'express'
import { AuthenticationController } from './controllers/authentication.controller'

export class AuthenticationRouter {
  public static configRoutes = (app: express.Application) => {
    app.get('/callback', [AuthenticationController.getGithubToken])

    app.get('/github/user', [AuthenticationController.getGithubUser])

    app.get('/github/repos', [AuthenticationController.getGithubRepos])
  }
}
