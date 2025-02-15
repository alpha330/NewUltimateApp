import actionTypse from "@/configs/actionTypes"
import fetchUrl from "@/utils/fetchUrl"

const LOGIN_ACTION = () => {

  return async dispatch => {
    dispatch({
      type:actionTypse.LOGIN_STARTED,
      loading:true,
      logged:true,
    })
    try{
      const {user} = await fetchUrl({
        url:'http://127.0.0.1:5500/login.json',
        method:"GET"
      })
      dispatch({
        type:actionTypse.LOGIN_SUCCESS,
        logged:true,
        loading:false,
        user:user,
      })
    }catch(e){
      dispatch({
        type:actionTypse.LOGIN_FAILED,
        logged:false,
        loading:false,
        error:true,
        error_message:e,
      })
    }
  }
}

export {LOGIN_ACTION}
