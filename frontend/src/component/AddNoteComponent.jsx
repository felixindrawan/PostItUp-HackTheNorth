import React, { useState } from "react"
import { Grid, Typography, Card, TextField, IconButton } from "@material-ui/core"
import AddRoundedIcon from '@material-ui/icons/AddRounded';

// styles
const cardStyle = {
  "width": "25rem",
  "padding": "1rem",
  "borderRadius": "1.5rem",
  "backgroundColor": "#fff1e6",
}

const textFieldStyle = {
  width: "100%",
}

const InsertCodeComponent = ({ handleAdd }) => {
  const [currNote, setCurrNote] = useState({id: "", message: ""})
  const [noteId, setNoteId] = useState(0)

  const handleChange = (event) => { 
    setCurrNote({id: noteId, message: event.target.value})
  }

  const addNote = (event) => {
    console.log(currNote)
    if (currNote.message === "" || currNote.message === null ) return

    handleAdd(currNote)
    setNoteId(noteId+1)
    setCurrNote({id: noteId, message: ""})
  }

  return (
  <Card raised={true} style={cardStyle}>
    <Grid container item xs={12} justify="center" alignContent="center" direction="row">
        <Grid container direction="row">
          <Typography variant="h5" >Post Your Note</Typography>
        </Grid>
        <Grid container item direction="row" xs={12}>
          <Grid item xs={11}>
            <TextField onChange={handleChange} value={currNote.message} id="courseCodeTextField" variant="outlined" multiline style={textFieldStyle} InputProps={{ style : { fontSize: 15, borderRadius: 6 } }}/>
          </Grid>
          <Grid container item justify="center" alignContent="center" xs={1}>
            <IconButton onClick={addNote} children={<AddRoundedIcon />} />
          </ Grid>
        </ Grid>
    </Grid>
  </ Card>
  )
}

export default InsertCodeComponent