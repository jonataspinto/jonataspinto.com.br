import React from "react";

function ConditionalRenderer({
  validator,
  children
}) {
  return (
    <>
      {validator && children}
    </>
  );
};

export default ConditionalRenderer;
