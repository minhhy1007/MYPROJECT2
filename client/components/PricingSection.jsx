import React from "react";

function PricingSection() {
  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Gói học ACEENGLISH Premium</h2>
        <div className="row g-4 mb-5 justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title text-primary">Gói 1 năm</h5>
                <p className="display-6 fw-bold text-dark">749.000đ</p>
                <p className="text-muted">
                  Truy cập đầy đủ các khóa học trong 12 tháng.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card shadow-sm h-100 border-warning border-2">
              <div className="card-body">
                <h5 className="card-title text-warning">Gói 3 năm</h5>
                <p className="display-6 fw-bold text-dark">1.499.000đ</p>
                <p className="text-muted">
                  Ưu đãi lớn nhất – học không giới hạn trong 3 năm.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form đăng ký nhanh */}
        <div className="card mx-auto shadow-sm" style={{ maxWidth: "500px" }}>
          <div className="card-body">
            <h5 className="mb-3 fw-semibold">Đăng ký ngay</h5>
            <form>
              <input
                type="email"
                className="form-control mb-3"
                placeholder="Email của bạn"
                required
              />
              <input
                type="tel"
                className="form-control mb-3"
                placeholder="Số điện thoại"
                required
              />
              <select className="form-select mb-3" required>
                <option value="">Chọn gói học</option>
                <option value="1n">Gói 1 năm - 749.000đ</option>
                <option value="3n">Gói 3 năm - 1.499.000đ</option>
              </select>
              <button
                type="submit"
                className="btn btn-warning w-100 fw-semibold"
              >
                Đăng ký
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
