import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faTrashCan} />

interface ITodoProps {
    id: string;
    name: string;
    completed: boolean;
    key: string;
    toggleTaskCompleted: (id: string) => void;
    deleteTask: (id: string) => void;
}

function Todo(props: ITodoProps) {

    function handleToggleCompleted() {
        props.toggleTaskCompleted(props.id);
    }

    function handleDelete() {
        props.deleteTask(props.id);
    }

    return <li>
        <label>
            <input type="checkbox" onChange={handleToggleCompleted} id={props.id} defaultChecked={props.completed} className={"m-2 ml-0"}/>
            {props.name}
        </label>
        <button onClick={handleDelete} className={"text-gray-500 ml-7"}>{element}</button>
    </li>
}

export default Todo