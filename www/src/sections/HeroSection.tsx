import gameControllerImage from "../assets/game_controller.png";
import lawKaNatWebImage from "../assets/lawkanatweb.png";
import privatedLyChatImage from "../assets/privately_chat.png";
import socketIoImage from "../assets/socket_io.png";
import twhhImage from "../assets/twhh.png";

export default function HeroSection() {
  return (
    <div className="bg-indigo-800 py-10">
      <h1 className="text-center text-5xl font-bold tracking-tighter text-white">
        Build App For Your Business
      </h1>
      {/*  images */}

      <div className="mx-auto max-w-3xl py-14">
        {/*  gallery */}
        <div className="grid grid-cols-9 grid-rows-2">
          <figure className="col-span-full sm:col-span-4">
            <img src={lawKaNatWebImage} alt="Law Ka Nat" />
          </figure>
          <figure className="col-span-full row-span-2 flex sm:col-span-2 ">
            <img src={privatedLyChatImage} alt="" />
          </figure>
          <figure className="col-span-full sm:col-span-3">
            <img src={socketIoImage} alt="" />
          </figure>
          <figure className="col-span-full sm:col-span-4">
            <img src={gameControllerImage} alt="" />
          </figure>
          <figure className="col-span-full sm:col-span-3">
            <img src={twhhImage} alt="" />
          </figure>
        </div>
      </div>

      {/* srevice overview */}
      <div className="mx-auto  flex max-w-3xl flex-col gap-y-3 text-center ">
        <p className=" text-3xl tracking-tight text-white">
          We are providing many colorful features to your enterpirse busniess.
          You can customize your features depending on your requirements. We are
          here for your service.
        </p>
        <div className="mt-4">
          <button className="mb-0.5  inline-flex  justify-center rounded-full bg-white px-5  py-2.5 pl-3 pr-4 font-medium text-blue-500 hover:bg-white/90 hover:text-blue-600">
            Getting Started
          </button>
        </div>
      </div>
    </div>
  );
}
