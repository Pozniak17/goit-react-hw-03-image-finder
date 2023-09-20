import { Component } from 'react';
import { Overlay, ModalWindow } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props;
    return (
      <Overlay onClick={this.handleBackdropClick}>
        <ModalWindow>
          <img src={largeImageURL} alt={tags} />
        </ModalWindow>
      </Overlay>
    );
  }
}
