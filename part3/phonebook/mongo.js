const mongoose = require('mongoose')
const [ , , password, name, number] = process.argv // input for command line: node mongo.js 

if (!password) {
  console.log('missing password as argument')
  process.exit(1)
}

const url =
`mongodb+srv://clare:${password}@cluster0.2v4nc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true })
  .catch(error => console.error('DB connect error:', error))

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', personSchema)

const findPerson = () => {
  Person.find({}).then(result => {
    console.log('Phonebook database:')
    result.forEach(p => console.log(`${p.name} ${p.number}`))
    mongoose.connection.close()
  })
}

const addPerson = () => {
  const person = new Person({
    name,
    number
  })

person.save().then(() => {
    console.log(`added ${name} number ${number} to phonebook`)
    mongoose.connection.close()
  })
}

// 3.12
(name && number) ? addPerson() : findPerson()