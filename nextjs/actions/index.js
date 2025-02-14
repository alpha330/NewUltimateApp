import actionTypse from "@/configs/actionTypes"

const LOGIN_ACTION = () => {

  return dispatch => {
    dispatch({
      type:actionTypse.LOGIN_STARTED,
      loading:true,
      logged:true,
    })
    try{
      setTimeout(async()=>{
        const response = await fetch('http://127.0.0.1:5500/login.json')
        const {user} = await response.json()
        dispatch({
          type:actionTypse.LOGIN_SUCCESS,
          logged:true,
          loading:false,
          user:user,
        })
        },3000)
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
