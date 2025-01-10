import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/globals.css";
import Login from "./app/login/page.jsx";
import RootLayout from "./app/layout";
import { AuthProvider } from "./context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
