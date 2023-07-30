import {Text, SafeAreaView, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import StyleSheet from 'styled-components/native';


const TextNew = styled.Text`
  font-size: 24px;
  color: red;
`



const App = () => {
  return (
    <SafeAreaView>
      <TouchableOpacity>
        <Text>clicar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

  

export default App;
