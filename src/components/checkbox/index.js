import React from "react";

import "./styles.css";

// Evitei o uso de bibliotecas visuais para mostrar um pouco de CSS
// Assim como este checkbox, o input, button, e demais estilizações
// foram feitas totalmente por mim, sem o auxílio de qualquer "normalize reset"

const Checkbox = ({ className, label, name, ...rest }) => (
  <label className={`checkbox-wrapper ${className={className}}`}>
    {label}
    <input type="checkbox" {...rest} name={name} />
    <span className="checkmark" />
  </label>
);

export default Checkbox;
