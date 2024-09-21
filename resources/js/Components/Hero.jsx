import { HomeContext } from "@/Contexts/HomeContext";
import { useContext } from "react";

const Hero = () => {

    const appName = import.meta.env.VITE_APP_NAME || 'GoURL';
    const { auth } = useContext(HomeContext);

    return (
        <header className="max-w-screen-md mx-auto grid gap-6 py-20 text-left md:text-center">
            <h1 className="bg-gradient-to-br from-white from-30% to-white/40 bg-clip-text font-bold tracking-tighter text-transparent text-5xl md:text-7xl">
                {appName}
            </h1>
            <p className="tracking-tight text-gray-200 text-lg md:text-xl">
                Transforma tus enlaces largos y complicados en URLs cortas y
                elegantes. {!auth.user && "No necesitas registrarte, pero si quieres personalizar tus enlaces entonces si deberías 😁"}
            </p>
        </header>
    );
};

export default Hero;