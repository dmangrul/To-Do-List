import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import ListContext from "../context/ListContext";


	const todoItems = useContext(ListContext);

	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	return (
		<View>
			<Text style={styles.text}>Enter Item Title:</Text>
			<TextInput
				style={styles.input}
				value={title}
				onChangeText={(text) => setTitle(text)}
			></TextInput>
			<Text></Text>
			<Text style={styles.text}>Enter Item Description:</Text>
			<TextInput
				style={styles.input}
				value={content}
				onChangeText={(text) => setContent(text)}
			></TextInput>
			<Text></Text>
			<Button
				title='Save Item'
				onPress={() => {
					todoItems.addListItem(title, content);
					navigation.navigate("Index");
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		borderWidth: 1,
		height: 30,
		marginHorizontal: 10,
		textAlign: "center",
	},
	text: {
		fontSize: 20,
		alignSelf: "center",
	},
});

export default CreateScreen;
