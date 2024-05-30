import React, { useState } from 'react';
import './DynamicRegex.css';

const DynamicRegex = () => {
  const [text, setText] = useState('');
  const [count, setCount] = useState({ length: 0, alphabets: 0, numbers: 0, symbols: 0, spaces: 0 });
  const [value, setValue] = useState(0);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);

    const length = newText.length;
    const alphabets = (newText.match(/[a-zA-Z]/g) || []).length;
    const numbers = (newText.match(/[0-9]/g) || []).length;
    const symbols = (newText.match(/[^a-zA-Z0-9\s]/g) || []).length;
    const spaces = (newText.match(/\s/g) || []).length;

    setCount({ length, alphabets, numbers, symbols, spaces });
  };

  const handleMathOperation = (operation) => {
    switch (operation) {
      case '+':
        setValue(value + 1);
        break;
      case '-':
        setValue(value - 1);
        break;
      case '*':
        setValue(value * 2);
        break;
      case '/':
        setValue(value / 2);
        break;
      case 'x²':
        setValue(value * value);
        break;
      case 'x³':
        setValue(value * value * value);
        break;
      case '0':
        setValue(0);
        break;
      default:
        break;
    }
  };

  return (
    <div className="dynamic-regex">
      <div>
        <h1>REGEX</h1>
        <h2>Mult Functional Counters</h2>
        <p>Valor: {value}</p>
      </div>
      <div className="buttons">
        <button onClick={() => handleMathOperation('+')}>+</button>
        <button onClick={() => handleMathOperation('-')}>-</button>
        <button onClick={() => handleMathOperation('*')}>*</button>
        <button onClick={() => handleMathOperation('/')}>/</button>
        <button onClick={() => handleMathOperation('x²')}>x²</button>
        <button onClick={() => handleMathOperation('x³')}>x³</button>
        <button onClick={() => handleMathOperation('0')}>0</button>
        
      </div>
      <h2>Caracter Counter</h2>
      <div>
        <input type="text" value={text} onChange={handleTextChange} placeholder="Digite algo..." />
        <div className="counters">
          <p>Comprimento do Texto: {count.length}</p>
          <p>Alfabetos: {count.alphabets}</p>
          <p>Números: {count.numbers}</p>
          <p>Símbolos: {count.symbols}</p>
          <p>Espaços: {count.spaces}</p>
          
        </div>
      </div>
    </div>
  );
};

export default DynamicRegex;
