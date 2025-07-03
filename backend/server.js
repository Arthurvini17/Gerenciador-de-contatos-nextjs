const express = require('express')
const app = express()
const port = 3001

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

//importando as rotas
const userRoutes = require('./routes/user.routes');



app.use('/users', userRoutes);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})