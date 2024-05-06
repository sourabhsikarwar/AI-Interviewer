"use client";

import Image from "next/image";
import Link from "next/link";

interface IProps {
  title: string;
  levels: string[];
  image: string;
}

const TopicCard = ({ title, levels, image }: IProps) => {
  return (
    <div className="flex flex-col gap-3 items-center justify-center bg-gray-700 p-4">
      <Image src={image} alt="AI Mock Interview" width={200} height={200} />
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex flex-col gap-2">
        {levels.map((level) => (
          <Link
            href={`/${title}?level=${level.toLowerCase()}`}
            key={level}
            className="text-sm font-semibold"
          >
            {level}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopicCard;
