console.log("Inside app.js");

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a compute',
  options: ['One', 'Two']
}

// JSX - Javascript XML
var template = (
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

// var userName = 'Jan';
// var userAge = 24;
// var userLocation = 'Vietnam';

var user = {
  name: 'Jan',
  age: 26,
  location: 'Vietnam'
}

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  } 
  // else {
  //   return <p>Location: Unknown</p>;
  // } 
}

// Create a templateTwo var JSX expression
var templateTwo = (
  <div>
    {/* <p>Age: {user.age }</p> */}
    {/* <p>Location: {getLocation(user.location)}</p> */}

    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    { getLocation(user.location) }
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
