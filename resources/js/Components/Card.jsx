const Card = ({ className = "", children }) => (
    <div className={`rounded-lg p-8 border border-gray-600 bg-gray-950/90 ${className}`}>
        {children}
    </div>
)

export default Card
