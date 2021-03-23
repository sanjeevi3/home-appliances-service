import actionTypes from './actionTypes'

 export default  {
     set:()=>{
        const ourServices=[
            {
                customer:"kumar",
                worker:"vignesh",
                work:"plumbering",
                time:"29/04/2021 16:20",
                status:"onprocess",
                address:"13b langargana street",
                place:"palayamkottai",
                district:"tirunelveli"
            },
            {
                customer:"kumar",
                worker:"vignesh",
                work:"plumbering",
                time:"29/04/2021 16:20",
                status:"onprocess",
                address:"13b langargana street",
                place:"palayamkottai",
                district:"tirunelveli"
            }
        ]
        return{
            type:actionTypes.SUCCESS_SET_OUR_SERVICE,
            data:ourServices
        }
     }
 }