import actionTypes from '../actions/actionTypes'

const initialState={
   authorized:true,
   userType:"customer"
}

const reducer=(state={...initialState},action)=>{
    switch(action.type){
        case actionTypes.SET_USER:
            return {
                ...state,
                authorized:true
            }
      default:
          return state;
    }
}

export default reducer;