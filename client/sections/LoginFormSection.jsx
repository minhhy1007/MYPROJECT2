// ../sections/LoginFormSection.jsx
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom"; // Thêm useLocation
import { loginStyles } from "../hooks/useLoginStyles";
import { AuthService } from "../services/AuthService";

function EyeIcon({ show }) {
  // Logic hiển thị Icon mắt đã được giữ nguyên
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      {show ? (
        <>
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </>
      ) : (
        <>
          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
          <line x1="1" y1="1" x2="23" y2="23" />
        </>
      )}
    </svg>
  );
}

function LoginFormSection() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const location = useLocation(); // Sử dụng useLocation để lấy đường dẫn hiện tại

  // XÁC ĐỊNH LOẠI FORM: LOGIN HAY REGISTER
  const isRegisterPage = location.pathname === "/signup";

  // DỮ LIỆU ĐỘNG DỰA TRÊN LOẠI FORM
  const title = isRegisterPage ? "Create Account" : "Welcome Back";
  const subtitle = isRegisterPage
    ? "Join ACEENGLISH to start learning."
    : "ACEENGLISH will enhance your experience";
  const buttonText = isRegisterPage ? "Sign Up" : "Login";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      let result;

      // GỌI API ĐĂNG KÝ HOẶC ĐĂNG NHẬP
      if (isRegisterPage) {
        result = await AuthService.register(email, password);
      } else {
        result = await AuthService.login(email, password);
      }

      if (result.success) {
        if (isRegisterPage) {
          // Đăng ký thành công: Thông báo và chuyển hướng về trang Login
          alert(result.message || "Đăng ký thành công! Vui lòng đăng nhập.");
          navigate("/login");
        } else {
          // Đăng nhập thành công: Lưu Token và chuyển hướng
          AuthService.saveToken(result.token);
          alert("Bạn đã đăng nhập thành công");
          navigate("/hub");
        }
      } else {
        // Xử lý lỗi trả về từ server
        setError(
          result.message ||
            (isRegisterPage ? "Đăng ký thất bại." : "Đăng nhập thất bại.")
        );
      }
    } catch (apiError) {
      // Xử lý lỗi mạng/kết nối
      setError("Không thể kết nối đến máy chủ. Vui lòng thử lại sau.");
      console.error("Lỗi API:", apiError);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFocus = (e) => {
    e.target.style.background = "#1a1a1a";
    e.target.style.border = "1px solid #00d9ff";
    e.target.style.boxShadow = "0 0 0 3px rgba(0, 217, 255, 0.1)";
  };
  const handleBlur = (e) => {
    e.target.style.background = "#121212";
    e.target.style.border = "1px solid rgba(255, 255, 255, 0.1)";
    e.target.style.boxShadow = "none";
  };

  return (
    <div
      className="login-form-card"
      style={loginStyles.formCard}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 15px 40px rgba(0, 217, 255, 0.2)";
        e.currentTarget.style.borderColor = "rgba(0, 217, 255, 0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 20px 60px rgba(0, 0, 0, 0.5)";
        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
      }}
    >
      {/* Icon & Heading (Giữ nguyên) */}
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
        {title} {/* TIÊU ĐỀ ĐỘNG */}
      </h1>
      <p
        style={{
          color: "#b0b0b0",
          fontSize: "16px",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        {subtitle} {/* PHỤ ĐỀ ĐỘNG */}
      </p>

      {/* HIỂN THỊ THÔNG BÁO LỖI (Giữ nguyên) */}
      {error && (
        <div
          style={{
            color: "#ef4444",
            background: "rgba(239, 68, 68, 0.1)",
            padding: "12px",
            borderRadius: "8px",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          {error}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit}>
        {/* Email Input (Giữ nguyên) */}
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
            style={loginStyles.inputBase}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>

        {/* Password Input (Giữ nguyên) */}
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
              style={{ ...loginStyles.inputBase, paddingRight: "50px" }}
              onFocus={handleFocus}
              onBlur={handleBlur}
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
              <EyeIcon show={showPassword} />
            </button>
          </div>
        </div>

        {/* Login/Sign Up Button (Cập nhật text) */}
        <button
          type="submit"
          style={loginStyles.submitButton}
          disabled={isLoading} // Vô hiệu hóa khi đang loading
          onMouseEnter={(e) => {
            e.target.style.opacity = "0.85";
            e.target.style.transform = "scale(1.03)";
          }}
          onMouseLeave={(e) => {
            e.target.style.opacity = "1";
            e.target.style.transform = "scale(1)";
          }}
        >
          {isLoading ? "Loading..." : buttonText} {/* TEXT NÚT ĐỘNG */}
        </button>

        {/* Sign Up/Login Link (Cập nhật logic chuyển hướng) */}
        <p style={{ textAlign: "center", color: "#b0b0b0", fontSize: "15px" }}>
          {isRegisterPage
            ? "Already have an account? "
            : "Don't have any account? "}
          <Link
            to={isRegisterPage ? "/login" : "/signup"} // Chuyển hướng ngược lại
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
            {isRegisterPage ? "Login" : "Sign Up"}
          </Link>
        </p>
      </form>
    </div>
  );
}
export default LoginFormSection;
