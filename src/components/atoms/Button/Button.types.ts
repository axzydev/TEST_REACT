export interface ButtonProps {
    //aqui estamos definiendo que el label es obligatorio
    label: string;
    //aqui estamos definiendo que el evento buttonClick es obligatorio
    buttonClick: () => void;
    //aqui estamos definiendo que el color es opcional con el simbolo de interrogacion
    color?: "primary" | "secondary";
}