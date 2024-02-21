export type QuizAnswer = {
  imageUrl?: boolean;
  icon: string;
  text: string;
};

export type QuizType = {
  name: string;
  index: number;
  route: string;
  isHideBtnNextScreen: boolean;
  question?: string;
  subDescription?: string;
  description?: string;
  type?: "radio" | "checkbox";
  answers?: QuizAnswer[] | [];
  data?: {
    image?: string;
    title?: string;
    subTitle?: string;
    text?: string;
    additionText?: string;
  };
  info?: {
    imageUrl?: boolean;
    icon: string;
    subTitle?: string;
    text: string;
  };
};

export type ScreenType = {
  name: string;
  index: number;
  isHideBtnNextScreen?: boolean;
  route: string;
  data?: {
    title: string;
    text: string;
  };
};

export type ReviewListType = {
  name: string;
  date: string;
  author: string;
  text: string;
};
