import lawkanetImage from "../assets/clients/lawkanet.jpg";
import { clsx } from "clsx";
import martinImage from "../assets/clients/martin.jpg";
import tawwinImage from "../assets/clients/tawwin.jpg";
import thazinCherryImage from "../assets/clients/thazin_cherry.jpg";

const clients = [
  {
    name: "Tawwin",
    image: tawwinImage,
    color: "bg-amber-400/90",
  },
  {
    name: "Lawkanet",
    image: lawkanetImage,
    color: "bg-red-400/90",
  },
  {
    name: "Martin",
    image: martinImage,
    color: "bg-gray-400/90",
  },
  {
    name: "Thazin & Cherry",
    image: thazinCherryImage,
    color: "bg-green-400/90",
  },
];

export default function ClientSection() {
  return (
    <div className="py-24" id="getting-started">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-700">
          Our Clients
        </h2>
        <div className="flex gap-x-5">
          {clients.map((client, index) => {
            return (
              <figure key={index} className="group relative w-96">
                <img src={client.image} alt="" className="h-full w-full" />
                <div
                  className={clsx(
                    `absolute bottom-full left-0 right-0 flex h-0 flex-col items-center justify-center gap-y-3 overflow-hidden transition-all duration-150 ease-in-out group-hover:bottom-0 group-hover:h-full`,
                    client.color
                  )}
                >
                  <h3 className="text-2xl font-bold text-gray-50">
                    {client.name}
                  </h3>
                  <button
                    className={clsx(
                      "rounded-full border px-6 py-1 text-lg text-gray-50",
                      "hover:bg-indigo-600"
                    )}
                  >
                    Learn
                  </button>
                </div>
              </figure>
            );
          })}
        </div>
      </div>
    </div>
  );
}
