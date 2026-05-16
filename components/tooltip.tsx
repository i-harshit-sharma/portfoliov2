const Tooltip = ({
    children,
    content,
    className,
}: {
    children: React.ReactNode;
    content: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={`relative group inline-block ${className}`}>
            {children}
            <div
                className="pointer-events-none absolute -mt-[8px] w-max max-w-xs px-2 py-2 rounded-sm bg-zinc-900 text-zinc-50 text-xs shadow-lg transition-all duration-300 ease-in-out z-50 transform top-full left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-2"
            >
                <div className="flex flex-col">
                    <div className="text-zinc-50 text-xs font-medium">{content}</div>
                </div>
            </div>
        </div>
    );
};

export default Tooltip;