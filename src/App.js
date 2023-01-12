import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import { createTheme } from "@mui/material/styles";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo } from 'react';
import { themeSettings } from './theme';
import { GlobalTheme } from './theme/GlobalTheme';

function App() {
  const theme = useMemo(() => createTheme(themeSettings()), []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalTheme theme={theme} />
      <CssBaseline />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Home />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
