import { Outlet, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/app/darkmode";
import { useAuth } from "@/context/AuthProvider";
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({ children }) {
  const location = useLocation();
  const { user } = useAuth();

  if (location.pathname != "/login" && !user) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Outlet />
        <ModeToggle />
        <Toaster />
      </ThemeProvider>
    </>
  );
}
