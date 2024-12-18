import Question from "@/app/components/forms/Question";
import React from "react";

const AskQuestions = () => {
  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask a question</h1>
      <div className="mt-9">
        <Question />
      </div>
    </div>
  );
};

export default AskQuestions;
