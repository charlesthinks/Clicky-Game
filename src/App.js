import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Image from "./components/Image";
import Card from "./components/Card/Card";
import Characters from "./Characters.json";

class App extends Component {
  state = {
    cards: Characters,
    clickedCards: [],
    count: 0
  };

  //Fisher-Yates Shuffle
  shuffle = array => {
    var values = array.length;
    var temp, ran;
    // While there remain elements to shuffle...
    while (0 !== values) {
      // Pick a remaining element...
      ran = Math.floor(Math.random() * values);
      values -= 1;
      // And swap it with the current element.
      temp = array[values];
      array[values] = array[ran];
      array[ran] = temp;
    }
    return array;
  };

  //Handles a Character Card Being Clicked
  cardClicked = id => {
    //Check if ID of Card has Been Clicked Already
    let hasBeenClicked = false;
    for (var i = 0; i < this.state.clickedCards.length; i++) {
      if (id === this.state.clickedCards[i]) {
        hasBeenClicked = true;
        break;
      }
    }
    //If Card has Been Clicked,Player Lost
    if (hasBeenClicked) {
      alert("YOU LOST!");
      this.reset();
    }
    //Else Player Clicked Correctly
    else {
      //Add ID of Card to clickedCards
      let newArray = this.state.clickedCards;
      newArray.push(id);
      //Check if Player won
      let current = this.state.count + 1; //Find how Many User has Guessed so far + One User Just Clicked
      //If User Has Clicked as Many as There Exists, Then They won
      if (current === this.state.cards.length) {
        alert("You Won!");
        this.reset();
      }
      //If Player Has Less Just Update State
      else {
        this.setState({
          clickedCards: newArray,
          count: this.state.count + 1
        });
      }
    }
  };

  //Reset Function
  reset = () => {
    this.setState({ clickedCards: [], count: 0 });
  };

  render() {
    let shuffledArray = this.shuffle(this.state.cards);

    const allFriends = shuffledArray.map(character => (
      <Card
        src={character.image}
        alt={character.name}
        id={character.id}
        cardClicked={this.cardClicked}
      />
    ));

    return (
      <div>
        <Navbar count={this.state.count} />
        <Image />
        <div className="cards">{allFriends}</div>
      </div>
    );
  }
}

export default App;
