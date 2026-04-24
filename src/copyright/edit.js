/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    InspectorControls,
    RichText
} from '@wordpress/block-editor';

import {
    PanelBody,
    ToggleControl,
    TextControl
} from '@wordpress/components';

import './editor.scss';


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
    const { showStartingYear, startingYear, content ,after} = attributes;
    const currentYear = new Date().getFullYear().toString();
    const blockProps = useBlockProps(); 

    let displayDate;

    if ( showStartingYear && startingYear ) {
            displayDate = startingYear + '–' + currentYear;
    } else {
        displayDate = currentYear;
    }

    return (
        <>
            <InspectorControls>
                <PanelBody title={ __( 'Settings', 'Copyright-Date block' ) }>
                    <ToggleControl
                        checked={ !! showStartingYear }
                        label={ __(
                            'Show starting year',
                            'Copyright-Date block'
                        ) }
                        onChange={ () =>
                            setAttributes( {
                                showStartingYear: ! showStartingYear,
                            } )
                        }
                    />
                    { showStartingYear && (
                        <TextControl
                            label={ __(
                                'Starting year',
                                'Copyright-Date block'
                            ) }
                            value={ startingYear || '' }
                            onChange={ ( value ) =>
                                setAttributes( { startingYear: value } )
                            }
                        />
                    ) }
                </PanelBody>
            </InspectorControls>
            <div { ...useBlockProps() }>
             <RichText      tagName="strong" // The tag here is the element output and editable in the admin
                            value={ content } // Any existing content, either from the database or an attribute default
                            allowedFormats={ [ 'core/bold', 'core/italic' ] } // Allow the content to be made bold or italic, but do not allow other formatting options
                            onChange={ ( content ) => setAttributes( { content } ) } // Store updated content as a block attribute
                            placeholder={ __( 'Prefiso...' ) } // Display this text before any content has been added by the user
                        />
                        <strong> © { displayDate } </strong>
                           <RichText tagName="strong"
                            value={ after }
                            onChange={ (after) => setAttributes({ after }) }
                            placeholder={ __('Suffiso....') } /></div>  </>);}



