import style from '../style.module.css';

export const Modal = ({ largeImageURL, tags }) => {
  return (
    <div className={style.overlay}>
      <div className={style.modal}>
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>
  );
};
