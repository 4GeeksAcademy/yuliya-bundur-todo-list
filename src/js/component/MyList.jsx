import React, { useState } from "react";
import ReactDOM from "react-dom";


function MyList() {
	const [task, setTask] = useState([]);
	const [newTask, setNewTask] = useState('');

	const addTask = (e) => {
		e.preventDefault();
		if (newTask !== '') {
			setTask([...task, newTask]);
			setNewTask('');
		}
	};

	const deleteTask = (index) => {
		const updatedTasks = [...task];
		updatedTasks.splice(index, 1);
		setTask(updatedTasks);
	};

	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			addTask(e);
		}
	};

	const taskCount = task.length;

	return (
		<div className="todo-list-container" style={{ textAlign: "center" }}>
			<h1 className="todo-list-title">ToDo List</h1>

			<form onSubmit={addTask}>
				<input className="task-input"
					type="text"
					value={newTask}
					onChange={e => setNewTask(e.target.value)}
					onKeyPress={handleKeyPress}
					placeholder='What has to be done?'
				/>
			</form>


			<p className="task-list">
				{task.map((task, index) => (
					<p className="task-item" key={index}>

						<span>{task}</span>

						<button className="delete-button" onClick={() => deleteTask(index)}>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
								<path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
							</svg>
						</button>
					</p>
				))}
			</p>
			<p>Total tasks:{taskCount}</p>
		</div>
	);
};

ReactDOM.render(<MyList />, document.querySelector("#app"));

export default MyList;


