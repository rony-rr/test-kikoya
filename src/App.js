import React, { useContext } from "react";

import { UserContext, UserProvider } from "./Context/UserContext";

/** Import Components */
import StackLogin from "./components/Stacks/StackLogin";
import StackNavigator from "./components/Stacks/StackNavigator";

function Router() {
  const { user } = useContext(UserContext);

  if (!user) return <StackLogin />;

  return <StackNavigator />;
}

function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}

export default App;
