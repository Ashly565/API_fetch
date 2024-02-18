function fetchdata(){

    console.log("api start")

const source="https://jsonplaceholder.typicode.com/posts/3"
return fetch(source)

.then((response)=>{
    if(!response.ok)
    {
        console.log("404  not found" +response.status);
        throw("error occured" +response.message)
    }
    return response.json()
})

.then((data)=>{
    console.log("data extracted" +data)
    return data
})

.catch((error)=>{
    console.log("error handling"+error.message)
})
}

fetchdata()
.then((data)=>{
    console.log(data)
    var fdata=data.body
    document.getElementById("output").innerHTML=`<p>${fdata}</p>`
    })

    .catch((error)=>{
        console.log(error)
    })

    .finally(()=>{
        console.log("completed..")
    })