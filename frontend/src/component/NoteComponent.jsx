import React from "react"
import { Grid, Typography, Card, IconButton } from "@material-ui/core"
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';

// styles
const cardStyle = {
  "width": "25rem",
  "padding": "1rem",
  "borderRadius": " 0 1.5rem 1.5rem",
  "margin": "1rem 1rem 1rem 0"
}

const NoteComponent = ({message, backgroundColor}) => {
  return (
  <Card raised={true} style={ {
    "width": "25rem",
    "padding": "1rem",
    "borderRadius": " 0 1.5rem 1.5rem",
    "margin": "1rem 1rem 1rem 0",
    ...{backgroundColor},
  } } >
    <Grid container item justify="center" alignContent="center" direction="row" xs={12}>
        <Grid container item direction="row" xs={11}>
          <Typography variant="subtitle1" >{message}</Typography>
        </Grid>
        <Grid item xs={1}>
          <IconButton children={<DeleteOutlineRoundedIcon />} />
        </ Grid>
    </Grid>
  </ Card>
  )
}

export default NoteComponent