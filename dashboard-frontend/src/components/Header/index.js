import React, { useEffect } from "react";
import styles from "./style.module.css";
import { Link, useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setToken } from "../../reducers/auth";
import { resetWardenState } from "../../reducers/warden";
import { useLogoutMutation } from "../../api";
import { resetVoilationState } from "../../reducers/voilation";
function Header({ title }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logout, { data, error, isSuccess, isLoading, isError }] =
    useLogoutMutation();
  const handleClick = async () => {
    await logout();
  };

  React.useEffect(() => {
    if (isSuccess) {
      if (!localStorage.getItem("token")) {
        localStorage.clear();
      } else {
        localStorage.removeItem("token");
      }
      dispatch(setUser({ data: {} }));
      dispatch(setToken({ data: "" }));
      dispatch(resetWardenState())
      dispatch(resetVoilationState())
      navigate("/login", { replace: true });
    }
  }, [isSuccess]);

  return (
    <div className={styles.container}>
      <Typography variant={"h4"} className={styles.heading}>
        {title}
      </Typography>

      <Button
        className={styles.logoutButton}
        onClick={handleClick}
        sx={{ display: { lg: "flex", xs: "none" } }}
        startIcon={<LogoutIcon className={styles.logoutIcon} />}
      >
        <p className={styles.logoutButtonText}>
          Logout
        </p>
      </Button>
    </div>
  );
}

export default Header;
