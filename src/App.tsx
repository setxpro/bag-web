import GlobalStyles from "./Styles/GlobalStyles";
import { BrowserRouter } from 'react-router-dom';
import { RoutesApp } from "./Routes";
import { useTheme } from "./Hooks/useTheme";
import { ThemeProvider } from "styled-components";

const App = () => {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyles/>
        <RoutesApp/>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;