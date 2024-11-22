import React from "react";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import { AttachFile, Upload } from "@mui/icons-material";
import MUIRichTextEditor from "mui-rte";
import { ReactComponent as DescriptionOutlined } from "../../assets/DescriptionOutlined.svg";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./InvoicePage.scss";

const theme = createTheme({
  spacing: (factor) => `${factor * 8}px`,
  overrides: {
    MUIRichTextEditor: {
      toolbar: {
        padding: "5px 10px",
      },
      editor: {
        padding: "10px",
        minHeight: "200px",
      },
      placeHolder: {
        color: "#9e9e9e",
      },
    },
  },
});

const PreventivoTextEditor = () => {
  const attachments = ["Allegato A", "Allegato B", "Allegato C"];

  const handleSave = (data) => {
    console.log("Saved content:", data);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box className="text-editor">
        <Box className="editor-toolbar">
          <MUIRichTextEditor
            label="Campo di testo"
            onSave={handleSave}
            controls={[
              "title",
              "bold",
              "italic",
              "underline",
              "strikethrough",
              "highlight",
              "undo",
              "redo",
              "numberList",
              "bulletList",
              "quote",
              "code",
              "alignLeft",
              "alignCenter",
              "alignRight",
              "alignJustify",
              "link",
              "image",
              "color",
              "clear",
              "save",
              "media",
              "heading1",
              "heading2",
              "heading3",
              "heading4",
              "heading5",
              "heading6",
            ]}
          />
        </Box>
        <Box className="sidebar">
          <Box className="attachments">
            <Box className="attachments__header">
              <h5>
                <AttachFile /> Allegati
              </h5>
              <Button
                className="greenButton"
                variant="contained"
                color="success"
                startIcon={<Upload />}
              >
                Upload
              </Button>
            </Box>
            <List className="attachment-list">
              {attachments.map((attachment, index) => (
                <ListItem key={index}>
                  <DescriptionOutlined /> <ListItemText primary={attachment} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default PreventivoTextEditor;
