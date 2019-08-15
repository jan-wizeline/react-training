
let count = 0;
const btnId = "btn-id";
const addOne = () => {
  console.log('addOne', count);
  count++;
  renderCounterApp();
}

const minusOne = () => {
  console.log('minusOne');
  count--;
  renderCounterApp();
}

const reset = () => {
  console.log('Reset');
  count = 0;
  renderCounterApp();
}

//JSX does not have built in data binding 


const renderCounterApp = () => {

  const templateThree = (
    <div>
      <h1>Count: {count}</h1>
      {/* <button id={btnId} className="button" onClick={() => console.log('test')}>+1</button> */}
      <button onClick={addOne}> +1 </button>
      <button onClick={minusOne}> -1 </button>
      <button onClick={reset}>reset</button>
    </div>
  );

  ReactDOM.render(templateThree, appRoot);
};

renderCounterApp();