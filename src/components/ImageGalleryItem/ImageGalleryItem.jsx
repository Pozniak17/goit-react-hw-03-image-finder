import { Modal } from 'components/Modal/Modal';
import style from '../style.module.css';
import { Component } from 'react';

// export const ImageGalleryItem = ({ id, webformatURL, tags, largeImageURL }) => {
//   console.log(largeImageURL);
//   return (
//     <li key={id} className={style.imageGalleryItem} onClick={() => <Modal />}>
//       <img
//         src={webformatURL}
//         alt={tags}
//         className={style.imageGalleryItemImage}
//       />
//     </li>
//   );
// };

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };
  render() {
    const { id, webformatURL, tags, largeImageURL } = this.props;
    console.log(tags);
    return (
      <li
        key={id}
        className={style.imageGalleryItem}
        onClick={this.toggleModal}
      >
        <img
          src={webformatURL}
          alt={tags}
          className={style.imageGalleryItemImage}
        />
        {this.state.showModal && (
          <Modal largeImageURL={largeImageURL} tags={tags} />
        )}
      </li>
    );
  }
}
