import { HomeContext } from "@/Contexts/HomeContext";
import { useForm } from "@inertiajs/react";
import { useContext, useEffect, useState } from "react";
import Button from "../Button";
import Card from "../Card";
import Modal from "../Modal";

const DeleteModal = ({ slugToDelete, setSlugToDelete }) => {

    const { setShortenedLinks } = useContext(HomeContext);
    const [showModal, setShowModal] = useState(false);
    const { delete: destroy, processing } = useForm();

    const closeModal = () => {
        setShowModal(false)
        setTimeout(() => { setSlugToDelete("") }, 150)
    }

    const handleDelete = () => {

        destroy(route("shortener.destroy", slugToDelete), {
            preserveScroll: true,
            onSuccess: () => {
                setShortenedLinks(shortenedLinks => shortenedLinks.filter(link => link.slug !== slugToDelete));
                setShowModal(false);
                setTimeout(() => { setSlugToDelete("") }, 150)
            },
        })
    }

    useEffect(() => { setShowModal(true) }, [])

    return (
        <Modal isOpen={showModal}>
            <Card className="relative max-w-screen-sm w-[90%] mx-auto text-white">

                <p className="text-lg font-semibold">¿Estás seguro de querer eliminar el enlace "{slugToDelete}"?</p>

                <br /><br />

                <div className="flex gap-3">
                    <Button
                        disabled={processing}
                        type="button"
                        title="Cancelar"
                        onClick={closeModal}
                        className="py-2 px-5 ring ring-gray-700 hover:bg-gray-500 hover:ring-0 active:ring-gray-900"
                    >
                        Cancelar
                    </Button>

                    <Button
                        disabled={processing}
                        type="button"
                        title="Eliminar"
                        onClick={handleDelete}
                        className="py-2 px-5 bg-red-600 hover:bg-red-700 active:ring active:ring-red-900"
                    >
                        Eliminar
                    </Button>
                </div>
            </Card>
        </Modal>
    )
}

export default DeleteModal