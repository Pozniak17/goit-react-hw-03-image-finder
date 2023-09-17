import { Component } from 'react';
import style from '../style.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props;
    return (
      <div className={style.overlay}>
        <div className={style.modal}>
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>
    );
  }
}
