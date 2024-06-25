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
import '../editor.scss';

/**
 * Describes the block's appearance in the Block Editor. Currently displays a basic
 * unstyled HTML form placeholder. May eventually be used to make the block more dynamic.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 * 
 * @param {Object} attributes Receives initial attributes from register_block_type(), which checks block.json.
 * @param {Function} setAttributes Setter function for block's attributes object.
 *
 * @return {Element} Element to render in editor.
*/
export default function Edit( { attributes, setAttributes }) {
	const { inputs, message } = attributes;

	return (
	<form {...useBlockProps()}>
		{inputs.map(input => { 
			return (<li key={input.id}>
				<label htmlFor={input.label}>{input.name}</label>
				<input type={input.type} id={input.id} name={input.id} required={input.required}/>
			</li>)
		})}
		{!!message ? (<div><label htmlFor="message">Message</label><textarea id="message" placeholder="Enter message..."></textarea></div>) : null}
	</form>
	)
}
