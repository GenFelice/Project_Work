import domReady from '@wordpress/dom-ready';
import { unregisterFormatType } from '@wordpress/rich-text';

domReady(() => {
    unregisterFormatType('core/image');
});
