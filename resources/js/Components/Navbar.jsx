import { HomeContext } from "@/Contexts/HomeContext";
import CloseIcon from "@/Icons/CloseIcon";
import KeyIcon from "@/Icons/KeyIcon";
import { Link } from "@inertiajs/react";
import { useContext, useState } from "react";
import GradientButton from "./GradientButton";
import LoginModal from "./LoginModal";

const Navbar = () => {
    const { auth } = useContext(HomeContext);
    const [showLogin, setShowLogin] = useState(false);

    return auth.user ? (
        <nav className="flex justify-between flex-wrap gap-3 w-full py-8">
            <span className="text-white text-lg font-semibold">
                Hola, {auth.user.name}
            </span>
            <Link method="post" as="button" href={route("auth.logout")}>
                <GradientButton isButton={false}>
                    Cerrar Sesión <CloseIcon className="size-5" />
                </GradientButton>
            </Link>
        </nav>
    ) : (
        <nav className="flex justify-end w-full py-8">
            <GradientButton onClick={() => setShowLogin(true)}>
                Iniciar Sesión <KeyIcon className="size-5" />
            </GradientButton>
            {showLogin && <LoginModal setShowLogin={setShowLogin} />}
        </nav>
    );
};

export default Navbar;
