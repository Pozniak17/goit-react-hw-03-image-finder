import { Component } from 'react';
import style from '../style.module.css';
import { FcSearch } from 'react-icons/fc';
export class Seachbar extends Component {
  render() {
    return (
      <header className={style.searchbar}>
        <form className={style.searchForm}>
          <button type="submit" className={style.searchFormButton}>
            <FcSearch size="26px" />
          </button>

          <input
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
