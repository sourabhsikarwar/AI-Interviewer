import TopicCard from "@/components/TopicCard";
import { topics } from "@/constants/tracks";

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-4 items-start p-8">
      <h1 className="text-2xl font-semibold text-center text-blue-500 mb-3">
        Select Topic to Practice
      </h1>
      <div className="grid grid-cols-4 gap-4 w-full">
        {topics.map((topic) => (
          <TopicCard
            key={topic.id}
            title={topic.title}
            slug={topic.slug}
            levels={topic.levels}
            image={topic.image}
          />
        ))}
      </div>
    </main>
  );
}
