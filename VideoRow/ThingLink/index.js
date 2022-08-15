import loadable from '@loadable/component';

import Placeholder from '@client/sui/src/elements/Placeholder';

const PlaceholderVideo = () => (
    <Placeholder fluid>
        <Placeholder.Image />
    </Placeholder>
);

export default loadable(
    () =>
        import(
            /* webpackChunkName: "thinglink" */
            './ThingLink'
        ),
    {
        fallback: <PlaceholderVideo />
    }
);
