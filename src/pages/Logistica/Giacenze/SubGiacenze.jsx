import { Box, Grid } from "@mui/material"
import Header from "../../../component/header/Header"
import MenuTab from "../../../component/tabs/MenuTab"
import GiacenzeForm from "./GiacenzeForm/GiacenzeForm"
import SubGiacenzeForm from "./SubGiacenzeForm"
// import SubImposteForm from "../Imposte/SubImposteForm"

const SubGiacenze = ({ Component }) => {
    return (
        <>
            <Header />
            <div className="pageTemplate">

                <Grid container spacing={3}>
                    <Grid item lg={3} md={4} xs={12}>
                        <GiacenzeForm />
                    </Grid>
                    <Grid item lg={9} md={8} xs={12}>
                        <Box className="TemplateForm__right">
                        </Box>
                        <SubGiacenzeForm />
                        {/* {Component && <Component />} */}
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default SubGiacenze
