import React from "react";

function PricingSection() {
  return (
    <section
      style={{
        padding: "80px 0",
        background: "#0a0a0a",
        color: "white",
      }}
    >
      <div className="container text-center" style={{ maxWidth: "1200px" }}>
        <h2
          className="fw-bold mb-5"
          style={{
            fontSize: "36px",
            color: "white",
            marginBottom: "60px",
          }}
        >
          Gói học ACEENGLISH Premium
        </h2>

        {/* Các gói học */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            justifyContent: "center",
            marginBottom: "60px",
          }}
        >
          {[
            {
              title: "Gói 1 năm",
              price: "749.000đ",
              desc: "Truy cập đầy đủ các khóa học trong 12 tháng.",
              gradient: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
            },
            {
              title: "Gói 3 năm",
              price: "1.499.000đ",
              desc: "Ưu đãi lớn nhất – học không giới hạn trong 3 năm.",
              gradient: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
            },
          ].map((plan, index) => (
            <div
              key={index}
              style={{
                background: plan.gradient,
                borderRadius: "20px",
                padding: "40px 30px",
                width: "340px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                transition: "all 0.3s ease",
                cursor: "pointer",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow =
                  "0 15px 40px rgba(0, 217, 255, 0.2)";
                e.currentTarget.style.borderColor = "rgba(0, 217, 255, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
              }}
            >
              <h5
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  color: "#00d9ff",
                  marginBottom: "15px",
                }}
              >
                {plan.title}
              </h5>
              <p
                style={{
                  fontSize: "36px",
                  fontWeight: "bold",
                  color: "white",
                  marginBottom: "15px",
                }}
              >
                {plan.price}
              </p>
              <p style={{ color: "#b0b0b0", fontSize: "15px" }}>{plan.desc}</p>
            </div>
          ))}
        </div>

        {/* Form đăng ký */}
        <div
          style={{
            background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
            borderRadius: "20px",
            padding: "40px",
            maxWidth: "500px",
            margin: "0 auto",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            transition: "all 0.3s ease",
          }}
        >
          <h5
            className="mb-3 fw-semibold"
            style={{ color: "#00d9ff", fontSize: "22px" }}
          >
            Đăng ký ngay
          </h5>
          <form>
            <input
              type="email"
              placeholder="Email của bạn"
              required
              style={{
                width: "100%",
                padding: "12px 15px",
                marginBottom: "15px",
                borderRadius: "10px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                background: "#121212",
                color: "white",
              }}
            />
            <input
              type="tel"
              placeholder="Số điện thoại"
              required
              style={{
                width: "100%",
                padding: "12px 15px",
                marginBottom: "15px",
                borderRadius: "10px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                background: "#121212",
                color: "white",
              }}
            />
            <select
              required
              style={{
                width: "100%",
                padding: "12px 15px",
                marginBottom: "20px",
                borderRadius: "10px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                background: "#121212",
                color: "white",
              }}
            >
              <option value="">Chọn gói học</option>
              <option value="1n">Gói 1 năm - 749.000đ</option>
              <option value="3n">Gói 3 năm - 1.499.000đ</option>
            </select>
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                background: "linear-gradient(135deg, #00d9ff 0%, #764ba2 100%)",
                color: "white",
                fontWeight: "bold",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                transition: "all 0.3s ease",
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
              Đăng ký
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
