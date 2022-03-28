import { useField } from "formik";
import React from "react";

const TextInput = (props) => {
  const [field, meta] = useField(props.name);

  return (
    <div>
      <input className="contact-input-field" {...field} {...props} />
      {meta.error && meta.touched && <p className="error-msg">{meta.error}</p>}
    </div>
  );
};

export default TextInput;
