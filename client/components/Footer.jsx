import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <div className="container">
        <p className="mb-1 fw-semibold">
          © 2025 ACEENGLISH. All rights reserved.
        </p>
        <p className="mb-0 small">
          Liên hệ:{" "}
          <a
            href="mailto:support@mochivocab.com"
            className="text-warning text-decoration-none"
          >
            support@AceEnglishvocab.com
          </a>{" "}
          |
          <a href="#" className="text-light ms-2">
            Chính sách bảo mật Lê Hữu Minh Hy
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
