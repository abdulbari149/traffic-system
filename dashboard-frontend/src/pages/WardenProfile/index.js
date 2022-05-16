import React, { useCallback, useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, IconButton, Typography, Button, Grid } from "@mui/material";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import ArrowBackIosNewSharpIcon from "@mui/icons-material/ArrowBackIosNewSharp";
import WardenHugeImage from "../../images/warden-huge-image.png";
import styles from "../../styles/WardenProfile.module.css";
import { setWardenId } from "../../reducers/warden";
import { ApproveButton, DeclineButton, UndoButton } from "../../components/ActionButtons";
import ProfileImages from "./ProfileImages";
import ProfileDetails from "./ProfileDetails";
import _ from "lodash";

const WardenProfile = ({ handleIdChange, id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  console.log({ params });
  const wardenId = useSelector((state) => state.warden.wardenId);
  
  console.log("Warden Profile")
  useEffect(() => {
    // console.log("Warden Id Effect Runs..")
    if (!wardenId) {
      navigate("/dashboard/warden-approval", { replace: true });
    }
  }, []);

  const warden = useSelector((state) => {
    const wardens = [...state.warden.approval, ...state.warden.decline];
    return wardens.find((w) => w._id === state.warden.wardenId);
  });

  const profilePic = useMemo(
    () =>
      warden?.images.find((image) => image.type === "profilePic")?.source ??
      WardenHugeImage,
    [warden?.images]
  );

  const handleGoBack = () => {
    dispatch(setWardenId({ id: "" }));
    let redirectURL = "/dashboard/warden-approval";

    if (!!params?.status && typeof params?.status !== "undefined") {
      redirectURL = `/dashboard/warden-${params.status}`;
      console.log({ redirectURL });
    }
    navigate(redirectURL, { replace: true });
  };
  const handleClose = () => navigate(-1);

  const windowResizer = useCallback((e) => {
    console.log(window.screen.width);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", windowResizer);
    return () => window.removeEventListener("resize", windowResizer);
  }, []);

  return (
    <Grid item lg={3.5} xs={12}>
      <Box className={styles.wardenProfile}>
        <IconButton
          sx={{ display: { lg: "flex", xs: "none" } }}
          onClick={handleClose}
          style={{ justifyContent: "flex-start" }}
        >
          <CloseSharpIcon style={{ color: "white", fontSize: 30 }} />
        </IconButton>{" "}
        <Button
          className={styles.backButton}
          startIcon={<ArrowBackIosNewSharpIcon style={{ color: "white" }} />}
          onClick={handleGoBack}
        >
          <p className={styles.goBackText}>Go Back</p>
        </Button>
        <Grid item container align="center" spacing={2} sx={{ pb: 4 }}>
          <Grid item xs={12}>
            <img src={profilePic} alt="warden" className={styles.wardenImage} />
          </Grid>
          <Grid item xs={12}>
            <Typography className={styles.wardenName} variant="h5">
              {_.capitalize(warden?.first_name)}{" "}
              {_.capitalize(warden?.last_name)}
            </Typography>
          </Grid>
        </Grid>
        <ProfileDetails warden={warden ?? {}} />
        <ProfileImages images={warden?.images} />
        <Grid
          container
          sx={{ display: { lg: "none", xs: "flex" }, justifyContent: "center" }}
          align="center"
        >
          {params.status === "approval" ? (
            <>
              <ApproveButton id={warden?._id} />
              <DeclineButton id={warden?._id} />
            </>
          ) : (
            <UndoButton onClick={() => navigate(`/dashboard/warden-decline`, { replace: true })} id={warden?._id} />
          )}
        </Grid>
      </Box>
    </Grid>
  );
};

export default WardenProfile;
