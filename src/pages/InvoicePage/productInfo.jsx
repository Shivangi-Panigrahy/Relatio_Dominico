import React, { useState } from "react";
import { Box, Typography, Tooltip, IconButton } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import "./productInfo.scss";
import productionData from "../../utils/productData.json"; // Import the JSON data

const ProductionInfo = ({adminiDoc=true}) => {
  const [toggle, setToggle] = useState(false);

  // Determine which data set to display based on the toggle state
  const activeData = toggle ? productionData.data.third : productionData.data.second;

  return (
    <>
    {!adminiDoc ? 
    <Box className="production-info" onClick={() => setToggle(!toggle)} style={{backgroundColor:!toggle && "#f4c8c8" ,cursor:'pointer'}}>
      <Box className="info-item" >
        <Tooltip>
          <IconButton size="small">
            <InfoOutlinedIcon style={{color:!toggle && 'red'}}/>
          </IconButton>
        </Tooltip>
        <Box className="productInfoContent">
          <Typography className="productInfoTitle" variant="body2">
            {activeData.projectInfo.title}
          </Typography>
          <Typography className="productInfoTitle" variant="body2">
            {activeData.projectInfo.projectName}
          </Typography>
        </Box>
      </Box>

      <Box className="info-item">
        <Tooltip title={activeData.productionStartDate.title}>
          <IconButton size="small">
            <InfoOutlinedIcon style={{color:!toggle &&'red'}}/>
          </IconButton>
        </Tooltip>
        <Box className="productInfoContent">
          <Typography className="productInfoTitle" variant="body2">
            {activeData.productionStartDate.title}
          </Typography>
          <Typography className="productInfoTitle" variant="body2">
            {activeData.productionStartDate.date}
          </Typography>
        </Box>
      </Box>
    </Box>:  
    <Box className="production-info" >
      <Box className="info-item" >
        <Tooltip>
          <IconButton size="small">
            <InfoOutlinedIcon />
          </IconButton>
        </Tooltip>
        <Box className="productInfoContent">
          <Typography className="productInfoTitle" variant="body2">
            {productionData.data.first.projectInfo.title}
          </Typography>
          <Typography className="productInfoTitle" variant="body2">
            {productionData.data.first.projectInfo.projectName}
          </Typography>
        </Box>
      </Box>

      <Box className="info-item">
        <Tooltip title={productionData.data.first.productionStartDate.title}>
          <IconButton size="small">
            <InfoOutlinedIcon />
          </IconButton>
        </Tooltip>
        <Box className="productInfoContent">
          <Typography className="productInfoTitle" variant="body2">
            {productionData.data.first.productionStartDate.title}
          </Typography>
          <Typography className="productInfoTitle" variant="body2">
            {productionData.data.first.productionStartDate.date}
          </Typography>
        </Box>
      </Box>

      <Box className="info-item">
        <Tooltip title={productionData.data.first.productionDuration.title}>
          <IconButton size="small">
          <InfoOutlinedIcon />
          </IconButton>
        </Tooltip>
        <Box className="productInfoContent">
          <Typography className="productInfoTitle" variant="body2">
            { productionData.data.first.productionDuration.title}
          </Typography>
          <Typography className="productInfoTitle" variant="body2">
            {productionData.data.first.productionDuration.duration}
          </Typography>
        </Box>
      </Box>

      <Box className="info-item">
        <Tooltip title={productionData.data.first.productionDeliveryDate.title}>
          <IconButton size="small">
           <InfoOutlinedIcon />
          </IconButton>
        </Tooltip>
        <Box className="productInfoContent">
          <Typography className="productInfoTitle" variant="body2">
            {productionData.data.first.productionDeliveryDate.title}
          </Typography>
          <Typography className="productInfoTitle" variant="body2">
            {productionData.data.first.productionDeliveryDate.date}
          </Typography>
        </Box>
      </Box>
    </Box>}
    </>
  );
};

export default ProductionInfo;
