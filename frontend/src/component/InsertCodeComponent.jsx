import React from "react"
import { Grid, Typography, Card, TextField, IconButton } from "@material-ui/core"
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import { useState } from "react"

// styles
const cardStyle = {
  "width": "40rem",
  "padding": "1rem",
  "borderRadius": "1.5rem",
  "backgroundColor": "#fff1e6",
}

const InsertCodeComponent = ({handleClick}) => {

  const [classCode, setClassCode] = useState("")

  const handleChange = (event) => {
    setClassCode(event.target.value)
  }

  const linkToClass = (event) => {
    if(classCode == "" || classCode == null) return
    
    handleClick(classCode)
  }

  return (
  <Card raised={true} style={cardStyle}>
    <Grid container item xs={12} justify="center" alignContent="center" direction="row">
        <Grid container direction="row">
          <Typography variant="h4" >Join Class</Typography>
        </Grid>
        <Grid container direction="row" xs={12}>
          <Grid item xs={11}>
            <TextField id="courseCodeTextField" variant="outlined" InputProps={{ style : { fontSize: 60, borderRadius: 6 } }} onChange={handleChange} value={classCode}/>
          </Grid>
          <Grid container item justify="center" alignContent="center" xs={1}>
            <IconButton children={<ArrowForwardRoundedIcon onClick={linkToClass}/>} />
          </ Grid>
        </Grid>
    </Grid>
  </ Card>
  )
}

export default InsertCodeComponent