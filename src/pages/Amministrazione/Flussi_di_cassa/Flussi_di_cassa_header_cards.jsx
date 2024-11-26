import { Box, CircularProgress, Grid } from "@mui/material"

const Flussi_di_cassa_header_cards = () => {
  return (
    <>
    <Box className="FactureSection">
      <Grid container className="FactureSection__inner" spacing={2}>
        <Grid item lg={3} md={6} xs={12}>
          <div className="statusText">
            <div className="statusText__img">
              <>
                <CircularProgress
                  variant="determinate"
                  value={75}
                  style={{ color: "red" }}
                />
                <span className="text-value" style={{ color: "red" }}>
                  18%
                </span>
                {/* <CopyIcon className="FileIcon"/> */}
              </>
            </div>
            <div className="statusText__content">
              <h4>Abc</h4>
              <h3 style={{ color: "red" }}>€12</h3>
              <h5>
                520 <span>{"Movimenti"}</span>
              </h5>
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  </>
  )
}

export default Flussi_di_cassa_header_cards
