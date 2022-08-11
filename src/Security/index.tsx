import { useAuth } from "../Hooks/useAuth"
import FormLogin from "../Screens/Pages/Login/FormLogin"

export const SecurityRouter = ({children}:{children: JSX.Element}) => {
    const auth = useAuth()
  
    if (auth.user) {
      return <FormLogin/>
    }
  
    return children
  }
  