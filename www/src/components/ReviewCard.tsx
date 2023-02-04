interface IReviewCardProps {
  authorName: string;
  jobTitle: string;
  image: string;
  description: string;
}
export default function ReviewCard({
  authorName,
  jobTitle,
  image,
  description,
}: IReviewCardProps) {
  return (
    <div className="flex w-full flex-col gap-y-5 rounded-lg bg-white px-4 py-8">
      {/*  card header */}
      <div className="flex gap-x-2">
        <img className="h-16 w-16 rounded-full" src={image} alt={authorName} />
        <div>
          <h3 className="text-xl font-bold text-gray-900">{authorName}</h3>
          <h4 className="text-gray-800">{jobTitle}</h4>
        </div>
      </div>
      {/* card body */}
      <p className="text-sm leading-5 text-gray-700/80">{description}</p>
    </div>
  );
}
