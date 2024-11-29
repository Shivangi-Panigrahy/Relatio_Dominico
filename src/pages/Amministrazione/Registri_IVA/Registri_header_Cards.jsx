import { Box, CircularProgress, Grid } from "@mui/material"
import { ReactComponent as Datopositivo } from "../../../assets/Dato_positivo.svg";
import './Registri.scss'
const Registri_header_Cards = () => {
  return (
    <>
      <Box className="FactureSection RegistriCardHeader RegistriCardHeaderTop">
        <Grid container className="FactureSection__inner" spacing={2}>
          <Grid item lg={3} md={6} xs={12}>
            <div className="statusText">
              <div className="statusText__content">
                <h4>7.320.203.321€</h4>
                <div style={{ display:"flex", gap:"4px", alignItems:"center" }}>
                <Datopositivo/>
                <h3 style={{ color: "#160A2A", margin:"0px"}}>  7.320.203.321</h3>
                </div>
               
              </div>
            </div>
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <div className="statusText">
              <div className="statusText__content">
                <h4>7.320.203.321€</h4>
                <div style={{ display:"flex", gap:"4px", alignItems:"center" }}>
                <Datopositivo/>
                <h3 style={{ color: "#160A2A", margin:"0px"}}>  7.320.203.321</h3>
                </div>
               
              </div>
            </div>
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <div className="statusText">
              <div className="statusText__content">
                <h4>7.320.203.321€</h4>
                <div style={{ display:"flex", gap:"4px", alignItems:"center" }}>
                <Datopositivo/>
                <h3 style={{ color: "#160A2A", margin:"0px"}}>  7.320.203.321</h3>
                </div>
               
              </div>
            </div>
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <div className="statusText">
              <div className="statusText__content">
                <h4>7.320.203.321€</h4>
                <div style={{ display:"flex", gap:"4px", alignItems:"center" }}>
                <Datopositivo/>
                <h3 style={{ color: "#160A2A", margin:"0px"}}>  7.320.203.321</h3>
                </div>
               
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
      {/* <Box className="FactureSection RegistriCardHeader">
        <Grid container className="FactureSection__inner" spacing={2}>
          <Grid item lg={2} md={6} xs={12}>
            <div className="statusText">
              <div className="statusText__content">
                <h4>Gennaio</h4>
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
        </Grid>
      </Box> */}

    </>
  );
};

export default Registri_header_Cards;
