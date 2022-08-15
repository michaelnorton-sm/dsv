import { cleanup, render } from '@client/testing/react-testing-utils';
import VideoRow from './';

const YOUTUBE = 'YOUTUBE';
const THINGLINK = 'THINGLINK';
const VIMEO = 'VIMEO';

afterEach(cleanup);

jest.mock('react-youtube', () => jest.fn(() => YOUTUBE));
jest.mock('./ThingLink', () => jest.fn(() => THINGLINK));
jest.mock('@u-wave/react-vimeo', () => jest.fn(() => VIMEO));

describe('VideoRow tests', () => {
    it('should render placeholder if provider is missing from props', () => {
        const props = {
            video: {
                link: 'test',
                id: '123456789',
                provider: null
            }
        };

        const { container } = render(<VideoRow {...props} />);

        const placeholder = container.getElementsByClassName('placeholder')[0];
        expect(placeholder).toBeTruthy();
    });

    it('should render Youtube', () => {
        const props = {
            video: {
                link: 'https://www.youtube.com/embed/M7lc1UVf-VE',
                id: 'M7lc1UVf-VE',
                provider: 'youtube'
            }
        };

        const { container } = render(<VideoRow {...props} />);

        expect(container).toBeInTheDocument(YOUTUBE);
    });

    it('should render placeholder when provider is youtube and id is null', () => {
        const props = {
            video: {
                link: 'test',
                id: null,
                provider: 'youtube'
            }
        };

        const { container } = render(<VideoRow {...props} />);

        const placeholder = container.getElementsByClassName('placeholder')[0];
        expect(placeholder).toBeTruthy();
    });

    it('should render Thinglink', () => {
        const props = {
            video: {
                link: 'https://www.thinglink.com/mediacard/1205132232365178886',
                provider: 'thinglink'
            }
        };

        const { container } = render(<VideoRow {...props} />);

        expect(container).toBeInTheDocument(THINGLINK);
    });

    it('should render placeholder when provider is thinglink and link is null', () => {
        const props = {
            video: {
                link: null,
                id: '123456789',
                provider: 'thinglink'
            }
        };

        const { container } = render(<VideoRow {...props} />);

        const placeholder = container.getElementsByClassName('placeholder')[0];
        expect(placeholder).toBeTruthy();
    });

    it('should render Vimeo', () => {
        const props = {
            video: {
                link: 'https://player.vimeo.com/video/76979871',
                provider: 'vimeo'
            }
        };

        const { container } = render(<VideoRow {...props} />);

        expect(container).toBeInTheDocument(VIMEO);
    });
});
