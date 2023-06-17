import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
const [menuItems,setMenuItem]=useState(items);
    const [categorys,setCategorys]=useState([]);
const filterItems = (category)=>{
  if(category === 'all'){
    return setMenuItem(items)
  }
  const newItem = items.filter((item)=> item.category === category)
  setMenuItem(newItem);
}
  return <main>
    <section className='menu section'>
      <div className='title'>
      <h2>our menu</h2>
      <div className='underline'></div>
      </div>
      <Categories filterItems={filterItems}/>
      <Menu items={menuItems} {...items}/>
    </section>
  </main>
}

export default App;
