require('dotenv').config()
import querystring from 'querystring'
import axios from 'axios'
import { Request, Response } from 'express'
import { getCustomRepository, getRepository } from 'typeorm'
import { Log, LogType } from '../entities/log.entity'

export class AuthenticationService {
  public static getGithubToken = async (code: string) => {
    try {
      const response = await axios.post(
        `https://github.com/login/oauth/access_token?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&code=${code}`
      )

      const githubToken = response.data
      const decodedToken = querystring.parse(githubToken)
      const accessToken = decodedToken.access_token

      return accessToken
    } catch (error) {
      console.log('Error while getting the token from GitHub')
      throw error
    }
  }

  public static getGithubUser = async (token: string) => {
    try {
      const user = await axios.get('https://api.github.com/user', {
        headers: { Authorization: token },
      })

      await this.storeLog(user.data, LogType.FETCH_USER)

      return user.data
    } catch (error) {
      console.log('Error while getting the user from GitHub')
      throw error
    }
  }

  public static getGithubRepos = async (
    request: Request,
    response: Response
  ) => {
    try {
      const token = request.header('Authorization')
      const repos = await axios.get('https://api.github.com/user/repos', {
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: token,
          'X-GitHub-Api-Version': '2022-11-28',
        },
      })
      await this.storeLog(repos.data, LogType.FETCH_REPOS)
      return repos.data
    } catch (error) {
      console.log('Error while getting repos from GitHub')
      throw error
    }
  }

  public static storeLog = async (data: any, type: LogType) => {
    const id = LogType.FETCH_USER ? data.id : null
    const logRepository = getRepository(Log)

    logRepository
      .createQueryBuilder('log')
      .insert()
      .into(Log)
      .values({ type, userId: id, data })
      .execute()
  }
}
