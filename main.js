var a
var sum=0
var c

for(i=1;i<=10;i++){
    a=parseInt(prompt("Enter the "+i+" value"))
    document.write(a+" ")
    sum=sum+a;
}
document.write("<br>"+"The sum of 10 no is : "+sum+"<br>")
c=sum/10
 document.write("The Average is : "+c)