import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/globals.css";
import Login from "@/app/login/page";
import Dashboard from "@/app/dashboard/page";
import Dummy from "@/app/dummy/page";
import RootLayout from "./app/layout";
import { AuthProvider } from "./context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dummy" element={<Dummy />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
