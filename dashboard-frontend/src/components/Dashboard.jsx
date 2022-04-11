import React, { useState, useCallback } from "react";

import { Grid, useMediaQuery } from "@mui/material";
import Sidebar from "../containers/Sidebar";
import WardenApprovals from "../containers/WardenApprovals";
import WardenProfile from "../containers/WardenProfile";
import Violation from "./Violation";

import DeclinedWardens from "../containers/DeclinedWardens";
import { Routes as Switch, Route, Outlet } from "react-router-dom";
import json2mq from "json2mq";
import AppBar from "./AppBar";
import SuperAdminSignUp from "./SuperAdminSignUp";

export const WardenApprovalPage = (props) => {
  const matches = useMediaQuery(json2mq({ maxWidth: 729 }));
  const [id, setId] = useState(0);
  const isLarge = useMediaQuery(
    json2mq({
      minWidth: 1200,
    })
  );

  return (
    <>
      <Grid item lg={7.5} xs={12}>
        <WardenApprovals />
      </Grid>
        <Outlet />
    </>
  );
};
export const WardenProfilePage = () => {
  const isLarge = useMediaQuery(
    json2mq({
      minWidth: 1200,
    })
  );
  return (
    <Grid item xs={3}>
      <WardenProfile matches={isLarge} />
    </Grid>
  );
};

const Dashboard = () => {
  const [menuOpened, isMenuOpened] = useState(0);
  const isLarge = useMediaQuery(
    json2mq({
      minWidth: 1100,
    })
  );
  return (
    <Grid container spacing={0} style={{ backgroundColor: "#0f0f0f" }}>
      <AppBar menuOpened={menuOpened} isMenuOpened={isMenuOpened} />
      <Sidebar menuOpened={menuOpened} isMenuOpened={isMenuOpened} />
      <Outlet />
    </Grid>
    // nav === 0 ? (
    //   <>
    //     <WardenApprovalPage
    //       matches={matches}
    //       id={id}
    //       handleIdChange={handleIdChange}
    //     />
    //     {matches && id ? (
    //
    //     ) : null}
    //   </>
    // ) : nav === 1 ? (
    //   <Grid
    //     item
    //     md={matches ? 10.5 : 12}
    //     lg={matches ? 10.5 : 12}
    //     sm={matches ? 10.5 : 12}
    //     xs={12}
    //   >
    //     <Violation matches={matches} />
    //   </Grid>
    // ) : nav === 2 ? (
    //   <>
    //     <Grid
    //       item
    //       md={matches && id ? 7.5 : matches && !id ? 10.5 : 12}
    //       lg={matches && id ? 7.5 : !matches ? 12 : 10.5}
    //       sm={matches && !id ? 10.5 : matches && id ? 7.5 : 12}
    //       xs={12}
    //     >
    //       <DeclinedWardens
    //         matches={matches}
    //         handleIdChange={handleIdChange}
    //       />
    //     </Grid>
    //     {matches && id ? (
    //       <Grid item xs={3}>
    //         <WardenProfile
    //           handleIdChange={handleIdChange}
    //           matches={matches}
    //         />
    //       </Grid>
    //     ) : null}
    //   </>
    // ) : nav === 3 ? (
    //   <Grid
    //     item
    //     md={matches ? 10.5 : 12}
    //     lg={matches ? 10.5 : 12}
    //     sm={matches ? 10.5 : 12}
    //     xs={12}
    //   >
    //     <SuperAdminSignUp />
    //   </Grid>
    // ) : null}
    // </Grid>
  );
};

export default Dashboard;
