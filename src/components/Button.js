import React from 'react';
import Spinner from './Spinner';
import { clsx } from 'clsx';

/**
 * Custom button element. Supports loading.
 * @param {Object} props Component props
 * @param {string=} props.id The HTML id of the button
 * @param {string} [props.type="button"] The HTML button type
 * @param {string} props.children The content of the button element.
 * @param {function=} props.onClick Callback function to handle button click.
 * @param {bool=} props.loading Whether the button should be displayed as loading or not
 * @param {string | Array | Object=} props.className button element classes
 * @returns Rendered button
 */
export default function Button({ id = "", loading = false, onClick = ()=>{}, type="button", children, className = "" }) {
  return (
    <button
      id={id}
      className={clsx(className, loading && "loading")}
      onClick={onClick}
      type={type}
      disabled={loading}
    >{loading ? <Spinner /> : children}</button>
  );
}