const LabelInput = ({ className = "", children, ...props }) => (
    <label {...props} className={`h-fit grid gap-3 font-medium text-sm ${className}`}>
        {children}
    </label>
)

export default LabelInput
