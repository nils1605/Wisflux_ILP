let a= [10,20,30,40,50];
let sum=0, avg=0;
for(let i=0; i<a.length; i++)
{
    sum= sum+a[i];
    avg=sum/a.length;
}
console.log("average of the array is:",avg);
