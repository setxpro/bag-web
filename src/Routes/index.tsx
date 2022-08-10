import { Routes, Route } from 'react-router-dom';
import HomeScreen from '../Screens/Pages/Home';
import FormLogin from '../Screens/Pages/Login/FormLogin';
import Template from '../Screens/Template';

const RoutesApp = () => {
  return (
    <Routes>
        <Route path="/login" element={<FormLogin/>}/>
        <Route path="/" element={<Template><HomeScreen/></Template>}/>
    </Routes>
  );
}

export default RoutesApp;