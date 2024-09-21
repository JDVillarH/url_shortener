const Button = ({ children, className = "", ...props }) => (
    <button {...props} className={`active:ring-4 rounded-lg text-sm w-fit transition-all ${className}`}>
        {children}
    </button>
)

export default Button;