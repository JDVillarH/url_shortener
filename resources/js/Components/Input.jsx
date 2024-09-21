const Input = ({ className = "", ...props }) => (
    <input {...props} className={`bg-transparent max-h-10 border border-gray-500 text-gray-300 outline-none focus:ring focus:ring-violet-600/50 text-sm rounded-lg p-2.5 disabled:cursor-not-allowed ${className}`} />
);

export default Input;
