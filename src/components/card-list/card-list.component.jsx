import { Component } from "react";

class CardList extends Component {
    render() {
      const { monsters } = this.props;
        return (
          <div>
						{monsters.map(monster => (
							<h1 key={monster.id}>{monster.name}</h1>
						))}
					</div>
        );
    }
}

export default CardList;


//React renders component on initially with initial state in constructor &
//re-renders when componentDidMount() is called & props are changed.
//if state is not updating, then prolly we're not updating props or not calling setState