import React from "react";

export default function PlayMovies({ dataServer }) {
  return (
    <div className="h-[50vh] relative mt-20 w-full bg-red-200">
      <iframe
        src={dataServer && dataServer[8].url}
        className="absolute w-full h-full"
        title="Iframe Example"
      ></iframe>
    </div>
  );
}
