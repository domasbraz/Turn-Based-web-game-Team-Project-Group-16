cont = document.getElementsByClassName("container")[0];

/* 
type 0: for no grid
type 1: for un-labeled grid
type 2: for grid labeled with row and column numbers
type 3: only first row and column labeled in grid

types 1-3 should only be used for testing purposes

IMPORTANT: the grid is divided into 10 x 10 blocks for performance reasons ("2 * 3" labeled refers to 20 * 30 and should be declared as such)
Alternatively to help with accurate possitioning, enable grid in inspection tool within the browser
*/
var type = 2;

var num = 1;


switch (type)
{
    case 0:
        break;

    case 1:
        for (var x = 1; x < 11; x++)
            {
                if (x == 1)
                {
                    cont.innerHTML += "<div class='item gridbg' style='grid-area: " + x + " / " + x + "/ span 10 / span 10 ;'>" + "</div>";
                
                    for (var y = 1; y < 10; y++)
                    {
                        
                        cont.innerHTML += "<div class='item gridbg' style='grid-area: " + x + " / " + ((y * 10) + 1) + "/ span 10 / span 10 ;'>" + "</div>";
                        
                    }
                }

                else
                {

                    cont.innerHTML += "<div class='item gridbg' style='grid-area: " + (((x - 1) * 10) + 1) + " / " + 1 + "/ span 10 / span 10 ;'>" + "</div>";

                    for (var y = 1; y < 10; y++)
                    {
                        cont.innerHTML += "<div class='item gridbg' style='grid-area: " + (((x - 1) * 10) + 1) + " / " + ((y * 10)+1) + "/ span 10 / span 10 ;'>" + "</div>";
                    }
                }
            }
        break;

    case 2:
        for (var x = 1; x < 11; x++)
            {
                if (x == 1)
                {
                    cont.innerHTML += "<div class='item gridbg' style='grid-area: " + x + " / " + x + "/ span 10 / span 10 ;'>" + "1 * 1</div>";
                
                    for (var y = 1; y < 10; y++)
                    {
                        
                        cont.innerHTML += "<div class='item gridbg' style='grid-area: " + x + " / " + ((y * 10) + 1) + "/ span 10 / span 10 ;'>" + x + " * " + (y + 1) + "</div>";
                        
                    }
                }

                else
                {

                    cont.innerHTML += "<div class='item gridbg' style='grid-area: " + (((x - 1) * 10) + 1) + " / " + 1 + "/ span 10 / span 10 ;'>" + x + " * 1</div>";

                    for (var y = 1; y < 10; y++)
                    {
                        cont.innerHTML += "<div class='item gridbg' style='grid-area: " + (((x - 1) * 10) + 1) + " / " + ((y * 10)+1) + "/ span 10 / span 10 ;'>" + x + " * " + (y + 1) + "</div>";
                    }
                }
            }
        break;

    case 3:
        
        for (var x = 1; x < 11; x++)
        {
            if (x == 1)
            {
                cont.innerHTML += "<div class='item gridbg' style='grid-area: " + x + " / " + x + "/ span 10 / span 10 ;'>" + "1</div>";
            
                for (var y = 1; y < 10; y++)
                {
                    
                    cont.innerHTML += "<div class='item gridbg' style='grid-area: " + x + " / " + ((y * 10) + 1) + "/ span 10 / span 10 ;'>" + (y + 1) + "</div>";
                    
                }
            }

            else
            {

                cont.innerHTML += "<div class='item gridbg' style='grid-area: " + (((x - 1) * 10) + 1) + " / " + 1 + "/ span 10 / span 10 ;'>" + x +"</div>";

                for (var y = 1; y < 10; y++)
                {
                    cont.innerHTML += "<div class='item gridbg' style='grid-area: " + (((x - 1) * 10) + 1) + " / " + ((y * 10)+1) + "/ span 10 / span 10 ;'>" + "</div>";
                }
            }
            

            
            
        }

}