import actionTypes from './actionTypes'

 export default  {
     set:()=>{
        const ourEmployees=[
            {
                name:"kumar",
                worker_type:"plumber",
                credits:"4.5",
                state:"tamilnadu",
                district:"tirunelveli",
                place:"palayamkottai"
            },
            {
                name:"kumar",
                worker_type:"plumber",
                credits:"4.5",
                state:"tamilnadu",
                district:"tirunelveli",
                place:"palayamkottai"
            },
        ]
        return{
            type:actionTypes.SUCCESS_SET_OUR_EMPLOYEE,
            data:ourEmployees
        }
     }
 }