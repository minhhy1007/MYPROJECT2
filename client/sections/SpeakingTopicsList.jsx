// ../sections/SpeakingTopicsList.jsx
import React from "react";
import SpeakingTopicCard from "../components/SpeakingTopicCard";

const speakingTopics = [
  {
    title: "Luyện phát âm",
    subtitle: "Từ vựng chứa âm /e/ð/æ/",
    image: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
  },
  {
    title: "Luyện trả lời câu hỏi",
    subtitle: "Chủ đề Travel",
    image: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
  },
  {
    title: "IELTS Speaking part 1",
    subtitle: "Chủ đề Study",
    image: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
  },
];

function SpeakingTopicsList() {
  return (
    <div
      className="d-flex flex-column gap-4 w-100"
      style={{ maxWidth: "850px" }}
    >
      {speakingTopics.map((topic, i) => (
        <SpeakingTopicCard key={i} topic={topic} />
      ))}
    </div>
  );
}
export default SpeakingTopicsList;
