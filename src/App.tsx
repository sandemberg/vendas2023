import { SafeAreaView } from "react-native"

import Login from "./modules/login";

const App = () => {

  const handleOnClick = () => {
    console.log('PASSOU O CLICK');
  }

  return (
    <SafeAreaView>
      <Login />
    </SafeAreaView>
  );
};



export default App;