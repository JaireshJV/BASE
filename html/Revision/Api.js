const tableBody = document.getElementById("table-body");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => {
    console.log(data, "data");
    data.forEach((item) => {
      const row = document.createElement("tr");

      row.innerHTML = `<td> ${item.userId} </td>
    <td> ${item.id} </td>
     <td> ${item.title} </td>
    `;

      tableBody.appendChild(row);
    });
  })
  .catch((err) => console.log(err));
