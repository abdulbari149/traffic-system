import React, { useEffect, useState } from "react";
import styles from "../styles/Dashboard.module.css";
import {
  TableCell,
  TableRow,
  Button,
  useMediaQuery,
  Typography,
  IconButton,
} from "@mui/material";
import json2mq from "json2mq";
import { useNavigate } from "react-router-dom";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import { useGetProfilePicQuery } from "../api";
import { useSelector, useDispatch } from "react-redux";
import { setWardenImage } from "../reducers/wardenList";
const TableEntry = ({ handleIdChange, warden }) => {
  // const { image } = useSelector(state => {
  // 	const { profilePics } = state?.wardenList
  // 	console.log("ProfilePic Selector Runs", {  profilePics })
  // 	if(profilePics.length === 0){
  // 		return { image: null }
  // 	}
  // 	return profilePics?.filter(pic => pic?.wardenId === warden._id)
  // })

  const [image, setImage] = useState("");
  const matches = useMediaQuery(
    json2mq({
      minWidth: 1200,
    })
  );
  const isLarge =  useMediaQuery(
    json2mq({
      minWidth: 800,
    })
  );
  const navigate = useNavigate();
  const { data, error, isSuccess, isLoading, isError } = useGetProfilePicQuery(
    warden._id,
    {
      skip: matches,
    }
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      setImage(
        data.url
          ? `http://localhost:5000/api/image/warden/file/${data.url}`
          : "/images/warden-image.png"
      );
    }
  }, [isSuccess]);


  return (
    <TableRow onClick={() => {
      if(matches){
        handleIdChange(warden._id) 
        return
      }
      navigate(`/profile/warden/${warden._id}`)
    }} className={styles.tableRow}>
      <TableCell className={styles.nameAndImage}>
        {!isLarge && (
          <img
            src={image ?? "/images/warden-image.png"}
            alt={`profilePic`}
            width={50}
            height={50}
            style={{ borderRadius: 1000 }}
          />
        )}
        <div style={{ paddingLeft: 15 }}>
          <Typography
            variant={matches ? "h6" : "subtitle1"}
            className={styles.text}
            style={{ fontWeight: 700 }}
          >
            {warden?.first_name + " " + warden?.last_name}
          </Typography>
          {!isLarge && (
            <Typography
              variant={matches ? "h6" : "subtitle1"}
              className={styles.text}
            >
              {warden?.email}
            </Typography>
          )}
        </div>
      </TableCell>
      {isLarge ? (
        <>
          <TableCell className={styles.text}>
            <Typography className={styles.text}> {warden?.email}</Typography>
          </TableCell>
          <TableCell align="right">
            <Button className={styles.blueButton}>Approve</Button>
          </TableCell>
          <TableCell align="right">
            <Button className={styles.redButton}>Decline</Button>
          </TableCell>
          <TableCell align="right">
            <IconButton>
              <DeleteSharpIcon style={{ color: "white" }} />
            </IconButton>
          </TableCell>
        </>
      ) : (
        <TableCell align="right">
          <Button
            onClick={() => navigate(`/profile/approve/${warden._id}`)}
            className={styles.underlinedButton}
          >
            View Details
          </Button>
        </TableCell>
      )}
    </TableRow>
  );
};

export default TableEntry;
