import React from "react";

function CardsDash({ initColor, finColor, icon, title }) {
  return (
    <div className="bg-white rounded-[20px] cursor-pointer border-[5px] border-white shadow-lg transform duration-700 hover:scale-[1.02] overflow-hidden">
      <div
        className={` bg-gradient-to-bl h-[100px] md:h-[120px]  grid place-content-center`}
        style={{
          borderRadius: "100% 0% 80% 0% / 0% 50% 50% 100%",
          background: `linear-gradient(to bottom left, ${initColor}, ${finColor})`,
        }}
      >
        {icon}
      </div>

      <div className="text-[#616161] flex flex-col justify-center items-center w-[60%] mx-auto">
        <h1 className="text-center uppercase text-[16px] font-medium mt-3 mb-5">
          {title}
        </h1>
      </div>
    </div>
  );
}

export default CardsDash;
