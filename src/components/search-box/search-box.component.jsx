import { Component } from 'react';
import './search-box.styles.css';

class SearchBox extends Component {
  render() {
		const { onChangeHandler, placeholder, className } = this.props;
    return(
			<input
        className={`search-box ${className}`}
        type='search'
        placeholder={placeholder}
        onChange={onChangeHandler} // accessing class method
      />
		)          
  }
}

export default SearchBox