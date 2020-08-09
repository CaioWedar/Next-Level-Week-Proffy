const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) =>{
    proffyValue = {
        name: "Jaozera",
        avatar: "https://avatars1.githubusercontent.com/u/49006178?s=460&u=c5ea38123e05ba38bf41c3496ba85be4f1bc0ade&v=4",
        whatsapp: "1124706920",
        bio: "Chupeta"
    }

    classValue = {
        subject: 1,
        cost: "20",

    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },

        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    
    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON(classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectedClassesAndProffys)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "420"
    `)
    console.log(selectClassesSchedules)
})