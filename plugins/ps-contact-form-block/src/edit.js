/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';

import { PanelBody, ToggleControl, TextControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
*/
export default function Edit( { attributes, setAttributes }) {
	const currentYear = new Date().getFullYear().toString();
	const { showStartingYear, startingYear } = attributes;
	let displayDate;

	if (showStartingYear && startingYear ) {
		displayDate = startingYear + '–' + currentYear;
	}
	else {
		displayDate = currentYear;
	}


	return (
		<>
		<InspectorControls>
			<PanelBody title={__('Settings', 'ps-contact-form-block')}>
				<TextControl 
					label={__('Starting year', 'ps-contact-form-block')}
					value={startingYear || ''}
					onChange={ (value) =>
						setAttributes( {startingYear: value} )
					}
				/>

				<ToggleControl
					checked={!! showStartingYear}
					label={__('Show Starting Year', 'ps-contact-form-block')}
					onChange={ () => 
						setAttributes({
							showStartingYear: ! showStartingYear
						})
					}
				/>
			</PanelBody>
		</InspectorControls>
		<p { ...useBlockProps() }>
			© { displayDate }
		</p>
		</>
	);
}
