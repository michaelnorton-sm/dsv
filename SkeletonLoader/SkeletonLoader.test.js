// Testing library
import { render } from '@client/testing/react-testing-utils';
// Components
import SkeletonLoader from './';
import {
    IMAGE_CARD_SKELETON,
    TEXT_SKELETON,
    TEXT_BLOCK_SKELETON,
    ICON_SKELETON,
    HERO_SKELETON
} from 'app/constants';

describe('Skeleton Loader tests', () => {
    it('should render IMAGE_CARD_SKELETON type', () => {
        const props = { type: IMAGE_CARD_SKELETON };

        const { container } = render(<SkeletonLoader {...props} />);

        expect(
            container.getElementsByClassName(`skeletonLoader-${IMAGE_CARD_SKELETON}`)
        ).toHaveLength(1);
    });

    it('should render TEXT_SKELETON type', () => {
        const props = { type: TEXT_SKELETON };

        const { container } = render(<SkeletonLoader {...props} />);

        expect(container.getElementsByClassName(`skeletonLoader-${TEXT_SKELETON}`)).toHaveLength(1);
    });

    it('should render TEXT_BLOCK_SKELETON type', () => {
        const props = { type: TEXT_BLOCK_SKELETON };

        const { container } = render(<SkeletonLoader {...props} />);

        expect(
            container.getElementsByClassName(`skeletonLoader-${TEXT_BLOCK_SKELETON}`)
        ).toHaveLength(1);
    });

    it('should render ICON_SKELETON type', () => {
        const props = { type: ICON_SKELETON };

        const { container } = render(<SkeletonLoader {...props} />);

        expect(container.getElementsByClassName(`skeletonLoader-${ICON_SKELETON}`)).toHaveLength(1);
    });

    it('should render HERO_SKELETON type', () => {
        const props = { type: HERO_SKELETON };

        const { container } = render(<SkeletonLoader {...props} />);

        expect(container.getElementsByClassName(`skeletonLoader-${HERO_SKELETON}`)).toHaveLength(1);
    });
});
