import { Component } from 'react';
import style from '../style.module.css';
import { FcSearch } from 'react-icons/fc';

export class Seachbar extends Component {
  state = {
    name: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({ ...this.state });
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <header className={style.searchbar}>
        <form className={style.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={style.searchFormButton}>
            <FcSearch size="26px" />
          </button>

          <input
            onChange={this.handleChange}
            value={this.state.name}
            className={style.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
