import PropTypes from 'prop-types';
// Styles
import './ThingLink.less';

const ThingLink = ({ src, caption }) => {
    return (
        <iframe
            src={src}
            title={caption}
            type="text/html"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
            scrolling="no"
            className="thinglink"
        ></iframe>
    );
};

ThingLink.propTypes = {
    src: PropTypes.string.isRequired,
    caption: PropTypes.string
};

export default ThingLink;
