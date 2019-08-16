class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in the hands of a computer.</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What Should I Do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
      <p>Here are my options:</p>
      <ul>
        <Option/>
      </ul>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <li>First Options</li>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return (
     <button>Add Option</button>
    );
  }
}


ReactDOM.render(<IndecisionApp/>, document.getElementById("app"));