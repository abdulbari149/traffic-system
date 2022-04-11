import React from "react";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import AdminImage from "../images/admin-image.png";
import styles from "../styles/Sidebar.module.css";
import SidebarButton from "./SidebarButton";
import json2mq from "json2mq";
import PersonIcon from "@mui/icons-material/Person";
import LinkOffIcon from "@mui/icons-material/LinkOff";
import ArchiveSharpIcon from "@mui/icons-material/ArchiveSharp";
import CreateSharpIcon from "@mui/icons-material/CreateSharp";
import { styled } from "@mui/material/styles";

const Sidebar = ({ menuOpened, isMenuOpened }) => {
  const isLarge = useMediaQuery(
    json2mq({
      minWidth: 1200,
    })
  );

  const navButtons = [
    {
      title: "Approval",
      icon: <PersonIcon color="white" className={styles.buttonIcon} />,
    },
    {
      title: "Violation",
      icon: <LinkOffIcon color="white" className={styles.buttonIcon} />,
    },
    {
      title: "Decline",
      icon: <ArchiveSharpIcon className={styles.buttonIcon} />,
    },
    {
      title: "Register",
      icon: <CreateSharpIcon className={styles.buttonIcon} />,
    },
  ];

  return (
    <Grid item lg={1.5} xs={12}>
      <Box className={[styles.sidebar]}>
        {isLarge && (
          <div>
            <img src={AdminImage} className={styles.image} alt="admin" />
            <Typography className={styles.heading}>Admin</Typography>
          </div>
        )}
        <Grid>
          {navButtons.map((btn, idx) => (
            <div className={styles.button} key={idx}>
              <div className={styles.buttonIconBack}>{btn.icon}</div>
              <p className={styles.buttonTitle}>{btn.title}</p>
            </div>
          ))}
        </Grid>
      </Box>
    </Grid>
  );
};

export default Sidebar;
