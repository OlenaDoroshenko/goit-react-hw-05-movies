import { ThreeDots } from 'react-loader-spinner';

const Loader = () => (
  <ThreeDots
    height="200"
    width="200"
    radius="9"
    color="#FF4500"
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClassName=""
    visible={true}
  />
);

export default Loader;
