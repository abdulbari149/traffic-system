import React, { useEffect } from "react";
import { Button, IconButton } from "@mui/material";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import UndoSharpIcon from "@mui/icons-material/UndoSharp";
import styles from "../styles/Dashboard.module.css";
import {
  useApproveWardenMutation,
  useDeclineWardenMutation,
  useDeleteWardenMutation,
  useUndoWardenMutation
} from "../api";
import { removeWarden } from "../reducers/warden";
import { useDispatch, useSelector } from "react-redux";
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
const UndoButton = ({ id }) => {
  const dispatch = useDispatch();
  const [undoWarden, { data, error, isSuccess, isError }] =
    useUndoWardenMutation();
  const undoHandler = async () => {
    console.log("Undo Button");
    await undoWarden(id);
  };
  useEffect(() => {
    if (isSuccess) {
      console.log("Response Data ==>", data);
      dispatch(removeWarden({ id, action: "decline" }));
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
const DeleteButton = ({ id }) => {
  const dispatch = useDispatch();
  const [deleteWarden, { data, error, isSuccess, isError }] =
    useDeleteWardenMutation();
  const deleteButton = async () => {
    await deleteWarden(id);
  };
  useEffect(() => {
    if (isSuccess) {
      console.log("Response Data ==>", data);
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
    <IconButton onClick={deleteButton} data-action="undo">
      <DeleteSharpIcon style={{ color: "white" }} />
    </IconButton>
  );
};

export { ApproveButton, DeclineButton, UndoButton, DeleteButton };
