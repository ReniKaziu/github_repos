import { Request, Response } from 'express'
import { AuthenticationService } from '../services/authentication.service'

export class AuthenticationController {
  public static getGithubToken = async (
    request: Request,
    response: Response
  ) => {
    try {
      const token = await AuthenticationService.getGithubToken(
        request.query.code as string
      )
      response.status(200).json({
        token,
      })
    } catch (error) {
      response
        .status(401)
        .json({ message: 'Error while getting the token from GitHub' })
    }
  }

  public static getGithubUser = async (
    request: Request,
    response: Response
  ) => {
    try {
      const user = await AuthenticationService.getGithubUser(
        request.header(`Authorization`)
      )
      response.status(200).json({
        user,
      })
    } catch (error) {
      response
        .status(401)
        .json({ message: 'Error while getting the user from GitHub' })
    }
  }

  public static getGithubRepos = async (
    request: Request,
    response: Response
  ) => {
    try {
      const repos = await AuthenticationService.getGithubRepos(
        request,
        response
      )
      response.status(200).json({
        repos,
      })
    } catch (error) {
      response.status(401).json({ message: 'Did not fetch repos!' })
    }
  }
}
