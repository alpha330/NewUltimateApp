import actionTypse from "@/configs/actionTypes"
import fetchUrl from "./fetchUrl"

const reduxCall = async (dispatch,{
  url,
  method,
  name,
}) => {
  dispatch({
    type:actionTypse[`${name}_STARTED`],
    loading:true,
    logged:true,
  })
  try{
    const response = await fetchUrl({
      url:url,
      method:method
    })
    dispatch({
      type:actionTypse[`${name}_SUCCESS`],
      logged:true,
      loading:false,
      response:response
    })
  }catch(e){
    dispatch({
      type:actionTypse[`${name}_FAILED`],
      logged:false,
      loading:false,
      error:true,
      error_message:e,
    })
  }
}

export default reduxCall
