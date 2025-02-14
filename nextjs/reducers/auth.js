import actionTypse from "@/configs/actionTypes";

const auth = ( state = [] ,action) => {
  switch (action.type) {
    case actionTypse.LOGIN:
      console.log("action",action)
      return{
        ...state,
        email:action.email,
        logged:action.logged,
      }
    default:
      return state;
  }
}

export default auth
