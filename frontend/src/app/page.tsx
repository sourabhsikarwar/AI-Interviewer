import TopicCard from "@/components/TopicCard";
import { topics } from "@/constants/tracks";

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-4 items-start p-8">
      <h1 className="text-3xl font-bold text-center">
        Select Topic to Practice
      </h1>
      <div className="grid grid-cols-3 gap-4">
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
