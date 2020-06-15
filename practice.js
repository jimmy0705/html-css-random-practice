for(var i= 0; i<10;i++){
    //console.log(i);
    //setTimeout(()=>console.log(i),5000);
}


for(let i= 0; i<10;i++){
   // console.log(i);
   // setTimeout(()=>console.log(i),5000);
}


const arr1 = [1,2,3,4,5];
console.log(arr1);

const arr2 = arr1.map((e)=>{return (e);});
console.log(arr2);
arr2[0]=9;
console.log(arr2);
console.log(arr1);

//console.log(arr1==arr2);