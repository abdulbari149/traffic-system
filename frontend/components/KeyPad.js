import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	View,
	FlatList,
	Text,
	TouchableOpacity,
	Image,
} from "react-native";

const arrayOfNumbers = [
	{ key: 1 },
	{ key: 2 },
	{
		key: 3,
	},
	{ key: 4 },
	{ key: 5 },
	{ key: 6 },
	{ key: 7 },
	{ key: 8 },
	{ key: 9 },
	{ key: 10 },
	{ key: 0 },
	{ key: 12 },
];

const KeyPad =  ({
	onEnteredPincode,
	withTouchId = true,
	spaceColor,
	descriptionText,
}) => {
	const [empties, setEmpties] = useState([
		{ key: 1, value: " " },
		{ key: 2, value: " " },
		{ key: 3, value: " " },
		{ key: 4, value: " " },
	]);
	const [counter, setCounter] = useState(0);
	const [code, setCode] = useState("");
	const [digitDisabled, setDigitDisabled] = useState(false);
	const [clearDisabled, setClearDisabled] = useState(false);
	const [allowClear, setAllowClear] = useState(false);

	useEffect(() => {
		if (code.length === 4) {
			onEnteredPincode(code);
			setClearDisabled(false);
		}
	}, [code, counter]);

	const updateEmptyValues = (value, index) => {
		setEmpties((emp) =>
			emp.map((e, idx) => (idx === index ? { ...e, value } : e))
		);
	};

	const onEnterDigit = (num) => {
		if (counter < 4) {
			setCounter(counter + 1);
			updateEmptyValues(num, counter);
			setClearDisabled(false);
			setCode((code) => code + num.toString());
		}
		console.log({ num, empties, counter });
	};

	const onRemoveDigit = () => {
		if (counter - 1 >= 0) {
			setCounter(counter - 1);
			updateEmptyValues(" ", counter - 1);
			setDigitDisabled(false);
		} else {
			setAllowClear(true);
		}
	};

	const renderItemCell = ({ item, index }) => {
		if (index === 9) {
			return <View style={[styles.round]} />;
		} else if (index === 11) {
			return (
				<TouchableOpacity
					style={[styles.round, styles.centerAlignment]}
					onPress={onRemoveDigit}
					disabled={clearDisabled}
				>
					<Image
						source={require("../cdn/delete.png")}
						style={styles.deleteIcon}
					/>
				</TouchableOpacity>
			);
		} else {
			return (
				<TouchableOpacity
					style={[styles.round, styles.centerAlignment]}
					onPress={() => onEnterDigit(item.key)}
					disabled={digitDisabled}
				>
					<Text style={styles.digit}>{item.key}</Text>
				</TouchableOpacity>
			);
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.enterView}>
				{empties.map((item) => (
					<View key={item.key} style={styles.digitView}>
						<Text style={styles.digit}>{item.value}</Text>
						<View
							style={[
								styles.redSpace,
								{ backgroundColor: "rgba(0, 56, 255, 0.15)" },
							]}
						/>
					</View>
				))}
			</View>
			<View style={[styles.textView, styles.centerAlignment]}>
				<Text> Didn't Receive Code? </Text>
				<Text> Resend </Text>
			</View>
			<View style={styles.flatcontainer}>
				<FlatList
					style={styles.flatlist}
					data={arrayOfNumbers}
					renderItem={renderItemCell}
					numColumns={3}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	centerAlignment: {
		justifyContent: "center",
		alignItems: "center",
	},
	enterView: {
		alignSelf: "center",
		marginBottom: 15,
		flexDirection: "row",
		flex: 2,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	flatcontainer: {
		flex: 6,
	},
	flatlist: {
		alignSelf: "center",
	},
	icon: {
		height: 24,
		width: 24,
	},
	round: {
		width: 60,
		height: 60,
		backgroundColor: "#B0C0F9",
		borderRadius: 30,
		margin: 10,
	},
	instruction: {
		marginHorizontal: 30,
		textAlign: "center",
		color: "gray",
		fontSize: 14,
	},
	close: {
		marginTop: 30,
		marginLeft: 15,
	},
	digit: {
		fontSize: 24,
	},
	digitView: {
		flexDirection: "column",
		alignItems: "center",
	},
	redSpace: {
		height: 2,
		width: 40,
		marginHorizontal: 5,
	},
	textView: {
		marginBottom: 10,
	},
	deleteIcon: {
		height: 20,
		width: 20,
	},
});

export default KeyPad
