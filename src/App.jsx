// const token = process.env.REACT_APP_TOKEN;
// console.log(token);

function App() {
  const test = () => {
    const token = '';
    // const weatherAPIKey = process.env.REACT_APP_WEATHER_API_KEY;
    fetch('https://pfa.foreca.com/api/v1/forecast/daily/100598316', {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };
  return (
    <div>
      <button onClick={test}>Click me</button>
    </div>
  );
}

export default App;
