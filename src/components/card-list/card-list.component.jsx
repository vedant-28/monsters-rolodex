import { Component } from "react";
import Card from "./card.component";
import './card-list.styles.css';

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div key={monsters.id} className='card-list'>
        {monsters.map((monster) => {
          return <Card monster={ monster }/>
        })}
      </div>
    );
  }
}

export default CardList;

//React renders component on initially with initial state in constructor &
//re-renders when componentDidMount() is called & props are changed.
//if state is not updating, then prolly we're not updating props or not calling setState
