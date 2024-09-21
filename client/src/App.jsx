import { Browser as Router, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Loginpage from "./scenes/Loginpage/Loginpage";


export default function App() {
  return (
    <div className="app">
      <Router>
      <ThemeProvider >
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Loginpage />} />
            
          </Routes>
        </ThemeProvider>
      </Router>
    </div>
  );
}
