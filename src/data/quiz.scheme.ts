import {quizList} from "./quiz.list";
import {QuizType} from "../types/general";

export const quizScheme: QuizType[] = [
  {
    name: "Start",
    index: 1,
    route: "/",
    isHideBtnNextScreen: true,
    data: {
      title: "",
      subTitle: "",
      text: "",
    },
  },

  ...quizList.map((item: QuizType) => ({
    ...item,
    index: 2 + item.index / 100,
    route: "quiz",
    isHideBtnNextScreen: true,
  })),
  {
    name: "ScreenCalculating",
    index: 8,
    route: "calculating",
    isHideBtnNextScreen: false,
    data: {
      title: "",
      text: "",
    },
  },
  {
    name: "ScreenEmail",
    index: 9,
    route: "email",
    isHideBtnNextScreen: true,
    data: {
      title: "",
      text: "",
    },
  },
  {
    name: "ScreenCheckout",
    index: 10,
    route: "checkout",
    isHideBtnNextScreen: true,
    data: {
      title: "",
    },
  },

  {
    name: "ThankYou",
    index: 11,
    route: "thank-you",
    isHideBtnNextScreen: true,
    data: {
      title: "",
    },
  },
];
