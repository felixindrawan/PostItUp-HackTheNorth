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

const ClassPage = () => {
  const backgroundColors = ["#90F1EF", "#FFD6E0", "#FFEF9F", "#C1FBA4", "#7BF1A8"]
  
  const [notes, setNotes] = useState([])

  useEffect(() => {
      firebase
      .firestore()
      .collection('Notes')
      .onSnapshot((snapshot) => {
        const newNotes = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))

        setNotes(newNotes);
      })
  }, [notes, firebase])

  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote]
    })
  }

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id
      })
    })
  }

  return (
    <Grid item xs={12} style={pageDefaultStyle}>
      <Grid style={gridStyle}>
        <Grid container>
          <AddNoteComponent handleAdd={addNote} />
        </Grid>
        <Grid container direction="row">
          {notes.map((note, index) => 
            <div>
              <NoteComponent 
                key={note.id}
                index={index}
                deleteNote={deleteNote}
                backgroundColor={backgroundColors[Math.floor(Math.random() * 7)]} 
                message={note.Message} />
            </div>
          )}
        </ Grid>
      </Grid>
    </ Grid>
  )
}

export default ClassPage
