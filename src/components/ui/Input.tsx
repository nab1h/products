import type { InputHTMLAttributes } from "react";

interface Iprops extends InputHTMLAttributes<HTMLInputElement>{};

const Input = ({...rest}:Iprops) =>{
    return <input className="" {...rest}/>
}
export default Input;