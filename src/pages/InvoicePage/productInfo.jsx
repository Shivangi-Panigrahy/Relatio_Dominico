// ProductionInfo.jsx
import React from "react";
import { Box, Typography, Tooltip, IconButton } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import "./productInfo.scss";
import productionData from "../../utils/productData.json"; // Import the JSON data

const ProductionInfo = () => {
  // Access data from the JSON file
  const {
    projectInfo,
    productionStartDate,
    productionDuration,
    productionDeliveryDate,
  } = productionData;

  // Render the component dynamically
  return (
    <Box className="production-info">
      <Box className="info-item">
        <Tooltip title={projectInfo.title}>
          <IconButton size="small">
            <InfoOutlinedIcon />
          </IconButton>
        </Tooltip>
        <Box className="productInfoContent">
          <Typography className="productInfoTitle" variant="body2">
            {projectInfo.title}
          </Typography>
          <Typography className="productInfoTitle" variant="body2">
            {projectInfo.projectName}
          </Typography>
        </Box>
      </Box>

      <Box className="info-item">
        <Tooltip title={productionStartDate.title}>
          <IconButton size="small">
            <InfoOutlinedIcon />
          </IconButton>
        </Tooltip>
        <Box className="productInfoContent">
          <Typography className="productInfoTitle" variant="body2">
            {productionStartDate.title}
          </Typography>
          <Typography className="productInfoTitle" variant="body2">
            {productionStartDate.date}
          </Typography>
        </Box>
      </Box>

      <Box className="info-item">
        <Tooltip title={productionDuration.title}>
          <IconButton size="small">
            <InfoOutlinedIcon />
          </IconButton>
        </Tooltip>
        <Box className="productInfoContent">
          <Typography className="productInfoTitle" variant="body2">
            {productionDuration.title}
          </Typography>
          <Typography className="productInfoTitle" variant="body2">
            {productionDuration.duration}
          </Typography>
        </Box>
      </Box>

      <Box className="info-item">
        <Tooltip title={productionDeliveryDate.title}>
          <IconButton size="small">
            <InfoOutlinedIcon />
          </IconButton>
        </Tooltip>
        <Box className="productInfoContent">
          <Typography className="productInfoTitle" variant="body2">
            {productionDeliveryDate.title}
          </Typography>
          <Typography className="productInfoTitle" variant="body2">
            {productionDeliveryDate.date}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductionInfo;
