import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import TuneIcon from "@mui/icons-material/Tune";
import MultipleStopIcon from "@mui/icons-material/MultipleStop";
import mLogo from "../../../src/assets/mLogo.svg";
import { Toolbar, Typography, IconButton, Box, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HeaderTop = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left section: Back button and page title */}
        {/* Center section: Company logo and name */}
        <Box className="userProfile" display="flex" alignItems="center">
          <Avatar
            alt="Company Logo"
            src={mLogo}
            sx={{ width: "32px", height: "32px" }}
          />
          <Box className="userName">
            <Typography className="subtitle2" variant="subtitle2">
              Nome azienda
            </Typography>
            <Typography className="caption" variant="caption">
              Telecom Italia spa
            </Typography>
          </Box>
          <MultipleStopIcon className="multipleStopIcon" />
        </Box>

        {/* Right section: Action icons */}
        <Box className="headerTopIcons">
          <IconButton color="inherit">
            <MailOutlineIcon />
          </IconButton>
          <IconButton color="inherit">
            <ConfirmationNumberOutlinedIcon />
          </IconButton>
          <IconButton color="inherit">
            <NotificationsNoneIcon />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>

          <IconButton color="inherit">
            <TuneIcon />
          </IconButton>
          <IconButton onClick={() => navigate("/")} color="inherit">
            <LogoutIcon />
          </IconButton>
          {/* Green add button */}
        </Box>
      </Toolbar>
    </div>
  );
};

export default HeaderTop;
