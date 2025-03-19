import React from "react";
import discover from "../../assets/discover.svg";
const Discover = () => {
  return (
    <div className="mt-3 max-w-4xl relative" style={{ marginLeft: "10%" }}>
      <img
        src={discover}
        alt="لوحة التحكم"
        className="w-full rounded-lg shadow-lg"
      />
      <p className="paragraph-discover">
        عالم التكنولوجيا بات أقرب إليك من أي وقت مضى، حيث يمكنك استكشاف
        <br />
        أحدث الابتكارات والاتجاهات بنقرة واحدة!{" "}
      </p>
    </div>
  );
};

export default Discover;
