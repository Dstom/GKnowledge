const lessonsController = {};

const Lesson = require('../models/Lesson');
const LessonSubscription = require('../models/LessonSubscription');

/**
 * 
 */
lessonsController.getLessonsById = async (req, res) => {
    const lessons = await Lesson.findById(req.params.id);
    res.json(lessons);
}

/** 
 * Devuelve todas las clases, las cuales estoy suscrito para continuar
 * estudiando
 * @param req.params.id --> userId, el id del usuario para consultar sus clases suscritas
 * @returns todas las clases suscritas pertenecientes al userId
 */
lessonsController.getMyLessons = async (req, res) => {
    const lessonsSubscribed = await LessonSubscription.findById(req.params.id);
    res.json(lessonsSubscribed);
}

/**
 * Crear una nueva clase 
 * @route POST /api/lessons
 * @param name nombre de la clase
 * @param owner usuario creador de la clase
 * @param categorie categoria a la cual pertenece esta clase
 */
lessonsController.createLesson = async (req, res) => {
    const { name, owner } = req.body;
    const newLesson = new Lesson({
        name,
        owner        
    });
    
    await newLesson.save();
    res.json(newLesson);   
}

lessonsController.getLesson = async (req, res) =>{ 
    const note = await Note.findById(req.params.id);
    console.log(note);
    res.json(note);
};

lessonsController.getLessons = async (req, res) => {
   const lessons = await Lesson.find();  
   res.json(lessons);
};

lessonsController.updateLesson = async (req, res) => {
    const { title, content, author } = req.body;
    await Note.findOneAndUpdate({_id: req.params.id},{
        title,
        content,
        author
    });
    res.json({message: "Lesson updated"});
}

lessonsController.deleteLesson = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json("Lesson Deleted");
}

module.exports = lessonsController;