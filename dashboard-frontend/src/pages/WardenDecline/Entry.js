import React, { useEffect, useMemo } from "react";
import styles from "../../styles/Dashboard.module.css";
import WardenImage from "../../images/warden-image.png";
import {
  TableCell,
  TableRow,
  Button,
  useMediaQuery,
  Typography
} from "@mui/material";
import json2mq from "json2mq";
import { Link, useNavigate } from "react-router-dom";
import { DeleteButton, UndoButton } from "../../components/ActionButtons";
import { useDispatch } from "react-redux";
import { setWardenId, removeWarden } from "../../reducers/warden";
const DeclinedWardenTableEntry = ({ handleIdChange, warden }) => {
  const matches = useMediaQuery(
    json2mq({
      minWidth: 1200
    })
  );
  const image = useMemo(() => {
    if (warden?.images === null || warden.images.length === 0) {
      return "/images/warden-image.png";
    }
    let wardenProfilePic = warden.images.find(
      (img) => img.type === "profilePic"
    );
    return wardenProfilePic.source;
  }, [warden.images]);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleRowClick = (e) => {
    if (Object.keys(e.target.dataset).includes("action")) {
      return;
    }
    dispatch(setWardenId({ id: warden._id }));
    if (matches) {
      navigate("profile");
    } else {
      navigate("/warden-profile", { replace: true });
    }
  };

  // Clean up
  useEffect(() => {
    return () => {
      if (matches) {
        console.log("Clean up runs");
        dispatch(setWardenId({ id: "" }));
      }
    };
  }, []);

  return (
    <TableRow onClick={handleRowClick} className={styles.tableRow}>
      <TableCell className={styles.nameAndImage}>
        {!matches && <img src={WardenImage} alt="warden" />}
        <div style={{ paddingLeft: 15 }}>
          <Typography
            variant={matches ? "h6" : "subtitle1"}
            className={styles.text}
            style={{ fontWeight: matches ? 400 : 700 }}
          >
            {warden.first_name} {warden.last_name}
          </Typography>
          {!matches && (
            <Typography
              variant={matches ? "h6" : "subtitle1"}
              className={styles.text}
            >
              {warden?.email}
            </Typography>
          )}
        </div>
      </TableCell>
      {matches ? (
        <>
          <TableCell className={styles.text}>
            <Typography className={styles.text}> {warden?.email}</Typography>
          </TableCell>
          <TableCell align="right">
            <UndoButton id={warden._id} />
          </TableCell>
          <TableCell align="right">
            <DeleteButton id={warden._id} />
          </TableCell>
        </>
      ) : (
        <TableCell align="right">
          <Button
            className={styles.underlinedButton}
            onClick={() => navigate(`/warden-profile`, { replace: true })}
          >
            View Details
          </Button>
        </TableCell>
      )}
    </TableRow>
  );
};

export default DeclinedWardenTableEntry;
