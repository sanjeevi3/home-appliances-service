import { Fragment } from "react";

const Input=(props)=>{
    let inputElement=null;
    switch(props.elementType){
        case ('input'):
            inputElement=<input ref={props.refrence}  className={`form-control ${props.error&&"bg-danger text-white"}`} {...props.elementConfig} />
            break
        case ('text area'):
            inputElement=<textarea rows="5" className="form-control" {...props.elementConfig} />
            break
        case ('select'):
            inputElement=<select onChange={props.changed} value={props.value} className={`form-control ${props.touched&&!props.valid&&"bg-danger text-white"}`} >
                <option key="tittle" value="">---{props.label}----</option>
                {props.elementConfig.options.map((option)=>{
                    return(<option key={option.value} value={option.value}>{option.label}</option>)
                })}
            </select>
            break
        case ('multi input'):
            inputElement=<div>{
                            props.values.map((value,index)=>{
                                return(
                                <Fragment key={value} >
                                <input   value={value} className={`mr-1 `} {...props.elementConfig} /><label className="mr-2 text-capitalize text-white">{value}</label>
                                </Fragment>)
                            })}<br></br>
                          </div>
                            break;
    
        
    }
    console.log(props.error)
    return(
        <div className="row mb-2 col-12 px-0 mx-0 ">
            <label className="col-md-4 col-12 text-white">
                {props.label}{props.required&&<span className="text-danger text-bold">*</span>}
            </label>
            <div className='col-md-8 col-12 '>
                {inputElement}
                {props.error&&
    <p className="text-bold text-danger">{props.error.message}</p>}
            </div>
        </div>
    )
}

export default Input;