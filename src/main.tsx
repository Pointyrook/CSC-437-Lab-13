import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'

export type TaskData = {
    id: string;
    name: string;
    completed: boolean;
}

const DATA: TaskData[] = [
    {id: "todo-0", name: "Eat", completed: true},
    {id: "todo-1", name: "Sleep", completed: true},
    {id: "todo-2", name: "Repeat", completed: true}
]

const rootElem = document.getElementById('root');

if (rootElem !== null) {
    createRoot(rootElem).render(
        <StrictMode>
            <App tasks={DATA}/>
        </StrictMode>,
    )
}


