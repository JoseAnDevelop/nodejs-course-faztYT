import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Hello, World!</h1>')
})
app.get('/about', (req, res) => {
    res.send('<h1>About us</h1>')
})

/* app.listen(3000)
console.log('Listening on port 3000') */

// Heroku te asigna un puerto, en caso de que no, por default el 3000
app.listen(process.env.PORT || 3000)
console.log('Listening on port ', process.env.PORT || 3000)

/* En archivo package.json, agregamos el script start con node y no con nodemon, ya que en el host se usa node, y nodemon es para ambiente dev */
