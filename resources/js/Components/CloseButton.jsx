import CloseIcon from "@/Icons/CloseIcon"
import Button from "./Button"

const CloseButton = ({ className, ...props }) => {
    return (
        <Button type="button" className={`p-1 ring ring-gray-800 hover:ring-0 ${className}`} {...props}>
            <CloseIcon className="size-6" />
        </Button>
    )
}

export default CloseButton