module.exports = async function(db, {proffyValue, classValue, classScheduleValue}){
  // inserir dados, na tabela de teachers  //o await so funciona se tiver a palava ASYNC 
  const insertedProffy = await db.run(`
      INSERT INTO proffys (
        name, 
        avatar,
        whatsapp,
        bio 
      ) VALUES(
         "${proffyValue.name}",
         "${proffyValue.avatar}",
         "${proffyValue.whatsapp}",
         "${proffyValue.bio}"
      );
  `)
  
  const proffy_id = insertedProffy.lastID

  //inserir dados na tabela classes 
  const insertedClass = await db.run(`
        INSERT INTO CLASSES (
          subject,
          cost,
          proffy_id
        ) VALUES (
         "${classValue.subject}",
         "${classValue.cost}",
         "${proffy_id}"
        );
  `)

  const class_id = insertedClass.lastID

  //Inserir dados na tabela ClassSchedule
  const insertedAllClassScheduleValues = classScheduleValue.map((classScheduleValue) => {
    return db.run(`
        INSERT INTO class_schedule (
          class_id,
          weekday,
          time_from,
          time_to
        ) VALUES (
          ${class_id}
          ${classScheduleValue.weekday},
          ${classScheduleValue.time_from},
          ${classScheduleValue.time_to}
        );
    `)
  })    
  
  //aqui vou executar todos os db.runs() das class_schedules
  await Promise.all(insertedAllClassScheduleValues)

  //consultar os dados inseridos
}