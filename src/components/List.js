import React, { useState } from 'react';

import useInfiniteScroll from '../hooks/useInfiniteScroll';


const List = () => {
  const [items, setItems] = useState(Array.from(Array(30).keys(), n => n + 1));
  const fetchMoreListItems = () => {
    setTimeout(() => {
      setItems(prevState => ([...prevState, ...Array.from(Array(20).keys(), n => n + prevState.length + 1 )]))
      setIsFetching(false);
    }, 2000)
  }
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);


  return (
    <>
      <ul className="list-group mb-2">  
          {items.map(val => <li className="list-group-item">List Item {val}</li>)}
      </ul>
      {isFetching && 'Fetching more list items...'}
    </>
  )
}

export default List;