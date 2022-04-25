import { Typography, IconButton, Grid } from "@mui/material";
import React from "react";
import styles from "../styles/AppBar.module.css";
import AdminImage from "../images/admin-image.png";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";

const AppBar = ({ open, setOpen }) => {
  return (
    <Grid sx={{ display: { lg: "none", xs: "flex" }, width: "100%"}} item container>
      <div className={styles.container}>
        <div className={styles.userIdentity}>
          <img src={AdminImage} className={styles.image} alt="admin" />
          <Typography variant="h5" className={styles.heading}>
            Admin
          </Typography>
        </div>
        <div className={styles.buttons}>
          <IconButton>
            <LogoutSharpIcon style={{ color: "white", fontSize: 38 }} />
          </IconButton>
          <IconButton onClick={() => setOpen((prevOpen) => !prevOpen)}>
            {open ? (
              <CloseSharpIcon style={{ color: "white", fontSize: 38 }} />
            ) : (
              <MenuSharpIcon style={{ color: "white", fontSize: 38 }} />
            )}
          </IconButton>
        </div>
      </div>
    </Grid>
  );
};

export default AppBar;
