import React, { useMemo } from "react";
import { Grid, Typography } from "@mui/material";
import ProofOfIdentity from "../../images/proof-of-identity.png";
import styles from "../../styles/WardenProfile.module.css";
import _ from "lodash";
function ProfileImages({ images }) {
  const profileImages = useMemo(
    () =>
      images
        ?.filter((img) => img.type !== "profilePic")
        ?.map((idCard) => ({
          title: _.kebabCase(idCard.type)
            .replace(/-/g, " ")
            .split(" ")
            .map((w) => _.capitalize(w))
            .join(" "),
          source: idCard?.source ?? ProofOfIdentity
        })),
    [images]
  );

  return (
    <Grid container>
      <Typography variant="h4" className={styles.proofHeading}>
        Proof Of Identity
      </Typography>
      <Grid container spacing={3} className={styles.imageContainer}>
        {profileImages?.map((img, idx) => (
          <Grid item sm={6} xs={12} md={6} lg={6}>
            <Typography className={styles.imageCaption}>{img?.title}</Typography>
            <img src={img?.source} className={styles.proofImage} alt={img?.title} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default ProfileImages;
