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
import { InspectorControls, useBlockProps, RichText } from '@wordpress/block-editor';

import { PanelBody, TextControl, TextareaControl, Button } from '@wordpress/components';

import { useState } from 'react';

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
	const { inputs, message, pages, currentPage } = attributes;
	console.log("currentPage = " + currentPage);
	console.log("pages = " + pages);
	console.log(attributes.heading);
	
	const setPage = ( page ) => {
		setAttributes({ currentPage: page });
	}
	const blockProps = useBlockProps();
	

	return (
	<>
		<InspectorControls>
			<PanelBody title={ 'Settings' }>
				<Button id="previous" variant="secondary" type="button" disabled={currentPage<1} onClick={() => setPage(currentPage-1)}>Prev</Button>
				<p style={{display: 'inline-block', padding: '0 6px'}}>Page {currentPage + 1}</p>
				<Button id="next" variant="secondary" type="button" disabled={currentPage+1>=pages} onClick={() => setPage(currentPage+1)}>Next</Button>
			</PanelBody>
		</InspectorControls>
		<form {...blockProps}>
			<RichText 
				{...blockProps}
				tagName="h1"
				value={ attributes.heading?.[currentPage] || "" }
				allowedFormats={ ['core/bold', 'core/italic'] }
				onChange={ (content) => {
					const headings = attributes?.heading || [];
					headings.length = pages;
					headings[currentPage] = content;
					console.log(headings);
					setAttributes( { heading: headings } );
				} }
				placeholder="Lorem Ipsum Dolor Sit Amet"
			/>
			<RichText 
				{...blockProps}
				tagName="p"
				value={ attributes.content?.[currentPage] || "" }
				allowedFormats={ ['core/bold', 'core/italic'] }
				onChange={ (content) => {
					const text = attributes?.content || [];
					text.length = pages;
					text[currentPage] = content;
					setAttributes( { content: text } );
				} }
				placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
			/>
			<ul id={"form-page-"+(currentPage+1)}>
				{inputs.map(input => {
					return (input.page-1 == currentPage ? <li key={input.id}>
						<label htmlFor={input.id}>{input.label}</label>
						<input type={input.type} id={input.id} name={input.name} required={input.required}/>
					</li> : null)
				})}
				{!!message && currentPage == 0 ? (<li key="message"><label htmlFor="message">Message</label><textarea id="message" placeholder="Enter message..."></textarea></li>) : null}
			</ul>
		</form>
	</>
	);
}
