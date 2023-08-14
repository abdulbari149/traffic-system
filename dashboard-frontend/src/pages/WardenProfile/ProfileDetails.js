import React from "react";
import styles from "../../styles/WardenProfile.module.css";
import { Grid, Typography } from "@mui/material";
function ProfileDetails({ warden }) {
  let profile = [
    { id: 1, title: "Email", value: warden?.email },
    { id: 2, title: "Phone no.", value: warden?.phone_number },
    { id: 3, title: "Service Id", value: warden?.service_id },
    { id: 4, title: "Designation", value: warden?.designation }
  ];

  return (
    <Grid item container xs={12}>
      {profile.map((item, idx) => (
        <Grid
          key={idx}
          sx={{ p: 1 }}
          item
          lg={12}
          xs={12}
          sm={item.id % 2 ? 7 : 5}
        >
          <Typography variant="h5" className={styles.boldText}>
            {item.title}
          </Typography>
          <br />
          <Typography className={styles.text}>{item.value}</Typography>
        </Grid>
      ))}
    </Grid>
  );
}

export default ProfileDetails;
