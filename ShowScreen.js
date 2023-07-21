import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import ListContext from "../context/ListContext";

const ShowScreen = ({ navigation }) => {
	const id = navigation.getParam("id");

	const todoItems = useContext(ListContext);
	let index = null;
	for (let i = 0; i < todoItems.data.length; i += 1) {
		if (todoItems.data[i].id == id) {
			index = i;
		}
	}
	return (
		<View>
			<Text style={styles.id}>{id}</Text>
			<Text style={styles.title}>{todoItems.data[index].title}</Text>
			<Text style={styles.description}>{todoItems.data[index].content}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	id: {
		alignSelf: "center",
	},
	title: {
		alignSelf: "center",
		fontWeight: "bold",
		fontSize: 25,
		textDecorationLine: "underline",
	},
	description: {
		alignSelf: "center",
		fontSize: 18,
		color: "darkgreen",
	},
});

export default ShowScreen;
