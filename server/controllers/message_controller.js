const messages = [];
const id = 0;

module.exports = {
  createMessage: (req, res) => {
    const { text, time } = req.body
    messages.push({ id, text, time });
    id++;
    res.status(200).send(messages)
  },

  readMessage: (req, res) => {
    res.status(200).send(messages)
  },

  updateMessage: (req, res) => {
    const user_id = req.params
    const { text } = req.body
    const index = messages.findIndex(elem => elem.id === +user_id)
    if (index === -1) {
      return res.status(404).send('No message found')
    } else {
      const updatedMess = {
        id: message.id,
        text: text || message.text,
        time: message.time
      }
      res.status(200).send(updatedMess)

    }
  },

  deleteMessage: (req, res) => {
    const { user_id } = req.params
    const index = users.findIndex(elem => elem.id === +user_id)
    if (index === -1) {
      return res.status(404).send('No message exists')
    } else {
      users.splice(index, 1)
      res.status(200).send('Message has been deleted')
    }
  }
}