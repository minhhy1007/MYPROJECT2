import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 100px",
        paddingTop: "80px",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          opacity: "0.3",
        }}
      >
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            style={{
              width: "120px",
              height: "120px",
              background: "linear-gradient(135deg, #00d9ff 0%, #007bff 100%)",
              borderRadius: "20px",
              animation: `float ${3 + i * 0.2}s ease-in-out infinite`,
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>

      {/* Form Container */}
      <div
        style={{
          background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
          backdropFilter: "blur(20px)",
          borderRadius: "20px",
          padding: "50px 60px",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          maxWidth: "480px",
          width: "100%",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
          e.currentTarget.style.boxShadow =
            "0 15px 40px rgba(0, 217, 255, 0.2)";
          e.currentTarget.style.borderColor = "rgba(0, 217, 255, 0.3)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 20px 60px rgba(0, 0, 0, 0.5)";
          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: "80px",
            height: "80px",
            background: "rgba(0, 217, 255, 0.1)",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 30px",
            border: "1px solid rgba(0, 217, 255, 0.3)",
          }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#00d9ff"
            strokeWidth="2"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>

        {/* Heading */}
        <h1
          style={{
            color: "#ffffff",
            fontSize: "32px",
            fontWeight: "700",
            textAlign: "center",
            marginBottom: "12px",
            letterSpacing: "-0.5px",
          }}
        >
          Welcome Back
        </h1>
        <p
          style={{
            color: "#b0b0b0",
            fontSize: "16px",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          ACEENGLISH will enhance your experience
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div style={{ marginBottom: "24px" }}>
            <label
              style={{
                color: "#b0b0b0",
                fontSize: "14px",
                fontWeight: "500",
                display: "block",
                marginBottom: "8px",
              }}
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="huuminhhyle@gmail.com"
              required
              style={{
                width: "100%",
                padding: "14px 18px",
                background: "#121212",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "10px",
                fontSize: "15px",
                color: "white",
                outline: "none",
                transition: "all 0.3s ease",
                boxSizing: "border-box",
              }}
              onFocus={(e) => {
                e.target.style.background = "#1a1a1a";
                e.target.style.border = "1px solid #00d9ff";
                e.target.style.boxShadow = "0 0 0 3px rgba(0, 217, 255, 0.1)";
              }}
              onBlur={(e) => {
                e.target.style.background = "#121212";
                e.target.style.border = "1px solid rgba(255, 255, 255, 0.1)";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          {/* Password Input */}
          <div style={{ marginBottom: "32px" }}>
            <label
              style={{
                color: "#b0b0b0",
                fontSize: "14px",
                fontWeight: "500",
                display: "block",
                marginBottom: "8px",
              }}
            >
              Password
            </label>
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••"
                required
                style={{
                  width: "100%",
                  padding: "14px 50px 14px 18px",
                  background: "#121212",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "10px",
                  fontSize: "15px",
                  color: "white",
                  outline: "none",
                  transition: "all 0.3s ease",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => {
                  e.target.style.background = "#1a1a1a";
                  e.target.style.border = "1px solid #00d9ff";
                  e.target.style.boxShadow = "0 0 0 3px rgba(0, 217, 255, 0.1)";
                }}
                onBlur={(e) => {
                  e.target.style.background = "#121212";
                  e.target.style.border = "1px solid rgba(255, 255, 255, 0.1)";
                  e.target.style.boxShadow = "none";
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "14px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "8px",
                  color: "#b0b0b0",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#00d9ff")}
                onMouseLeave={(e) => (e.target.style.color = "#b0b0b0")}
              >
                {showPassword ? (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                ) : (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px",
              background: "linear-gradient(135deg, #00d9ff 0%, #764ba2 100%)",
              color: "white",
              fontSize: "16px",
              fontWeight: "700",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 10px 25px rgba(0, 217, 255, 0.2)",
              marginBottom: "24px",
            }}
            onMouseEnter={(e) => {
              e.target.style.opacity = "0.85";
              e.target.style.transform = "scale(1.03)";
            }}
            onMouseLeave={(e) => {
              e.target.style.opacity = "1";
              e.target.style.transform = "scale(1)";
            }}
          >
            Login
          </button>

          {/* Sign Up Link */}
          <p
            style={{
              textAlign: "center",
              color: "#b0b0b0",
              fontSize: "15px",
            }}
          >
            Don't have any account?{" "}
            <Link
              to="/signup"
              style={{
                color: "#00d9ff",
                textDecoration: "none",
                fontWeight: "600",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#33e0ff";
                e.target.style.textShadow = "0 0 15px rgba(0, 217, 255, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#00d9ff";
                e.target.style.textShadow = "none";
              }}
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>

      <div
        style={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          opacity: "0.3",
        }}
      >
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            style={{
              width: "120px",
              height: "120px",
              background: "linear-gradient(135deg, #00d9ff 0%, #007bff 100%)",
              borderRadius: "20px",
              animation: `float ${3 + i * 0.2}s ease-in-out infinite`,
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>

      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-15px);
            }
          }
        `}
      </style>
    </div>
  );
}

export default Login;
