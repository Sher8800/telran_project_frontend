import React from 'react'
import Catalog from '../catalog/Catalog'
import Sale from '../sale/Sale'
import NewSeason from '../newSeason/NewSeason'
import Discount from '../discount/Discount'
import BackToTopButton from '../../UI/button/backToTopButton/BackToTopButton'

export default function HomeModule() {
  return (
    <div>
      <NewSeason />
      <Catalog />
      <Discount />
      <Sale />
      <BackToTopButton />
    </div>
  )
}
