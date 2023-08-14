import React from "react";
import styles from "../../styles/Dashboard.module.css";
import AddIcon from "@mui/icons-material/Add";
import { openVoilationModal } from "../../reducers/voilation";
import { TableCell, TableRow, Button } from "@mui/material";
import { useDispatch } from "react-redux";
const VoilationHeader = ({ items }) => {
  const dispatch = useDispatch();
  const onClick = () => {
    let payload = {
      modalTitle: "Add New Violation",
			modalName: "add-voilation"
    };

    dispatch(openVoilationModal(payload));
  };

  const tableHeadButtonSX = { display: { lg: "table-cell", xs: "none" } };

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      {items.map((item, key) => (
        <TableCell
          key={key}
          className={styles.tableHeading}
          align={key !== 0 ? "center" : "left"}
        >
          {item}
        </TableCell>
      ))}

      <TableCell
        className={styles.tableHeading}
        sx={tableHeadButtonSX}
        align="center"
      >
        <Button className={styles.violationButton} onClick={onClick}>
          <AddIcon className={styles.addIcon} size={20} /> Add new Violation
        </Button>
      </TableCell>
    </TableRow>
  );
};
export default VoilationHeader;
