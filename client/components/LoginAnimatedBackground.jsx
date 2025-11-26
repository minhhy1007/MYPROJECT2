// ../components/LoginAnimatedBackground.jsx
import React from "react";
import { loginStyles } from "../hooks/useLoginStyles";

function LoginAnimatedBackground() {
  return (
    <>
      <div className="login-float-grid" style={loginStyles.floatGrid}>
        {[...Array(9)].map((_, i) => (
          <div key={i} style={loginStyles.floatBlock(i)} />
        ))}
      </div>

      <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                }
                @media (max-width: 1024px) {
                    /* Ẩn trên Tablet/Mobile */
                    .login-float-grid {
                        display: none !important;
                    }
                }
            `}</style>
    </>
  );
}
export default LoginAnimatedBackground;
