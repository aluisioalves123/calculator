import { useFonts, Inter_700Bold, Inter_400Regular } from '@expo-google-fonts/inter';
import { Text, View, SafeAreaView } from 'react-native';
import useStore from './src/store'

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import Keyboard from './src/components/Keyboard';

export default function App() {
  const result = useStore(state => state.result)
  const firstNumber = useStore(state => state.firstNumber)
  const operation = useStore(state => state.operation)
  const secondNumber = useStore(state => state.secondNumber)

  let [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_400Regular
  });

  if (!fontsLoaded) {
    return null;
  }

  const operationSymbol = () => {
    switch (operation) {
      case "+":
        return 'plus'
        break
      case "-":
        return 'minus'
        break
      case "x":
        return 'times'
        break
      case "/":
        return 'divide'
        clearKeyboard()
        break
    }
  } 

  return (
    <SafeAreaView className="flex flex-col" style={{backgroundColor: '#23222D'}}>
      <View className="flex basis-2/5 justify-end items-end p-8">
        <View className='flex flex-row items-center pr-1'>
          <Text className='text-white pr-4 text-2xl tracking-widest'>{firstNumber}</Text>
          <FontAwesome5 name={operationSymbol()} size={18} color='#FF6471' />
          <Text className='text-white pl-4 text-2xl tracking-widest'>{secondNumber}</Text>
        </View>
        <View className='flex flex-row'>
          <Text className='text-white text-5xl' style={{fontFamily: 'Inter_700Bold'}}>{result}</Text>
        </View>
        
      </View>
      <Keyboard />
    </SafeAreaView>
  );
}
