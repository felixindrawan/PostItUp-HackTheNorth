import React from "react"
import { Grid, Typography, Card, TextField, IconButton } from "@material-ui/core"
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';

// styles
const cardStyle = {
  "width": "40rem",
  "padding": "1rem",
  "borderRadius": "1.5rem",
  "backgroundColor": "#fff1e6",
}

const InsertCodeComponent = () => {
  return (
  <Card raised="true" style={cardStyle}>
    <Grid container justify="center" alignContent="center" direction="row">
      <Grid container xs={12}>
        <Grid container direction="row">
          <Typography variant="h4" >Join Class</Typography>
        </Grid>
        <Grid container direction="row" xs={12}>
          <Grid xs={11}>
            <TextField id="courseCodeTextField" variant="outlined" InputProps={{ style : { fontSize: 60, borderRadius: 6 } }}/>
          </Grid>
          <Grid container justify="center" alignContent="center" xs={1}>
            <IconButton children={<ArrowForwardRoundedIcon />} />
          </ Grid>
        </Grid>
      </ Grid>
    </Grid>
  </ Card>
  )
}

export default InsertCodeComponent