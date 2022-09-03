import React, { useState } from "react";

class Item extends React.Component {
  //const [isInCart, setIsInCart] = useState(false);

  state={
    isInCart: false
  }

  handleAddToCartClick=()=> {
    console.log("this",this)
    this.setState((previousState)=>{
      console.log("previous state", previousState)
      console.log("this whole thing",{isInCart: !previousState.isInCart})
      return {isInCart: !previousState.isInCart}}
      );
  }
  render(){

    
    return (
      <li className={this.state.isInCart ? "in-cart" : ""}>
      <span>{this.props.name}</span>
      <span className="category">{this.props.category}</span>
      <button
      className={this.state.isInCart ? "remove" : "add"}
      onClick={this.handleAddToCartClick}
      >
      {this.state.isInCart ? "Remove From" : "Add to"} Cart
      </button>
      </li>
      );
    }
    
  }

export default Item;
