
import { LOGIN_ATTEMPT ,LOGIN_SUCCESS ,LOGIN_FAILED} from '../actions/types';  //ActionType

const INTIAL_STATE ={
    user: {
        email: '' ,
        password : ''
    } ,
     token:'',
     error :''
    }

     const authReducer =(state =INTIAL_STATE , action) =>{

        switch(action.type)
        {
            case LOGIN_ATTEMPT :  return {...state  } 
            case LOGIN_FAILED  :  return {...INTIAL_STATE, error :action.error} 
            case LOGIN_SUCCESS :  return {...INTIAL_STATE , user :action.user} 
    
            default :  return state
    
        }

     }





     export default authReducer ;