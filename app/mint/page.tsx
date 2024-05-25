import React, { useEffect } from "react";

export default function page() {
  useEffect(() => {
    const fun = async () => {};

    fun();

    console.log("page");
  });

  return <div>page</div>;
}
