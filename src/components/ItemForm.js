import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {

  const [newItemName, setNewItemName] = useState("");
  const [newItemCategory, setNewItemCategory] = useState("Produce");

  function onNewItemNameChange(event) {
    setNewItemName(event.target.value);
  }

  function onNewItemCategoryChange(event) {
    setNewItemCategory(event.target.value);
  }

  const onSubmit = () => {
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: newItemName,
      category: newItemCategory,
    };

    onItemFormSubmit(newItem);
  }

  return (
    <form className="NewItem" onSubmit={onSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={newItemName} onChange={onNewItemNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={newItemCategory} onChange={onNewItemCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
