import PropTypes from 'prop-types';

const SocialButton = ({ data, lastChild }) => {
  return (
    <a
      href={data.url}
      className={`bg-custom-grey-900 rounded-lg w-full p-3 text-white text-center font-bold text-sm hover:bg-green-1 active:bg-green-1 hover:text-custom-grey-900 active:text-custom-grey-900 transition-all ${
        !lastChild ? 'mb-4' : ''
      }`}
    >
      {data.name}
    </a>
  );
};

SocialButton.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  lastChild: PropTypes.bool.isRequired,
};

export default SocialButton;
