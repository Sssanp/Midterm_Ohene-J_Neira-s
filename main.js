function increaseItem() {
    itemCount++;
    updateItemCount();
  }
  
  function decreaseItem() {
    if (itemCount > 0) {
      itemCount--;
      updateItemCount();
    }
  }
  
  function updateItemCount() {
    document.getElementsByClassName('item-count').textContent = itemCount;
  }
  
  function addToCart() {
    alert("Added " + itemCount + " item(s) to cart!");
  }







    