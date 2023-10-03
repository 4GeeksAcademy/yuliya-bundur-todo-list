import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";


function MyList() {
	const [task, setTask] = useState([]);
	const [newTask, setNewTask] = useState('');

	useEffect(() => {
		// Lógica para cargar las tareas desde la API al montar el componente
		fetch('https://playground.4geeks.com/apis/fake/todos/user/alesanchezr')
			.then(response => response.json())
			.then(data => {
				setTasks(data);
			})
			.catch(error => {
				console.error('Error fetching data:', error);
			});
	}, []);

	const addTask = (e) => {
		e.preventDefault();
		if (newTask !== '') {
			const updatedTasks = [...task, newTask];
			setTask(updatedTasks);
			setNewTask('');

			// Lógica para agregar la nueva tarea a la API
			fetch('https://playground.4geeks.com/apis/fake/todos/user/alesanchezr', {
				method: 'PUT',
				body: JSON.stringify(updatedTasks),
				headers: {
					'Content-Type': 'application/json',
				},
			})
				.then(response => response.json())
				.then(data => {
					console.log('Task added successfully:', data);
				})
				.catch(error => {
					console.error('Error adding task:', error);
				});
		}
	};



	const deleteTask = (index) => {
		const updatedTasks = task.filter((_, i) => i !== index);
        setTask(updatedTasks);

		// Lógica para eliminar la tarea de la API
		fetch('https://playground.4geeks.com/apis/fake/todos/user/alesanchezr', {
			method: 'PUT',
			body: JSON.stringify(updatedTasks),
			headers: {
			  'Content-Type': 'application/json',
			},
		  })
			.then(response => response.json())
			.then(data => {
			  console.log('Task deleted successfully:', data);
			})
			.catch(error => {
			  console.error('Error deleting task:', error);
			});
	};


	const clearTasks = () => {
		const updatedTasks = [];
		setTask(updatedTasks);
	
		// Lógica para limpiar todas las tareas en la API
		fetch('https://playground.4geeks.com/apis/fake/todos/user/alesanchezr', {
		  method: 'PUT',
		  body: JSON.stringify(updatedTasks),
		  headers: {
			'Content-Type': 'application/json',
		  },
		})
		  .then(response => response.json())
		  .then(data => {
			console.log('Tasks cleared successfully:', data);
		  })
		  .catch(error => {
			console.error('Error clearing tasks:', error);
		  });
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

						<button className="delete-button" onClick={() => clearTasks(index)}>
						<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
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


