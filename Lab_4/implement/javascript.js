function addFruit() {
    const name = document.querySelector('.form_item input[type="name"]').value;
    const price = document.querySelector('.form_item input[type="price"]').value;
    const quantity = document.querySelector('.form_item input[type="quantity"]').value;
  
    const fruit = {
      name,
      price,
      quantity,
    };
  
    const maxId = document.querySelectorAll('.list tbody tr').length;
  
    fruit.id = maxId + 1;
  
    const tableBody = document.querySelector('.list tbody');
    const newRow = document.createElement('tr');
  
    newRow.innerHTML = `
      <td>${fruit.id}</td>
      <td>${fruit.name}</td>
      <td>${fruit.price}</td>
      <td>${fruit.quantity}</td>
      <td>
        <button type="button" class="btn edit-btn" onclick="editFruit()">Sửa</button>
        <button type="button" class="btn delete-btn" onclick="deleteFruit()">Xóa</button>
      </td>
    `;
  
    tableBody.appendChild(newRow);
  }
  


  function searchFruit() {
    // Lấy từ khóa tìm kiếm
    const keyword = document.querySelector('.search input[type="search"]').value;
  
    // Lọc bảng theo từ khóa tìm kiếm
    const tableBody = document.querySelector('.list tbody');
    const rows = tableBody.querySelectorAll('tr');
  
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
  
      // Nếu từ khóa tìm kiếm tồn tại trong bất kỳ cột nào
      if (
        row.querySelector('td:nth-child(1)').textContent.includes(keyword) ||
        row.querySelector('td:nth-child(2)').textContent.includes(keyword) ||
        row.querySelector('td:nth-child(3)').textContent.includes(keyword) ||
        row.querySelector('td:nth-child(4)').textContent.includes(keyword)
      ) {
        row.style.display = 'table-row';
      } else {
        row.style.display = 'none';
      }
    }
  }
  
  

  function cancelSearch() {
    const tableBody = document.querySelector('.list tbody');
    const rows = tableBody.querySelectorAll('tr');
  
    for (let i = 0; i < rows.length; i++) {
      rows[i].style.display = 'table-row';
    }
  }
  

  function editFruit() {
    // Get the table row that was clicked.
    const row = event.target.closest('tr');
  
    // Get the fruit data from the table row.
    const id = row.querySelector('td:first-child').textContent;
    const name = row.querySelector('td:nth-child(2)').textContent;
    const price = row.querySelector('td:nth-child(3)').textContent;
    const quantity = row.querySelector('td:nth-child(4)').textContent;
  
    // Set the input values to the fruit data.
    document.querySelector('input[type="name"]').value = name;
    document.querySelector('input[type="price"]').value = price;
    document.querySelector('input[type="quantity"]').value = quantity;
  
    // Show the save button and hide the add button.
    document.querySelector('.save-btn').hidden = false;
    document.querySelector('.add-btn').hidden = true;
  }
  
  function saveFruit() {
    // Get the fruit data from the inputs.
    const name = document.querySelector('input[type="name"]').value;
    const price = document.querySelector('input[type="price"]').value;
    const quantity = document.querySelector('input[type="quantity"]').value;
  
    // Update the table row with the new fruit data.
    const row = document.querySelector('tr td:first-child');
    row.parentNode.querySelector('td:nth-child(2)').textContent = name;
    row.parentNode.querySelector('td:nth-child(3)').textContent = price;
    row.parentNode.querySelector('td:nth-child(4)').textContent = quantity;
  
    // Hide the save button and show the add button.
    document.querySelector('.save-btn').hidden = true;
    document.querySelector('.add-btn').hidden = false;
  }
  
  

  function deleteFruit() {
    // Lấy hàng đang được xóa
    const row = event.target.closest('tr');
  
    // Lấy ID của hàng đang được xóa
    const id = row.querySelector('td:nth-child(1)').textContent;
  
    // Xóa hàng đang được xóa
    const tableBody = document.querySelector('.list tbody');
    tableBody.removeChild(row);
  
    // Cập nhật ID cho các hàng còn lại
    const rows = tableBody.querySelectorAll('tr');
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      row.querySelector('td:nth-child(1)').textContent = i + 1;
    }
  }
  

// function saveFruit() {
//     // Lấy các giá trị từ biểu mẫu
//     const name = document.querySelector('.form_item input[type="name"]').value;
//     const price = document.querySelector('.form_item input[type="price"]').value;
//     const quantity = document.querySelector('.form_item input[type="quantity"]').value;
  
//     // Lấy ID của hàng đang được sửa
//     const id = document.querySelector('.form_item input[type="id"]').value;
  
//     // Tạo một đối tượng trái cây mới
//     const fruit = {
//       id,
//       name,
//       price,
//       quantity,
//     };
  
//     // Cập nhật dữ liệu trong bảng
//     const tableBody = document.querySelector('.list tbody');
//     const rows = tableBody.querySelectorAll('tr');
  
//     for (let i = 0; i < rows.length; i++) {
//       const row = rows[i];
  
//       // Nếu ID của hàng đang được sửa khớp với ID của hàng hiện tại
//       if (row.querySelector('td:nth-child(1)').textContent === id) {
//         // Cập nhật dữ liệu của hàng hiện tại
//         row.querySelector('td:nth-child(2)').textContent = name;
//         row.querySelector('td:nth-child(3)').textContent = price;
//         row.querySelector('td:nth-child(4)').textContent = quantity;
//       }
//     }
  
//     // Ẩn nút Lưu, hiện nút Thêm
//     const saveButton = document.querySelector('.form .add-btn');
//     saveButton.hidden = true;
//     const addButton = document.querySelector('.form .add-btn[hidden]');
//     addButton.hidden = false;
//   }
  