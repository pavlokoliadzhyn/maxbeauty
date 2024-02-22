import {createBrowserRouter} from "react-router-dom";

import {MainLayout} from "../layouts";
import {QuizPage} from "../pages";
import {EmailPage} from "../pages";
import {RegistartionScreen} from "../pages/Registration";
import {CalculatingPage} from "../pages";
import {ResultPage} from "../pages";
import {ErrorPage} from "../pages";
import {StartScreen} from "../containers";
import {CheckoutScreen} from "../containers/";
import {SimplePage} from "../pages/SimplePage";

import {TermsOfUse} from "../_schemes/pages/TermsOfUse";
import {PrivacyPolicy} from "../_schemes/pages/PrivacyPolicy";
import {MoneyBackPolicy} from "../_schemes/pages/money.back.policy";
import {SubscriptionPolicy} from "../_schemes/pages/subscription.terms";
import {CookiePolicy} from "../_schemes/pages/cookie.policy";

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
        element: <QuizPage />,
      },
      {
        path: "/result",
        element: <ResultPage />,
      },
      {
        path: "/calculating",
        element: <CalculatingPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutScreen />,
      },
      {
        path: "/registration",
        element: <RegistartionScreen />,
      },
      {
        path: "/email",
        element: <EmailPage />,
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
