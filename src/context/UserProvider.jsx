/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { UserContext } from "./UserContext";

// URL base del backend
const API_URL = "http://localhost:5000/api/auth";

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);

  // ⭐ 1. LOGIN REAL
  const login = async (email, password) => {
    try {
      const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Error en login");

      setToken(data.token);
      localStorage.setItem("token", data.token);
      await getProfile(data.token);

      return { ok: true };
    } catch (err) {
      return { ok: false, error: err.message };
    }
  };

  // ⭐ 2. REGISTER REAL
  const register = async (email, password) => {
    try {
      const res = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Error en registro");

      // Autologin después de registrarse
      setToken(data.token);
      localStorage.setItem("token", data.token);
      await getProfile(data.token);

      return { ok: true };
    } catch (err) {
      return { ok: false, error: err.message };
    }
  };

  // ⭐ 3. OBTENER PERFIL
  const getProfile = async (tk = token) => {
    try {
      const res = await fetch(`${API_URL}/me`, {
        headers: { Authorization: `Bearer ${tk}` },
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Error obteniendo perfil");

      setEmail(data.email);
    } catch (err) {
      console.log("Error perfil:", err.message);
    }
  };

  // ⭐ 4. LOGOUT REAL
  const logout = () => {
    setToken(null);
    setEmail("");
    localStorage.removeItem("token");
  };

  // ⭐ Al cargar la app, intentar obtener perfil
  useEffect(() => {
    if (token) getProfile(token);
    setLoading(false);
  }, []);

  return (
    <UserContext.Provider
      value={{
        token,
        email,
        login,
        register,
        logout,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
