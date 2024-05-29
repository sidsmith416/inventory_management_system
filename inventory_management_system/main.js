function is_empty(string) {
     if (string.length == 0) {
          return true;
     }
     return false;
};

function getIndex(tbody) {
     let index = tbody.children.length || 0;
     return index
};


function addCurrentInventory() {
     let productNumber = document.querySelector("#current_order_product_number").value;
     let productCategory = document.querySelector("#current_order_product_brand").value;
     let productType = document.querySelector("#current_order_product_type").value;
     let productQuantity = document.querySelector("#current_order_product_quantity").value;
     let productLength = document.querySelector("#current_order_product_length").value;
     let productWidth = document.querySelector("#current_order_product_width").value;
     let productHeight = document.querySelector("#current_order_product_height").value;

     if (
          is_empty(productNumber) ||
          is_empty(productCategory) ||
          is_empty(productType) ||
          is_empty(productQuantity) ||
          is_empty(productLength) ||
          is_empty(productWidth) ||
          is_empty(productHeight)
     ) {
          alert("Please fill out all fields");
          return;
     }

     let tbody = document.querySelector("#incoming_inventory_list");

     let tr = `<tr>
     <th scope='row'>${getIndex(tbody) + 1}</th>
     <td>${productNumber}</td>
     <td>${productCategory}</td>
     <td>${productType}</td>
     <td>${productLength}</td>
     <td>${productWidth}</td>
     <td>${productHeight}</td>
     <td>$${productQuantity}</td>`;
 
     tbody.innerHTML += tr;
}


function openForm() {
     document.getElementById("myForm").style.display = "block"
}
function closeForm() {
     document.getElementById("myForm").style.display = "none"
}
function openRemoveForm() {
     document.getElementById("myFormTwo").style.display = "block"
}
function closeRemoveForm() {
     document.getElementById("myFormTwo").style.display = "none"
}

/*function addOutgoingOrder() {
     let productName = document.querySelector(
         "#outgoing_order_product_name"
     ).value;
     let productBrand = document.querySelector(
         "#outgoing_order_product_brand"
     ).value;
     let productPrice = document.querySelector(
         "#outgoing_order_product_price"
     ).value;
     let productQuantity = document.querySelector(
         "#outgoing_order_product_quantity"
     ).value;
 
     if (
         is_empty(productName) ||
         is_empty(productBrand) ||
         is_empty(productPrice) ||
         is_empty(productQuantity)
     ) {
         alert("Please fill out all fields");
         return;
     }
 
     let tbody = document.querySelector("#outgoing_inventory_list");
 
     let tr = `<tr>
     <th scope='row'>${getIndex(tbody) + 1}</th>
     <td>${productName}</td>
     <td>${productBrand}</td>
     <td>${productQuantity}</td>
     <td>$${productPrice}</td>`;
 
     tbody.innerHTML += tr;
 }*/

 /*function clearAll() {
     clearCurrentInventory();
     clearIncomingOrder();
     clearOutgoingOrder();
}

function clearCurrentInventory() {
     document.querySelector("#current_inventory_list").innerHTML = "";
}

function clearIncomingOrder() {
     document.querySelector("#incoming_inventory_list").innerHTML = "";
}

function clearOutgoingOrder() {
     document.querySelector("#outgoing_inventory_list").innerHTML = "";
}*/