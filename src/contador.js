const ClickCounter = () => {
    const [clickCount, setClickCount] = useState(0);
  
    return (
      <div>
        <h1>Counter</h1>
        <p>Click Count: {clickCount}</p>
        <button onClick={() => setClickCount(clickCount + 1)}>+</button>
      </div>
    );
  };