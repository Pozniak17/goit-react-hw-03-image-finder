import axios from 'axios';
import { Component } from 'react';
import { Seachbar } from './Searchbar/Searchbar';

const KEY = '28544484-259b47bf7f7000ebfc4f498cb';
axios.defaults.baseURL = `https://pixabay.com/api/?key=${KEY}&q=cat&image_type=photo`;

export class App extends Component {
  render() {
    return (
      <>
        <Seachbar />
      </>
    );
  }
}
