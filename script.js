//your JS code here. If required

	 new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("HELLO , world!");
    },1000)
}).then((value)=>{
    document.getElementById("output").innerHTML = value;
});

