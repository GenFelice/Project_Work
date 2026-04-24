/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */

import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
    const { showStartingYear, startingYear ,content, after} = attributes;
    const currentYear = new Date().getFullYear().toString();
    let displayDate;
    if ( showStartingYear && startingYear ) {
        displayDate = startingYear + '–' + currentYear;
    } else {
        displayDate = currentYear;
    }

    return (
        <div { ...useBlockProps.save() }>
            <RichText.Content tagName="strong" value={ content } />
            <strong> © { displayDate } </strong>
            <RichText.Content tagName="strong" value={ after } />
        </div>
    );
}
