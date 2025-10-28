import React from "react";

function FeatureSection() {
  return (
    <section className="py-5">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Tính năng nổi bật của ACEENGLISH</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-primary">
                  Duy trì thói quen học
                </h5>
                <p className="card-text">
                  10 phút mỗi ngày giúp bạn hình thành thói quen học tiếng Anh
                  bền vững.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-success">
                  Cá nhân hóa lộ trình học
                </h5>
                <p className="card-text">
                  Học theo trình độ và mục tiêu cá nhân của bạn với hệ thống AI
                  thông minh.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-warning">Giao diện trực quan</h5>
                <p className="card-text">
                  Thiết kế thân thiện trên điện thoại và máy tính, dễ dàng học
                  mọi lúc mọi nơi.
                </p>
              </div>
            </div>
          </div>
        </div>

        <button className="btn btn-outline-primary mt-4">
          Bắt đầu học ngay
        </button>
      </div>
    </section>
  );
}

export default FeatureSection;
