/* eslint-disable jsx-a11y/heading-has-content */
import React, { useEffect } from "react";
import styles from "../../styles/Dashboard.module.css";
import { Box, Grid } from "@mui/material";
import { Table, TableHeader, Header } from "../../components";
import { useGetWardenDeclineListQuery } from "../../api";
import Entry from "./Entry";
import { useSelector, useDispatch } from "react-redux";
import { setWardenDeclineList } from "../../reducers/warden";
import { Outlet } from "react-router-dom";
const DeclineWarden = ({ matches, handleIdChange }) => {
  const { decline: wardens } = useSelector((state) => state.warden);

  const {
    currentData: data,
    error,
    isError,
    isSuccess,
    isLoading
  } = useGetWardenDeclineListQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      console.log({ data });
      dispatch(setWardenDeclineList({ data: data?.data }));
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      console.log({ error });
    }
  }, [isError]);

  return (
    <>
      <Grid item container sx={{ flex: 1 }}>
        <Box className={styles.Box}>
          <Header title="Warden Account's Declined" />
          <Table
            headerRow={[
              { id: 1, name: "Name", screenSizes: ["xl", "lg"] },
              { id: 2, name: "Email", screenSizes: ["xl", "lg"] }
            ]}
            data={wardens.length > 0 ? wardens : data?.data}
            loading={isLoading}
            renderTableBody={(item) => <Entry warden={item} key={item._id} />}
            renderTableHeader={(items) => <TableHeader items={items} />}
          />
        </Box>
      </Grid>
      <Outlet />
    </>
  );
};

export default DeclineWarden;
