import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState(
      () => {
        return { monsters: users };
      }
    ));
  }

  render() {
    return (
      <div className="App">
        <input className='search-bar' type='search' placeholder='search monsters' onChange={
          (e) => {
            console.log(e.target.value);
            const searchValue = e.target.value.toLowerCase();
            const filteredList = this.state.monsters.filter((monster) => {
              return monster.name.toLowerCase().includes(searchValue);
            });

            this.setState(() => {
              return { monsters: filteredList };
            });
          }
        }/>
        {
          this.state.monsters.map((monster) => {
            return <div key = {monster.id}>
              <h1>{monster.name}</h1>
            </div>
          })
        }
      </div>
    );
  }
}

export default App;
