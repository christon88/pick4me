import React from "react";
import firebase from "../Firebase/Firebase";

const useAuth = () => {
  const [state, setState] = React.useState(() => {
    const user = firebase.auth().currentUser;
    return { initializing: !user, user };
  });
  const onChange = user => {
    setState({ initializing: false, user });
  };

  React.useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(onChange);

    return () => unsubscribe();
  }, []);

  return state;
};

export default useAuth;
