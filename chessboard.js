
for (var i = 1; i < 10; i++) {
    // document.write(`i is at ${i}`);
    // document.write("<br>")
    for (var j = 1; j < 8; j++) 
    {
        // document.write(j);

        // if i=odd, then at all even places print # else nothing


        if (i%2!=0)
        {
            if(j%2==0) 
            {  // i is odd j is odd
                // document.write(`i is ${i} and j is ${i}`);
                // document.write("<br>")
                document.write("#");
            }
        else document.write(" "); }
    
        else
       
        if (i%2==0)
        {
            if(j%2!=0) 
            {  // i is odd j is odd
                // document.write(`i is ${i} and j is ${i}`);
                // document.write("<br>")
                document.write("#");
            }
        }else document.write(" ");

        

    } document.write("<br>")
}