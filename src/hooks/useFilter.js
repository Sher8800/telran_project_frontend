import { useLayoutEffect, useState } from 'react'

export const useFilter = (list, filterProp, initFilter = false) => {

  const [filteredList, setFilteredList] = useState(list)
  const [filterValue, setFilterValue] = useState(initFilter)

  const onFilter = () => {
    setFilterValue((prevState) => !prevState)
  }

  useLayoutEffect(() => {
    filterValue ? setFilteredList(filteredList.filter(product => product[filterProp])) : setFilteredList(list)
  }, [list, filterValue])

  return { onFilter, filteredList, filterValue }
} 
