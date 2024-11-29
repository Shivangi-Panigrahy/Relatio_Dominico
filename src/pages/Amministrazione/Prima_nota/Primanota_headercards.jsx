import { Box } from "@mui/material"
import { ReactComponent as Datopositivo } from "../../../assets/Dato_positivo.svg";
import "./Primanota.scss"

const Primanota_headercards = () => {
  return (
    <Box className="FactureSection PrimanotaTopCards RegistriCardHeader">
    <Box  className="FactureSection__inner" >
      <Box className='FactureSection__inner__card'>
        <div className="statusText">
          <div className="statusText__content">
            <h4>Entrate Cassa</h4>
             <h5 className="countWord">20.350.043.55€</h5>
             <div className="movimentiBlock">
                   <h6>325</h6>
                   <p>Movimenti</p>
             </div>
          </div>
        </div>
      </Box>
      <Box className='FactureSection__inner__card'>
        <div className="statusText">
          <div className="statusText__content">
            <h4>Entrate Banca</h4>
             <h5 className="countWord">20.350.043.55€</h5>
             <div className="movimentiBlock">
                   <h6>325</h6>
                   <p>Movimenti</p>
             </div>
          </div>
        </div>
      </Box>
      <Box className='FactureSection__inner__card'>
        <div className="statusText">
          <div className="statusText__content">
            <h4>Uscite Cassa</h4>
             <h5 className="countWord" style={{color:"#DB0000"}}>20.350.043.55€</h5>
             <div className="movimentiBlock">
                   <h6>325</h6>
                   <p>Movimenti</p>
             </div>
          </div>
        </div>
      </Box>
      <Box className='FactureSection__inner__card'>
        <div className="statusText">
          <div className="statusText__content">
            <h4>Uscite Banca</h4>
             <h5 className="countWord" style={{color:"#DB0000"}}>20.350.043.55€</h5>
             <div className="movimentiBlock">
                   <h6>325</h6>
                   <p>Movimenti</p>
             </div>
          </div>
        </div>
      </Box>
      <Box className='FactureSection__inner__card'>
        <div className="statusText" style={{background:"#DB000033"}}>
          <div className="statusText__content">
            <h4>Totale Uscite</h4>
             <h5 className="countWord" style={{color:"#DB0000"}}>20.350.043.55€</h5>
             <div className="movimentiBlock">
                   <h6>325</h6>
                   <p>Movimenti</p>
             </div>
          </div>
        </div>
      </Box>
      <Box className='FactureSection__inner__card'>
        <div className="statusText" style={{background:"#57C70033"}}>
          <div className="statusText__content">
            <h4>Totale entrate</h4>
             <h5 className="countWord">20.350.043.55€</h5>
             <div className="movimentiBlock">
                   <h6>325</h6>
                   <p>Movimenti</p>
             </div>
          </div>
        </div>
      </Box>
      <Box className='FactureSection__inner__card'>
        <div className="statusText">
          <div className="statusText__content">
            <h4>Utile contabile</h4>
             <h5 className="countWord" style={{color:"#100919"}}>20.350.043.55€ al 28/11/2024</h5>
             <div className="movimentiBlock">
                   <h6>325</h6>
                   <p>Movimenti</p>
             </div>
          </div>
        </div>
      </Box>
    </Box>
  </Box>
  )
}

export default Primanota_headercards
