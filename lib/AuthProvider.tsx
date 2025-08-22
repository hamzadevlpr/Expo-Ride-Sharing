import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "./supabase";

type AuthContextType = {
  session: any;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType>({
  session: null,
  loading: true,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get active session
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });

    // Listen for auth state changes
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ session, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
