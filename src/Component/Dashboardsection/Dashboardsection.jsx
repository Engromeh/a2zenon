import React from "react";
import dashbordnew from "../../assets/Group 1597883210.svg";

const DashboardSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center bg-gradient-to-b from-[#5a00c4] to-[#3a0078] py-16 px-4 text-center text-white mt-4">
      <h3 className="heeder-dash text-sm font-light">
        لوحات تحكم و مواقع تعريفية
      </h3>
      <h2 className="body-dash text-2xl font-bold mt-2 max-w-2xl">
        تقدر تعمل سيستم متكامل او ويب
        <br />
        سايت خاص بيك مع لوحة تحكم خاصة
      </h2>
      <div className="mt-2 max-w-4xl">
        <img
          src={dashbordnew}
          alt="لوحة التحكم"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default DashboardSection;
