import create from 'zustand'

const useStore = create((set) => ({
  result: '',
  changeResult: (result) => set(() => ({result: result})),
  firstNumber: '',
  changeFirstNumber: (firstNumber) => set(() => ({firstNumber: firstNumber})),
  secondNumber: '',
  changeSecondNumber: (secondNumber) => set(() => ({secondNumber: secondNumber})),
  operation: '',
  changeOperation: (operation) => set(() => ({operation: operation}))
}))

export default useStore