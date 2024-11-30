import { Box, CircularProgress, Grid } from "@mui/material"
import { ReactComponent as Datopositivo } from "../../../assets/Dato_positivo.svg";
import './Listini.scss'
const ListiniHeaderCard = () => {
  return (
    <>
      <Box className="FactureSection RegistriCardHeader RegistriCardHeaderTop">
        <Grid container className="FactureSection__inner" spacing={2}>
          <Grid item lg={3} md={6} xs={12}>
            <div className="statusText">
              <div className="statusText__content">
                <h4>Listini</h4>
                <div style={{ display:"flex", gap:"4px", alignItems:"center" }}>
                <h3 style={{ color: "#160A2A", margin:"0px"}}>5</h3>
                </div>
               
              </div>
            </div>
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <div className="statusText">
              <div className="statusText__content">
                <h4>Gruppi</h4>
                <div style={{ display:"flex", gap:"4px", alignItems:"center" }}>
                <h3 style={{ color: "#160A2A", margin:"0px"}}>2</h3>
                </div>
               
              </div>
            </div>
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <div className="statusText">
              <div className="statusText__content">
                <h4>Attivi</h4>
                <div style={{ display:"flex", gap:"4px", alignItems:"center" }}>
                <h3 style={{ color: "#160A2A", margin:"0px"}}>2</h3>
                </div>
               
              </div>
            </div>
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <div className="statusText">
              <div className="statusText__content">
                <h4>In attivi</h4>
                <div style={{ display:"flex", gap:"4px", alignItems:"center" }}>
                <h3 style={{ color: "#160A2A", margin:"0px"}}>3</h3>
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

export default ListiniHeaderCard;
