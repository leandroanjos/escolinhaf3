"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";

interface User {
    id: string;
    email: string;
    name?: string;
}

interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
    loading: boolean;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    const isAuthenticated = !!user;

    // Verificar token no localStorage ao carregar a aplicação
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const token = localStorage.getItem("auth_token");
                if (!token) {
                    setLoading(false);
                    return;
                }

                // Verificar se o token é válido fazendo uma requisição para uma rota protegida
                const res = await fetch("/api/auth/verify", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (res.ok) {
                    const userData = await res.json();
                    setUser(userData.user);
                } else {
                    // Token inválido, remover do localStorage
                    localStorage.removeItem("auth_token");
                }
            } catch (error) {
                console.error("Erro ao verificar autenticação:", error);
                localStorage.removeItem("auth_token");
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    const login = async (email: string, password: string): Promise<boolean> => {
        try {
            const res = await fetch("/api/auth/signin", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (res.ok) {
                // Salvar token no localStorage
                localStorage.setItem("auth_token", data.session.access_token);
                setUser(data.user);
                return true;
            } else {
                throw new Error(data.error || "Erro ao autenticar");
            }
        } catch (error) {
            console.error("Erro no login:", error);
            return false;
        }
    };

    const logout = () => {
        localStorage.removeItem("auth_token");
        setUser(null);
        router.push("/login");
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout,
                loading,
                isAuthenticated,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth deve ser usado dentro de um AuthProvider");
    }
    return context;
}
