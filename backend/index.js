const express = require('express');
const app = express()


app.get('/api',(request, response)=>{
    response.send("our api platform is here ")
})

app.listen(5000)