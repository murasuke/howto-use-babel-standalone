import React, { useState } from "https://cdn.skypack.dev/react@17";

export const Count = (count) => {
  return <div>Count: {count}</div>;
};

window["Count"] = Count;
