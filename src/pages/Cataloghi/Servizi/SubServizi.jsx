import { Box, Grid } from "@mui/material"
import Header from "../../../component/header/Header"
import MenuTab from "../../../component/tabs/MenuTab"
import CataloghiForm from "./Form/CataloghiForm"
import { useState } from "react"

const SubServizi = ({ Component }) => {

    return (
        <>
            <Header />
            <div className="pageTemplate">

                <Grid container spacing={3}>
                    <Grid item lg={3} md={4} xs={12}>
                        <CataloghiForm />
                    </Grid>
                    <Grid item lg={9} md={8} xs={12}>
                        <Box className="TemplateForm__right">
                            <MenuTab subServizi={true} servizi={true} />
                        </Box>
                        {Component && <Component />}
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default SubServizi
