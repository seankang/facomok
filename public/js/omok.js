var MAX_X=16
    ,MAX_Y=16;


function createMap()
{
    for(i=0; i<MAX_X; i++)
    {
        map[i] = new Array();
        for(j=0; j<MAX_Y; j++)
        {
            map[i][j]=0;
        }
    }
}
function initDisplay() 
{
    createMap();
    currPlayer=1;
    outputHtml = "";
    
    moveLeft=0;
    moveTop=0;
    for(i=0; i<map.length; i++)
    {
        for(j=0; j<map[i].length; j++)
        {
            outputHtml+="<img src='pan.bmp'  id='id_"+i+"_"+j+"' onMouseDown='fn_onMouseDown("+i+","+j+")' width='20' height='20' style='left:"+moveLeft+"; top:"+moveTop+"; position:absolute;'>";
            moveLeft+=20;
        }
        
        moveLeft=0;
        moveTop+=20;
        outputHtml+="<br>";
    }
    document.write(outputHtml);
}