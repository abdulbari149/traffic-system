import React, { useState, useCallback } from "react";
import {
	FormControl,
	Stack,
	Input,
	WarningOutlineIcon,
	Text,
} from "native-base";
import { useField } from "formik";
import { StyleSheet, TextInput, Pressable, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FeatherIcon from "react-native-vector-icons/Feather";

import { useTogglePasswordVisibility } from "../hooks/useTogglePasswordVisibility";
const Field = ({ isReadOnly, label, isLabel = true, ...props }) => {
	const [{ name, value }, meta, helpers] = useField(props);
	const [visible, setVisible] = useState(false);
	const [isPressed, setIsPressed] = useState(false);

	const { passwordVisibility, rightIcon, handlePasswordVisibility } =
		useTogglePasswordVisibility();
	const changeIsPressed = useCallback(
		() => setIsPressed((press) => !press),
		[isPressed]
	);
	const { placeholder, type } = props;
	const passwordInput = props.type === "password" && {
		secureTextEntry: passwordVisibility,
	};

	return (
		<FormControl>
			<Stack my="3">
				{isLabel && (
					<FormControl.Label style={styles.inputLabel}>
						<Text style={styles.inputLabelText} color="#000">
							{label}
						</Text>
					</FormControl.Label>
				)}
				{props.type === "search" && (
					<FeatherIcon
						name="search"
						size={20}
						color="#9c9c9c"
						style={{ marginLeft: 17 }}
					/>
				)}
				<View
					style={[
						styles.inputField,
					]}
				>
					<TextInput
						name={name}
						value={value}
						onChangeText={props.onChange}
						onBlur={props.onBlur}
						{...passwordInput}
						style={{ flex: 1 }}
						placeholder={placeholder ?? ""}
						type={type !== "password" ? type : visible ? "text" : "password"}
						editable={true}
						placeholderTextColor="#4444"
					/>
					{type === "password" && (
						<Pressable onPress={handlePasswordVisibility}>
							<MaterialCommunityIcons
								name={rightIcon}
								size={22}
								color="#232323"
							/>
						</Pressable>
					)}
				</View>

				{!!meta.error ? (
					<Text pl="2" pt="1" color="#ff101a" fontSize="10">
						{meta?.error}
					</Text>
				) : (
					<></>
				)}
			</Stack>
		</FormControl>
	);
};

const styles = StyleSheet.create({
	inputField: {
		borderRadius: 4,
		paddingHorizontal: 16,
		backgroundColor: "#F2F5F2",
		fontSize: 14,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	inputLabel: {
		marginBottom: 5,
	},
	inputLabelText: {
		fontSize: 16,
		paddingLeft: 10,
		textTransform: "capitalize",
	},
	inputText: {
		borderWidth: 0,
		color: "#000",
		backgroundColor: "#f2f5ff",
	},
	readOnlyInput: {
		backgroundColor: "#2f2",
		letterSpacing: 0.5,
	},
});

export default React.memo(Field);

// import React, { useState } from "react";

// import { FormControl, Stack, Input, Text } from "native-base";
// import Icon from "react-native-vector-icons/Feather";

// import styles from "../styles/Auth.styles";

// import { useField } from "formik";

// const Field = ({ label, isLabel = true, ...props }) => {
//   const [form, meta, field] = useField(props);
//   const [visible, setVisible] = useState(false);

//   const passwordInput =
//     props.type === "password"
//       ? {
//           InputRightElement: (
//             <Icon
//               name={visible ? "eye-off" : "eye"}
//               color="black"
//               onPress={() => setVisible(!visible)}
//               size={20}
//               style={{ marginRight: 10 }}
//             />
//           ),
//         }
//       : {};
//

//   console.log(props.type);
// console.log({error: meta.error })
//   return (
//     <FormControl isRequired={isLabel} isInvalid={meta.touched && meta.error}>
//       <Stack my="3">
//
//         <Input
//           {...field}
//           placeholder={props?.placeholder ?? ""}
//           type={
//             props.type !== "password"
//               ? props.type
//               : visible
//               ? "text"
//               : "password"
//           }

//           {...passwordInput}
//           {...searchInput}
//           {...props.style}
//         />
//         {!!meta.error ? (
//           <Text pl="2" pt="1" color="#ff101a" fontSize="10">{meta?.error}</Text>
//         ) : (
//           <></>
//         )}
//       </Stack>
//     </FormControl>
//   );
// };

// export default Field;
