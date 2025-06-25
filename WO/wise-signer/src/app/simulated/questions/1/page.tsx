"use client";

import QuestionPage from "@/components/QuestionPage";

export default function NumberedQuestionPage() {
  try {
    return <QuestionPage questionId={1} />;
  } catch (err) {
    return <div style={{ color: "red", padding: 32 }}>Runtime error: {String(err)}</div>;
  }
}