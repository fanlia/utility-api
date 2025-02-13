import express from 'express'
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello Node!')
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
