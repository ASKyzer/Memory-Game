import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import Hero from './components/Hero';
import Container from './components/Container';
import Row from './components/Row';
import Col from './components/Col';
import Footer from './components/Footer';
import Scoreboard from './components/Scoreboard';
import Animals from './components/Animals';
import animalsArr from "./animals.json";

import './App.css';

let score = 0;
let highScore = 0;
let comment = 'Click an image to play.';

class App extends Component {

  // set State
  state = {
    animalsArr,
    score,
    highScore,
    comment
  }

  handleClick = id => {
		const animalsArr = this.state.animalsArr;
      // console.log(animals);
		const cardClicked = animalsArr.filter(animal => animal.id === id);
      // console.log(cardClicked);
    // If the card that is clicked is true (one you've already clicked on)...
		if (cardClicked[0].clicked) {
      // Set score back to 0
			score = 0;
      comment = "Sorry, please try again.";

			// Set all the clicked boolean value back to false.
			for (let i = 0; i < animalsArr.length; i++) {
				animalsArr[i].clicked = false;
			}
      // reset the state of the score and animalsArr
			this.setState({score});
			this.setState({animalsArr});
      this.setState({comment});
      // we don't want to reset the high score.
      // console.log(score);
      // console.log(animalsArr);

		} else {
      // Set the card you just clicked to true
			cardClicked[0].clicked = true;

			score = score + 1;
      comment = "You guessed correctly!";

      // Track high score
			if (score > highScore) {
				highScore = score;
				this.setState({highScore});
			}
      // Shuffle the cards
			animalsArr.sort(() => {
				return 0.5 - Math.random();
			});
      // console.log(animalsArr);

      // Win message if score reaches 12.
      if (score > 11) {
       comment = "Congratulations! You win!";
       this.setState({comment});
       // this.replay();
     }
      // Set the state with the randomized animalsArr and new score
			this.setState({animalsArr});
			this.setState({score});
      this.setState({comment})
		}

      // replay = () => {
      //    score = 0;
      //    comment = 'Press any image to play.';
      //    this.setState({score});
      //    this.setState({comment});
      //  }

	}; // end of handleClick


  render() {
      return (
        <div className='App'>
          <Wrapper>
            <Hero backgroundImage="http://www.clixmarketing.com/blog/wp-content/uploads/2015/06/EQB0011-BlogPhoto_0225_Original.jpg">
              <h1 className='memoryGame'>Memory Game</h1>
              <p className='instructions'>Click on an image to earn points, but do not click on any more than once!</p>
            </Hero>
            <Container>
              <Row>
                <Col size='md-12'>
                  <Scoreboard score={this.state.score} highScore={this.state.highScore} comment={this.state.comment}/>
                </Col>
              </Row>
             <div className='game-div'>
              <Row>
               {this.state.animalsArr.map(animal => (
                 <Animals
                   handleClick = {this.handleClick}
                   id= {animal.id}
                   key={animal.id}
                   name={animal.name}
                   image={animal.image}
                 />
               ))}
             </Row>
           </div>
         </Container>
       </Wrapper>
       <Footer />
     </div>
    )
  }
}

export default App;
