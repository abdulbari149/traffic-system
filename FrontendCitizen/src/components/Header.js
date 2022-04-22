import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const Header = () => {
	return (
		<View style={styles.headerContainer}>
			<Text style={{ fontSize: 20, fontWeight: 'bold' }}>Logo</Text>
			<View style={styles.profile}>
				<Image source={require("../assets/images/citizen's-profile.png")} style={styles.avatar} alt="avatar" />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	headerContainer: {
		paddingHorizontal: 15,
		paddingVertical: 12,
		width: "100%",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	pageNavigationText: {
		fontSize: 26,
		fontWeight: "bold",
		color: "#000",
	},
	avatar: {
		borderRadius: 5,
		width: 50,
		height: 50,
		shadowColor: '#000040',
	}
});

export default Header;