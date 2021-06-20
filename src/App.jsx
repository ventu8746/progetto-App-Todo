import React, { useState } from "react";
import "./App.css";

/**
 *
 * @param {Array<{text: string, completed: boolean}>} arr
 * @param {string} string
 * @returns {Array<{text: string, completed: boolean}>}s
 */
function addItem(arr, string) {
	if (string === "") {
		return arr;
	}
	return arr.concat([
		{
			todo: string,
			completed: false,
		},
	]);
}

/**
 *
 * @param {Array<{text: string, completed: boolean}>} arr
 * @param {number} index
 * @returns {Array<{text: string, completed: boolean}>
 */
function deleteTodo(arr, index) {
	if (index > arr.length || index < 0) {
		throw new Error("the index that you have insert is inexistent");
	}

	if (index === "" || index === undefined) {
		return arr;
	} else {
		return arr.filter((elem) => {
			return elem !== arr[index];
		});
	}
}

function toggleTodo(arr, index) {
	if (index > arr.length || index < 0) {
		throw new Error("the index that you have insert is inexistent");
	}

	if (index === "" || index === undefined) {
		return arr;
	} else {
		return arr.map((elem) => {
			if (elem !== arr[index]) {
				return elem;
			} else {
				elem.completed = !elem.completed;
				return elem;
			}
		});
	}
}

function App() {
	const [todos, setTodos] = useState([]);
	const [inputText, setInput] = useState("");

	return (
		<div className="App">
			<header className="App-header">
				<h1>App Todo By Marco Venturini</h1>
				<p>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							setTodos(addItem(todos, inputText));
						}}
					>
						<input
							id="inputTodo"
							onInput={(evt) => setInput(evt.target.value)}
							type="text"
						/>
						<button type="submit">Submit</button>
					</form>
				</p>
				{todos.map((todo, index) => (
					<li className={todo.completed ? "completed" : ""}>
						{todo.todo}{" "}
						<button
							type="button"
							onClick={() => setTodos(deleteTodo(todos, index))}
						>
							Rimuovi
						</button>{" "}
						<button
							type="button"
							onClick={() => setTodos(toggleTodo(todos, index))}
						>
							Completa
						</button>
					</li>
				))}
			</header>
		</div>
	);
}

export default App;
