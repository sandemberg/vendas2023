import { Button, SafeAreaView } from "react-native"
import { useState } from "react";

import Login from "./modules/login";
import Modal from "./shared/components/modal/modal";



const App = () => {

  const [modalVisible, setModalVisible] = useState(false);

  const handleOnClick = () => {
    console.log('PASSOU O CLICK');
  }

  return (
    <SafeAreaView>
       <Modal onCloseModal={() => setModalVisible(false)} visible={modalVisible} text='TEXTO TESTE' title='TITULO TESTE'/>
      <Button title='open' onPress={() => setModalVisible(true)}/>
      <Login />
    </SafeAreaView>
  ); 
};



export default App;