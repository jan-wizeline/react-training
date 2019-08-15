'use strict';

console.log("Inside app.js");

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a compute',
  options: ['One', 'Two']

  // JSX - Javascript XML
};var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? 'Here are your options' : 'No options'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item 1'
    ),
    React.createElement(
      'li',
      null,
      'Item 2'
    )
  )
);

var count = 0;
var btnId = "btn-id";
var addOne = function addOne() {
  console.log('addOne');
};

var minusOne = function minusOne() {
  console.log('minusOne');
};

var reset = function reset() {
  console.log('Reset');
};

var templateThree = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Count: ',
    count
  ),
  React.createElement(
    'button',
    { onClick: addOne },
    ' +1 '
  ),
  React.createElement(
    'button',
    { onClick: minusOne },
    ' -1 '
  ),
  React.createElement(
    'button',
    { onClick: reset },
    'reset'
  )
);
console.log(templateThree);
var appRoot = document.getElementById("app");

ReactDOM.render(templateThree, appRoot);
