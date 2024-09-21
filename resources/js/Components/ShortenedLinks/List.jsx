import { HomeContext } from "@/Contexts/HomeContext";
import { useContext, useState } from "react";
import DeleteModal from "./DeleteModal";
import Item from "./Item";

const List = () => {

    const { shortenedLinks } = useContext(HomeContext);
    if (shortenedLinks.length === 0) {
        return (
            <ul className="flex flex-col gap-4 break-all">
                <li className="text-white grid place-items-center"> Aún no tienes enlaces acortados 😥</li>
            </ul>
        )
    }

    const [slugToDelete, setSlugToDelete] = useState("");
    return (
        <ul className="flex flex-col gap-4 break-all">
            {shortenedLinks.map(({ slug }) => <Item key={slug} slug={slug} setSlugToDelete={setSlugToDelete} />)}
            {slugToDelete && <DeleteModal slugToDelete={slugToDelete} setSlugToDelete={setSlugToDelete} />}
        </ul >
    )
}

export default List
