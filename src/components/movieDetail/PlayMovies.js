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

  const [serverUrl, setServerUrl] = useState(8);

  return (
    <div className="mt-32">
      <h1 className="text-4xl font-Main text-white  ">Watching</h1>
      <div className=" flex gap-10 relative  mt-5  w-full justify-between items-start">
        <iframe
          src={
            dataServer && dataServer[serverUrl].url && dataServer[serverUrl].url
          }
          className="h-[31rem] rounded-md w-[55rem] "
          title="Iframe Example"
        ></iframe>

        <div>
          <ul className=" flex-col  text-transparent items-center leading-snug font-Main  flex gap-10 text-2xl  text-white    ">
            {servers.map((server) => (
              <div>
                <li
                  onClick={() => {
                    setServerUrl(server.value);
                  }}
                  className={`text-sm cursor-pointer px-8 py-2  ${
                    server.value === serverUrl
                      ? "text-green-500 border-2  border-gray-50 bg-[#000000]"
                      : "bg-white text-black border-0"
                  }     transition-all font-Main hover:flex-col text-center flex items-center gap-8`}
                  key={server.value}
                >
                  {server.nameServer}
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
