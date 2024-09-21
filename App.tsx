import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthNavigator } from "./app/screens/navigation";

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default App;
