import React from "react";

import { Formik } from "formik";

import Button from "./Button";
import Field from "./Field";

import { VStack, Box, Text } from "native-base";

import styles from "../styles/Auth.styles";

const getFieldValues = (data) => {
	let names = [];
	for (const key in data) {
		names = names.concat(data[key].names);
	}
	const values = names.reduce((obj, name) => ({ ...obj, [name]: "" }), {});
	return values;
};

const Form = ({
	data,
	handleSubmit,
	variety = "single",
	_btn,
	containerStyles = {},
	validationSchema = {},
}) => {
	const fieldInitialValues = getFieldValues(data);
	return (
		<Formik
			initialValues={fieldInitialValues}
			onSubmit={handleSubmit}
		>
			{({ handleChange, handleBlur, handleSubmit: formikSubmit, values, errors }) => (
				<VStack
					style={{ ...containerStyles, padding: 10 }}
					alignItems="center"
					width="100%"
				>
					{data.names.map((name, idx) => {
						return (
							<Field
								onChange={handleChange(name)}
								onBlur={handleBlur(name)}
								key={name}
								name={name}
								value={values[name]}
								placeholder={data.placeholders ? data?.placeholders[idx] : ""}
								label={name.replace(/_/g, " ")}
								type={data.types ? data?.types[idx] : "text"}
								error={errors[name]}
							/>
						);
					})}
					<Button {..._btn} onPress={() => formikSubmit()} />
				</VStack>
			)}
		</Formik>
	);
};

export default Form;
