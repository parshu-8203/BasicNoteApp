const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();

app.use(bodyParser.json());



mongoose.connect("mongodb+srv://admin-parshu:Test123@cluster0.dbr2pzl.mongodb.net/noteDB", { useNewUrlParser: true })
    .then(() => console.log("connnected to mongodb"))
    .catch(err => console.log("Failed to connect to monogdb", err));


const Schema = new mongoose.Schema(
    {
        title: {
            type: String, 
            required: true
        },
        content : {
            type: String,
            required : true
        }
    }
);


const Note = new mongoose.model('Note', Schema);

//create a note
app.post("/notes", function(req,res){
    const note = new Note(req.body);
    note.save()
    .then(note => {
        res.status(201).json(note);
    })
    .catch(err => {
        res.status(400).json({error: err.message});
    }
    )
});
//get all notes
app.get('/notes', function(req, res) {
    Note.find()
      .then(note => {
        res.status(200).json(note);
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });
//get note by id
app.get('/notes/:id', (req, res) => {
    const noteId = req.params.id;
    Note.findById(noteId)
      .then(note => {
        (note)?res.status(200).json(note):res.status(404).json({error : "Note is not found"});
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });
  
//update
app.put('/notes/:id', (req, res) => {
    const noteId = req.params.id;
    const updatedNote = req.body;
    Note.findByIdAndUpdate(noteId, updatedNote, { new: true })
      .then(note => {
        (note)?res.status(200).json(note):res.status(404).json({error : "Note is not found"});
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });
//delete
app.delete('/notes/:id', (req, res) => {
    const noteId = req.params.id;
    Note.findByIdAndDelete(noteId)
      .then(note => {
        (note)?res.status(200).json(note):res.status(404).json({error : "Note is not found"});
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });
//listening on port 5000
app.listen(5000, () => {
    console.log("Server is running at port 5000");
})