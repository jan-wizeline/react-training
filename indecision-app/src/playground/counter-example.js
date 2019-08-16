class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleAddOne() {
    console.log('addOne');
  }

  handleMinusOne() {
    console.log('minusOne');
  }

  handleReset() {
    console.log('reset');
  }

  render() {
    return (
      <div>
        <h1>Count: 123</h1>
        <button onClick={this.handleAddOne}> +1 </button>
        <button onClick={this.handleMinusOne}> -1 </button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter/>, document.getElementById("app"));

// let count = 0;
// const btnId = "btn-id";
// const addOne = () => {
//   console.log('addOne', count);
//   count++;
//   renderCounterApp();
// }

// const minusOne = () => {
//   console.log('minusOne');
//   count--;
//   renderCounterApp();
// }

// const reset = () => {
//   console.log('Reset');
//   count = 0;
//   renderCounterApp();
// }

// //JSX does not have built in data binding 


// const renderCounterApp = () => {

//   const templateThree = (
//     <div>
//       <h1>Count: {count}</h1>
//       {/* <button id={btnId} className="button" onClick={() => console.log('test')}>+1</button> */}
//       <button onClick={addOne}> +1 </button>
//       <button onClick={minusOne}> -1 </button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );

//   ReactDOM.render(templateThree, appRoot);
// };

// renderCounterApp();