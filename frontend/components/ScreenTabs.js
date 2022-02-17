import * as React from "react";
import {
	Dimensions,
	StatusBar,
	Animated,
	Pressable,
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { Box } from "native-base";

const initialLayout = {
	width: Dimensions.get("window").width,
};

const ScreenTabs = ({ tabs, screens }) => {
	const renderScene = SceneMap({
		tab1: screens[0],
		tab2: screens[1],
	});

	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{
			key: "tab1",
			title: tabs[0],
		},
		{
			key: "tab2",
			title: tabs[1],
		},
	]);

	const renderTabBar = (props) => {
		const inputRange = props.navigationState.routes.map((x, i) => i);
		return (
			<Box flexDirection="row">
				{props.navigationState.routes.map((route, i) => {
					const opacity = props.position.interpolate({
						inputRange,
						outputRange: inputRange.map((inputIndex) =>
							inputIndex === i ? 1 : 0.5
						),
					});
					const color = index === i ? "#000" : "#1f2937";
					const borderColor = index === i ? "cyan.500" : "coolGray.200";
					return (
						<Box
							borderBottomWidth="3"
							backgroundColor={index === i ? "#0038ff" : "#fff"}
							flex={1}
							alignItems="center"
							p="3"
							cursor="pointer"
						>
							<Pressable
								onPress={() => {
									console.log(i);
									setIndex(i);
								}}
							>
								<Animated.Text
									style={{
										color,
									}}
								>
									{route.title}
								</Animated.Text>
							</Pressable>
						</Box>
					);
				})}
			</Box>
		);
	};

	return (
		<TabView
			navigationState={{
				index,
				routes,
			}}
			renderScene={renderScene}
			renderTabBar={renderTabBar}
			onIndexChange={setIndex}
			initialLayout={initialLayout}
			style={{
				marginTop: StatusBar.currentHeight,
				width: "400px",
			}}
		/>
	);
}

export default ScreenTabs;
