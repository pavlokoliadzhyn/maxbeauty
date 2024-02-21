import {createBrowserRouter} from "react-router-dom";
import {SchemeRoute} from "../types/schemeRouterName";
import {MainLayout} from "../layouts";
import {QuizPage} from "../pages";
import {EmailPage} from "../pages";
import {CalculatingPage} from "../pages";
import {ResultPage} from "../pages";
import {ErrorPage} from "../pages";
import {StartScreen} from "../containers";
import {CheckoutScreen} from "../containers/";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: SchemeRoute.Root,
        element: <StartScreen />,
      },
      {
        path: SchemeRoute.Quiz,
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
        path: SchemeRoute.Checkout,
        element: <CheckoutScreen />,
      },
      {
        path: SchemeRoute.Email,
        element: <EmailPage />,
      },
      {
        path: "/terms-of-use",
        element: <EmailPage />,
      },
    ],
  },
]);
