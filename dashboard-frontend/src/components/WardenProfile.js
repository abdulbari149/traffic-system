import React, { useEffect, useState } from "react";
import styles from "../styles/WardenProfile.module.css";
import {
  Box,
  IconButton,
  Typography,
  Button,
  Grid,
  useMediaQuery,
} from "@mui/material";
import WardenHugeImage from "../images/warden-huge-image.png";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import ProofOfIdentity from "../images/proof-of-identity.png";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import ArrowBackIosNewSharpIcon from "@mui/icons-material/ArrowBackIosNewSharp";
import { UndoSharp } from "@mui/icons-material";
import json2mq from "json2mq";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { useGetWardenImagesQuery } from "../api";
import Loading from "./Loading";
const imagesData = [
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
    <Grid item sm={6} xs={12} md={6} lg={6}>
      <Typography className={styles.imageCaption}>{title}</Typography>
      <img src={source} className={styles.proofImage} alt={title} />
    </Grid>
  );
};

const WardenProfile = ({ handleIdChange, matches, id }) => {
  const { state, id: paramsId } = useParams();
  const isLarge = useMediaQuery(json2mq({ minWidth: 800 }));
  const [wardenId, setWardenId] = useState(matches ? id : paramsId);
  const navigate = useNavigate();
  const warden = useSelector((state) =>
    state.wardenList.approvalList.find((w) => w._id === wardenId)
  );
  const { data, error, isSuccess, isLoading, isError } =
    useGetWardenImagesQuery(wardenId);
  const [images, setImages] = useState(null);

  useEffect(() => {
    if (isSuccess) {
      let response = data.data;
			console.log( {response })
      if (response?.images?.length === 0) {
        setImages(imagesData);
      } 
			else {
				let idCardImages = response?.images.map(img => {
					let source =  `http://localhost:5000/api/image/warden/file/${img.filename}`
					console.log({ img })
					return 
				})
				console.log({ idCardImages })
      } 
    }
  }, [isSuccess]);

	console.log({ images })

  if (isLoading) {
    return (
      <Box className={styles.wardenProfile}>
        <Loading />
      </Box>
    );
  }

  return (
    <Box className={styles.wardenProfile}>
      {matches ? (
        <IconButton
          onClick={() => handleIdChange(0)}
          style={{ justifyContent: "flex-start" }}
        >
          <CloseSharpIcon style={{ color: "white", fontSize: 30 }} />
        </IconButton>
      ) : (
        <Button
          className={styles.backButton}
          startIcon={<ArrowBackIosNewSharpIcon style={{ color: "white" }} />}
          onClick={() => navigate("/", { replace: true })}
        >
          <p className={styles.goBackText}>Go Back</p>
        </Button>
      )}
      <Typography variant={matches ? "h4" : "h6"} className={styles.heading}>
        Warden Profile
      </Typography>
      <img src={WardenHugeImage} alt="warden" className={styles.wardenImage} />
      <Typography className={styles.wardenName} variant="h5">
        {_.capitalize(warden.first_name)} {_.capitalize(warden.last_name)}
      </Typography>
      <br />
      <Grid item container xs={12}>
        <Grid sx={{ p: 1 }} item lg={12} xs={12} sm={7}>
          <Typography variant="h5" className={styles.boldText}>
            Email
          </Typography>
          <br />
          <Typography className={styles.text}>{warden.email}</Typography>
        </Grid>
        <Grid sx={{ p: 1 }} item lg={12} xs={12} sm={5}>
          <Typography variant="h5" className={styles.boldText}>
            Phone no.
          </Typography>
          <br />
          <Typography className={styles.text}>{warden.phone_number}</Typography>
        </Grid>
        <Grid sx={{ p: 1 }} item lg={12} xs={12} sm={7}>
          <Typography variant="h5" className={styles.boldText}>
            Service Id
          </Typography>
          <br />
          <Typography className={styles.text}>{warden.service_id}</Typography>
        </Grid>
        <Grid sx={{ p: 1 }}  item lg={12} xs={12} sm={5}>
          <Typography variant="h5" className={styles.boldText}>
            Designation
          </Typography>
          <br />
          <Typography className={styles.text}>{warden.designation}</Typography>
        </Grid>
      </Grid>

      <Typography variant="h4" className={styles.proofHeading}>
        Proof Of Identity
      </Typography>
      <Grid
        direction={matches ? "column" : "row"}
        container
        spacing={3}
        className={styles.imageContainer}
      >
        {imagesData.map((image, idx) => (
          <ImagePresenter key={idx} title={image.title} source={image.source} />
        ))}
      </Grid>
      {!isLarge && (
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
