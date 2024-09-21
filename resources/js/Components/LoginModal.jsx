import GithubIcon from "@/Icons/GitHubIcon"
import GoogleIcon from "@/Icons/GoogleIcon"
import { useEffect, useState } from "react"
import Card from "./Card"
import CloseButton from "./CloseButton"
import Modal from "./Modal"

const loginOptions = [
    {
        name: "Google",
        icon: GoogleIcon,
        routeName: "auth.google"
    },
    {
        name: "GitHub",
        icon: GithubIcon,
        routeName: "auth.github"
    }
];

const LoginModal = ({ setShowLogin }) => {

    const [showModal, setShowModal] = useState(false);

    const closeModal = () => {
        setShowModal(false)
        setTimeout(() => { setShowLogin(false) }, 150)
    }

    useEffect(() => { setShowModal(true) }, [])

    return (
        <Modal isOpen={showModal}>
            <Card className="relative max-w-[20rem] w-[90%] mx-auto text-white">

                <header className="flex justify-between items-center">
                    <h2 className="text-xl font-bold">Iniciar Sesión</h2>
                    <CloseButton title="Cerrar" onClick={closeModal} className="hover:bg-gray-500" />
                </header>

                <br /><br />

                <ul className="grid gap-3">
                    {loginOptions.map(({ name, icon: Icon, routeName }) => (
                        <li key={name}>
                            <a
                                href={route(routeName)}
                                className="flex items-center gap-2 p-3 rounded-lg bg-gray-700 hover:bg-gray-500 active:ring-4 active:ring-gray-600/50">
                                <Icon className="size-4" /> {name}
                            </a>
                        </li>
                    ))}
                </ul>

            </Card>
        </Modal>
    )
}

export default LoginModal