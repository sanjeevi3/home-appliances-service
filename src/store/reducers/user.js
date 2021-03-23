import actionTypes from '../actions/actionTypes'

const initialState={
   authorized:false,
   userType:null,
   error:null
}

const reducer=(state={...initialState},action)=>{
    switch(action.type){
        case actionTypes.SUCCESS_SET_USER:
            return {
                ...state,
                authorized:true,
                userType:action.userType
            }
            case actionTypes.REMOVED_USER:
                alert("remove")
            return {
                ...state,
                userType:null,
                authorized:false
            }
      default:
          return state;
    }
}

export default reducer;