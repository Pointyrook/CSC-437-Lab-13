import {useState} from "react";
import * as React from "react";

interface IAddTaskFormProps {
    onNewTask: (name: string) => void;
}

function AddTaskForm(props: IAddTaskFormProps) {

    const [name, setName] = useState("");

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setName(e.target.value);
    }

    function handleClick() {
        if (name !== "") {
            props.onNewTask(name);
            const nameFieldElem = document.getElementById("task-name-field") as HTMLInputElement;
            if (nameFieldElem !== null) {nameFieldElem.value = "";}
            setName("");
        }
    }

    return <div> {/* Unfortunately comments in JSX have to be done like this */}
        <input id="task-name-field" onChange={handleChange} placeholder="New task name" className={"p-2 mr-2 border-1 rounded-md"}/>
        <button onClick={handleClick} className={"text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 p-1 rounded"}>Add task</button>
    </div>
}

export default AddTaskForm;