import { useForm } from "react-hook-form"

const { default: Button } = require("../UI/Button")
const { default: Input } = require("../UI/Input")

const AddServiceForm=props=>{
    const {register,handleSubmit,watch,errors} =useForm()
   const inputs=[
    {
        elementType:"select",
        elementConfig:{
           
            name:"service_type",
            
        },
        options:[
            {value:"plumber",label:"Plumbering"},
            {value:"AC mechanic",label:"AC Repairing"},
            {value:"refregirator mechanic",label:"Refregirator Repairing"}
        ],
        label:"Worker Type",
        validation:{
            required:"The Gender is Required"
        },
        
    },
    {
        elementType:"select",
        elementConfig:{
           
            name:"state",
            
        },
        options:[
            {value:"tamilnadu",label:"Tamilnadu"},
              ],
        label:"State",
        validation:{
            required:"Select the State"
        },
        
    },
    {
        elementType:"select",
        elementConfig:{
           
            name:"district",
            
        },
        options:[
            {value:"tirunelveli",label:"Tirunelveli"},
           
        ],
        label:"District",
        validation:{
            required:"Select the District"
        },
        
    },
    {
        elementType:"select",
        elementConfig:{
           
            name:"place",
            
        },
        options:[
            {value:"palayamkottai",label:"Palayamkottai"},
            
        ],
        label:"Place",
        validation:{
            required:"Select the Place"
        },
        
    },
    
   ]
   const address={
    elementType:"text area",
    elementConfig:{
       
        name:"address",
        placeholder:"Address"
        
    },
    
    label:"Place",
    validation:{
        required:"Enter the Address"
    },
    
}
    return(
        <form onSubmit={handleSubmit(props.addServiceFormHandler)}>
            <div className="row">
                {inputs.map(input=>{
                    return(
                        <div key={input.elementConfig.name} className="col-md-6">
                            <Input refrence={register(input.validation)}
                            elementType={input.elementType}
                            elementConfig={input.elementConfig}
                            label={input.label}
                            options={input.options}
                            required={input.validation.required}
                            error={errors[input.elementConfig.name]} />
                            </div>
                    )
                })}
                <div className="col-md-8">
                            <Input refrence={register(address.validation)}
                            elementType={address.elementType}
                            elementConfig={address.elementConfig}
                            label={address.label}
                            options={address.options}
                            required={address.validation.required}
                            error={errors[address.elementConfig.name]} />
                            </div>
            </div>
            <div className="row justify-content-center">
                <Button buttonType="success">Add Service</Button>
            </div>
        </form>
    )
}

export default AddServiceForm;