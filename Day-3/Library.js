const formsubmit = () => {

   insertdata()
}

var insertdata = () => {
   var table = document.getElementById("librarylist")
   var newrow = table.insertRow(table.length)
   var cell1 = newrow.insertCell(0)
   title = document.getElementById("title").value
   cell1.innerHTML = title
   var cell2 = newrow.insertCell(1)
   gener = document.getElementById("gener").value
   cell2.innerHTML = gener
   var cell3 = newrow.insertCell(2)
   quantity = document.getElementById("quantity").value
   cell3.innerHTML = quantity
   var cell4 = newrow.insertCell(3)
   cell4.innerHTML = '<a onclick = "editrow()">Edit/</a><a onclick = "deleterow()">Delete</a>'
}

var editrow = () => {

   var table = document.getElementById("librarylist")
   var rowlength = table.rows.length
   console.log(rowlength)

   for (var i = 1; i < rowlength; i++) {
      table.rows[i].onclick = (rindex) => {
         var rowindex = rindex.rowIndex
         console.log(rowindex)
      }

      document.getElementById("title").value = this.cell1.innerHTML
      document.getElementById("gener").value = this.cell2.innerHTML
      document.getElementById("quantity").value = this.cell3.innerHTML
   }

}

var deleterow = () => {
   //var i = r.parentNode.parentNode.rowIndex;
   var table = document.getElementById("librarylist")
   var rowlength = table.rows.length
   console.log(rowlength)
   for (var i = 1; i < rowlength; i++) {
      table.rows[i].onclick = (rindex) => {
         var rowindex = rindex.rowIndex
         // console.log(rowindex)
      }
      table.deleteRow(i);
   }
}
window.onload = deleterow()
