let mass = [
{age:2},
{age:40},
{age:9}
]



function inter(arr){
 for(let item of arr){
     /*if(item.age>=20){
         console.log(item.name)
     }*/
     let img = document.createElement('img');
     img.src = item.images;
 }
}
inter(mass)