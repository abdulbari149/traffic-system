import React, { useEffect, useMemo } from "react";
import styles from "../../styles/Dashboard.module.css";
import {
  TableCell,
  TableRow,
  Button,
  useMediaQuery,
  Typography,
  IconButton,
  Grid
} from "@mui/material";
import json2mq from "json2mq";
import { useNavigate } from "react-router-dom";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import { useDispatch } from "react-redux";
import _ from "lodash";
import { removeWarden, setWardenId } from "../../reducers/warden";
import {
  ApproveButton,
  DeclineButton,
  DeleteButton
} from "../../components/ActionButtons";
const WardenApprovalEntry = ({ warden }) => {
  const image = useMemo(() => {
    if (warden?.images === null || warden.images.length === 0) {
      return "/images/warden-image.png";
    }
    let wardenProfilePic = warden.images.find(
      (img) => img.type === "profilePic"
    );
    return wardenProfilePic.source;
  }, [warden.images]);

  const matches = useMediaQuery(
    json2mq({
      minWidth: 1200
    })
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const tableCellSX = { display: { md: "table-cell", xs: "none" } };

  const handleRowClick = (e) => {
    console.log({ e })
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
      <TableCell
        sx={{ display: { md: "none", xs: "table-cell" } }}
        className={styles.nameAndImage}
      >
        <Grid direction="row" item container sx={{ pl: 1, pt: 1 }}>
          <Grid item xs={2}>
            <img
              src={image ?? "/images/warden-image.png"}
              alt={`profilePic`}
              width={50}
              height={50}
              style={{ borderRadius: 1000 }}
            />
          </Grid>
          <Grid item container direction="column" xs={10} sx={{ pl: 1 }}>
            <Typography className={styles.text} style={{ fontWeight: 700 }}>
              {_.capitalize(warden?.first_name)}{" "}
              {_.capitalize(warden?.last_name)}
            </Typography>
            <Typography className={styles.text}>{warden?.email}</Typography>
          </Grid>
        </Grid>
      </TableCell>

      <TableCell className={styles.text} sx={tableCellSX}>
        <Typography className={styles.text}>
          {_.capitalize(warden?.first_name)} {_.capitalize(warden?.last_name)}
        </Typography>
      </TableCell>
      <TableCell className={styles.text} sx={tableCellSX}>
        <Typography className={styles.text}> {warden?.email}</Typography>
      </TableCell>
      <TableCell align="right" sx={tableCellSX}>
        <ApproveButton id={warden._id} />
      </TableCell>
      <TableCell align="right" sx={tableCellSX}>
        <DeclineButton id={warden._id} />
      </TableCell>
      <TableCell align="right" sx={tableCellSX}>
        <DeleteButton id={warden._id} action="approve" />
      </TableCell>
      <TableCell
        sx={{ display: { md: "none", xs: "table-cell" } }}
        align="right"
      >
        <Button
          className={styles.underlinedButton}
          onClick={() => navigate(`/warden-profile`, { replace: true })}
        >
          View Details
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default WardenApprovalEntry;
