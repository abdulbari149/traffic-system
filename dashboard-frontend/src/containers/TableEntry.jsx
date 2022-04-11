import React from "react";

import styles from "../styles/Dashboard.module.css";
import WardenImage from "../images/warden-image.png";

import {
  TableCell,
  TableRow,
  Button,
  useMediaQuery,
  Typography,
  IconButton,
  Grid,
} from "@mui/material";

import json2mq from "json2mq";

import { Link } from "react-router-dom";

import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";

const TableEntry = () => {
  const handleClick = () => {
    
  };

  const matches = useMediaQuery(
    json2mq({
      minWidth: 797,
    })
  );

  return (
    <TableRow onClick={handleClick} className={styles.tableRow}>
      {matches ? (
        <>
          <TableCell className={styles.text}>
            <Typography className={styles.text}>Abdul Bari</Typography>
          </TableCell>
          <TableCell className={styles.text}>
            <Typography className={styles.text}>
              abdulbari111343231@gmail.com
            </Typography>
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
        <>
          <TableCell className={styles.nameAndImage}>
            <img src={WardenImage} alt="warden" />
            <Grid item direction="column" style={{ paddingLeft: 30 }}>
              <Typography
                variant={"subtitle1"}
                className={styles.text}
                style={{ fontWeight: 700 }}
              >
                Abdul Bari
              </Typography>

              <Typography variant={"subtitle1"} className={styles.text}>
                abdulbari11123213213@gmail.com
              </Typography>
            </Grid>
          </TableCell>
          <TableCell align="right">
            <Button className={styles.underlinedButton}>
              <Link to="/profile/approve">View Details</Link>
            </Button>
          </TableCell>
        </>
      )}
    </TableRow>
  );
};

export default TableEntry;
