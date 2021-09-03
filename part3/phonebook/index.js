// require('dotenv').config()
// const express = require('express')
// const bodyParser = require('body-parser')
// const cors = require('cors')
// const app = express()
// const Person = require('./models/person')

// app.use(cors())

// morgan.token('body', (req) => JSON.stringify(req.body))


require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
const Person = require('./models/person')

app.use(bodyParser.json())
app.use(cors())

morgan.token('body', (req) => JSON.stringify(req.body))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

app.use(express.static('build'))

app.get('/api/persons', (request, response, next) => {
  Person.find({})
  .then(people => {
    if (people) {
      response.json(people)
    }
    else {
      response.status(204).end()
    }
  })
  .catch(error => next(error))
})

app.post('/api/persons', (request, response, next) => {
  const {name, number} = request.body

  if (name === undefined || number === undefined) {
    return response.status(400).json({ error: 'missing name or number' })
  }

  const person = new Person({
    number,
    name
  })

  person.save()
  .then(savedPerson => savedPerson.toJSON())
  .then(savedAndFormattedNote => {
    response.json(savedAndFormattedNote)
  }) 
  .catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then(personToRemove => {
      personToRemove ? response.status(204).end() : response.status(404).end()
    })
    .catch(error => next(error))
})

app.put('/api/persons/:id', (request, response, next) => {
  const {name, number} = request.body

  const person = {
    name,
    number
  }

  Person.findByIdAndUpdate(request.params.id, person, {new: true})
    .then(updatedPerson => {
      response.json(updatedPerson)
    })
    .catch(error => next(error))
})

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError' && error.kind === 'ObjectId') {
    return response.status(400).send({ error: 'malformatted id' })
  } 
  else if (error.name === 'ValidationError') {
    return response.status(400).send({ error: error.message })
  }

  next(error)
}
// this has to be the last loaded middleware.
app.use(errorHandler)

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint, requested resources cant be found' })
}
// handler of requests with unknown endpoint
app.use(unknownEndpoint)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})