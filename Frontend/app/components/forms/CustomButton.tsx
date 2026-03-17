interface CustomButtonProps {
    label: string;
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    label,
    className = "",
    onClick,
    type = "button",
    disabled = false,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`w-full py-4 bg-habita hover:bg-blue text-black text-center rounded-xl transition 
            ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} 
            ${className}`}
        >
            {label}
        </button>
    );
};

export default CustomButton;