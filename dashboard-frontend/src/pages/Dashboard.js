import React, { useState, useCallback } from "react";

import { Grid, useMediaQuery, CircularProgress } from "@mui/material";
import Sidebar from "../components/Sidebar";
import WardenApprovals from "./WardenApproval";
import WardenProfile from "./WardenProfile";
import WardenDecline from "./WardenDecline";
import Voilation from "./Voilation";

import AppBar from "../components/AppBar";
import { useParams, Outlet } from "react-router-dom";
import json2mq from "json2mq";
import Register from "./Register";

const Dashboard = () => {
  const [nav, setNav] = useState(0);
  const [sideBarOpen, setSideBarOpen] = useState(false);
  return (
    // 1.5 + 7.5 +
    <Grid container spacing={0} style={{ backgroundColor: "#0f0f0f" }}>
      <AppBar open={sideBarOpen} setOpen={setSideBarOpen} />
      <Sidebar
        nav={nav}
        setNav={setNav}
        open={sideBarOpen}
        setOpen={setSideBarOpen}
      />
      {!sideBarOpen && <Outlet />}
    </Grid>
  );
};
// : nav === 0 ? (
//   <>
//     <Grid
//       item
//       md={matches && id ? 7.5 : matches && !id ? 10.5 : 12}
//       lg={matches && id ? 7.5 : !matches ? 12 : 10.5}
//       sm={matches && !id ? 10.5 : matches && id ? 7.5 : 12}
//       xs={12}
//     >
//       <WardenApprovals
//         matches={matches}
//         handleIdChange={handleIdChange}
//       />
//     </Grid>
//     {matches && id ? (
//       <Grid item xs={3}>
//         <WardenProfile
//           id={id}
//           handleIdChange={handleIdChange}
//           matches={matches}
//         />
//       </Grid>
//     ) : null}
//   </>
// ) : nav === 1 ? (
//   <Grid item sm={matches ? 10.5 : 12} xs={12}>
//     <Voilation matches={matches} />
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
//       <WardenDecline matches={matches} handleIdChange={handleIdChange} />
//     </Grid>
//     {matches && id ? (
//       <Grid item xs={3}>
//         <WardenProfile
//           id={id}
//           handleIdChange={handleIdChange}
//           matches={matches}
//         />
//       </Grid>
//     ) : null}
//   </>
// ) : nav === 3 ? (
//   <Grid item sm={matches ? 10.5 : 12} xs={12}>
//     <Register />
//   </Grid>
// ) : null}
export default Dashboard;
