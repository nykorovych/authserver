const express = require ('express');
const app = express();

const authRoutes = require ('./routes/auth')

app.use ('/api/user', authRoutes)

app.listen (3000, ()=> console.log ('server up and runnin'));