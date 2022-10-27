fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=> res.json())
    .then(function (data){
      console.log(data.name)
      let tableData = "";
    data.map((values)=>{
      tableData += `<h1>${values.name}</h1>`
    })
    document.getElementById("table_body").innerHTML = tableData
  })

const dataFromTable = document.querySelector("#table_body")
dataFromTable.addEventListener("click",function(e){
  e.preventDefault();
  fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res)=> res.json())
      .then(function (data){
        console.log(data[0].title)
    let tablePosts = "";
    data.map((values)=>{
      tablePosts += `<p>${values.id + '.' + ' ' + values.title + ' ' + values.body}</p>`
    })
    document.getElementById("table_body").innerHTML = tablePosts
    })
})