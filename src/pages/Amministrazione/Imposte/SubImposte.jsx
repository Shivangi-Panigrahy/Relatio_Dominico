import { Box, Grid } from "@mui/material"
import Header from "../../../component/header/Header"
import Component from "../../../component/Modal/AddDocument"
import MenuTab from "../../../component/tabs/MenuTab"
import SubImposteForm from "./SubImposteForm"
import ImposteAllegati from "./ImposteAllegati"

const SubImposte = ({Component}) => {
  return (
    <>
    <Header />
    <div className="pageTemplate">
        
      <Grid container spacing={3}>
        <Grid item lg={3} md={4} xs={12}>
          <SubImposteForm />
        </Grid>
        <Grid item lg={9} md={8} xs={12}>
          <Box className="TemplateForm__right">
            <MenuTab  subImposteRate={true} />
          </Box>
          {Component && <Component  />}
        </Grid>
      </Grid>
    </div>
  </>
  )
}

export default SubImposte