import {
  FormControl,
  FormHelperText,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography
} from "@mui/material";
import { ArrowDropDownTwoTone, ArrowDropUp } from "@mui/icons-material";
import React, { useState, useRef } from "react";
import { useField } from "formik";
import styles from "../../styles/Auth.module.css";

const SelectIcon = ({ open, onClick }) => {
  return (
    <IconButton sx={{ color: "white" }} onClick={onClick}>
      {open ? <ArrowDropUp /> : <ArrowDropDownTwoTone />}
    </IconButton>
  );
};

function CustomSelect({ onChange, onBlur, label, items, ...props }) {
  const [open, setOpen] = useState(false);
  const [field, meta, helpers] = useField(props);
  const buttonIconRef = useRef(null);

  const onClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <FormControl
      variant="outlined"
      sx={{ m: 1, minWidth: 150, color: "white" }}
    >
      <Typography variant="h5" className={styles.label}>
        {label}
      </Typography>
      <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        value={field.value}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete="off"
        defaultValue={items[0].value}
        name={field.name}
        IconComponent={() => (
          <SelectIcon open={open} onClick={onClick} />
        )}
        open={open}
        onOpen={() => setOpen(true)}
				onClose={() => setOpen(false)}
        sx={{
          border: "1px solid #686767",
          color: "white",
          width: 150
        }}
				MenuProps={{
					sx: { "& > *" : {width: 150, ml: "20px"} }
				}}
      >
        {items.map((item) => (
          <MenuItem key={item.id} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      {!!meta.error && meta.touched && (
        <FormHelperText sx={{ color: "#c32012", fontSize: "12px" }}>
          {meta?.error}
        </FormHelperText>
      )}
    </FormControl>
  );
}

export default CustomSelect;
