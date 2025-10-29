import React from "react";

function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
        color: "white",
        padding: "60px 0 30px 0",
        marginTop: "80px",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="container text-center"
        style={{
          maxWidth: "1200px",
        }}
      >
        {/* Tên thương hiệu */}
        <h3
          className="fw-bold mb-3"
          style={{
            fontSize: "28px",
            background: "linear-gradient(90deg, #00d9ff, #764ba2)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "1px",
          }}
        >
          🌍 ACEENGLISH - Học Tiếng Anh Trực Tuyến Toàn Diện
        </h3>

        {/* Mô tả ngắn */}
        <p
          style={{
            color: "#b0b0b0",
            maxWidth: "750px",
            margin: "0 auto 20px",
            fontSize: "15px",
            lineHeight: "1.7",
          }}
        >
          Nền tảng học tiếng Anh trực tuyến giúp bạn chinh phục từ vựng, ngữ
          pháp và kỹ năng giao tiếp qua video, podcast và tài liệu tương tác.
          Cùng ACEENGLISH nâng cao khả năng ngoại ngữ mỗi ngày!
        </p>

        {/* Liên kết nhanh */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "25px",
            marginTop: "25px",
          }}
        >
          {[
            "Khóa học IELTS",
            "Từ vựng TOEIC",
            "Học qua video",
            "Luyện nghe",
            "Blog học tập",
          ].map((link, index) => (
            <a
              key={index}
              href="#"
              style={{
                color: "#b0b0b0",
                fontSize: "15px",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#00d9ff")}
              onMouseLeave={(e) => (e.target.style.color = "#b0b0b0")}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Đường kẻ phân cách */}
        <hr
          style={{
            borderColor: "rgba(255,255,255,0.1)",
            margin: "40px auto 20px",
            width: "60%",
          }}
        />

        {/* Liên hệ */}
        <p style={{ color: "#b0b0b0", fontSize: "14px" }}>
          📧 Liên hệ:{" "}
          <a
            href="mailto:support@aceenglishvocab.com"
            style={{
              color: "#00d9ff",
              textDecoration: "none",
            }}
          >
            support@AceEnglishvocab.com
          </a>{" "}
          | 📞 Hotline: +84 987 654 321
        </p>

        {/* Bản quyền */}
        <p
          style={{
            fontSize: "13px",
            color: "rgba(255,255,255,0.6)",
            marginTop: "15px",
          }}
        >
          © 2025 ACEENGLISH. All rights reserved.
        </p>
      </div>

      {/* Hiệu ứng nền mờ */}
      <div
        style={{
          position: "absolute",
          top: "-50px",
          left: "-100px",
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(circle at center, rgba(0,217,255,0.15) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      ></div>
    </footer>
  );
}

export default Footer;
