import create from 'zustand'

const useStore = create((set) => ({
  result: null,
  changeResult: (result) => set((state) => ({result: result})),
  firstNumber: null,
  changeFirstNumber: (firstNumber) => set((state) => ({firstNumber: firstNumber})),
  secondNumber: null,
  changeSecondNumber: (secondNumber) => set((state) => ({secondNumber: secondNumber})),
  operation: null,
  changeOperation: (operation) => set((state) => ({operation: operation}))
}))

export default useStore