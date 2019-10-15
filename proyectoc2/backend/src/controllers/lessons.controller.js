const lessonsController = {};

const Lesson = require('../models/Lesson');

lessonsController.getLessons = async (req, res) => {
    const lessons = await Lesson.find();
    res.json(lessons);
}
lessonsController.createLesson = async (req, res) => {
    const { title, content, data, author } = req.body;
    const newNote = new Note({
        title,
        content,
        data,
        author
    });
    
    await newNote.save();
    res.json({message: 'Note Saved'});   
}

lessonsController.getLesson = async (req, res) =>{ 
    const note = await Note.findById(req.params.id);
    console.log(note);
    res.json(note);
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