import React from 'react'
import Catalog from '../catalog/Catalog'
import Sale from '../sale/Sale'
import NewSeason from '../newSeason/NewSeason'
import Discount from '../discount/Discount'

export default function HomeModule() {
  return (
    <div>
      <NewSeason />
      <Catalog />
      <Discount />
      <Sale />
    </div>
  )
}
