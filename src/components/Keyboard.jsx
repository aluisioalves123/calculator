import React from 'react';
import { View, Text } from 'react-native';
import Button from './Button'
import ButtonText from './ButtonText'
import ButtonIcon from './ButtonIcon'
import Row from './Row'

import useStore from '../store'

const Keyboard = () => {
  const [firstNumber, setFirstNumber] = React.useState("");
  const [secondNumber, setSecondNumber] = React.useState("");
  const [operation, setOperation] = React.useState("");

  const changeResult = useStore((state) => state.changeResult);
  const changeFirstNumber = useStore((state) => state.changeFirstNumber);
  const changeSecondNumber = useStore((state) => state.changeSecondNumber);
  const changeOperation = useStore((state) => state.changeOperation);

  const handleNumberPress = (buttonValue) => {
    if (operation == '') {
      console.log("firstnumber")
      setFirstNumber(firstNumber + buttonValue)
      changeFirstNumber(firstNumber + buttonValue)
    } else {
      setSecondNumber(secondNumber + buttonValue)
      changeSecondNumber(secondNumber + buttonValue)
    }

    console.log(operation)
  }

  const handleOperationPress = (buttonValue) => {
    setOperation(buttonValue)
    changeOperation(buttonValue)
  }

  const clear = () => {
    setFirstNumber("")
    setSecondNumber("")
    setOperation("")
  }

  const allClear = () => {
    setFirstNumber("")
    setSecondNumber("")
    setOperation("")

    changeFirstNumber(null)
    changeSecondNumber(null)
    changeOperation(null)
    changeResult(null)
  }

  const getResult = () => {
    switch (operation) {
      case "+":
        changeResult(parseInt(secondNumber) + parseInt(firstNumber))
        clear()
        break
      case "-":
        changeResult(parseInt(secondNumber) - parseInt(firstNumber))
        clear()
        break
      case "x":
        changeResult(parseInt(secondNumber) + parseInt(firstNumber))
        clear()
        break
      case "/":
        changeResult(parseInt(secondNumber) + parseInt(firstNumber))
        clear()
        break
      default:
        changeResult(0)
        clear()
        break
    }
  }

  return (
    <View className="flex flex-col flex-wrap basis-3/5 p-6 justify-between rounded-t-3xl" style={{backgroundColor: '#2A2A36'}}>
      <Row>
        <Button onPress={() => allClear()}>
          <ButtonText color='#00FFD7' text='AC' />
        </Button>
        <Button>
          <View>
            <Text style={{color: '#00FFD7', position: 'absolute', fontWeight: 'bold', fontSize: 16, marginTop: -16, marginLeft: -10}}>+</Text>
            <Text style={{color: '#00FFD7', position: 'absolute', fontWeight: 'bold', fontSize: 24, marginTop: -16, marginLeft: -2}}>/</Text>
            <Text style={{color: '#00FFD7', position: 'absolute', fontWeight: 'bold', fontSize: 24, marginTop: -13, marginLeft: 7}}>-</Text>
          </View>
        </Button>
        <Button>
          <ButtonIcon icon="percent" color='#00FFD7' />
        </Button>
        <Button>
          <ButtonIcon icon="divide" color='#FF6471' />
        </Button>
      </Row>
      <Row>
        <Button onPress={() => handleNumberPress("7")}>
          <ButtonText text='7' color='#fff' />
        </Button>
        <Button onPress={() => handleNumberPress("8")}>
          <ButtonText text='8' color='#fff'/>
        </Button>
        <Button onPress={() => handleNumberPress("9")}>
          <ButtonText text='9' color='#fff'/>
        </Button>
        <Button onPress={() => handleOperationPress("x")}>
          <ButtonIcon icon='times' color='#FF6471'/>
        </Button>
      </Row>
      <Row>
        <Button onPress={() => handleNumberPress("4")}>
          <ButtonText text='4' color='#fff'/>
        </Button>
        <Button onPress={() => handleNumberPress("5")}>
          <ButtonText text='5' color='#fff'/>
        </Button>
        <Button onPress={() => handleNumberPress("6")}>
          <ButtonText text='6' color='#fff'/>
        </Button>
        <Button onPress={() => handleOperationPress("-")}>
          <ButtonIcon icon='minus' color='#FF6471'/>
        </Button>
      </Row>
      <Row>
        <Button onPress={() => handleNumberPress("1")}>
          <ButtonText text='1' color='#fff'/>
        </Button>
        <Button onPress={() => handleNumberPress("2")}>
          <ButtonText text='2' color='#fff'/>
        </Button>
        <Button onPress={() => handleNumberPress("3")}>
          <ButtonText text='3' color='#fff'/>
        </Button>
        <Button onPress={() => handleOperationPress("+")}>
          <ButtonIcon icon='plus' color='#FF6471'/>
        </Button>
      </Row>
      <Row>
        <Button>
          <ButtonIcon icon='backspace' color='#fff'/>
        </Button>
        <Button onPress={() => handleNumberPress("0")}>
          <ButtonText text='0' color='#fff'/>
        </Button>
        <Button onPress={() => handleNumberPress(".")}>
          <ButtonText text='.' color='#fff'/>
        </Button>
        <Button onPress={() => getResult()}>
          <ButtonIcon icon='equals' color='#FF6471'/>
        </Button>
      </Row>
    </View>
  );
}

export default Keyboard;