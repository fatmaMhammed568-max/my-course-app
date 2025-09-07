import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

function Home() {
  return (
    <>
      {/* Hero Section */}
<section
  className="hero mb-5 d-flex align-items-center justify-content-center text-center"
  style={{ minHeight: "90vh" }}
>
  <div className="row w-100">
    <div className="col-12">
      <h1 className="fw-bold mb-3 display-4">
        منصّة Smart Skills Academy — تعلم باحتراف وبساطة
      </h1>
      <p className="lead">
        دورات عملية ومحتوى واضح، دروس قصيرة، ومشاريع تطبيقيّة تجهزك لسوق العمل.
      </p>
    <Link 
  to="/courses" 
  className="btn btn-primary btn-lg" 
  style={{ marginTop: "100px" }}
>
  ابدأ التعلّم الآن
</Link>


    </div>
  </div>
</section>



   <section className="mb-5">
  <h3 className="mb-3">كورسات مميزة</h3>

  <div
    id="courseCarousel"
    className="carousel slide"
    data-bs-ride="carousel"
    data-bs-interval="1000"
  >
    <div className="carousel-inner">

      {/* السلايد الأول */}
      <div className="carousel-item active">
        <div className="row">
          <div className="col-md-4">
            <div className="card p-2 text-center shadow-sm" style={{ fontSize: "0.9rem" }}>
              <img src="/assets/8.jpg" className="card-img-top" alt="English" />
              <div className="card-body">
                <h5>كورس English</h5>
                <p className="text-muted mb-2">
                  تطوير مهاراتك في القراءة، الكتابة، التحدث والاستماع، لجميع المستويات.
                </p>
                <Link to="/course/english-course" className="btn btn-dark btn-sm">
                  احجز الآن
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-2 text-center shadow-sm" style={{ fontSize: "0.9rem" }}>
              <img src="/assets/4.webp" className="card-img-top" alt="Fullstack" />
              <div className="card-body">
                <h5>كورس Fullstack</h5>
                <p className="text-muted mb-2">
                  تعلم تطوير الواجهات الأمامية والخلفية وكن مطور ويب محترف.
                </p>
                <Link to="/course/fullstack" className="btn btn-dark btn-sm">
                  احجز الآن
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-2 text-center shadow-sm" style={{ fontSize: "0.9rem" }}>
              <img src="/assets/6.jpg" className="card-img-top" alt="ICDL" />
              <div className="card-body">
                <h5>كورس ICDL</h5>
                <p className="text-muted mb-2">
                  تعلّم البرامج المكتبية الأساسية Word, Excel, PowerPoint باحتراف.
                </p>
                <Link to="/course/icdl" className="btn btn-dark btn-sm">
                  احجز الآن
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

   
      <div className="carousel-item">
        <div className="row">
          <div className="col-md-4">
            <div className="card p-2 text-center shadow-sm" style={{ fontSize: "0.9rem" }}>
              <img src="/assets/7.jpg" className="card-img-top" alt="Graphic Design" />
              <div className="card-body">
                <h5>كورس Graphic Design</h5>
                <p className="text-muted mb-2">
                  تعلم تصميم الشعارات والبنرات باستخدام Photoshop و Illustrator.
                </p>
                <Link to="/course/graphic" className="btn btn-dark btn-sm">
                  احجز الآن
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-2 text-center shadow-sm" style={{ fontSize: "0.9rem" }}>
              <img src="/assets/9.jpg" className="card-img-top" alt="Python" />
              <div className="card-body">
                <h5>كورس Python</h5>
                <p className="text-muted mb-2">
                  تعلم البرمجة من الصفر حتى تطوير تطبيقات باستخدام Python.
                </p>
                <Link to="/course/python" className="btn btn-dark btn-sm">
                  احجز الآن
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-2 text-center shadow-sm" style={{ fontSize: "0.9rem" }}>
              <img src="/assets/10.jpg" className="card-img-top" alt="Digital Marketing" />
              <div className="card-body">
                <h5>كورس Digital Marketing</h5>
                <p className="text-muted mb-2">
                  اتقن التسويق الإلكتروني عبر السوشيال ميديا والإعلانات الممولة.
                </p>
                <Link to="/course/marketing" className="btn btn-dark btn-sm">
                  احجز الآن
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  <button
  className="carousel-control-prev"
  type="button"
  data-bs-target="#courseCarousel"
  data-bs-slide="prev"
>
  <span
    className="carousel-control-prev-icon"
    style={{ filter: "invert(29%) sepia(98%) saturate(6503%) hue-rotate(200deg) brightness(95%) contrast(97%)" }}
  ></span>
</button>

<button
  className="carousel-control-next"
  type="button"
  data-bs-target="#courseCarousel"
  data-bs-slide="next"
>
  <span
    className="carousel-control-next-icon"
    style={{ filter: "invert(29%) sepia(98%) saturate(6503%) hue-rotate(200deg) brightness(95%) contrast(97%)" }}
  ></span>
</button>

  </div>
</section>

    
      <section className="mb-5">
  <h3 className="mb-4">لمحة عن المنصة</h3>
  <div className="row g-4">
    <div className="col-md-4">
      <div className="card p-5 h-100 shadow-lg text-center">
        <h4 className="fw-bold mb-3">رسالتنا</h4>
        <p className="text-muted fs-5">تبسيط التعلّم الرقمي وإتاحة فرص للجميع.</p>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card p-5 h-100 shadow-lg text-center">
        <h4 className="fw-bold mb-3">رؤيتنا</h4>
        <p className="text-muted fs-5">محتوى عربي احترافي يواكب السوق.</p>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card p-5 h-100 shadow-lg text-center">
        <h4 className="fw-bold mb-3">مميزاتنا</h4>
        <p className="text-muted fs-5">مشاريع عمليّة + متابعة تقدّم + شهادات.</p>
      </div>
    </div>
  </div>
</section>

   
     <section>
  <div className="d-flex align-items-center justify-content-between mb-3">
    <h3>أشهر الكورسات</h3>
    <Link to="/courses" className="btn btn-outline-primary">
      كل الكورسات
    </Link>
  </div>

  <div className="row" id="home-courses">

    <div className="col-md-4 mb-4">
      <div className="card h-100 text-center shadow-sm">
        <img src="/assets/8.jpg" className="card-img-top" alt="English" />
        <div className="card-body">
          <h5 className="card-title">كورس English</h5>
          <p className="card-text text-muted">
            تطوير مهارات القراءة، الكتابة، التحدث والاستماع، لجميع المستويات.
          </p>
          <Link to="/course/english-course" className="btn btn-dark">
            احجز الآن
          </Link>
        </div>
      </div>
    </div>

    <div className="col-md-4 mb-4">
      <div className="card h-100 text-center shadow-sm">
        <img src="/assets/4.webp" className="card-img-top" alt="Fullstack" />
        <div className="card-body">
          <h5 className="card-title">كورس Fullstack</h5>
          <p className="card-text text-muted">
            تعلم تطوير الواجهات الأمامية والخلفية وكن مطور ويب محترف.
          </p>
          <Link to="/course/fullstack" className="btn btn-dark">
            احجز الآن
          </Link>
        </div>
      </div>
    </div>

   
    <div className="col-md-4 mb-4">
      <div className="card h-100 text-center shadow-sm">
        <img src="/assets/6.jpg" className="card-img-top" alt="ICDL" />
        <div className="card-body">
          <h5 className="card-title">كورس ICDL</h5>
          <p className="card-text text-muted">
            تعلّم البرامج المكتبية Word, Excel, PowerPoint باحتراف.
          </p>
          <Link to="/course/icdl" className="btn btn-dark">
            احجز الآن
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
}

export default Home;
