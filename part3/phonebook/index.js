require('dotenv').config()
const { response } = require('express')
const express = require('express')
const app = express()
const Person = require('./models/person')
app.use(express.json())

let persons = [
    { 
        "id": 1,
        "name": "Arto Hellas", 
        "number": "040-123456"
      },
      { 
        "id": 2,
        "name": "Ada Lovelace", 
        "number": "39-44-5323523"
      },
      { 
        "id": 3,
        "name": "Dan Abramov", 
        "number": "12-43-234345"
      },
      { 
        "id": 4,
        "name": "Mary Poppendieck", 
        "number": "39-23-6423122"
      }
  ]

// Fetching random string response
//   app.get('/', (request, response) => {
//     response.send('<h1>Hello World!</h1>')
//   })

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/info',  (request, response) => {
    const currentDate = new Date();
    const  timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    response.send (
        `
        <div>
        <p>Phonebook has info for ${persons.length} people </p>
        </div>
        <div>
        <p>${currentDate} ${timeZone}</p>
        </div>
        `
    )
})

app.get('/api/persons/:id', (request, response) => {
  Person.findById(request.params.id).then(person => {
    response.json(person)
  })
})
  
// Add new entries
const generateId = () => {
  const maxId = notes.length > 0
    ? Math.max(...notes.map(n => n.id))
    : 0
  return maxId + 1
}

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (body.content === undefined) {
    return response.status(400).json({ error: 'content missing' 
    })
  }

  const person = {
    name: body.name,
    number: body.number
  }

  person.save().then(savedPerson => {
    response.json(savedPerson)
  })
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})