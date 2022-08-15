import { Fragment } from 'react';
// Prop types
import PropTypes from 'prop-types';
// Components
import ElementMeta from 'app/components/ElementMeta';
import YouTube from 'react-youtube';
import Vimeo from '@u-wave/react-vimeo';
import ThingLink from './ThingLink';
import Placeholder from '@client/sui/src/elements/Placeholder';
import DocumentRow from 'app/components/rowElements/DocumentRow';
// Styles
import './index.less';

const YoutubeVideo = ({ video }) => {
    const { id, caption, copyright } = video;

    return (
        <Fragment>
            <YouTube videoId={id} />
            <ElementMeta description={caption} copyright={copyright} />
        </Fragment>
    );
};

// noinspection CheckTagEmptyBody
const VimeoVideo = ({ video }) => {
    const { link, caption, copyright } = video;

    return (
        <Fragment>
            <Vimeo video={link} dnt={true} width={632} />
            <ElementMeta description={caption} copyright={copyright} />
        </Fragment>
    );
};

const ThingLinkFrame = ({ video }) => {
    const { link, caption, copyright } = video;

    return (
        <Fragment>
            <ThingLink src={link} />
            <ElementMeta description={caption} copyright={copyright} />
        </Fragment>
    );
};

const Providers = {
    vimeo: VimeoVideo,
    youtube: YoutubeVideo,
    thinglink: ThingLinkFrame
};

const PlaceholderVideo = () => (
    <Placeholder fluid>
        <Placeholder.Image />
    </Placeholder>
);

const insufficientProps = ({ video }) => {
    if (!video || !video.provider || !Providers[video.provider]) {
        return true;
    }

    switch (video.provider) {
        case 'vimeo':
        case 'thinglink':
            return !video.link;
        case 'youtube':
            return !video.id;
        default:
            return false;
    }
};

const Video = props => {
    if (insufficientProps(props)) {
        return <PlaceholderVideo />;
    }

    const Element = Providers[props.video.provider];

    return (
        <div className="video-container">
            <Element {...props} />
        </div>
    );
};

const VideoRow = props => (
    <DocumentRow className="video-row">
        <Video {...props} />
    </DocumentRow>
);

Video.propTypes = {
    video: PropTypes.shape({
        id: PropTypes.string,
        provider: PropTypes.oneOf(['youtube', 'vimeo', 'thinglink']),
        caption: PropTypes.string,
        copyright: PropTypes.object
    })
};

VimeoVideo.propTypes = {
    video: PropTypes.shape({
        link: PropTypes.string,
        width: PropTypes.string,
        height: PropTypes.string,
        caption: PropTypes.string,
        copyright: PropTypes.object
    })
};

VimeoVideo.defaultProps = {
    video: PropTypes.shape({
        width: '640',
        height: '360'
    })
};

YoutubeVideo.propTypes = {
    video: PropTypes.shape({
        id: PropTypes.string,
        caption: PropTypes.string,
        copyright: PropTypes.object
    })
};

ThingLinkFrame.propTypes = {
    video: PropTypes.shape({
        link: PropTypes.string,
        caption: PropTypes.string,
        copyright: PropTypes.object
    })
};

export default VideoRow;
