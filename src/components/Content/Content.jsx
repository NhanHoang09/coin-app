import { useState } from "react";

import React from "react";
import data from "../../data";
import Post from "./../Post/Post";

export default function Content() {
  const [values, setValues] = useState(data);

  return (
    <div>
      {values.map((item) => (
        <Post data={item} key={item.id} />
      ))}
    </div>
  );
}
