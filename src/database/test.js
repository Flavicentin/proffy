const database = require('./db')
const createProffy = require('./createProffy')
database.then((db)=> {
  //Inserir dados
  proffyValue ={
    name: "Diego Fernandes",
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
    whatsapp: "11 95136-1715", 
    bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
  }

  classValue ={
    subject:"Quimica", 
    cost:"20", 
    // o proffy id vira com pelos banco de dados
  }

  classScheduleValue =[
    //class-id vira pelo banco de dados, apos cadastrarmos a class
    {
      weekday: 0, 
      time_from: 720,
      time_to: 1220
    },
    {
      weekday: 0, 
      time_from: 720,
      time_to: 1220
    }
  ]

  createProffy(db, {proffyValue, classValue, classScheduleValue}).then

 //Consultar os dados inseridos 

})