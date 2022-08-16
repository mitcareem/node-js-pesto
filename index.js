const express = require('express')
const app = express()
const PORT = 3000 || process.env.PORT;

app.get('/api/v1/:token', (req, res) => {

    res.status(200).json({ name: req.params.token })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})