import CloseButton from "../CloseButton";

const Item = ({ slug, setSlugToDelete }) => (
    <li className="flex gap-3 items-center">
        <CloseButton title="Eliminar" onClick={() => setSlugToDelete(slug)} className="ring-0 bg-red-500 hover:bg-red-600 active:ring-red-700" />
        <a target="_blank" rel="noopener noreferrer" href={`${slug}`} className="text-sm md:text-md font-medium text-blue-500 hover:underline">
            {`${slug}`}
        </a>
    </li>
)

export default Item