import Number from "./Number";
import Operation from "./Operation";
import Screen from "./Screen";
import { useState, useRef } from "react";

const Calculator = () => {
  const [screenValue, setScreenValue] = useState('0')
  const [firstNumber, setFirstNumber] = useState(0)
  const [operation, setOperation] = useState('')
  const reset = useRef(false)

  function doCalc(op) {
    const secondNumber = parseInt(screenValue)
    if(operation === '+')
      clearCalculator(`${firstNumber + secondNumber}`)
    else if(operation === '-')
      clearCalculator(`${firstNumber - secondNumber}`)
    else if(operation === 'x')
      clearCalculator(`${firstNumber * secondNumber}`)
    else if(operation === '/')
      clearCalculator(`${firstNumber / secondNumber}`)
  }

  function storeFirstPart(op) {
    setFirstNumber(parseInt(screenValue))
    setOperation(op)
    reset.current = true
  }

  function clearCalculator(val, clearAll = true) {
    setScreenValue(val)
    reset.current = true
    if(clearAll) {
      setOperation('')
      setFirstNumber(0)
    }
  }

  const handleNumberClick = ({ value }) => {
    if(screenValue === '0' || reset.current) {
      reset.current = false
      setScreenValue(value)
    }
    else
      setScreenValue(parseInt(`${screenValue}${value}`))
  };

  const handleOperationClick = ({ value }) => {
    switch(value)
    {
        case 'clear':
          clearCalculator('0')
          break
        case '+':
        case '-':
        case 'x':
        case '/':
          if(!firstNumber) {
            storeFirstPart(value)
            clearCalculator('0', false)
          }
          else if(operation)
            setOperation(value)
          break
         case '=':
          doCalc()
          break
        default:
          throw new Error('Unknown operand.')
    }
  };

  return (
    <div>
      <Screen value={screenValue} />
      <div style={{ display: "flex" }}>
        <div>
          <Number value={7} onClick={handleNumberClick} />
          <Number value={4} onClick={handleNumberClick} />
          <Number value={1} onClick={handleNumberClick} />
          <Number value={0} onClick={handleNumberClick} />
        </div>
        <div>
          <Number value={8} onClick={handleNumberClick} />
          <Number value={5} onClick={handleNumberClick} />
          <Number value={2} onClick={handleNumberClick} />
          <Operation value="clear" onClick={handleOperationClick} />
        </div>
        <div>
          <Number value={9} onClick={handleNumberClick} />
          <Number value={6} onClick={handleNumberClick} />
          <Number value={3} onClick={handleNumberClick} />
          <Operation value="=" onClick={handleOperationClick} style={{ backgroundColor: 'lightblue' }}/>
        </div>
        <div>
          <Operation value="/" onClick={handleOperationClick} />
          <Operation value="x" onClick={handleOperationClick} />
          <Operation value="-" onClick={handleOperationClick} />
          <Operation value="+" onClick={handleOperationClick} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
