import Lottie from "lottie-react";
import businessLottie from "../assets/tran.json";

export default function MakeTheRightMoveSection() {
  return (
    <section className="py-18 bg-gradient-to-bl from-purple-200 via-purple-400 to-purple-800">
      <div className="mx-auto flex max-w-7xl items-center gap-x-12">
        <div>
          <h2 className="text-4xl font-bold text-gray-50">
            Make the right move:
          </h2>
          <h3 className="text-3xl font-bold text-red-700">Business Move</h3>
          {/*  dash */}
          <div className="mt-3 h-1 w-24 bg-gray-300" />
          <p className="mt-8 max-w-4xl leading-relaxed text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            quaerat consequatur maiores facilis reprehenderit, ipsa ut tempore
            dolorum quasi! Labore harum ipsum, at corrupti ab molestiae! Nemo
            quasi itaque cumque.Lorem ipsum dol
          </p>
        </div>
        {/* lottie image */}
        <div>
          <Lottie
            animationData={businessLottie}
            loop={true}
            style={{ width: "600px", height: "600px" }}
          />
        </div>
      </div>
    </section>
  );
}
