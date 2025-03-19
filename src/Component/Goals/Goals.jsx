import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import gaol from "../../assets/Goal.svg";
const Goals = () => {
  const goaldata = [
    {
      id: 1,
      image: gaol,
      title: "01 تطوير الأنظمة",
      description:
        "نقوم بتطوير أنظمة برمجية متكاملة مخصصة لتلبية احتياجات عملك بأحدث التقنيات وأفضل الممارسات الرقمية.",
    },
    {
      id: 2,
      image: gaol,
      title: "02 تطوير التطبيقات",
      description:
        "نقوم بتصميم وتطوير تطبيقات ذكية تلبي متطلبات السوق الحديثة مع تجربة مستخدم رائعة.",
    },
    {
      id: 2,
      image: gaol,
      title: "02 تطوير التطبيقات",
      description:
        "نقوم بتصميم وتطوير تطبيقات ذكية تلبي متطلبات السوق الحديثة مع تجربة مستخدم رائعة.",
    },
    {
      id: 2,
      image: gaol,
      title: "02 تطوير التطبيقات",
      description:
        "نقوم بتصميم وتطوير تطبيقات ذكية تلبي متطلبات السوق الحديثة مع تجربة مستخدم رائعة.",
    },
  ];
  return (
    <>
      <div
        className=" container p-5  mt-4 rounded-4 mb-4"
        style={{ backgroundColor: "#4318FF0F" }}
      >
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
          className="mySwiper "
        >
          {goaldata.map((goal) => (
            <SwiperSlide key={goal.id}>
              <div className="position-relative rounded-4 overflow-hidden  mb-5">
                <img
                  src={goal.image}
                  alt={goal.title}
                  className="img-fluid w-100"
                  style={{ objectFit: "cover", height: "250px" }}
                />
                <div
                  className="position-absolute bottom-0 w-100 p-3 text-end"
                  style={{
                    backgroundColor: "#1A008D66",
                  }}
                >
                  <h5 className="text-white fw-bold">{goal.title}</h5>
                  <p className="text-white m-0">{goal.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Goals;
