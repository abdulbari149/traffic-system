import { View, Text } from "native-base";
import React from "react";
import Field from "../../../components/Field";
import { Formik } from "formik";

const SearchBar = ({ onSearch }) => {
  return (
    <View style={{ padding: 15, paddingTop: 0 }}>
      <Formik initialValues={{ query: "" }} onSubmit={onSearch}>
        {({ values, errors, handleChange, handleBlur }) => {
          return (
            <Field
              name="query"
              value={values.query}
              onChange={(v) => {
                handleChange("query")(v);
                onSearch(v);
              }}
              onBlur={handleBlur("query")}
              type="search"
              placeholder="Search using the Vehicle Number"
              isLabel={false}
              error={errors.query}
            />
          );
        }}
      </Formik>
    </View>
  );
};
export default SearchBar;
