const InputError = ({ message, className = '', ...props }) => {
    if (!message) return null
    return <p {...props} className={'text-sm text-red-600 ' + className}>{message}</p>
}

export default InputError