import { NextFunction, Request, Response } from 'express'
import Joi from 'joi'

export class AuthenticationMiddleware {
  public static hasLoginValidFields = (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    const loginInput = Joi.object().keys({
      username: Joi.string().required(),
      password: Joi.string().required(),
    })

    const result = loginInput.validate(request.body, { abortEarly: false })

    if (result.error) {
      return response.status(422).send(result.error)
    }
    next()
  }
}
