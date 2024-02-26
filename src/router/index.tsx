import {createBrowserRouter} from "react-router-dom";

import {
  MainLayout,
  StartScreen,
  QuizScreen,
  EmailScreen,
  RegistrationScreen,
  ResultScreen,
  CheckoutScreen,
} from "../layouts";

import {ErrorPage, SimplePage} from "../pages";

import {TermsOfUse} from "../data/pages/TermsOfUse";
import {PrivacyPolicy} from "../data/pages/PrivacyPolicy";
import {MoneyBackPolicy} from "../data/pages/money.back.policy";
import {SubscriptionPolicy} from "../data/pages/subscription.terms";
import {CookiePolicy} from "../data/pages/cookie.policy";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        element: <StartScreen />,
      },
      {
        path: "/quiz",
        element: <QuizScreen />,
      },
      {
        path: "/result",
        element: <ResultScreen />,
      },
      {
        path: "/email",
        element: <EmailScreen />,
      },
      {
        path: "/checkout",
        element: <CheckoutScreen />,
      },
      {
        path: "/registration",
        element: <RegistrationScreen />,
      },
      {
        path: "/terms-of-use",
        element: <SimplePage content={TermsOfUse} />,
      },
      {
        path: "/privacy-policy",
        element: <SimplePage content={PrivacyPolicy} />,
      },
      {
        path: "/money-back-policy",
        element: <SimplePage content={MoneyBackPolicy} />,
      },
      {
        path: "/subscription-terms",
        element: <SimplePage content={SubscriptionPolicy} />,
      },
      {
        path: "/cookie-policy",
        element: <SimplePage content={CookiePolicy} />,
      },
    ],
  },
]);
