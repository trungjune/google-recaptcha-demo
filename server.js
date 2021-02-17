const express = require('express')
const chalk = require('chalk')

const config = {
  hostname: 'localhost',
  port: 8000,
}

const app = express()

const logger = (str, type) => {
  const d = new Date()
  const timeStr = chalk.gray(`[${d.toTimeString().split(' ')[0]}]`)
  switch (type) {
    case 'info':
      return console.info(`${timeStr}  ${chalk.blue(str)}`)
    case 'error' || 'err':
      return console.error(`${timeStr}  ${chalk.red(str)}`)
    case 'dir':
      return console.dir(`${timeStr}  ${str}`)
    case 'log':
    default:
      return console.log(`${timeStr}  ${chalk.green(str)}`)
  }
}

app.use(express.static('public'))

app.use((req, res, next) => {
  logger(`${req.headers.host} connected!`)
  // logger(req.headers)
  logger(`${req.method} ${req.originalUrl}`, 'info')
  res.on('finish', () => {
    logger(
      `finished: ${res.statusCode} ${res.statusMessage}; ${res.get('Content-Length') || 0}b sent`,
      'info'
    )
  })
  next()
})

app.post('/', (err, req, res, next) => {
  if (err) logger(new Error(err), 'error')
  logger('Received POST')
  if (req.body !== {}) {
    console.log(req.body.firstname)
    console.log(req.body.lastname)
    console.log(req.body.message)
  }
  next()
})

app.use((err, req, res, next) => {
  logger(err.stack, 'error')
  res.status(500).send('Something broke!')
})

app.listen(config.port, config.hostname, () => {
  logger(`Server running at http://${config.hostname}:${config.port}/`)
})
