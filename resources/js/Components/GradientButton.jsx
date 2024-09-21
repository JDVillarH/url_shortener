const GradientButton = ({ isButton = true, children, ...props }) => {

    const Component = isButton ? 'button' : 'span';

    return (
        <Component {...props} className="relative flex h-10 overflow-hidden rounded-lg p-[1px] active:ring-4 active:ring-violet-600/50 transition-all disabled:cursor-not-allowed">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="flex gap-2 size-full items-center justify-center rounded-lg bg-gray-950 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl">
                {children}
            </span>
        </Component>
    )
}

export default GradientButton