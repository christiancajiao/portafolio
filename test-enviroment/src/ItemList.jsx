import  { useState } from 'react';

const itemsData = [
  { id: 1, name: 'Apple', category: 'Fruit' },
  { id: 2, name: 'Carrot', category: 'Vegetable' },
  { id: 3, name: 'Banana', category: 'Fruit' },
  { id: 4, name: 'Lettuce', category: 'Vegetable' },
  { id: 5, name: 'Orange', category: 'Fruit' },
  { id: 6, name: 'Broccoli', category: 'Vegetable' },
];

function ItemList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  // Filter and search functionality
  const filteredItems = itemsData
    .filter(item =>
      categoryFilter === 'All' || item.category === categoryFilter
    )
    .filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div>
      <input
        type="text"
        placeholder="Search items..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

      <select
        value={categoryFilter}
        onChange={e => setCategoryFilter(e.target.value)}
      >
        <option value="All">All Categories</option>
        <option value="Fruit">Fruit</option>
        <option value="Vegetable">Vegetable</option>
      </select>

      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.name} - {item.category}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
