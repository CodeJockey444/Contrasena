import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import Generator from './generator'
import './styles.css'
import Header from "./AppBar";
import Footer from './footer'
const appTheme = createTheme({
  palette: {
    primary: { main: "#544BF7" },
    secondary: { main: "#27F2A9" },
  },
  typography: {
    fontFamily: "Source Sans Pro, sans-serif",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <Header />
      <Generator theme={appTheme}/>
      <Footer/>
    </ThemeProvider>
  );
};

export default App;
