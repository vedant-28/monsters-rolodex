import { Component } from "react";
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFieldValue: '', // initialized in state, so can be accesed in whole component.
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  // method written outside of render(),
  // as when update state, component is re-rendered.
  // Inside onChange={}, this was just an arraow function which will not be stored in memory.
  // So whn re-rendering occurs; this callback method will be re-initialized.
  // This can cause performance issues when there are many of such callbacks
  // present in component event callback.
  // Now this method will be created only once when component reders for first time.
  onSearchFieldValueChange = (e) => {
    console.log(e.target.value);
    const searchFieldValue = e.target.value.toLowerCase();
    this.setState(() => {
      return { searchFieldValue };
    });
  };

  render() {
    // ES6 destructuring used to access state variables w/o having to use "this.state." prefix
    const { monsters, searchFieldValue } = this.state;
    // ES6 destructuring used to access class methods w/o having to use "this." prefix
    const { onSearchFieldValueChange } = this;

    const filteredList = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchFieldValue);
    });
    return (
      <div className='App'>
        <SearchBox className='monsters-search-box' placeholder='search-monsters' onChangeHandler={onSearchFieldValueChange}/>
        <CardList monsters={filteredList} />
      </div>
    );
  }
}

export default App;
