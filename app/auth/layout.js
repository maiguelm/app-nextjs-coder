"use client";
import AuthPage from "@/components/auth/AuthPage";
import { useAuthContextProvider } from "@/hooks/hooks";

const UserLayout = ({ children }) => {
  const { user } = useAuthContextProvider();

  return <>{user.logged ? children : <AuthPage />}</>;
};

export default UserLayout;
