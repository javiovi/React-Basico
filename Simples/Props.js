const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};
// Cambia el c
ShoppingCart.defaultProps = {
  items: 0 
}
/* Ejercicio 2 */

const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    { /* Cambia el código debajo de esta línea */ }
    return <Items quantity={10}/>
    { /* Cambia el código encima de esta línea */ }
  }
};

/* PropTypes para definir las props que esperas*/
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// Cambia el código debajo de esta línea
Items.propTypes = { quantity: PropTypes.number.isRequired }
// Cambia el código encima de esta línea

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};
  
/*Accede a propiedades "props" usando this.props */
  
  
  class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* Cambia el código debajo de esta línea */ }
            <Welcome name="Javier"/>
            { /* Cambia el código encima de esta línea */ }
        </div>
    );
  }
};

class Welcome extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          { /* Cambia el código debajo de esta línea */ }
          <p>Hello, <strong>{this.props.name}</strong>!</p>
          { /* Cambia el código encima de esta línea */ }
        </div>
    );
  }
};
