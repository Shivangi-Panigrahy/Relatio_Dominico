import React from "react";
import { styled } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const CustomIcon = styled("span")(({ theme }) => ({
  borderRadius: 5,
  width: 18,
  height: 18,
  border: "1px solid #999999",
  borderRadius: "5px",
  "input:disabled ~ &": {
    boxShadow: "none",
    background: "rgba(206,217,224,.5)",
    ...theme.applyStyles("dark", {
      background: "rgba(57,75,89,.5)",
    }),
  },
}));

const CustomCheckedIcon = styled(CustomIcon)({
  backgroundColor: "#57c700",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&::before": {
    display: "block",
    width: 18,
    height: 18,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#57c700",
  },
});

export default function CustomCheckbox({ checked, onChange, label, ...props }) {
  return (
    <FormControlLabel
      className="CustomCheckbox"
      style={{ marginRight: 0 }}
      control={
        <Checkbox
          sx={{ "&:hover": { bgcolor: "transparent" } }}
          disableRipple
          color="default"
          checkedIcon={<CustomCheckedIcon />}
          icon={<CustomIcon />}
          checked={checked}
          onChange={onChange}
          {...props}
        />
      }
      label={label}
    />
  );
}
