const myReg = (resource,callback) => {

return new Promise((resolve,reject) => {
const request = new XMLHttpRequest();

request.addEventListener("readystatechange",()=> {
    //console.log(request,request.readyState);
    if(request.readyState ===4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        //callback(undefined,data);
        resolve(data);
    } else if(request.readyState === 4 && request.status === 404) {
        //callback("Could not fetch data",undefined);
        reject("Error getting data");
    }
});

request.open("GET",resource);
request.send();

});
};

console.log("1");
console.log("2");
console.log("3");


myReg("registrya.json").then(data => {
    console.log("Promise resolved",data);
    return myReg("registryb.json");
}).then(data => {
    console.log("Here is the second register",data);
    return myReg("registryc.json");
}).then(data => {
    console.log("This is the last register",data);
}).catch(err => {
    console.log("Boom")
})


console.log("4");
console.log("5");