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
import { ReactComponent as ImageUplaod1 } from "../../assets/upload_image_1.svg";
import { ReactComponent as ImageUplaod2 } from "../../assets/upload_image_2.svg";
import { ReactComponent as ImageUplaod3 } from "../../assets/upload_image_3.svg";
import CloseIcon from "@mui/icons-material/Close";

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
  const [images, setImages] = useState([
    <ImageUplaod1 key="1" width={100} height={100} />,
    <ImageUplaod2 key="2" width={100} height={100} />,
    <ImageUplaod3 key="3" width={100} height={100} />,
  ]);

  const handleRemoveImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleRemoveAll = () => {
    setImages([]);
  };

  const handleFileUpload = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    const newImages = uploadedFiles.map((file) =>
      URL.createObjectURL(file)
    );
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  return (
    <Box sx={{ width: "400px", margin: "auto", textAlign: "center" }}>
      <Typography variant="h6" gutterBottom>
        Galleria d'immagini
      </Typography>
      <UploadContainer>
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
          }}
        />
      </UploadContainer>
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        {images.map((src, index) => (
          <Grid item xs={4} key={index}>
            <Card sx={{ position: "relative", borderRadius: "8px" }}>
              {typeof src === "string" ? (
                <CardMedia
                  component="img"
                  height="100"
                  image={src}
                  alt={`Image ${index + 1}`}
                />
              ) : (
                <Box sx={{ height: 100 }}>
                  {src}
                </Box>
              )}
              <IconButton
                size="small"
                sx={{
                  position: "absolute",
                  top: 4,
                  right: 4,
                  backgroundColor: "#ffffff",
                }}
                onClick={() => handleRemoveImage(index)}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}>
        <RemoveButton onClick={handleRemoveAll}>Rimuovi tutto</RemoveButton>
        <UploadButton component="label">
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
