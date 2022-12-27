import express from 'express'
import 'reflect-metadata'
import { createConnection } from 'typeorm'
require('dotenv').config()
var bodyParser = require('body-parser')
import { AuthenticationRouter } from './app/authentication/authentication.router'
import cors from 'cors'

export const app = express()
app.use(cors())
app.use(bodyParser())

const port = process.env.PORT || 5000

createConnection()
  .then(() => {
    app.listen(port, () => {
      return console.log(`server is listening on ${port}`)
    })
  })
  .catch((error) => console.log(error))

AuthenticationRouter.configRoutes(app)
