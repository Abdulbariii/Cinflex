import React from "react";
import { useState } from "react";
import Hr from "../lines/Hr";
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
    {
      nameServer: "Server 8",
      value: 2,
    },
  ];

  const [server, setServer] = useState(8);

  return (
    <div className=" flex gap-10 relative  w-full justify-between items-start">
      <iframe
        src={dataServer && dataServer[server].url}
        className="h-[31rem] rounded-md w-[55rem] "
        title="Iframe Example"
      ></iframe>

      <div>
        <ul className="flex flex-col bg-gradient-to-r from-[#f43f5d39] rounded-md gap-2    ">
          {servers.map((server) => (
            <div>
              <li
                onClick={() => {
                  setServer(server.value);
                }}
                className="text-xl hover:scale-110 transition-all  p-3  text-white cursor-pointer  "
                key={server.value}
              >
                {server.nameServer}
              </li>
              <Hr></Hr>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
