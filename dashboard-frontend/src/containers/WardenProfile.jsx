import React from "react";

import styles from "../styles/WardenProfile.module.css";

import { Box, IconButton, Typography, Button, Grid } from "@mui/material";
import WardenHugeImage from "../images/warden-huge-image.png";
import { Link, useParams } from "react-router-dom";
import ProofOfIdentity from "../images/proof-of-identity.png";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import ArrowBackIosNewSharpIcon from "@mui/icons-material/ArrowBackIosNewSharp";
import { UndoSharp } from "@mui/icons-material";

const images = [
  {
    title: "Front Photo",
    source: ProofOfIdentity,
  },
  {
    title: "Back Photo",
    source: ProofOfIdentity,
  },
];

const ImagePresenter = ({ title, source }) => {
  return (
    <Grid item sm={6} xs={6} md={12} lg={12}>
      <Typography className={styles.imageCaption}>{title}</Typography>
      <img src={source} className={styles.proofImage} alt={title} />
    </Grid>
  );
};

const WardenProfile = ({ matches }) => {
  const { state } = useParams();

  return (
    <Box className={styles.wardenProfile}>
      {matches ? (
        <IconButton style={{ justifyContent: "flex-start" }}>
          <CloseSharpIcon style={{ color: "white", fontSize: 30 }} />
        </IconButton>
      ) : (
        <Button
          className={styles.backButton}
          startIcon={<ArrowBackIosNewSharpIcon style={{ color: "white" }} />}
        >
          <Link to="/dashboard" className={styles.goBackText}>
            Go Back
          </Link>
        </Button>
      )}
      <Typography variant={matches ? "h4" : "h6"} className={styles.heading}>
        Warden Profile
      </Typography>
      <img src={WardenHugeImage} alt="warden" className={styles.wardenImage} />
      <Typography className={styles.wardenName} variant="h5">
        Abdul Bari
      </Typography>
      <br />
      <Typography variant="h5" className={styles.boldText}>
        Email
      </Typography>
      <Typography className={styles.text}>abdulbari122@gmail.com</Typography>
      <br />
      <Typography variant="h5" className={styles.boldText}>
        Phone no.
      </Typography>
      <Typography className={styles.text}>+12 345 6789012</Typography>
      <Typography variant="h4" className={styles.proofHeading}>
        Proof Of Identity
      </Typography>
      <Grid container spacing={3} className={styles.imageContainer}>
        {images.map((image) => (
          <ImagePresenter title={image.title} source={image.source} />
        ))}
      </Grid>
      {!matches && (
        <div className={styles.buttonGroup}>
          {state === "decline" ? (
            <Button
              className={styles.blueButton}
              startIcon={<UndoSharp style={{ color: "white" }} />}
            >
              Undo
            </Button>
          ) : (
            <>
              {" "}
              <Button className={styles.blueButton}>Approve</Button>
              <Button className={styles.redButton}>Decline</Button>
            </>
          )}
        </div>
      )}
    </Box>
  );
};

export default WardenProfile;
