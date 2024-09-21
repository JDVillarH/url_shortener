import { HomeContext } from "@/Contexts/HomeContext";
import { useContext, useEffect, useState } from "react";
import Button from "./Button";
import Card from "./Card";
import GradientButton from "./GradientButton";
import Input from "./Input";
import LabelInput from "./LabelInput";
import Modal from "./Modal";

const CopyShortenedLink = () => {

    const { shortenedLink, setShortenedLink, showCopyModal, setShowCopyModal } = useContext(HomeContext);
    const [urlCopied, setUrlCopied] = useState(false);

    const closeModal = () => {
        setShowCopyModal(false);
        setTimeout(() => { setShortenedLink("") }, 150);
    }

    const copyTextToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(shortenedLink);
            setUrlCopied(true);
        } catch (error) {
            console.error(`No se pudo copiar el texto al portapapeles: ${error}`);
        }
    }

    useEffect(() => {
        const setTimeOut = setTimeout(() => setShowCopyModal(true), 150);
        return () => clearTimeout(setTimeOut);
    }, [])

    useEffect(() => {
        if (urlCopied) {
            const setTimeOut = setTimeout(() => setUrlCopied(!urlCopied), 1000);
            return () => clearTimeout(setTimeOut);
        }
    }, [urlCopied]);

    return (
        <Modal isOpen={showCopyModal}>
            <Card className="max-w-[44rem] w-[90%] mx-auto text-white">
                <LabelInput className="mb-10">
                    URL Acortada
                    <Input value={shortenedLink} readOnly />
                </LabelInput>
                <div className="flex gap-3">
                    <Button
                        type="button"
                        title="Cerrar"
                        onClick={closeModal}
                        className="py-2 px-5 bg-gray-700 active:ring-gray-800 hover:bg-gray-500"
                    >
                        Cerrar
                    </Button>
                    {navigator.clipboard && (
                        <GradientButton type="button" onClick={copyTextToClipboard} disabled={urlCopied}>
                            {urlCopied ? "Copiado" : "Copiar"}
                        </GradientButton>
                    )}
                </div>
            </Card>
        </Modal>
    )
}

export default CopyShortenedLink
