"use client";

import Basket from "../basket/Basket";

export default function Page({ params: { lng } }) {
  return (
    <div>
      <Basket params={{ lng }} />
    </div>
  );
}
