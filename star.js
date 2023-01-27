// how to print triangle of star in javascript
var j=0;

for (let i =1; i<10;i++)
{
        // i =1
       
        while(j<i)
        {
            //document.write("# " + `j is ${j} , i is ${i}`)
            //document.write("#")
            document.write("<br>");
            for (let k=0;k<i;k++)
            {
                document.write("#");
                
                
                // document.write(`value of i is ${i} and j is ${j}`);
                
            }
            j=j+1;
            continue;
        }
            
}



