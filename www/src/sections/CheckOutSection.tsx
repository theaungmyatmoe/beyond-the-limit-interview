// @ts-ignore
import Carousel from "react-grid-carousel";
import ReviewCard from "../components/ReviewCard";

const reviews = [
  {
    authorName: "Aung Myat Moe",
    jobTitle: "CEO of Google",
    image:
      "https://avatars.githubusercontent.com/u/65492233?s=400&u=ce98093c5b78320d3b7e7d11918dc627390b1f4d&v=4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    authorName: "Aung Myat Moe",
    jobTitle: "CEO of Google",
    image:
      "https://avatars.githubusercontent.com/u/65492233?s=400&u=ce98093c5b78320d3b7e7d11918dc627390b1f4d&v=4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    authorName: "Aung Myat Moe",
    jobTitle: "CEO of Google",
    image:
      "https://avatars.githubusercontent.com/u/65492233?s=400&u=ce98093c5b78320d3b7e7d11918dc627390b1f4d&v=4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    authorName: "Aung Myat Moe",
    jobTitle: "CEO of Google",
    image:
      "https://avatars.githubusercontent.com/u/65492233?s=400&u=ce98093c5b78320d3b7e7d11918dc627390b1f4d&v=4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
];
export default function CheckOutSection() {
  return (
    <div className="mx-auto  bg-indigo-800 py-14">
      <div className="mx-auto mb-8 max-w-7xl">
        {/*  headings */}
        <div>
          <h3 className="text-center text-4xl font-bold text-white">
            Check Review
          </h3>
          <h3 className="text-center text-4xl font-bold tracking-wider text-white">
            Recent Review
          </h3>

          {/* review card */}
          <div className="mt-8">
            <Carousel cols={3} rows={1} gap={10} loop>
              {reviews.map((review, index) => (
                <Carousel.Item key={index}>
                  <ReviewCard {...review} />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
