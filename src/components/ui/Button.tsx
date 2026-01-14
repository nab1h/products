import type { ReactNode ,ButtonHTMLAttributes } from "react";
interface Iprops extends ButtonHTMLAttributes<HTMLButtonElement>
{
children: ReactNode,
className: string,
}
const Button = ({children,className , ...rest}:Iprops) =>{
    return(
        <button className={`text-white rounded-3xl p-2 w-full cursor-pointer ${className}` } {...rest}>
            {children }
        </button>
    )
}
export default Button;