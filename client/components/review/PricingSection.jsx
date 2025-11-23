import React from "react";

function PricingSection() {
  const styles = {
    section: {
      background: "#0a0a0a",
    },
    title: {
      fontSize: "36px",
      color: "white",
    },
    planCard: {
      background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
      borderRadius: "20px",
      width: "340px",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      transition: "all 0.3s ease",
      cursor: "pointer",
    },
    planTitle: {
      fontSize: "22px",
      color: "#00d9ff",
    },
    planPrice: {
      fontSize: "36px",
      color: "white",
    },
    planDesc: {
      color: "#b0b0b0",
      fontSize: "15px",
    },
    formContainer: {
      background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
      borderRadius: "20px",
      maxWidth: "500px",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      transition: "all 0.3s ease",
    },
    formTitle: {
      color: "#00d9ff",
      fontSize: "22px",
    },
    input: {
      borderRadius: "10px",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      background: "#121212",
      color: "white",
    },
    submitButton: {
      background: "linear-gradient(135deg, #00d9ff 0%, #764ba2 100%)",
      borderRadius: "10px",
      transition: "all 0.3s ease",
    },
  };

  return (
    <section className="py-5 text-white" style={styles.section}>
      <div className="container text-center" style={{ maxWidth: "1200px" }}>
        <h2 className="fw-bold mb-5" style={styles.title}>
          Gói học ACEENGLISH Premium
        </h2>

        {/* Các gói học */}
        <div className="d-flex flex-wrap gap-4 justify-content-center mb-5">
          {[
            {
              title: "Gói 1 năm",
              price: "749.000đ",
              desc: "Truy cập đầy đủ các khóa học trong 12 tháng.",
            },
            {
              title: "Gói 3 năm",
              price: "1.499.000đ",
              desc: "Ưu đãi lớn nhất – học không giới hạn trong 3 năm.",
            },
          ].map((plan, index) => (
            <div
              key={index}
              className="p-4 position-relative"
              style={styles.planCard}
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
              <h5 className="fw-bold mb-3" style={styles.planTitle}>
                {plan.title}
              </h5>
              <p className="fw-bold mb-3" style={styles.planPrice}>
                {plan.price}
              </p>
              <p className="mb-0" style={styles.planDesc}>
                {plan.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Form đăng ký */}
        <div className="p-4 mx-auto" style={styles.formContainer}>
          <h5 className="mb-3 fw-semibold" style={styles.formTitle}>
            Đăng ký ngay
          </h5>
          <form>
            <input
              type="email"
              placeholder="Email của bạn"
              required
              className="form-control mb-3 px-3 py-2"
              style={styles.input}
            />
            <input
              type="tel"
              placeholder="Số điện thoại"
              required
              className="form-control mb-3 px-3 py-2"
              style={styles.input}
            />
            <select
              required
              className="form-select mb-3 px-3 py-2"
              style={styles.input}
            >
              <option value="">Chọn gói học</option>
              <option value="1n">Gói 1 năm - 749.000đ</option>
              <option value="3n">Gói 3 năm - 1.499.000đ</option>
            </select>
            <button
              type="submit"
              className="btn w-100 text-white fw-bold py-2 border-0"
              style={styles.submitButton}
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
