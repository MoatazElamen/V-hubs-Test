import {useSelector} from 'react-redux'
import {Route , Redirect} from 'react-router-dom'
import Aside from './Aside'
const ProtectedRoute = ({component:Component,...rest})=>{
    const {AuthedUser} = useSelector( state=>({ AuthedUser:state.UserReducer.authedUser }))
    return(
      <Route {...rest} render={
        props=>{
        
          if(AuthedUser !== null){
            return (<div className="aside-container"> <Aside/> <Component {...props}/> </div> ) 
          }else{
            return <Redirect to={{pathname:'/login',state:{from:props.location}}} />
          }
        }} />
    )
  }
  export default ProtectedRoute;