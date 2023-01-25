for (let i=1;i<=100;i=i+10)
{

    document.write("<tr>")
    // i=1
    for(let j=i;j<i+10;j++)
    {
        document.write("<td>" +j+ "</td>");

             
    }
    document.write("</tr>")
    
}
document.write("</table>" );