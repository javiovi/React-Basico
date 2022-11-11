class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // Cambia el código debajo de esta línea
this.increment = this.increment.bind(this);
this.decrement = this.decrement.bind(this);
this.reset = this.reset.bind(this);
    // Cambia el código encima de esta línea
  }
  // Cambia el código debajo de esta línea
reset (){
  this.setState(state => ({
    count : 0
  }));
}
decrement (){
  this.setState(state => ({
    count : state.count - 1
  }));
}
increment () {
  this.setState(state => ({
    count : state.count + 1
  }));
}
  // Cambia el código encima de esta línea
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};
