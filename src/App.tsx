import type {TaskData} from "./main.tsx";
import Todo from "./components/Todo.js";
import AddTaskForm from "./components/AddTaskForm.js";
import Modal from "./components/Modal.js";
import {nanoid} from "nanoid"
import {useState} from "react"

interface IAppProps {
    tasks: TaskData[];
}

function App(props: IAppProps) {

    const [taskList, setTaskList] = useState(props.tasks);

    function toggleTaskCompleted(id: string) {
        const updatedTaskList = taskList.map((task) => {
            // if this task has the same ID as the edited task
            if (id === task.id) {
                // use object spread to make a new object
                // whose `completed` prop has been inverted
                return {...task, completed: !task.completed};
            }
            return task;
        });
        setTaskList(updatedTaskList);
    }

    function addTask(name: string) {
        const newTask = {id: `todo-${nanoid()}`, name: name, completed: false};
        setTaskList([...taskList, newTask]);
        closeModal();
    }

    function deleteTask(id: string) {
        const newTaskList = taskList.filter((task) => task.id !== id);
        setTaskList(newTaskList);
    }

    const INITIAL_TASK_LIST = taskList?.map((task) => (<Todo id={task.id}
                                                                name={task.name}
                                                                completed={task.completed}
                                                                key={task.id}
                                                                toggleTaskCompleted={toggleTaskCompleted}
                                                                deleteTask={deleteTask}/>));

    const [open, setOpen] = useState(false);

    function openModal() {
        setOpen(true);
    }

    function closeModal() {
        setOpen(false);
    }

    return (
        <main className="m-4"> {/* Tailwind: margin level 4 on all sides */}
            <Modal headerLabel={"New Task"} isOpen={open} onCloseRequested={closeModal}>
                <AddTaskForm onNewTask={addTask}/>
            </Modal>
            <section>
                <button onClick={openModal} className={"text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 p-1 mt-2 mb-2 rounded"}>New Task</button>
                <h1 className="text-xl font-bold">To do</h1>
                <ul>
                    {INITIAL_TASK_LIST}
                </ul>
            </section>
        </main>
    );
}

export default App;