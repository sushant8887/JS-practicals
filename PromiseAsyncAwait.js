function fetchData(){
    return new Promise((resolve,reject)=>{
        const success =Math.random()<0.9;
        if (success) {
            resolve({message:'data received'});
        } else {
            reject(new Error ("Error occured"));
        }
    })
}
// fetchData().then((data)=>{
// console.log('Successs',data.message);
// }).catch((error)=>{
//     console.log('error',error.message);
// })
async function syncData(){
    const data= await fetchData();
    if (data) {
        console.log(data);
    } else {        
        console.log("not");
    }
}
syncData();
