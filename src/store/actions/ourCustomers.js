import actionTypes from './actionTypes'

 export default  {
     set:()=>{
        const ourCustomers=[
            {
                name:"kumar",
                age:"21",
                state:"tamilnadu",
                district:"tirunelveli",
                services:"4"
            },
            {
                name:"kumar",
                age:"21",
                state:"tamilnadu",
                district:"tirunelveli",
                services:"4"
            },
        ]
        return{
            type:actionTypes.SUCCESS_SET_OUR_CUSTOMER,
            data:ourCustomers
        }
     }
 }