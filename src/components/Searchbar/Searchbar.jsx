import { FcSearch } from 'react-icons/fc';
import toast from 'react-hot-toast';
import { Component } from 'react';
// import style from '../style.module.css';
import {
  SearchBarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Seachbar.styled';

export class Seachbar extends Component {
  state = {
    query: '',
  };

  handleSubmit = event => {
    event.preventDefault();

    // перевірка на пустий рядок
    if (this.state.query.trim() === '') {
      toast('Add valid text!', {
        icon: '☝️',
        style: {
          margin: '70px',
          borderRadius: '10px',
          background: '#c11919',
          color: '#fff',
        },
      });
      return;
    }
    this.props.onSubmit(this.state.query);

    this.reset();
  };

  reset = () => {
    this.setState({ query: '' });
  };

  handleInputChange = event => {
    this.setState({ query: event.target.value.toLowerCase() });
  };

  render() {
    return (
      <SearchBarHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <FcSearch size="26px" />
          </SearchFormButton>

          <SearchFormInput
            onChange={this.handleInputChange}
            value={this.state.query}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchBarHeader>
    );
  }
}
