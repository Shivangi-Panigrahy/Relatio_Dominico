import { Box, Grid } from "@mui/material"
import { ReactComponent as Datopositivo } from "../../../assets/Dato_positivo.svg";

const Flussi_di_cassa_header_cards = () => {
  return (
    <>
       <Box className="FactureSection RegistriCardHeader FlussoTopCard">
        <Grid container className="FactureSection__inner" spacing={2}>
          <Grid item lg={3} md={6} xs={12}>
            <div className="statusText">
              <div className="statusText__content">
                <h4>Gennaio</h4>
                <h3 className="subtitle">Banca unicredit</h3>
                <ul className="list">
                    <li>
                        <div className="listItem black">
                        <Datopositivo/>
                        <h3 style={{ color: "#160A2A", margin:"0px"}}>  7.320.203.321</h3>
                        </div>
                        <div className="date">
                        al 28/11/2024
                        </div>
                    </li>
                    
                </ul>
              </div>
            </div>
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <div className="statusText">
              <div className="statusText__content">
                <h4>Gennaio</h4>
                <h3 className="subtitle">Banca unicredit</h3>
                <ul className="list">
                    <li>
                        <div className="listItem black">
                        <Datopositivo/>
                        <h3 style={{ color: "#160A2A", margin:"0px"}}>  7.320.203.321</h3>
                        </div>
                        <div className="date">
                        al 28/11/2024
                        </div>
                    </li>
                    
                </ul>
              </div>
            </div>
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <div className="statusText">
              <div className="statusText__content">
                <h4>Gennaio</h4>
                <h3 className="subtitle">Banca unicredit</h3>
                <ul className="list">
                    <li>
                        <div className="listItem black">
                        <Datopositivo/>
                        <h3 style={{ color: "#160A2A", margin:"0px"}}>  7.320.203.321</h3>
                        </div>
                        <div className="date">
                        al 28/11/2024
                        </div>
                    </li>
                    
                </ul>
              </div>
            </div>
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <div className="statusText">
              <div className="statusText__content">
                <h4>Gennaio</h4>
                <h3 className="subtitle">Banca unicredit</h3>
                <ul className="list">
                    <li>
                        <div className="listItem black">
                        <Datopositivo/>
                        <h3 style={{ color: "#160A2A", margin:"0px"}}>  7.320.203.321</h3>
                        </div>
                        <div className="date">
                        al 28/11/2024
                        </div>
                    </li>
                    
                </ul>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
  </>
  )
}

export default Flussi_di_cassa_header_cards
