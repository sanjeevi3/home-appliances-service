import actionTypes from './actionTypes'

 export default  {
     set:()=>{
        const myWorks=[
            {
                customer:"kumar",
                address:"13b langargana street",
                time:"29/04/2021 16:20",
                status:"onprocess"
            },
            {
                customer:"aumar",
                address:"13b langargana street",
                time:"29/04/2021 16:20",
                status:"onprocess"
            }
        ] 
        return{
            type:actionTypes.SUCCESS_SET_MY_WORK,
            data:myWorks
        }
     }
 }