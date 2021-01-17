import React from "react"
import { Grid } from "@material-ui/core"
import { pageDefaultStyle } from "../css/defaultStyle"
import "../css/bodyCss.css"
import InsertCodeComponent from "../component/InsertCodeComponent"
import { navigate } from "gatsby"

const IndexPage = () => {

  const handleClick = (classCode) => {
    navigate("/class")
  }

  return (
    <Grid container item alignItems="center" justify="center" xs={12} style={pageDefaultStyle}>
      <Grid container alignItems="center" justify="center" >
        <InsertCodeComponent 
        handleClick={handleClick}
        />
      </Grid>
    </ Grid>
  )
}

export default IndexPage