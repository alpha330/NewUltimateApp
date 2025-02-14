import actionTypse from "@/configs/actionTypes";

const auth = ( state = [] ,action) => {
  switch (action.type) {
    case actionTypse.LOGIN_STARTED:
      console.log("action",action)
      return{
        ...state,
        loading:action.loading,
        logged:action.logged
      }
    case actionTypse.LOGIN_SUCCESS:
    console.log("action",action)
    return{
      ...state,
      loading:action.loading,
      logged:action.logged,
      user:action.user
    }
    case actionTypse.LOGIN_FAILED:
      console.log("action",action)
      return{
        ...state,
        logged:action.logged,
        loading:action.loading,
        error:action.error,
        error_message:action.error_message,
      }
    default:
      return state;
  }
}

export default auth
