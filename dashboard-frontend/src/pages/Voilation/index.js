import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Grid } from "@mui/material";
import styles from "../../styles/Dashboard.module.css";
import { useGetVoilationsQuery } from "../../api";
import {
  closeVoilationModal,
  setVoilationId,
  setVoilations
} from "../../reducers/voilation";
import { Header, Modal, Table, TableFooter } from "../../components";
import EditVoilationForm from "./EditVoilationForm";
import VoilationEntry from "./Entry";
import AddVoilationForm from "./AddVoilationForm";
import VoilationHeader from "./VoilationHeader";

const Voilation = ({ matches }) => {
  const { modal } = useSelector((state) => state?.voilation);
  const dispatch = useDispatch();

  const { data, error, isSuccess, isError, isLoading } =
    useGetVoilationsQuery();

  const handleClose = () => {
    dispatch(closeVoilationModal());
    dispatch(setVoilationId({ id: "" }));
  };

  useEffect(() => {
    if (isSuccess) {
      console.log("Response Voilations", data?.data);
      dispatch(setVoilations({ data: data?.data }));
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      console.log("Response Error", error);
    }
  }, [isError]);

  return (
    <Grid item lg={10.5} xs={12}>
      <Box className={styles.Box}>
        <Header title="Voilation" />
        <Table
          headerRow={["Name", "Type", "Price"]}
          data={data?.data}
          renderTableHeader={(items) => <VoilationHeader items={items} />}
          renderTableBody={(item, key) => (
            <VoilationEntry key={key} matches={matches} voilation={item} />
          )}
          loading={isLoading}
          perPage={5}
          renderTableFooter={(props) => <TableFooter {...props} />}
        />
        <Modal
          open={modal?.isOpen}
          handleClose={handleClose}
          title={modal.title}
        >
          {modal.name === "add-voilation" && (
            <AddVoilationForm onClose={handleClose} />
          )}
          {modal.name === "edit-voilation" && (
            <EditVoilationForm onClose={handleClose} />
          )}
        </Modal>
      </Box>
    </Grid>
  );
};

export default Voilation;

// const fabs = [
//   {
//     color: '#0729A2',
//     sx: {
//       position: 'absolute',
//       bottom: 16,
//       right: 16,
//     },
//     icon: <AddSharpIcon style={{ color: 'white', fontSize: 44 }} />,
//     label: 'Add',
//   },
// ]
