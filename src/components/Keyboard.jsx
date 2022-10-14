import React from 'react'
import { View, Text, Alert } from 'react-native'
import Button from './Button'
import ButtonText from './ButtonText'
import ButtonIcon from './ButtonIcon'
import Row from './Row'

import useStore from '../store'

const Keyboard = () => {
  const changeResult = useStore((state) => state.changeResult)
  const changeFirstNumber = useStore((state) => state.changeFirstNumber)
  const changeSecondNumber = useStore((state) => state.changeSecondNumber)
  const changeOperation = useStore((state) => state.changeOperation)

  const firstNumber = useStore((state) => state.firstNumber)
  const secondNumber = useStore((state) => state.secondNumber)
  const operation = useStore((state) => state.operation)

  const handleNumberPress = (buttonValue) => {
    if (operation == '') {
      if (firstNumber.length < 9) {
        changeFirstNumber(firstNumber + buttonValue)
      }
    } else {
      if (secondNumber.length < 9) {
        changeSecondNumber(secondNumber + buttonValue)
      }
    }
  }

  const handleOperationPress = (buttonValue) => {
    changeOperation(buttonValue)
  }

  const allClear = () => {

    changeFirstNumber('')
    changeSecondNumber('')
    changeOperation('')
    changeResult('')
  }

  const backspace = () => {
    if (secondNumber != '') {
      let newSecondNumber = secondNumber.slice(0, -1)
      changeSecondNumber(newSecondNumber)
    } else if (operation != '') {
      changeOperation('')
    } else if (firstNumber != '') {
      let newFirstNumber = firstNumber.slice(0, -1)
      changeFirstNumber(newFirstNumber)
    }
  }

  const getResult = () => {
    switch (operation) {
      case "+":
        changeResult(parseFloat(firstNumber) + (parseFloat(secondNumber)))
        break
      case "-":
        changeResult(parseFloat(firstNumber) - (parseFloat(secondNumber)))
        break
      case "x":
        changeResult(parseFloat(firstNumber) * (parseFloat(secondNumber)))
        break
      case "/":
        changeResult(parseFloat(firstNumber) / parseFloat(secondNumber))
        break
      default:
        changeResult(0)
        break
    }
  }

  const ButtonAlert = () => {
    Alert.alert(
      "Não disponível",
      "Essa função só está disponível na versão Premium da calculadora.",
      [
        { text: "OK" }
      ]
    );
  }

  return (
    <View className="flex flex-col flex-wrap basis-3/5 p-6 justify-between rounded-t-3xl" style={{backgroundColor: '#2A2A36'}}>
      <Row>
        <Button onPress={() => allClear()}>
          <ButtonText color='#00FFD7' text={ (firstNumber == '' && secondNumber == '' && operation == '') ? 'AC' : 'C' } />
        </Button>
        <Button onPress={ButtonAlert}>
          <View>
            <Text style={{color: '#00FFD7', position: 'absolute', fontWeight: 'bold', fontSize: 16, marginTop: -16, marginLeft: -10}}>+</Text>
            <Text style={{color: '#00FFD7', position: 'absolute', fontWeight: 'bold', fontSize: 24, marginTop: -16, marginLeft: -2}}>/</Text>
            <Text style={{color: '#00FFD7', position: 'absolute', fontWeight: 'bold', fontSize: 24, marginTop: -13, marginLeft: 7}}>-</Text>
          </View>
        </Button>
        <Button onPress={ButtonAlert}>
          <ButtonIcon icon="percent" color='#00FFD7' />
        </Button>
        <Button onPress={() => handleOperationPress("/")}>
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
        <Button onPress={() => backspace()}>
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

export default Keyboard