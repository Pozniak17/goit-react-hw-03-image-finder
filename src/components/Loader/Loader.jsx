import { ColorRing } from 'react-loader-spinner';
export const Loader = () => (
  <ColorRing
    visible={true}
    height="780"
    width="1380"
    ariaLabel="blocks-loading"
    wrapperStyle={{}}
    wrapperClass="blocks-wrapper"
    colors={['#58070c', '#6b0362', '#6af8d5', '#000000', '#0fcc28']}
  />
);
