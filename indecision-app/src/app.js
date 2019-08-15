console.log("Inside app.js");

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a compute',
  options: ['One', 'Two']
}

// JSX - Javascript XML
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
    </ol>
  </div>
);

let count = 0;
const btnId = "btn-id";
const addOne = () => {
  console.log('addOne');

}

const minusOne = () => {
  console.log('minusOne');
}

const reset = () => {
  console.log('Reset');
}

const templateThree = (
  <div>
    <h1>Count: {count}</h1>
    {/* <button id={btnId} className="button" onClick={() => console.log('test')}>+1</button> */}
    <button onClick={addOne}> +1 </button>
    <button onClick={minusOne}> -1 </button>
    <button onClick={reset}>reset</button>
  </div>
);
console.log(templateThree);
const appRoot = document.getElementById("app");

ReactDOM.render(templateThree, appRoot);
