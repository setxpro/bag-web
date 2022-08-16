import { Routes, Route } from 'react-router-dom';
import HomeScreen from '../Screens/Pages/Home';
import FormForgotPass from '../Screens/Pages/Login/FormForgotPass';
import FormLogin from '../Screens/Pages/Login/FormLogin';
import FormUpdatePass from '../Screens/Pages/Login/FormUpdatePass';
import Template from '../Screens/Template';
import { SecurityRouter } from '../Security';

export const RoutesApp = () => {
  return (
    <Routes>
        <Route path="/login" element={<FormLogin/>}/>
        <Route path="*" element={<FormLogin/>}/>
        <Route path="/forgot-pass" element={<FormForgotPass/>}/>

        {/*===================================== OBS =========================================*/}
        <Route path="/update-pass" element={<FormUpdatePass/>}/> 
        {/** Aplicar a segurança na rota quando o usuário for reconhecido pelo email e senha **/}
        
        <Route path="/" element={<SecurityRouter><Template><HomeScreen/></Template></SecurityRouter>}/>
    </Routes>
  );
}
