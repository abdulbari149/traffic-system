import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";

const StepItem = ({ step }) => {
	console.log({ step });
	return (
		<View style={styles.stepCircle}>
			<Text style={styles.stepText}>{step}</Text>
		</View>
	);
};

const Steps = () => {
	const data = ["1", "2", "3"];

	const renderSteps = ({ item }) => {
		return <StepItem step={item} />;
	};

	return (
		<View style={styles.container}>
			<FlatList
				horizontal
				data={data}
				renderItem={renderSteps}
				keyExtractor={(step) => step}
				ItemSeparatorComponent={({ highlighted }) => (
					<View style={[styles.separator, highlighted && { marginLeft: 0 }]} />
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		alignItems: "center",
		position: "relative",
	},
	stepCircle: {
		width: 50,
		height: 50,
		borderRadius: 1000,
		backgroundColor: "#0038ff",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	stepText: {
		color: "white",
		fontSize: 16,
	},
	separator: {
		width: 60,
		height: 3,
		backgroundColor: "#0038ff",
		marginVertical: 25,
	},
});

export default Steps;
