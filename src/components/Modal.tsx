import * as React from "react";

interface IModalProps {
    children: React.ReactNode;
    headerLabel: string;
    isOpen: boolean;
    onCloseRequested: () => void;
}

function Modal(props: IModalProps) {

    function handleClose() {
        props.onCloseRequested();
    }

    function handleOutsideClicks(e: React.MouseEvent<HTMLDivElement>) {
        if (e.target === document.getElementById("overlay")) {
            props.onCloseRequested();
        }
    }

    if (props.isOpen) {
        return (<div id={"overlay"} onClick={handleOutsideClicks} className={"h-screen w-screen top-0 left-0 fixed flex justify-center items-center bg-black/20"}>
            <div className={"w-max bg-white m-auto p-1 rounded-md"}>
                <header className={"flex justify-between m-4"}>
                    <p className={"font-bold"}>{props.headerLabel}</p>
                    <label className={"font-bold hover:text-red-500"}>
                        <button onClick={handleClose} aria-label={"Close"}></button>
                        X
                    </label>
                </header>
                <div className={"m-4"}>
                    {props.children}
                </div>
            </div>
        </div>);
    }
    else {
        return null;
    }
}

export default Modal;