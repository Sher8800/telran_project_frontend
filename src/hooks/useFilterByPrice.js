import { useLayoutEffect } from "react"
import { useState } from "react"

export const useFilterByPrice = (list) => {
  const [priceFrom, setPriceFrom] = useState('')
  const [priceTo, setPriceTo] = useState('')
  const [filteredList, setFilteredList] = useState([])

  const filterByMin = (event) => {
    setPriceFrom(event.target.value)
  }

  const filterByMax = (event) => {
    setPriceTo(event.target.value)
  }

  useLayoutEffect(() => {
    let minPrice = +priceFrom || 0;
    let maxPrice = +priceTo || Infinity;

    if (minPrice > maxPrice) {
      maxPrice = Infinity
    }
    setFilteredList(list.filter((item) => {
      if (item.price < maxPrice && item.price > minPrice) {
        return true
      }
      return false
    }))
  }, [list, priceFrom, priceTo]);

  return { priceFrom, priceTo, filterByMin, filterByMax, filteredList }
}