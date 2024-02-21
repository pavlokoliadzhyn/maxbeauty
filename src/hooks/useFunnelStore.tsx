import {useState} from "react";

const initialFunnelState = {
  scheme: [],
  quiz: [],
  quizStep: 0,
  currentScreen: {
    name: "Start",
    index: 1,
    route: "start",
    isHideBtnNextScreen: true,
  },
  user: {
    id: "",
    email: "",
  },
};

const useFunnelStore = () => {
  const [funnelState, setFunnelState] = useState(initialFunnelState);

  const initUser = (email: string) => {
    setFunnelState((prevState) => ({
      ...prevState,
      user: {
        ...prevState.user,
        email: email,
      },
    }));
    console.log(email);
  };

  const initScheme = () => {};

  return {
    funnelState,
    initUser,
    initScheme,
    // Other actions...
  };
};

export default useFunnelStore;
