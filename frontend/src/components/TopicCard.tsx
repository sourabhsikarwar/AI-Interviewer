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
    <div className="flex flex-col gap-3 items-center justify-center bg-gray-700 p-4">
      <Image src={image} alt="AI Mock Interview" width={200} height={200} />
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex flex-col gap-2">
        {levels.map((level) => (
          <button
            onClick={() => {
              handleInterviewStart(level, slug);
            }}
            key={level}
            className="text-sm font-semibold"
          >
            {level}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TopicCard;
