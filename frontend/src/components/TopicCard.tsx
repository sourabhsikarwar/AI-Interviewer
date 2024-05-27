"use client";

import { useAppContext } from "@/context";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface IProps {
  title: string;
  levels: string[];
  image: string;
  slug: string;
}

const TopicCard = ({ title, levels, image, slug }: IProps) => {
  const { dispatch } = useAppContext();
  const router = useRouter();

  const handleInterviewStart = (level: string, topic: string) => {
    dispatch({
      type: "SET_INITIAL_LEVEL_AND_TOPIC",
      payload: {
        level,
        topic,
      },
    });
    router.push(`/instructions`);
  };
  return (
    <div className="flex flex-col gap-3 items-center justify-center bg-blue-200 rounded-2xl p-4">
      <div className="rounded-lg w-full relative aspect-square mx-auto bg-white">
        <Image
          src={image}
          alt="AI Mock Interview"
          className="p-2"
          layout="fill"
        />
      </div>
      <h1 className="text-2xl text-blue-700 font-semibold">{title}</h1>
      <div className="flex flex-col gap-2 w-full">
        {levels.map((level, ind) => (
          <button
            onClick={() => {
              handleInterviewStart(level, slug);
            }}
            key={level}
            className={`text-sm font-semibold bg-blue-${(ind + 3) * 100} rounded-lg w-full my-1 p-3`}
          >
            {level}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TopicCard;
