
import { Box, Grid } from "@mui/material"
import { ReactComponent as Datopositivo } from "../../../assets/Dato_positivo.svg";

const Flussi_di_cassa_Below = () => {

    const months = [
        "Gennaio",  // January
        "Febbraio", // February
        "Marzo",    // March
        "Aprile",   // April
        "Maggio",   // May
        "Giugno",   // June
        "Luglio",   // July
        "Agosto",   // August
        "Settembre",// September
        "Ottobre",  // October
        "Novembre", // November
        "Dicembre"  // December
      ];

  return (
    <div>
      <Box className="FactureSection RegistriCardHeader">
        <Grid container className="FactureSection__inner" spacing={2}>
        {months.map((m)=>{
            return(<>
            <Grid item lg={2} md={6} xs={12}>
            <div className="statusText">
              <div className="statusText__content">
                <h4>{m}</h4>
                <ul className="list">
                    <li>
                        <div className="listItem red">
                        <Datopositivo/>
                        <h3 >  7.320.203.321</h3>
                        </div>
                    </li>
                    <li>
                        <div className="listItem green">
                        <Datopositivo/>
                        <h3 style={{ color: "#57C700", margin:"0px"}}>  7.320.203.321</h3>
                        </div>
                    </li>
                    <li>
                        <div className="listItem black">
                        <Datopositivo/>
                        <h3 style={{ color: "#160A2A", margin:"0px"}}>  7.320.203.321</h3>
                        </div>
                    </li>
                    
                </ul>
              </div>
            </div>
          </Grid>
            </>)
        } )
          }
          
        </Grid>
      </Box>
    </div>
  )
}

export default Flussi_di_cassa_Below
