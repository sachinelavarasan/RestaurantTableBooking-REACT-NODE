import React, { useState } from "react"
import classNames from "classnames"
import PropTypes from "prop-types"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"

import { TextEditorContainer } from "./elements"

export const TextEditor = ({ label, className, value, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <TextEditorContainer className={classNames("text-editor", className)}>
      {label ? (
        <label className="label mb-2" htmlFor={label}>
          {label}
        </label>
      ) : null}
      <ReactQuill
        {...rest}
        className={classNames("react-editor", {
          "is-focused": isFocused,
        })}
        theme="snow"
        formats={TextEditor.formats}
        modules={TextEditor.modules}
        bounds=".text-editor"
        id={label}
        onFocus={() => {
          setIsFocused(true)
        }}
        onChange={(e) => {
          rest?.onChange(e)
        }}
        onBlur={(e) => {
          rest?.onBlur(e)
          setIsFocused(false)
        }}
        value={value}
        dangerouslySetInnerHTML={{ __html: value }}
      />
    </TextEditorContainer>
  )
}
TextEditor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  // 'link',
  // 'image',
  // 'video',
]
TextEditor.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    // ['link', 'image', 'video'],
    // ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
}

TextEditor.defaultProps = {
  label: "",
  className: "",
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  value: "",
}

TextEditor.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.string,
}
