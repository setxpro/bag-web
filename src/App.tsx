import GlobalStyles from "./Styles/GlobalStyles";
import { BrowserRouter } from 'react-router-dom';
import FormLogin from "./Screens/Pages/Login/FormLogin";
import RoutesApp from "./Routes";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles/>
      <RoutesApp/>
    </BrowserRouter>
  );
}
export default App;