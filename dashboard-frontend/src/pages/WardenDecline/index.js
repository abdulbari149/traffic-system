/* eslint-disable jsx-a11y/heading-has-content */
import React, { useEffect, useState } from "react";
import styles from "../../styles/Dashboard.module.css";
import { Box, Grid, Typography } from "@mui/material";
import { Table, TableHeader, Header } from "../../components";
import { useGetWardenDeclineListQuery } from "../../api";
import Entry from "./Entry";
import { useSelector, useDispatch } from "react-redux";
import { setWardenDeclineList } from "../../reducers/warden";
import { Outlet } from "react-router-dom";
const DeclineWarden = ({ matches, handleIdChange }) => {
  const { decline: wardens } = useSelector((state) => state.warden);

  const {
    data,
    error,
    isError,
    isSuccess,
    isLoading,
    isUninitialized,
    isFetching,
    refetch
  } = useGetWardenDeclineListQuery();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (isSuccess) {
      console.log("Query was successful", { data });
      dispatch(setWardenDeclineList({ data: data?.data }));
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      if (error.status === 404) {
        setErrorMessage({
          title: "OOPs Not Avaliable",
          body: error?.data?.message
        });
      }
    }
  }, [isError]);

  return (
    <>
      <Grid item container sx={{ flex: 1 }}>
        <Box className={styles.Box}>
          <Header title="Warden Account's Declined" />
          {(isLoading || isSuccess) && (
            <Table
              headerRow={[
                { id: 1, name: "Name", screenSizes: ["xl", "lg"] },
                { id: 2, name: "Email", screenSizes: ["xl", "lg"] }
              ]}
              data={wardens}
              loading={isLoading}
              renderTableBody={(item) => <Entry warden={item} key={item._id} />}
              renderTableHeader={(items) => <TableHeader items={items} />}
            />
          )}
          {isError && (
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

export default DeclineWarden;
