import ReactDOM from "react-dom";

const Modal = ({ isOpen, children }) => {

    return ReactDOM.createPortal(
        <dialog className={`fixed inset-0 m-auto size-full grid place-items-center bg-black bg-opacity-80 z-20 transition-opacity backdrop-blur-sm ${!isOpen && "opacity-0"}`}>
            {children}
        </dialog>,
        document.getElementById('modal-root')
    )
}


export default Modal