const express =require ('express')

const app = express()
const port = 1500 ;


 const path = require ( "path")
 const publicDirectory =path.join(__dirname ,'../public')
app.use(express.static(publicDirectory   ))



const viewsDirectory = path.join(__dirname ,"../temp1/views")
app.set("views",viewsDirectory) 
var hbs =require('hbs')
const partialsPath =path.join(__dirname ,"../temp1/partials")
hbs.registerPartials( partialsPath)

app.set('view engine', 'hbs');



hbs.registerPartials(partialsPath)
app.get('/',(req,res)=>{
 res.render('index',{
  title:"hello world",
  desc :"this is a welcome message"
 })
  
 })
  


app.get('/weather',(req,res)=>{
  res.render('weather',{
   country:"canda",
  latitude:"15.085593",
  longtitude:"120.886403",
  currentweather:"light rain",
  temperature:"25",




   
  })
 })
 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})