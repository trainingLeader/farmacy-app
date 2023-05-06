const opc = {
    "GET": () => getDataAll(),
    "PUT": (data) => putData(data),
    "DELETE": (data) => deleteData(data),
    "SEARCH": (data) => searchData(data),
    "POST": (data) => postData(data)
}

let config = {
    headers:new Headers({
        "Content-Type": "application/json"
    }), 
};
const getDataAll = async()=>{
    config.method = "GET";
    let res = await ( await fetch("http://localhost:3000/customer",config)).json();
    console.log(res);
}
const postData = async(data)=>{
    console.log('ddddd');
    config.method = "POST";
    config.body = JSON.stringify(data);
    let res = await ( await fetch("http://localhost:3000/customer",config)).json();
    console.log(res);
}
const putData = async(data)=>{
    config.method = "PUT";
    config.body = JSON.stringify(data);
    let res = await ( await fetch(`http://localhost:3000/customer/${data.id}`,config)).json();
    console.log(res);
}
const deleteData = async(data)=>{
    config.method = "DELETE";
    let res = await ( await fetch(`http://localhost:3000/customer/${data.id}`,config)).json();
    console.log(res);
}
const searchData = async(data)=>{
    config.method = "GET";
    let res = await ( await fetch(`http://localhost:3000/customer?q=${Object.values(data).join("")}`,config)).json();
    console.log(res);
}

export{
    getDataAll,
    postData,
    putData,
    deleteData,
    searchData,
    opc 
}