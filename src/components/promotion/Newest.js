import React from "react";

export default function Newest() {
  return (
    <div className="flex gap-10 items-center w-full h-[40vh] py=5">
      <div className="flex flex-col gap-10 w-96 h-96">
        <div className="w-full h-36">
          <img
            className="w-full h-full object-cover"
            src="https://lumiere-a.akamaihd.net/v1/images/image_3bcade0d.jpeg?region=0%2C0%2C540%2C810"
          />
        </div>
        <div className="w-full h-36 flex gap-10 ">
          <img
            className="w-full h-full object-cover"
            src="https://lumiere-a.akamaihd.net/v1/images/image_7a458b50.jpeg?region=0%2C0%2C540%2C810"
          />
          <img
            className="w-full h-full object-cover"
            src="https://lumiere-a.akamaihd.net/v1/images/image_b8433a3d.jpeg?region=0%2C0%2C540%2C810"
          />
        </div>
      </div>
      <div className=" h-96 w-72">
        <img
          className="w-full h-full object-cover"
          src="https://im.rediff.com/movies/2022/mar/04the-batman1.jpg?w=670&h=900"
        />
      </div>
    </div>
  );
}
