export default function TodoList({ taskList }) {
    return (
        <>
            {taskList.map(task => (
                <div key={task._id}>
                    <h2>{task.title}</h2>
                    <p>{task.description}</p>
                </div>
            ))}
        </>
    )
}