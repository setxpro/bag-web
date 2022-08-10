import { Routes, Route } from 'react-router-dom';
import HomeScreen from '../Screens/Pages/Home';
import FormLogin from '../Screens/Pages/Login/FormLogin';
import Template from '../Screens/Template';
import { SecurityRouter } from '../Security';

export const RoutesApp = () => {
  return (
    <Routes>
        <Route path="/login" element={<FormLogin/>}/>
        <Route path="/" element={<SecurityRouter><Template><HomeScreen/></Template></SecurityRouter>}/>
    </Routes>
  );
}
