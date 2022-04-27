/* eslint-disable jsx-a11y/heading-has-content */
import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Entry from "./Entry";

import styles from "../../styles/Dashboard.module.css";

import { Header, TableHeader, Table } from "../../components";
import {
  useAssignWardenToAdminQuery,
  useGetWardenListForApprovalQuery,
  useLazyAssignWardenToAdminQuery
} from "../../api";
import { setWardenApprovalList } from "../../reducers/warden";

const WardenApproval = () => {
  const dispatch = useDispatch();
  const { approval: wardens } = useSelector((state) => state?.warden);
  const [assign, setAssign] = useState(false);
  const [loading, setLoading] = useState(!wardens.length);
  const [errorMessage, setErrorMessage] = useState({
    title: "Wardens Currently Unavaliable",
    body: "There are no more request for wardens approval"
  })
  console.log({ assign });
  const wardenList = useGetWardenListForApprovalQuery("uncheck");

  const assignWardenToAdmin = useAssignWardenToAdminQuery(null, {
    skip: !assign
  });

  
  useEffect(() => {
    if (
      assignWardenToAdmin?.data?.data?.length !== 0 &&
      wardens.length > 0 &&
      wardens.length < 4
    ) {
      console.log("Refetching");
      assignWardenToAdmin.refetch();
      setAssign(true);
    }
  }, [wardens.length]);

  useEffect(() => {
    if (assignWardenToAdmin.isFetching) {
      console.log("Again assigning wardens to admin", {
        isFetching: assignWardenToAdmin.isFetching
      });
    }
  }, [assignWardenToAdmin.isFetching]);

  // For Assign Warden
  useEffect(() => {
    if (
      assignWardenToAdmin.isSuccess &&
      assignWardenToAdmin.status === "fulfilled"
    ) {
      const data = assignWardenToAdmin?.data?.data;
      if (data.length === 0) {
        setAssign(false);
        setLoading(false);
      }
      console.log("Success Assigning", data);
      let newWardens = wardens.concat(data);
      dispatch(setWardenApprovalList({ data: newWardens }));
      setAssign(false);
      setLoading(false);
    }
  }, [assignWardenToAdmin.status, assignWardenToAdmin.isSuccess]);

  useEffect(() => {
    if (assignWardenToAdmin.isError) {
      setAssign(false);
      setLoading(false);
    }
  }, [assignWardenToAdmin.isError]);

  // For Query Warden List
  useEffect(() => {
    if (wardenList.isSuccess) {
      dispatch(setWardenApprovalList({ data: wardenList?.data?.data }));
      setLoading(false);
    }
  }, [wardenList.isSuccess]);

  useEffect(() => {
    if (wardenList.isError) {
      switch (wardenList.error.status) {
        case 404:
          setAssign(true);
          break;
        default:
          console.log("No Error", { error: wardenList.error });
      }
    }
  }, [wardenList.isError]);

  return (
    <>
      <Grid item container sx={{ flex: 1 }}>
        <Box className={styles.Box}>
          <Header title={"Warden Approvals"} />
          {(loading || wardens.length > 0) && (<Table
            headerRow={[
              { name: "Name", screenSizes: ["xl", "lg", "md"] },
              { name: "Email", screenSizes: ["xl", "lg", "md"] },
              { name: "Warden", screenSizes: ["sm", "xs"] }
            ]}
            renderTableHeader={(items) => <TableHeader items={items} />}
            data={wardens}
            renderTableBody={(item, idx) => <Entry warden={item} key={idx} />}
            loading={loading}
          />)}
         {wardens.length === 0 && !loading && (
          <Grid item container offset={2} direction='column' style={{ flex: 1 }} >
            <Grid xs={1} item >
              <Typography style={{ color: "#939090", textAlign: "center" }} variant="h6">
                {errorMessage?.title}
              </Typography>
            </Grid>
            <Grid xs={2} item>
              <Typography style={{ color: "#939090", textAlign: "center" }}>{errorMessage?.body}</Typography>
            </Grid>
          </Grid>
        )}
        </Box>

      </Grid>
      <Outlet />
    </>
  );
};

export default React.memo(WardenApproval);
