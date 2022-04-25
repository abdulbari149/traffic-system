/* eslint-disable jsx-a11y/heading-has-content */
import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Entry from "./Entry";

import styles from "../../styles/Dashboard.module.css";

import { Header, TableHeader, Table } from "../../components";
import {
  useAssignWardenToAdminQuery,
  useGetWardenListForApprovalQuery
} from "../../api";
import { setWardenApprovalList } from "../../reducers/warden";

const WardenApproval = () => {
  const dispatch = useDispatch();
  const { approval: wardens } = useSelector((state) => state?.warden);
  const [assign, setAssign] = useState(false);
  const [loading, setLoading] = useState(!wardens.length);

  const wardenList = useGetWardenListForApprovalQuery("uncheck");

  const assignWardenToAdmin = useAssignWardenToAdminQuery(null, {
    skip: !assign
  });

  useEffect(() => {
    if (wardens.length > 0 && wardens.length < 4) {
      setAssign(true);
    }
  }, [wardens.length]);

  // For Assign Warden
  useEffect(() => {
    if (assignWardenToAdmin.isSuccess) {
      console.log("Success Assigning", assignWardenToAdmin?.data?.data);
      let newWardens = wardens.concat(assignWardenToAdmin?.data?.data);
      dispatch(setWardenApprovalList({ data: newWardens }));
      setAssign(false);
      setLoading(false);
    }
  }, [assignWardenToAdmin.isSuccess]);

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
          <Table
            headerRow={[
              { name: "Name", screenSizes: ["xl", "lg", "md"] },
              { name: "Email", screenSizes: ["xl", "lg", "md"] },
              { name: "Warden", screenSizes: ["sm", "xs"] }
            ]}
            renderTableHeader={(items) => <TableHeader items={items} />}
            data={wardens}
            renderTableBody={(item, idx) => <Entry warden={item} key={idx} />}
            loading={loading}
          />
        </Box>
      </Grid>
      <Outlet />
    </>
  );
};

export default React.memo(WardenApproval);
