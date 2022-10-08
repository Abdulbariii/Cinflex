import React from "react";
import { useState } from "react";

export default function PlayMovies({ dataServer }) {
  const servers = [
    {
      nameServer: "Server 1",
      value: 8,
    },
    {
      nameServer: "Server 2",
      value: 3,
    },
    {
      nameServer: "Server 3",
      value: 4,
    },
    {
      nameServer: "Server 4",
      value: 1,
    },
    {
      nameServer: "Server 5",
      value: 6,
    },
    {
      nameServer: "Server 7",
      value: 7,
    },
  ];

  const [server, setServer] = useState(8);

  return (
    <div className=" flex gap-10 relative mt-20 w-full justify-between items-start">
      <iframe
        src={dataServer && dataServer[server].url}
        className="h-[30rem] w-[55rem] "
        title="Iframe Example"
      ></iframe>

      <div>
        <ul className="flex flex-col rounded-xl gap-2    ">
          {servers.map((server) => (
            <li
              onClick={() => {
                setServer(server.value);
              }}
              className="text-xl  p-3 bg-gradient-to-r text-white cursor-pointer from-[#f43f5d39] border-white"
              key={server.value}
            >
              {server.nameServer}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
