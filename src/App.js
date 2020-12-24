// orders: https://webhook.site/#!/dd7e6d16-d7dd-4d79-a3e5-ea7d5c873fe5/72d68429-c454-4241-a36a-b0dfe5aeee23/1
import React, { Component } from 'react';
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import './App.css'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
class App extends Component {

    state = { 
      Name: '',
      Info: ''
    }

    getTextBoxVal = (val) => {
      this.setState({ Name: val.target.value})
    }
    getInfoVal = (val) => {
      this.setState({ Info: val.target.value})
    }
  
    async postData(cocktailName) {
      if (this.state.Name !== '') {
        try {
          let res = await fetch('https://webhook.site/dd7e6d16-d7dd-4d79-a3e5-ea7d5c873fe5', {
            method: 'post',
            mode: 'no-cors',
            headers: {
              'Accept': 'application/json',
              'Content-type': 'application/json'
            },
            body: JSON.stringify({
              CocktailName: cocktailName,
              CustomerName: this.state.Name,
              ExtraInfo: this.state.Info
            })
          })
          alert('Thank You, We Are Preparing Your Order ' + this.state.Name + '\n Your Order Was: \n' + cocktailName + ' :)')
        }
        catch(e) {
          console.log(e)
          alert('Sorry We Have An Issue With Your Order. Talk To Dominik For Help')
        }
      }
      else {
        alert('Add A Name To Your Order')
      }
    
    }
  render() {
    
    return (
      <div className="App">
        <input type="text" id="NameTextBox" onChange={this.getTextBoxVal} placeholder="Name: " /> <br />
        <input type="text" id="infoTextBox" onChange={this.getInfoVal} placeholder="Any Extra Info eg: No Alchocol " />
       {/* <button onClick={ () => this.postData('Mojito') } >Get Mojito</button>
        <button onClick={ () => this.postData('Cuba Libre') } >Get Cuba Libre</button> */}
        <h1 style={{ textAlign: "center" }}>Click The Image To Order</h1>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          <Item><img className="Img" onClick={ () => this.postData('Mojito') } src="https://www.thespruceeats.com/thmb/sM36guFG8QZ3QlgVsRB4dLsIqvE=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/mojito-5a8f339fba61770036ec61d8.jpg" /> </Item>
          <Item><img className="Img" onClick={ () => this.postData('Cuba Libre') } src="https://www.thespruceeats.com/thmb/iQNaSbuvHuvqyM4CLJ0SUf0Xk8s=/425x300/filters:max_bytes(150000):strip_icc():format(webp)/cola-and-lemon-157681450-584825985f9b5851e5b181ce.jpg" /></Item>
          <Item><img className="Img" onClick={ () => this.postData('Daiquiri') } src="https://www.thespruceeats.com/thmb/HIodcgDkOkgAmALUzbsZuI6N3k8=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/classic-daiquiri-recipe-759294-13_preview-5b0ecc23ba6177003649f0ce.jpeg" /></Item>
          <Item><img className="Img" onClick={ () => this.postData('Martini') } src="https://www.thespruceeats.com/thmb/KOoS34iRZwnMgJ9IeMIYwcFayMU=/425x300/filters:max_bytes(150000):strip_icc():format(webp)/5050Martini-477307201-56a170623df78cf7726aa7eb.jpg" /></Item>
          <Item><img className="Img" onClick={ () => this.postData('Long Island Ice Tea') } src="https://www.thespruceeats.com/thmb/EMtXxcIoKN0jxlA1AHnkByFkHtI=/425x300/filters:max_bytes(150000):strip_icc():format(webp)/LIT-5a8f365efa6bcc00372a7634.jpg" /></Item>
          <Item><img className="Img" onClick={ () => this.postData('Bloody Mary') } src="https://www.thespruceeats.com/thmb/P-NgYBDhn2rbauHx8dYNmBQTm1Q=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-827939074-5c5b0dc1c9e77c0001d92947.jpg" /></Item>
          <Item><img className="Img" onClick={ () => this.postData('Pina Colada') } src="https://www.thespruceeats.com/thmb/Or4DdqYYDf8LIck1xjyj6dgCkOw=/425x300/filters:max_bytes(150000):strip_icc():format(webp)/pina-colada-mocktail-coco-colada-759632-hero-01-d10c1367e92547cdaf556e2915581b4e.jpg" /></Item>
          <Item><img className="Img" onClick={ () => this.postData('Negroni') } src="https://www.thespruceeats.com/thmb/7EziuJcaFk3oVrc98XP10LhFcCU=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/negroni-cocktail-recipe-759327-hero-01-3e157f628ade43f1969793447c5ff51d.jpg" /></Item>
        </Carousel>
      </div>
      </div>
    );
  }
}

export default App;
