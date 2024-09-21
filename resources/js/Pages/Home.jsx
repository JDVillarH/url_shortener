import CopyShortenedLink from "@/Components/CopyShortenedLink";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import ShortenLinkForm from "@/Components/ShortenLinkForm";
import { HomeContext } from "@/Contexts/HomeContext";
import { Head } from "@inertiajs/react";
import { useState } from "react";

const Home = ({ auth, slugs, homeRoute }) => {

    const [shortenedLink, setShortenedLink] = useState("");
    const [showCopyModal, setShowCopyModal] = useState(false);
    const [shortenedLinks, setShortenedLinks] = useState(slugs);

    return (
        <main className="relative">
            <HomeContext.Provider value={{ shortenedLink, setShortenedLink, showCopyModal, setShowCopyModal, shortenedLinks, setShortenedLinks, auth, homeRoute }}>

                <Head title="Home" />

                <div className="absolute inset-0 z-[-1] size-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

                <section className="flex flex-col w-[90%] max-w-screen-xl min-h-dvh mx-auto">

                    <Navbar />
                    <Hero />
                    <ShortenLinkForm />
                    <Footer />

                </section>

                {shortenedLink && <CopyShortenedLink />}

            </HomeContext.Provider>
        </main>
    );
}

export default Home