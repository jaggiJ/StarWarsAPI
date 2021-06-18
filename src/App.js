import React from 'react';
import './App.css';

class StarWarsImageApi extends React.Component {
  constructor() {
    super()
    this.state = {
      name: null,
      homeworld: null,
      species: null,
      affiliations: [],
      image: null,
      needImage: true,
    }    
  }
  clicker() {
    let randomNumber = Math.round(Math.random() * 87)
    fetch(`https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          name: data.name,
          homeworld: data.homeworld,
          species: data.species,
          affiliations: data.affiliations,
          image: data.image,
          needImage: false,
        })
      })
  }

  render() {
    let affiliationsExec = this.state.affiliations.map((item, i) => {
      return(
        <li key={i}>{item}</li>
      )
    })
    
    return(
      <header className="App-header">
        {/* {console.log(this.state.image)} */}
        {this.state.needImage === false &&
        <img className='avatar-image' src={this.state.image} alt="avatarImage.jpg" />
        }
        <div id='avatar-list'>
          <ul>
            <hr />
            <li>Name: {this.state.name}</li>
            <li>Homeworld: {this.state.homeworld}</li>
            <li>Species: {this.state.species}</li>
            <li>Affiliations: </li><hr />
            <ol>
              {affiliationsExec}
            </ol>
          </ul>
        </div>
        
        <button 
        type='button'
        onClick={() => this.clicker()} 
        className="btn">Randomize character
        </button>
      </header>
    )
  }
}


function App() {
  return (
    <div className="App">
        <StarWarsImageApi />
    </div>
  );
}

export default App;
