import QuestionCard from "@/app/components/cards/QuestionCard";
import Filter from "@/app/components/shared/Filter";
import HomeFilters from "@/app/components/shared/home/HomeFilters";
import NoResult from "@/app/components/shared/NoResult";
import LocalSearchbar from "@/app/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";
import React from "react";

const questions = [
  {
    _id: 1,
    title: "What is the difference between JavaScript and TypeScript?",
    tags: [
      { _id: 1, name: "JavaScript" },
      { _id: 2, name: "TypeScript" },
    ],
    author: { _id: 1, name: "Alice", picture: "https://example.com/alice.jpg" },
    upvotes: 15,
    views: 200,
    answers: [],
    createdAt: new Date("2024-10-01"),
  },
  {
    _id: 2,
    title: "How to improve performance in React applications?",
    tags: [
      { _id: 3, name: "React" },
      { _id: 4, name: "Performance" },
    ],
    author: { _id: 2, name: "Bob", picture: "https://example.com/bob.jpg" },
    upvotes: 20,
    views: 350,
    answers: [{}, {}],
    createdAt: new Date("2024-10-02"),
  },
  {
    _id: 3,
    title: "What is async/await in JavaScript?",
    tags: [{ _id: 1, name: "JavaScript" }],
    author: {
      _id: 3,
      name: "Charlie",
      picture: "https://example.com/charlie.jpg",
    },
    upvotes: 18,
    views: 300,
    answers: [{}, {}, {}],
    createdAt: new Date("2024-10-03"),
  },
  {
    _id: 4,
    title: "How to set up a MongoDB cluster?",
    tags: [
      { _id: 5, name: "MongoDB" },
      { _id: 6, name: "Database" },
    ],
    author: { _id: 4, name: "Dave", picture: "https://example.com/dave.jpg" },
    upvotes: 10,
    views: 250,
    answers: [{}],
    createdAt: new Date("2024-10-04"),
  },
  {
    _id: 5,
    title: "What are the new features in Python 3.10?",
    tags: [
      { _id: 7, name: "Python" },
      { _id: 8, name: "Programming" },
    ],
    author: { _id: 5, name: "Emma", picture: "https://example.com/emma.jpg" },
    upvotes: 12,
    views: 275121212,
    answers: [],
    createdAt: new Date("2024-10-05"),
  },
  {
    _id: 6,
    title: "How does CSS Flexbox work?",
    tags: [
      { _id: 9, name: "CSS" },
      { _id: 10, name: "Flexbox" },
    ],
    author: { _id: 6, name: "Frank", picture: "https://example.com/frank.jpg" },
    upvotes: 22,
    views: 400,
    answers: [{}, {}, {}, {}],
    createdAt: new Date("2024-10-06"),
  },
  {
    _id: 7,
    title: "What is REST API, and how does it work?",
    tags: [
      { _id: 11, name: "API" },
      { _id: 12, name: "REST" },
    ],
    author: { _id: 7, name: "Grace", picture: "https://example.com/grace.jpg" },
    upvotes: 1500000,
    views: 222220,
    answers: [{}],
    createdAt: new Date("2024-10-07"),
  },
  {
    _id: 8,
    title: "How to handle state management in Vue.js?",
    tags: [
      { _id: 13, name: "Vue.js" },
      { _id: 14, name: "State Management" },
    ],
    author: { _id: 8, name: "Hank", picture: "https://example.com/hank.jpg" },
    upvotes: 17,
    views: 320,
    answers: [{}, {}],
    createdAt: new Date("2024-10-08"),
  },
  {
    _id: 9,
    title: "What is the use of Docker in development?",
    tags: [
      { _id: 15, name: "Docker" },
      { _id: 16, name: "DevOps" },
    ],
    author: { _id: 9, name: "Ivy", picture: "https://example.com/ivy.jpg" },
    upvotes: 25,
    views: 450,
    answers: [{}],
    createdAt: new Date("2024-10-09"),
  },
  {
    _id: 10,
    title: "How to implement authentication in a Next.js app?",
    tags: [
      { _id: 17, name: "Next.js" },
      { _id: 18, name: "Authentication" },
    ],
    author: { _id: 10, name: "Jake", picture: "https://example.com/jake.jpg" },
    upvotes: 35,
    views: 750,
    answers: [{}, {}, {}, {}],
    createdAt: new Date("2024-10-10"),
  },
];

const Home = () => {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href="/ask-questions" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no question to show"
            description="Be the first to break the silence! Ask a Question and kickstart the
        discussion. Our query could be the next big thing others learn from. Get
        involve!"
            link="/ask-questions"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
};

export default Home;
