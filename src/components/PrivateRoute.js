import React from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from "./AuthContext"

export default function PrivateRoute({children}) {
    const { currentUser } = useAuth()
  
  //   return ( currentUser? children : <Navigate to='/login'/>
  
    return currentUser ? children : <Navigate to="/login" />
      
    
  }



















// export default function PrivateRoute({ component: Component, ...rest }) {
//   const { currentUser } = useAuth()

//   return (
//     <Route
//       {...rest}
//       render={props => {
//         return currentUser ? <Component {...props} /> : <Navigate to="/login" />
//       }}
//     ></Route>
//   )
// }