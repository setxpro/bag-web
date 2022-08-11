import GlobalStyles from "./Styles/GlobalStyles";
import { BrowserRouter } from 'react-router-dom';
import { RoutesApp } from "./Routes";

const App = () => {

  return (
    <BrowserRouter>
      <GlobalStyles/>
      <RoutesApp/>
    </BrowserRouter>
  );
}
export default App;