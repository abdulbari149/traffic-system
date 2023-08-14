import React from "react"
import { Box, CircularProgress } from "@mui/material"
const Loading = () => {
  return <Box sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
    <CircularProgress size={100} thickness={4.5} />
  </Box>
}
export default Loading