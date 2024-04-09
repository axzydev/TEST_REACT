export interface ButtonProps {
    label: string;
    onClick: () => void;
    color?: "primary" | "secondary";
}