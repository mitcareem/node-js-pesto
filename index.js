const express = require('express')
const app = express()


app.get('/api/v1/:token', (req, res) => {

    res.status(200).json({ name: req.params.token })
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})