const express = require('express');
const cors = require('cors');

const app = express();
const http = require('http');
const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Weton here"
  })
})

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`server on ${PORT}`)
})