const express = require('express')
const app = express()
const ctrl = require('./controllers/message_controller.js')
const SERVER_PORT = 3001

app.use(express.json())

app.post('/api/messages', ctrl.createMessage)

app.get('/api/messages', ctrl.readMessage)

app.put('/api/messages/:id', ctrl.updateMessage)

app.delete('/api/messages/:id', ctrl.deleteMessage)



app.listen(SERVER_PORT, () =>
  console.log(`Server running on port ${SERVER_PORT}`))