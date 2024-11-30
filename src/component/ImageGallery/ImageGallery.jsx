import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Typography,
  Grid,
  Card,
  CardMedia,
  styled,
} from "@mui/material";
import { ReactComponent as Cloudupload } from "../../assets/cloud-upload.svg";
import { ReactComponent as ImageUplaod1 } from "../../assets/Img_upld1.png";
import { ReactComponent as ImageUplaod2 } from "../../assets/Img_upld2.png";
import { ReactComponent as ImageUplaod3 } from "../../assets/Img_upld3.png";
import CloseIcon from "@mui/icons-material/Close";
import img1 from "../../assets/Img_upld1.png";
import img2 from "../../assets/Img_upld2.png";
import img3 from "../../assets/Img_upld3.png";

const UploadContainer = styled(Box)(({ theme }) => ({
  border: "2px dashed #e0e0e0",
  borderRadius: "8px",
  padding: "16px",
  textAlign: "center",
  backgroundColor: "#f9f9f9",
}));

const RemoveButton = styled(Button)(({ theme }) => ({
  borderRadius: "8px",
  backgroundColor: "#ffffff",
  color: "#000000",
  border: "1px solid #d1d1d1",
  textTransform: "none",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#f4f4f4",
  },
}));

const UploadButton = styled(Button)(({ theme }) => ({
  borderRadius: "8px",
  backgroundColor: "#28a745",
  color: "#ffffff",
  textTransform: "none",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#218838",
  },
}));

const ImageGallery = () => {
  const [images, setImages] = useState([img1, img2, img3]);

  const handleRemoveImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleRemoveAll = () => {
    setImages([]);
  };

  const handleFileUpload = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    const newImages = uploadedFiles.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  return (
    <Box sx={{ width: "400px", margin: "auto", textAlign: "center" }}>
      <Typography
        variant="h6"
        gutterBottom
        style={{
          fontFamily: '"Public Sans", sans-serif',
          textAlign: "left",
          fontSize: "14px",
          color: "#1C252E",
        }}
      >
        Galleria d'immagini
      </Typography>
      <UploadContainer
        style={{
          position: "relative",
          borderColor: "#919EAB14",
          borderWidth: "1px",
        }}
      >
        <Cloudupload fontSize="large" />
        <Typography>Upload file</Typography>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileUpload}
          style={{
            opacity: 0,
            position: "absolute",
            cursor: "pointer",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0",
          }}
        />
      </UploadContainer>
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        {images.map((src, index) => (
          <Grid item xs={4} key={index}>
            <Card
              sx={{
                position: "relative",
                borderRadius: "8px",
                boxShadow: "none",
                width: "100%",
              }}
            >
              {typeof src === "string" ? (
                // <CardMedia
                //   component="img"
                //   height="100"
                //   image={src}
                //   width="100%"
                //   alt={`Image ${index + 1}`}
                // />
                <img
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  src={src}
                  alt="abc"
                />
              ) : (
                <></> // <Box sx={{ height: 100, width: "100%" }}>{src}</Box>
              )}
              <IconButton
                size="small"
                sx={{
                  position: "absolute",
                  top: 4,
                  right: 4,
                  backgroundColor: "#0000007A",
                  color: "#fff",
                }}
                onClick={() => handleRemoveImage(index)}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          marginTop: 2,
          gap: "12px",
        }}
      >
        <RemoveButton
          style={{
            alignItems: "center",
            lineHeight: "1.7",
            padding: "6px 12px",
          }}
          onClick={handleRemoveAll}
        >
          Rimuovi tutto
        </RemoveButton>
        <UploadButton
          component="label"
          style={{
            backgroundColor: "#57C700",
            alignItems: "center",
            lineHeight: "1",
            gap: "8px",
            lineHeight: "1.7",
            padding: "6px 12px",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.2493 10.0007C18.2493 9.90905 18.1993 9.81738 18.1743 9.72572C18.1358 9.564 18.0856 9.40526 18.0243 9.25072C17.9827 9.15072 17.9244 9.05072 17.8744 8.94238C17.8244 8.83405 17.7493 8.69238 17.6743 8.57572C17.5993 8.45905 17.4993 8.40072 17.4993 8.33405C17.4993 8.26738 17.3327 8.12572 17.241 8.02572C17.1494 7.92572 17.066 7.85905 16.9744 7.77572L16.666 7.50072L16.366 7.30072C16.2482 7.22865 16.1257 7.16461 15.9994 7.10905L15.6743 6.95905C15.5382 6.90864 15.3991 6.86689 15.2577 6.83405C15.1457 6.8011 15.0315 6.77604 14.916 6.75905L14.7243 6.66738C14.3843 5.68493 13.7465 4.8329 12.8996 4.22985C12.0528 3.6268 11.039 3.30273 9.99935 3.30273C8.95971 3.30273 7.94593 3.6268 7.09907 4.22985C6.25221 4.8329 5.61438 5.68493 5.27435 6.66738L5.12435 6.70905C5.00885 6.72604 4.89468 6.7511 4.78268 6.78405C4.6413 6.81689 4.50213 6.85864 4.36602 6.90905L4.04102 7.05905C3.91462 7.11461 3.79212 7.17865 3.67435 7.25072L3.37435 7.50072L3.06602 7.75905C2.97435 7.84238 2.88268 7.91738 2.79935 8.00905C2.71602 8.10072 2.62435 8.21738 2.54102 8.31738C2.45768 8.41738 2.39102 8.50905 2.32435 8.61738C2.25768 8.72572 2.19102 8.85905 2.12435 8.98405C2.05768 9.10905 2.01602 9.19238 1.97435 9.29238C1.91305 9.44692 1.86292 9.60567 1.82435 9.76738C1.82435 9.85905 1.76602 9.95072 1.74935 10.0424C1.69748 10.3032 1.66959 10.5682 1.66602 10.834C1.66992 11.0885 1.69501 11.3421 1.74102 11.5924C1.74102 11.6757 1.78268 11.7507 1.79935 11.834C1.84054 11.9978 1.89061 12.1591 1.94935 12.3174L2.04935 12.559C2.12271 12.7197 2.20621 12.8756 2.29935 13.0257L2.41602 13.209C2.428 13.2324 2.44194 13.2547 2.45768 13.2757L2.49935 13.334C2.88746 13.8515 3.39073 14.2715 3.96929 14.5608C4.54786 14.8501 5.18583 15.0007 5.83268 15.0007H8.33268V13.859C8.07948 14.0059 7.79207 14.0835 7.49935 14.084C7.04789 14.0798 6.61646 13.8971 6.29935 13.5757C6.14709 13.4182 6.02738 13.2322 5.94706 13.0284C5.86674 12.8246 5.82739 12.6069 5.83126 12.3879C5.83513 12.1689 5.88215 11.9528 5.96962 11.7519C6.05708 11.5511 6.18329 11.3694 6.34102 11.2174L8.84102 8.80072C9.15206 8.50092 9.56735 8.33361 9.99935 8.33405C10.4407 8.33591 10.8632 8.51273 11.1743 8.82572L13.6743 11.3257C13.9848 11.638 14.159 12.0604 14.159 12.5007C14.159 12.941 13.9848 13.3634 13.6743 13.6757C13.3632 13.9887 12.9407 14.1655 12.4993 14.1674C12.2062 14.1701 11.9179 14.0923 11.666 13.9424V15.0007H14.166C14.8129 15.0007 15.4508 14.8501 16.0294 14.5608C16.608 14.2715 17.1112 13.8515 17.4993 13.334L17.541 13.2924C17.5568 13.2714 17.5707 13.2491 17.5827 13.2257L17.6993 13.0424C17.7925 12.8923 17.876 12.7364 17.9494 12.5757L18.0493 12.334C18.1081 12.1758 18.1582 12.0144 18.1993 11.8507C18.1993 11.7674 18.241 11.6924 18.2577 11.609C18.3046 11.3533 18.3297 11.094 18.3327 10.834C18.3317 10.5542 18.3038 10.2752 18.2493 10.0007Z"
              fill="white"
            />
            <path
              d="M10.591 9.40905C10.4352 9.25636 10.2258 9.17083 10.0077 9.17083C9.78956 9.17083 9.58012 9.25636 9.42435 9.40905L6.92435 11.8257C6.83592 11.8987 6.7635 11.9891 6.71162 12.0913C6.65974 12.1936 6.62951 12.3054 6.62282 12.4198C6.61613 12.5343 6.63312 12.6489 6.67274 12.7565C6.71236 12.864 6.77375 12.9623 6.85307 13.0451C6.93239 13.1278 7.02794 13.1933 7.13374 13.2375C7.23953 13.2817 7.3533 13.3035 7.46793 13.3017C7.58256 13.2999 7.69558 13.2744 7.79992 13.227C7.90427 13.1795 7.99769 13.111 8.07435 13.0257L9.16602 11.9674V16.6674C9.16602 16.8884 9.25381 17.1004 9.41009 17.2566C9.56637 17.4129 9.77834 17.5007 9.99935 17.5007C10.2204 17.5007 10.4323 17.4129 10.5886 17.2566C10.7449 17.1004 10.8327 16.8884 10.8327 16.6674V12.009L11.9077 13.0924C11.9852 13.1705 12.0773 13.2325 12.1789 13.2748C12.2804 13.3171 12.3893 13.3389 12.4993 13.3389C12.6094 13.3389 12.7183 13.3171 12.8198 13.2748C12.9214 13.2325 13.0135 13.1705 13.091 13.0924C13.1691 13.0149 13.2311 12.9227 13.2734 12.8212C13.3157 12.7196 13.3375 12.6107 13.3375 12.5007C13.3375 12.3907 13.3157 12.2818 13.2734 12.1802C13.2311 12.0787 13.1691 11.9865 13.091 11.909L10.591 9.40905Z"
              fill="white"
            />
          </svg>
          Carica foto
          <input
            type="file"
            accept="image/*"
            multiple
            hidden
            onChange={handleFileUpload}
          />
        </UploadButton>
      </Box>
    </Box>
  );
};

export default ImageGallery;
