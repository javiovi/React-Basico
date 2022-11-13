class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    {/* Cambia el código debajo de esta línea */}
    return ( <h1>
    {this.props.fiftyFifty ? "You Win!": "You Lose!" }
    </h1> )
    {/* Cambia el código encima de esta línea */}
  };
};

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      // Completa la sentencia return:
      counter: this.state.counter + 1 
       });
  }
  render() {
    const expression = Math.random() >= 0.5 ? true:false 
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        {/* Cambia el código debajo de esta línea */}
<Results fiftyFifty={expression}/>
        {/* Cambia el código encima de esta línea */}
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
}
