import { SafeAreaView } from "react-native"
import { useState } from "react";

import Login from "./modules/login";
import ModalGlobal from "./shared/components/modal/Modal";
import ButtonGlobal from "./shared/components/button/Button";



const App = () => {

  const [modalVisible, setModalVisible] = useState(false);

  const handleOnClick = () => {
    console.log('PASSOU O CLICK');
  }

  return (
    <SafeAreaView>
      <ModalGlobal onCloseModal={() => setModalVisible(false)} visible={modalVisible} text='TEXTO TESTE' title='TITULO TESTE'/>
      <ButtonGlobal title='open' onPress={() => setModalVisible(true)}/>
      <Login />
    </SafeAreaView>
  ); 
};

export default App;