import React from "react";

export default function NewestMovie() {
  return (
    <div className="">
      <h1 className="text-white mb-2 font-Main">Newest Movies</h1>
      <div className="flex flex-col gap-2 h-64 w-80">
        <div className="flex gap-2">
          <div className="w-40 h-28">
            <img
            alt=""
              src="https://www.dc.com/sites/default/files/Char_Gallery_Batman_theBatman2022_6219aca46b90e9.75519854.jpg"
              className="w-full h-full object-cover"
            />
            <h1></h1>
          </div>
          <div className="w-40 h-28">
            <img
            alt=""
              src="https://static.dc.com/2022-10/BLKADM_INSTA_MAIN_1936x1936_DOM_NP.jpg?w=960"
              className="w-full h-full object-cover"
            />
            <h1></h1>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="w-40 h-40">
            <img
            alt=""
              src="https://www.dc.com/sites/default/files/Movies-Gallery_GreenLanternBMPGL-Beware%20Power%20CREA-01_62df59c5768fa5.86906156.jpg"
              className="w-full h-full object-cover"
            />
            <h1></h1>
          </div>
          <div className="w-40 h-40">
            <img
            alt=""
              src="https://media.npr.org/assets/artslife/movies/2010/09/social-network/garfield-eisenberg_wide-96b2fdc6b0549c0d9f48395eccbb844160f74244-s900-c85.webp"
              className="w-full h-full object-cover"
            />
            <h1></h1>
          </div>
        </div>
      </div>
    </div>
  );
}
