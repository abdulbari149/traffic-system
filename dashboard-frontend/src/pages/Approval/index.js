/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState, useEffect } from "react";
import styles from "../../styles/Dashboard.module.css";
import {
  Box,
  TableContainer,
  Table,
  Paper,
  TableCell,
  TableRow,
  TableHead,
  Typography,
  Button,
  tableCellClasses,
  TableBody
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { Header, Loading } from "../../components";
import TableEntry from "../../components/TableEntry";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useGetWardenListForApprovalQuery } from "../../api";
import { setWardenApprovalList } from "../../reducers/wardenList";
const WardenApproval = ({ matches, handleIdChange }) => {
  const dispatch = useDispatch();
  const { approvalList } = useSelector((state) => state?.wardenList);
  const { data, isSuccess, isError, isLoading, error } =
    useGetWardenListForApprovalQuery("uncheck", {
      skip: !!approvalList.length
    });
  useEffect(() => {
    if (isSuccess) {
      dispatch(setWardenApprovalList({ data: data.data }));
      console.log({ approvalList, data });
    }
  }, [isSuccess]);

  return (
    <Box className={styles.Box}>
      <Header title={"Warden Approvals"} />
      {isLoading && <Loading />}

      {approvalList.length > 0 && (
        <TableContainer
          component={Paper}
          style={{ backgroundColor: "#131313" }}
        >
          <Table
            sx={{
              [`& .${tableCellClasses.root}`]: {
                borderBottom: "none",
                marginRight: matches ? "auto" : 0.4,
                marginLeft: matches ? "auto" : 0.4,
                paddingLeft: matches ? "auto" : 0.4,
                paddingRight: matches ? "auto" : 0.4,
                maxWidth: 650
              }
            }}
            aria-label="simple table"
          >
            <TableHead className={styles.tableHead}>
            </TableHead>
            <TableBody>
              {approvalList.map((warden) => (
                <TableEntry
                  handleIdChange={handleIdChange}
                  warden={warden}
                  key={warden._id}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default React.memo(WardenApproval);
