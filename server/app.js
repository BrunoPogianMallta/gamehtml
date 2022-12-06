const express =  require('express');
const sequelize = require('./database/index.js')
const cors = require('cors')
const User = require('./models/User')
const app = express();
app.use(cors())

app.use(express.json());


app.get('/',(req,res) =>{
    res.send('Hello World')
})

app.post('/cadastro',(req, res)=> {
  const {id,name,email,password} = req.body
  User.create({
    id,
    name,
    email,
    password,
  }).then((result) => res.json(result));
})

app.get('/getusers',(req,res)=>{
  
    User.findAll().then((result) => res.json(result));
  
})

app.get('/getUserById/:id',(req,res)=>{
  
    User.findByPk(req.params.id).then((result) => res.json(result));
  
})

app.listen (3000,async() =>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
    console.log('serve up')
})