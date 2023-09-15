import style from '../style.module.css';

export const ImageGalleryItem = ({ id, webformatURL, largeImageURL, tags }) => {
  //   console.log(id);
  return (
    <li id={id} className={style.imageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        className={style.ImageGalleryItemImage}
      />
    </li>
  );
};
