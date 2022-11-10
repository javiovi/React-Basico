class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // Cambia el código debajo de esta línea
this.setState({
  name: "React Rocks!"
}) 


    // Cambia el código encima de esta línea
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};

/* Vincula THis a un metodo de clase */


class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello"
    };
    // Cambia el código debajo de esta línea
this.handleClick = this.handleClick.bind(this);
    // Cambia el código encima de esta línea
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        { /* Cambia el código debajo de esta línea */ }
        <button onClick = {this.handleClick}>Click Me</button>
        { /* Cambia el código encima de esta línea */ }
        <h1>{this.state.text}</h1>
      </div>
    );
  }
};
