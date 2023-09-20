import { ColorRing } from 'react-loader-spinner';
import { Overlay } from 'components/Modal/Modal.styled';
export const Loader = () => (
  <Overlay>
    <ColorRing
      visible={true}
      height="120"
      width="120"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={['#58070c', '#6b0362', '#6af8d5', '#000000', '#0fcc28']}
    />
  </Overlay>
);
