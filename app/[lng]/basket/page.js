"use client"
//import Catalog_list from '../../components/Catalog_list';

export default function Basket({ params: { lng } }) {

  const ids_1 = JSON.parse(localStorage.getItem('basket'));


  return (
    <div>
      {ids_1.map((prod) => (
        <div>
        <h1>ID:{prod[0].id}</h1>
        <p>name:{prod[0].shortNameRu}</p>
        </div>
      ))}
    </div>
  )
}