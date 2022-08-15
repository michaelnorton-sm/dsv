import { useRef, useEffect } from 'react';
// Prop types
import PropTypes from 'prop-types';
// Utils
import { getContrastColor, clientUIColors } from 'app/helpers';
// Constants
import {
    IMAGE_CARD_SKELETON,
    TEXT_SKELETON,
    TEXT_BLOCK_SKELETON,
    ICON_SKELETON,
    HERO_SKELETON,
    SKELETON_CONTRAST_LIGHT,
    SKELETON_CONTRAST_DARK
} from 'app/constants';
// Styles
import './index.less';

const SkeletonLoader = props => {
    const { items, type, children, backgroundColor, mix } = props;
    const ref = useRef();

    const removeAnimation = e => {
        if (e?.type !== 'error') {
            ref?.current?.classList.add('skeletonLoader-removeBackground');
        }

        ref?.current?.classList.add('skeletonLoader-removeAnimation');
    };

    useEffect(() => {
        if (ref.current) {
            const children = ref.current.children;
            const firstChild = children[0];

            if (firstChild?.tagName === 'IMG') {
                if (firstChild.complete) {
                    removeAnimation();
                } else {
                    firstChild.onload = removeAnimation;
                    firstChild.onerror = removeAnimation;
                }
            }
        }
    }, []);

    const { white } = clientUIColors;
    const contrast =
        getContrastColor(backgroundColor) === white
            ? SKELETON_CONTRAST_DARK
            : SKELETON_CONTRAST_LIGHT;

    return (
        <>
            {Array.from({ length: items }, (_, i) => (
                <div
                    key={i}
                    className={`skeletonLoader ${
                        type ? 'skeletonLoader-' + type : ''
                    } skeletonLoader-contrast_${contrast} ${mix ? 'skeletonLoader-' + mix : ''}`}
                    style={{ backgroundColor }}
                    ref={ref}
                >
                    {children}
                </div>
            ))}
        </>
    );
};

SkeletonLoader.propTypes = {
    items: PropTypes.number,
    type: PropTypes.oneOf([
        IMAGE_CARD_SKELETON,
        TEXT_SKELETON,
        TEXT_BLOCK_SKELETON,
        ICON_SKELETON,
        HERO_SKELETON
    ]),
    children: PropTypes.node,
    backgroundColor: PropTypes.string,
    mix: PropTypes.string
};

SkeletonLoader.defaultProps = {
    items: 1,
    backgroundColor: '#E2E2E4'
};

export default SkeletonLoader;
