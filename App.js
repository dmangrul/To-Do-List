import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import IndexScreen from "./src/screens/IndexScreen";
import { ListProvider } from "./src/context/ListContext";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";

const navigator = createStackNavigator(
	{
		Index: IndexScreen,
		ShowScreen: ShowScreen,
		CreateScreen: CreateScreen,
	},
	{
		initialRouteName: "Index",
		defaultNavigationOptions: {
			title: "To-Do List",
		},
	}
);

const App = createAppContainer(navigator);

export default () => {
	return (
		<ListProvider>
			<App />
		</ListProvider>
	);
};
