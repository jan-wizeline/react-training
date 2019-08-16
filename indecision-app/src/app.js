class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision'
    const subtitle = 'Put your life in the hands of a computer.'
    const options = ['Option 1', 'Option 2', 'Option 3']
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
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
    const optionsLength = this.props.options.length
    return (
      <div>
      <p>Here are my  {optionsLength} options:</p>
      {/*
        this.props.options.map((option) => <p key={option}>{option}</p>)
      */}
      {
        this.props.options.map((option) => <Option key={option} optionText={option} />)
      }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
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