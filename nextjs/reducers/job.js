import actionTypse from "@/configs/actionTypes";

const job = ( state = [] ,action) => {
  switch (action.type) {
    case actionTypse.GET_LIST_JOB_STARTED:
      return{
        ...state,
        loading:action.loading,
      }
    case actionTypse.GET_LIST_JOB_SUCCESS:
      console.log("action jobs success",action)
      return{
        ...state,
        loading:action.loading,
        jobs:action.response,
      }
    case actionTypse.GET_LIST_JOB_FAILED:
      return{
        ...state,
        loading:action.loading,
        error:action.error,
        error_message:action.error_message,
      }
    default:
      return state;
  }
}

export default job
