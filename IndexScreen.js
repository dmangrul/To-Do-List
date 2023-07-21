import React, { useContext } from "react";
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	Button,
	TouchableOpacity,
} from "react-native";
import ListContext from "../context/ListContext";
import { Ionicons } from "@expo/vector-icons";
import ShowScreen from "./ShowScreen";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
	const todoItems = useContext(ListContext);
	//todoItems.addListItem();
	//todoItems.data;
	if (todoItems.data.length == 0) {
		return (
			<View style={styles.emptyStyle}>
				<View style={{ alignItems: "flex-end" }}>
					<Text style={styles.empty}>nothing on your to-do list!</Text>
					<Text style={styles.empty}>click on me to add something</Text>
				</View>
				<AntDesign name='arrowup' size={38} color='black' />
			</View>
		);
	}
	return (
		<View>
			<FlatList
				data={todoItems.data}
				keyExtractor={(todoItem) => todoItem.id}
				renderItem={({ item }) => {
					console.log(item);
					//console.log(item.id);
					return (
						<View style={styles.listItem}>
							<TouchableOpacity
								onPress={() =>
									navigation.navigate("ShowScreen", { id: item.id })
								}
								style={styles.button}
							>
								<Text style={styles.text}>{item.title}</Text>
								<TouchableOpacity
									onPress={() => todoItems.deleteListItem(item.id)}
								>
									<Ionicons name='trash-outline' size={30} color='black' />
								</TouchableOpacity>
							</TouchableOpacity>
						</View>
					);
				}}
			/>
		</View>
	);
};

IndexScreen.navigationOptions = ({ navigation }) => {
	return {
		headerRight: () => (
			<TouchableOpacity onPress={() => navigation.navigate("CreateScreen")}>
				<Feather name='plus' size={30} />
			</TouchableOpacity>
		),
	};
};

const styles = StyleSheet.create({
	listItem: {
		flexDirection: "row",
		justifyContent: "space-between",
		borderBottomWidth: 1,
		alignItems: "center",
		padding: 20,
	},
	text: {
		fontSize: 18,
	},
	button: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	emptyStyle: {
		flexDirection: "row",
		justifyContent: "flex-end",
	},
	empty: {
		fontSize: 15,
	},
});

export default IndexScreen;
