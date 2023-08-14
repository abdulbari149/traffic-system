import { Box, Grid, Typography } from "@mui/material";
import React from "react";

import AdminImage from "../images/admin-image.png";
import styles from "../styles/Sidebar.module.css";
import PersonIcon from "@mui/icons-material/Person";
import LinkOffIcon from "@mui/icons-material/LinkOff";
import ArchiveSharpIcon from "@mui/icons-material/ArchiveSharp";
import CreateSharpIcon from "@mui/icons-material/CreateSharp";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = ({ nav, setNav, open, setOpen }) => {
  const buttons = [
    {
      title: "Approval",
      icon: <PersonIcon color="white" className={styles.buttonIcon} />,
      active: true,
      to: "warden-approval"
    },
    {
      title: "Violation",
      icon: <LinkOffIcon color="white" className={styles.buttonIcon} />,
      to: "voilation",
      active: false
    },
    {
      title: "Decline",
      icon: <ArchiveSharpIcon className={styles.buttonIcon} />,
      to: "warden-decline",
      active: false
    },
    {
      title: "Register",
      icon: <CreateSharpIcon className={styles.buttonIcon} />,
      to: "admin-register",
      active: false
    }
  ];

  const role = useSelector((state) => state.auth.admin?.role);

  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Grid
      container
      item
      lg={1.5}
      xs={12}
      sx={{ display: { lg: "flex", xs: open ? "flex" : "none" } }}
    >
      <Box className={styles.sidebar}>
        <Grid
          item
          sx={{ display: { lg: "flex", xs: "none" }, flexDirection: "column" }}
        >
          <img src={AdminImage} className={styles.image} alt="admin" />
          <Typography className={styles.heading}>Admin</Typography>
        </Grid>
        {(role !== "superadmin"
          ? buttons.filter((btn) => btn.title !== "Register")
          : buttons
        ).map(({ icon, title, active, to }, idx) => (
          <div
            onClick={() => {
              setOpen(false);
              navigate(to, { replace: true });
            }}
            className={styles.sideBarButton}
            style={
              location.pathname.split("/").includes(to)
                ? { backgroundColor: "black" }
                : {}
            }
            key={idx}
          >
            <div className={styles.buttonIconBack}>{icon}</div>
            <p className={styles.sideBarButtonTitle}>{title}</p>
          </div>
        ))}
      </Box>
    </Grid>
  );
};

export default Sidebar;
