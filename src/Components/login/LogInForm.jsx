import { Fragment,useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";

import {useForm} from 'react-hook-form'

const LogInForm=(props)=>{

    const {register,handleSubmit,watch,errors} = useForm()
    const inputs = [
        {
            elementType:"input",
            elementConfig:{
                type:"text",
                name:"user_name",
                placeholder:"User Name,Email Id"
            },
            label:"User Name",
            validation:{
                required:"The User Name Field is Required"
            },
            
        },
        {
            elementType:"input",
            elementConfig:{
                type:"password",
                name:"password",
                placeholder:"Password"
            },
            label:"Password",
            validation:{
                required:"The Password Field is Required"
            },
           
        }
    ]
    const logInHandler=(data)=>{
        console.log(data)
    }
    return(
        <form onSubmit={handleSubmit(logInHandler)}>
            {
            inputs.map(input=>{
                return(
                    <Fragment key={input.elementConfig.name}>
                        <Input 
                            refrence={register(input.validation)}
                            elementType={input.elementType}
                            elementConfig={input.elementConfig}
                            label={input.label}
                            required={input.validation.required}
                            error={errors[input.elementConfig.name]}
                        />
                    </Fragment>
                                    
                    )
                })
            }
                <div className="row  justify-content-center">
                    <div className="py-2"><Button buttonType="success">Log In</Button></div>
                </div>
        </form>
    )
}

export default LogInForm;