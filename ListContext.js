import React, { useReducer } from "react";
import { useState } from "react";

//this is a "pipe" that will move data around our app
const ListContext = React.createContext();

const listReducer = (state, action) => {
	switch (action.type) {
		case "add_listItem":
			return [
				...state,
				{
					title: action.payload.title,
					id: Math.floor(Math.random() * 99999),
					content: action.payload.content,
				},
			];
		case "delete_listItem":
			const filteredItems = [];
			for (let i = 0; i < state.length; i += 1) {
				if (state[i].id != action.payload) {
					filteredItems.push(state[i]);
				}
			}
			return filteredItems;
		case "default":
			return state;
	}
};

//this sets up the provider
export const ListProvider = ({ children }) => {
	const [listItems, dispatch] = useReducer(listReducer, []);

	const addListItem = (title, content) => {
		dispatch({ type: "add_listItem", payload: { title, content } });
	};

	const deleteListItem = (id) => {
		dispatch({ type: "delete_listItem", payload: id });
	};

	return (
		<ListContext.Provider
			value={{
				data: listItems,
				addListItem: addListItem,
				deleteListItem: deleteListItem,
			}}
		>
			{children}
		</ListContext.Provider>
	);
};

export default ListContext;
