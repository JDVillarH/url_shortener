import { HomeContext } from "@/Contexts/HomeContext";
import { useForm } from "@inertiajs/react";
import { Turnstile } from '@marsidev/react-turnstile';
import { useContext, useRef } from "react";
import Card from "./Card";
import GradientButton from "./GradientButton";
import Input from "./Input";
import InputError from "./InputError";
import LabelInput from "./LabelInput";
import ShortenedLinksList from "./ShortenedLinks/List";

const ShortenLinkForm = () => {

    const turnstileRef = useRef();
    const turnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;
    const { auth, setShortenedLink, setShortenedLinks, homeRoute } = useContext(HomeContext);
    const { data, setData, post, processing, errors, reset } = useForm({ url: "", slug: "", turnstileToken: "" });
    const isProcessing = processing || !data.turnstileToken;

    const handleChange = ({ target: { name, value } }) => {
        setData(name, value);
    };

    const handleTurnstileToken = token => {
        setData("turnstileToken", token);
    };

    const handleSubmit = e => {

        e.preventDefault();

        post(route("shortener.store"), {
            preserveScroll: true,
            onSuccess: ({ props: { shortenedLink } }) => {
                setShortenedLink(`${homeRoute}/${shortenedLink}`);
                setShortenedLinks(shortenedLinks => [...shortenedLinks, { slug: shortenedLink }]);
            },
            onFinish: () => {
                turnstileRef.current?.reset();
                reset();
            },
        })
    };

    return (
        <div className="py-8 md:py-16 text-white">
            {auth.user ? (
                <div className="grid-cols-auto-fit gap-5">
                    <Card className="h-fit overflow-hidden">
                        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
                            <div className="grid gap-6 xl:grid-cols-2">
                                <LabelInput>
                                    URL para Acortar
                                    <Input type="url" name="url" required placeholder="https://ejemplo.com" onChange={handleChange} value={data.url} disabled={isProcessing} />
                                    <InputError message={errors.url} />
                                </LabelInput>
                                <LabelInput>
                                    Identificador para URL
                                    <Input name="slug" maxLength={60} onChange={handleChange} value={data.slug} disabled={isProcessing} />
                                    <InputError message={errors.slug} />
                                </LabelInput>
                            </div>
                            <Turnstile ref={turnstileRef} siteKey={turnstileSiteKey} onSuccess={handleTurnstileToken} options={{ language: "es", size: "flexible" }} />
                            <GradientButton disabled={isProcessing}>Acortar</GradientButton>
                        </form>
                    </Card>

                    <Card>
                        <ShortenedLinksList />
                    </Card>
                </div>
            ) : (
                <Card className="max-w-screen-sm mx-auto overflow-hidden">
                    <form onSubmit={handleSubmit} className="flex flex-wrap gap-6">
                        <LabelInput className="w-full">
                            URL para Acortar
                            <Input type="url" name="url" required placeholder="https://ejemplo.com" onChange={handleChange} value={data.url} disabled={isProcessing} />
                            <InputError message={errors.url} />
                        </LabelInput>
                        <Turnstile ref={turnstileRef} siteKey={turnstileSiteKey} onSuccess={handleTurnstileToken} options={{ language: "es", size: "flexible" }} />
                        <GradientButton disabled={isProcessing}>Acortar</GradientButton>
                    </form>
                </Card>
            )}
        </div>
    )
}

export default ShortenLinkForm