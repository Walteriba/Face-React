import {useAuth} from "../context/authContext"
import {Navigate} from "react-router-dom" 
// Importo "Navigate", no "useNavigate". Es un componente.

export const ProtectedRoute = ({children}) => {
    const {user, loading} = useAuth()
    if (loading) return <h1>loading</h1>
    if(!user) return <Navigate to='/login'/>
  return (
    <>{children}</>
  )
}
