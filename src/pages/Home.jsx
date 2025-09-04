import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Hero Section */}
<section className="hero mb-5 d-flex align-items-center" style={{ minHeight: "90vh" }}>
  <div className="row align-items-center w-100">
    {/* النصوص */}
    <div className="col-lg-7">
      <h1 className="fw-bold mb-3 display-4">
        منصّة Smart Skills Academy — تعلم باحتراف وبساطة
      </h1>
      <p className="lead text-muted">
        دورات عملية ومحتوى واضح، دروس قصيرة، ومشاريع تطبيقيّة تجهزك لسوق العمل.
      </p>
      <Link to="/courses" className="btn btn-primary btn-lg mt-2">
        ابدأ التعلّم الآن
      </Link>
    </div>

    {/* الصورة */}
    <div className="col-lg-5 text-center">
      <img className="img-fluid rounded" src="/assets/2.png" alt="banner" />
    </div>
  </div>
</section>


      {/* كاردات كورسات زي Carousel */}
      <section className="mb-5">
        <h3 className="mb-3">كورسات مميزة</h3>
        <div id="courseCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
                <div className="card-body">
                
            <div className="carousel-item active">
              <div className="card p-3 text-center">
                <img src="/assets/8.jpg" className="card-img-top" alt="English" />
                <div className="card-body">
                  <h4>كورس English</h4>
                  <p className="text-muted">
                    تطوير مهاراتك في القراءة، الكتابة، التحدث والاستماع، لجميع المستويات.
                  </p>
                  <Link to="/course/english-course" className="btn btn-dark">احجز الآن</Link>
                </div>
              </div>
            </div>
</div>
            <div className="carousel-item">
              <div className="card p-3 text-center">
                <img src="/assets/4.webp" className="card-img-top" alt="Fullstack" />
                <div className="card-body">
                  <h4>كورس Fullstack</h4>
                  <p className="text-muted">
                    تعلم تطوير الواجهات الأمامية والخلفية وكن مطور ويب محترف.
                  </p>
                  <Link to="/course/fullstack" className="btn btn-dark">احجز الآن</Link>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="card p-3 text-center">
                <img src="/assets/6.jpg" className="card-img-top" alt="ICDL" />
                <div className="card-body">
                  <h4>كورس ICDL</h4>
                  <p className="text-muted">
                    تعلّم البرامج المكتبية الأساسية Word, Excel, PowerPoint باحتراف.
                  </p>
                  <Link to="/course/icdl" className="btn btn-dark">احجز الآن</Link>
                </div>
              </div>
            </div>

          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#courseCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#courseCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </section>

      {/* لمحة عن المنصة */}
      <section className="mb-5">
        <h3 className="mb-3">لمحة عن المنصة</h3>
        <div className="row g-3">
          <div className="col-md-4">
            <div className="card p-3 h-100 shadow-sm">
              <h5>رسالتنا</h5>
              <p className="text-muted mb-0">تبسيط التعلّم الرقمي وإتاحة فرص للجميع.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 h-100 shadow-sm">
              <h5>رؤيتنا</h5>
              <p className="text-muted mb-0">محتوى عربي احترافي يواكب السوق.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 h-100 shadow-sm">
              <h5>مميزاتنا</h5>
              <p className="text-muted mb-0">مشاريع عمليّة + متابعة تقدّم + شهادات.</p>
            </div>
          </div>
        </div>
      </section>

      {/* أشهر الكورسات */}
      <section>
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h3>أشهر الكورسات</h3>
          <Link to="/courses" className="btn btn-outline-primary">كل الكورسات</Link>
        </div>
        <div className="row" id="home-courses">
          {/* هنا ممكن تحطي الكورسات اللي عاوزة تعرضيها */}
        </div>
      </section>
    </>
  );
}

export default Home;
