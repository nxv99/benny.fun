const express = require("express")
const serveIndex = require('serve-index')

const app = express()

app.use(express.static(__dirname + "/public/"))
app.use('assets/', serveIndex(__dirname + '/assets/'))

app.get("/projects", (request, response) => {
  response.sendFile(__dirname + "/public/projects.html")
})

app.get("/github", (request, response) => {
  response.redirect("https://github.com/ilyBenny")
})

app.listen(80, ()=>{
  console.log("listening on :80")
})