import React, { useEffect } from "react";
import { Button, Grid, IconButton } from "@mui/material";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import UndoSharpIcon from "@mui/icons-material/UndoSharp";
import styles from "../styles/Dashboard.module.css";
import {
  useApproveWardenMutation,
  useDeclineWardenMutation,
  useDeleteWardenMutation,
  useUndoWardenMutation
} from "../api";
import { removeWarden, setWardenId } from "../reducers/warden";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../api";
const ApproveButton = ({ id }) => {
  const dispatch = useDispatch();
  const [approveWarden, { data, error, isSuccess, isError }] =
    useApproveWardenMutation();
  const approveHandler = async () => {
    await approveWarden(id);
  };
  useEffect(() => {
    if (isSuccess) {
      console.log("Response Data ==>", data);
      dispatch(removeWarden({ id, action: "approve" }));
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      if (error.status === 404) {
        dispatch(removeWarden({ id, action: "approve" }));
      }
    }
  }, [isError]);
  return (
    <Button
      data-action="approve"
      onClick={approveHandler}
      className={styles.blueButton}
    >
      Approve
    </Button>
  );
};

const DeclineButton = ({ id }) => {
  const dispatch = useDispatch();
  const [declineWarden, { data, error, isSuccess, isError }] =
    useDeclineWardenMutation();
  const declineHandler = async () => {
    console.log("Decline Button");
    await declineWarden(id);
  };
  useEffect(() => {
    if (isSuccess) {
      console.log("Response Data ==>", data);
      dispatch(removeWarden({ id, action: "approve" }));
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      console.log(error);
      if (error.status === 404) {
        dispatch(removeWarden({ id, action: "approve" }));
      }
    }
  }, [isError]);
  return (
    <Button
      data-action="decline"
      onClick={declineHandler}
      className={styles.redButton}
    >
      Decline
    </Button>
  );
};
const UndoButton = ({ id, onClick }) => {
  const dispatch = useDispatch();
  const [undoWarden, { data, error, isSuccess, isError }] =
    useUndoWardenMutation();
  const undoHandler = async () => {
    console.log("Undo Button");
    await undoWarden(id);
  };
  useEffect(() => {
    if (isSuccess) {
      dispatch(removeWarden({ id, action: "decline" }));
      onClick()
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      console.log(error);
      if (error.status === 404) {
        dispatch(removeWarden({ id, action: "approve" }));
      }
    }
  }, [isError]);
  return (
    <Button
      data-action="undo"
      className={styles.blueButton}
      onClick={undoHandler}
      startIcon={<UndoSharpIcon style={{ color: "white" }} />}
    >
      Undo
    </Button>
  );
};
const DeleteButton = ({ id, action }) => {
  const dispatch = useDispatch();
  const [deleteWarden, { data, error, isSuccess, isError }] =
    useDeleteWardenMutation();
  const deleteButton = async () => {
    dispatch(setWardenId({ id }))
    await deleteWarden(id);
  };
  useEffect(() => {
    if (isSuccess) {
      console.log("Response Data ==>", data);
      dispatch(removeWarden({ id, action }));
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      console.log(error);
      if (error.status === 404) {
        dispatch(removeWarden({ id, action: "approve" }));

      }
    }
  }, [isError]);
  return (
    <Grid item container data-action="delete">
      <IconButton onClick={deleteButton} >
        <DeleteSharpIcon style={{ color: "white" }} />
      </IconButton>
    </Grid>
  );
};

export { ApproveButton, DeclineButton, UndoButton, DeleteButton };
