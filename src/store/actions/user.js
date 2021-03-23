import actionTypes from './actionTypes'

 export default  {
    setUser:(userType)=>{
        
        return {
            type:actionTypes.SUCCESS_SET_USER,
            userType:userType
        }
    },
    removeUser:()=>{
        
        return {
            type:actionTypes.REMOVED_USER
        }
    }
}