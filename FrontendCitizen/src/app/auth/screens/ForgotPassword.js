import React from "react";

import { Image, Text, Box, ScrollView } from "native-base";

import Form from "../../../components/Form";

import styles from "../../../styles/Auth.styles";

import { VERIFICATION_SCREEN } from "../../../routes";
import * as yup from "yup";
import { useForgetPasswordMutation } from "../../../api";
import { Alert } from "react-native";
const validationSchema = yup.object({
	email: yup
		.string()
		.email("Invalid email formmat")
		.required("This is a required field"),
});
const ForgotPassword = ({ navigation }) => {
	const formData = {
		names: ["Email"],
		placeholders: ["Enter your Email Address"],
		types: ["text"],
	};

	const [forgotpassword] = useForgetPasswordMutation();
	const handleSubmit = async (value) => {
		try {
			const { data, error } = await forgotpassword({ email: value.email });
			console.log({ data, error })
			if (data) {
				navigation.navigate(VERIFICATION_SCREEN, {
					next: CREATE_PASSWORD_SCREEN,
					phone_number: data.data.phone_number,
				});
			} else if (error) {
				throw new Error(error?.message);
			}
		} catch (error) {
			Alert.alert(error.message);
		}
	};
	return (
		<ScrollView style={{ ...styles.scrollView, flex: 1 }}>
			<Box w="100%" style={styles.forgotPasswordUpperCard}>
				<Image
					style={styles.forgotPasswordImage}
					alt="hooman"
					size={170}
					source={require("../../../assets/images/human.png")}
				/>
				<Text style={styles.forgotPasswordHeading}>Forgot Password?</Text>
				<Text style={styles.forgotPasswordSubTitle}>
					Please enter your email address to recieve the verification code.
				</Text>
			</Box>
			<Form
				data={formData}
				_btn={{
					title: "Send",
					style: {
						width: 150,
						marginTop: 30,
						marginBottom: 20,
					},
				}}
				validationSchema={validationSchema}
				handleSubmit={handleSubmit}
			/>
		</ScrollView>
	);
};

export default ForgotPassword;
