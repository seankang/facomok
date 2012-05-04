var MAX_X=16;
var MAX_Y=16;

var currPlayer=0;
var gameOver=0;
var map = new Array();

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
            outputHtml+="<img src='/img/pan.bmp'  id='id_"+i+"_"+j+"' onMouseDown='fn_onMouseDown("+i+","+j+")' width='20' height='20' style='left:"+moveLeft+"; top:"+moveTop+"; '>";
            moveLeft+=20;
            //outputHtml += ' | ' + j;
        }
        
        moveLeft=0;
        moveTop+=20;
        outputHtml+="<br>";
    }
    document.write(outputHtml);
}

function fn_onMouseDown(px,py)
{
    if(gameOver==0)
    {
        if(map[px][py]!=0)
        {
        }
        else
        {
            if(currPlayer==1)
            {
                id_1="id_"+px+"_"+py;
                eval("document.all."+id_1).src="/img/whiteS.bmp";
                map[px][py]=1;
                if(check(px,py)==1){ alert('player '+currPlayer+' 승~~'); gameOver=1; }
                currPlayer=2;
            }
            else 
            {
                id_1="id_"+px+"_"+py;
                eval("document.all."+id_1).src="/img/blackS.bmp";
                map[px][py]=2;
                 if(check(px,py)==1){ alert('player '+currPlayer+' 승~~'); gameOver=1; }
                currPlayer=1;
            }
            
        }
    }
}

function check(px,py) 
{ 
   chk=0;
   sum = 0; 
   
   //가로 체크
   for(chk=-5; chk<=5; chk++)
   {
       if( (py+chk)<0 || (py+chk) >= 16 ){ continue; }
       if( map[px][py+chk] == currPlayer ){ sum++; if(sum == 5 ){ return 1; } }
       else{ sum=0; }
   }
   
   sum=0;
   //세로 체크
   for(chk=-5; chk<=5; chk++)
   {
       if( (px+chk)<0 || (px+chk) >= 16 ){ continue; }
       if( map[px+chk][py] == currPlayer ){ sum++; if(sum == 5 ){ return 1; } }
       else{ sum=0; }
   }
   
   //우측 대각선 
   sum=0;
   tempX=0;
   tempY=0;
   for(chk=-5;chk<=5;chk++){ 
      if(px-chk < 0 || px-chk >=16){ continue; }
      if(py+chk < 0 || py+chk >=16){ continue; }
      
      if(map[px-chk][py+chk] == currPlayer){ 
         sum++; 
         if(sum == 5){ return 1; }
      } 
      else{ sum = 0; }   
      
   } 

   //좌측 대각선 
   sum=0;
   tempX=0;
   tempY=0;
   for(chk=-5;chk<=5;chk++){ 
      if(px+chk < 0 || px+chk >=16){ continue; }
      if(py+chk < 0 || py+chk >=16){ continue; }
      
      if(map[px+chk][py+chk] == currPlayer){ 
         sum++; 
         if(sum == 5){ return 1; }
      } 
      else{ sum = 0; }       
   } 
   
   return 0; 
}