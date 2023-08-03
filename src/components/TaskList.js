import React from "react";
import Task from "./Task"; // importing our Task

//passing on tasks, and onDeleteTask in our function as argument

function TaskList({ tasks, onDeleteTask }) {
	// mapping our task data
	const taskList = tasks.map((task) => (
		<Task
			key={task.index}
			text={task.text}
			category={task.category}
			onDeleteTask={onDeleteTask}
		/>
	));
	return <div className="tasks">{taskList}</div>;
}

export default TaskList;