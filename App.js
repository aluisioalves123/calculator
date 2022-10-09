import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView } from 'react-native';

import Button from './components/Button'
import ButtonText from './components/ButtonText'
import ButtonIcon from './components/ButtonIcon'

import Row from './components/Row'

export default function App() {
  return (
    <SafeAreaView className="flex flex-col" style={{backgroundColor: '#23222D'}}>
      <View className="basis-2/5">
        <Text>a</Text>
      </View>
      <View className="flex flex-col flex-wrap basis-3/5 p-6 justify-between rounded-t-3xl" style={{backgroundColor: '#2A2A36'}}>
        <Row>
          <Button>
            <ButtonText color='#00FFD7' text='AC' />
          </Button>
          <Button>
            <View>
              <Text style={{color: '#00FFD7', position: 'absolute', fontWeight: 'bold', fontSize: 16, marginTop: -16, marginLeft: -10}}>+</Text>
              <Text style={{color: '#00FFD7', position: 'absolute', fontWeight: 'bold', fontSize: 24, marginTop: -16, marginLeft: -2}}>/</Text>
              <Text style={{color: '#00FFD7', position: 'absolute', fontWeight: 'bold', fontSize: 24, marginTop: -12, marginLeft: 7}}>-</Text>

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
          <Button>
            <ButtonText text='7' color='#fff'/>
          </Button>
          <Button>
            <ButtonText text='8' color='#fff'/>
          </Button>
          <Button>
            <ButtonText text='9' color='#fff'/>
          </Button>
          <Button>
            <ButtonIcon icon='times' color='#FF6471'/>
          </Button>
        </Row>
        <Row>
          <Button>
            <ButtonText text='4' color='#fff'/>
          </Button>
          <Button>
            <ButtonText text='5' color='#fff'/>
          </Button>
          <Button>
            <ButtonText text='6' color='#fff'/>
          </Button>
          <Button>
          <ButtonIcon icon='minus' color='#FF6471'/>
          </Button>
        </Row>
        <Row>
          <Button>
            <ButtonText text='3' color='#fff'/>
          </Button>
          <Button>
            <ButtonText text='2' color='#fff'/>
          </Button>
          <Button>
            <ButtonText text='1' color='#fff'/>
          </Button>
          <Button>
          <ButtonIcon icon='plus' color='#FF6471'/>
          </Button>
        </Row>
        <Row>
          <Button>
            <ButtonIcon icon='backspace' color='#fff'/>
          </Button>
          <Button>
            <ButtonText text='0' color='#fff'/>
          </Button>
          <Button>
            <ButtonText text='.' color='#fff'/>
          </Button>
          <Button>
          <ButtonIcon icon='equals' color='#FF6471'/>
          </Button>
        </Row>
      </View>
    </SafeAreaView>
  );
}
