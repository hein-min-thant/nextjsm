import { SignedIn, UserButton } from "@clerk/nextjs";
import React from "react";

const AskQuestions = () => {
  return (
    <div>
      AskQuestions
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default AskQuestions;
