import React from "react";

function ContentSection() {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="fw-bold text-center mb-4">Nội dung học & Tài nguyên</h2>
        <div className="row">
          <div className="col-md-6">
            <h5 className="text-primary">MochiMochi - Học tiếng Anh</h5>
            <ul className="list-group list-group-flush mb-3">
              <li className="list-group-item">ACEVocab</li>
              <li className="list-group-item">ACEListening</li>
              <li className="list-group-item">ACEVideo</li>
            </ul>

            <h5 className="text-primary">Học từ vựng theo chủ đề</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">IELTS Vocabulary</li>
              <li className="list-group-item">TOEIC Vocabulary</li>
              <li className="list-group-item">Giao tiếp hàng ngày</li>
            </ul>
          </div>

          <div className="col-md-6">
            <h5 className="text-primary">Học tiếng Anh qua tài nguyên</h5>
            <ul className="list-group list-group-flush mb-3">
              <li className="list-group-item">Phim & Bài hát</li>
              <li className="list-group-item">TED Talks</li>
              <li className="list-group-item">Podcast tiếng Anh</li>
            </ul>

            <h5 className="text-primary">Tài liệu bổ sung</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Tài liệu TOEIC/IELTS</li>
              <li className="list-group-item">Mẹo học từ vựng nhanh</li>
              <li className="list-group-item">Phương pháp học thông minh</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContentSection;
