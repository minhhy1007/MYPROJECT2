// Login.jsx
import React from "react";
import LoginFormSection from "../sections/LoginFormSection";
import LoginAnimatedBackground from "../components/LoginAnimatedBackground";
import { loginStyles } from "../hooks/useLoginStyles";

function Login() {
  return (
    <div className="login-page-container" style={loginStyles.pageContainer}>
      <LoginAnimatedBackground />
      <LoginFormSection />
      <LoginAnimatedBackground />

      <style>{`
        @media (max-width: 1024px) {
            .login-page-container {
                justify-content: center !important; /* Căn giữa form trên mobile/tablet */
                padding: 20px 20px !important;
            }
            .login-form-card {
                padding: 30px 40px !important; /* Giảm padding form */
                max-width: 400px !important;
            }
        }
      `}</style>
    </div>
  );
}
export default Login;
