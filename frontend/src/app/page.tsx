import TopicCard from "@/components/TopicCard";

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-4 items-start p-8">
      <h1 className="text-3xl font-bold text-center">Select Topic to Practice</h1>
      <div className="grid grid-cols-3 gap-4">
        <TopicCard
          title="AI Mock Interview"
          levels={["Beginner", "Intermediate", "Advanced"]}
          image="/images/tests/node.png"
        />
        <TopicCard
          title="Resume Review"
          levels={["Beginner", "Intermediate", "Advanced"]}
          image="/images/tests/node.png"
        />
        <TopicCard
          title="Analysis"
          levels={["Beginner", "Intermediate", "Advanced"]}
          image="/images/tests/node.png"
        />
        <TopicCard
          title="Resources"
          levels={["Beginner", "Intermediate", "Advanced"]}
          image="/images/tests/node.png"
        />
        <TopicCard
          title="Blog"
          levels={["Beginner", "Intermediate", "Advanced"]}
          image="/images/tests/node.png"
        />
      </div>
    </main>
  );
}
