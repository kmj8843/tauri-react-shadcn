import { Outlet, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { useAuth } from "@/context/AuthProvider";
import { Toaster } from "@/components/ui/toaster";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function RootLayout() {
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
        <SidebarProvider>
          <AppSidebar />
          <Outlet />
        </SidebarProvider>
        <Toaster />
      </ThemeProvider>
    </>
  );
}
