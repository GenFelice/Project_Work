import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls,  RichText} from '@wordpress/block-editor';
import { PanelBody, ToggleControl, TextControl} from '@wordpress/components';
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 * @return {Element} Element to render.
 */

export default function Edit( { attributes, setAttributes } ) {
    const { showStartingYear, startingYear, prefix ,suffix} = attributes;
    const currentYear = new Date().getFullYear().toString();
    const blockProps = useBlockProps(); 

    let displayDate;

    if ( showStartingYear && startingYear ) {
        displayDate = startingYear + ' – ' + currentYear; 
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
             <RichText      tagName="span" // The tag here is the element output and editable in the admin
                            value={ prefix } // Any existing content, either from the database or an attribute default
                            allowedFormats={ [ 'core/bold', 'core/italic' ] } // Allow the content to be made bold or italic, but do not allow other formatting options
                            onChange={ ( prefix ) => setAttributes( { prefix } ) } // Store updated content as a block attribute
                            placeholder={ __( 'Prefiso...' ) } // Display this text before any content has been added by the user
                        />
                        <span> © { displayDate } </span>
                           <RichText tagName="span"
                            value={ suffix }
                            onChange={ (suffix) => setAttributes({ suffix}) }
                            placeholder={ __('Suffiso....') } /></div>  </>);}



