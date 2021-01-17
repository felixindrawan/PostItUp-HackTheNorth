import React, {useState, useEffect} from "react"
import { Grid } from "@material-ui/core"
import { pageDefaultStyle } from "../css/defaultStyle"
import "../css/bodyCss.css"
import AddNoteComponent from "../component/AddNoteComponent"
import NoteComponent from "../component/NoteComponent"
import { getNotes } from "../firebase/NoteCalls"
import firebase from "../firebase/firebase"

// style
const gridStyle = {
  padding: "1rem",  
}

function useNotes() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
      const unsubscribe = firebase
      .firestore()
      .collection('Notes')
      .onSnapshot((snapshot) => {
        const newNotes = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))

        setNotes(newNotes);
      })

      return () => unsubscribe();
  }, [notes, firebase])

  return notes;
}

const ClassPage = () => {
  const notes = useNotes();

  const addNote = (note) => {
    const backgroundColors = ["#90F1EF", "#FFD6E0", "#FFEF9F", "#C1FBA4", "#7BF1A8"]

    const Message = note.message;
    const Color = backgroundColors[Math.floor(Math.random() * 5)]

    firebase
      .firestore()
      .collection('Notes')
      .add({
        Message,
        Color
    })
    .catch(function(error) {
        console.error("Error adding note: ", error);
    })
  }

  const deleteNote = (id) => {
    const documentID = id;

    firebase
      .firestore()
      .collection('Notes')
      .doc(documentID)
      .delete()
      .catch(function(error) {
        console.error("Error deleting note: ", error);
      })
  }

  return (
    <Grid item xs={12} style={pageDefaultStyle}>
      <Grid style={gridStyle}>
        <Grid container>
          <AddNoteComponent handleAdd={addNote} />
        </Grid>
        <Grid container direction="row">
          {notes.map((note) => 
            <div>
              <NoteComponent 
                key={note.id}
                id={note.id}
                deleteNote={deleteNote}
                backgroundColor={note.Color} 
                message={note.Message} />
            </div>
          )}
        </ Grid>
      </Grid>
    </ Grid>
  )
}

export default ClassPage
