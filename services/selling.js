/* START: hl1 slide*/

//paste this code under the head tag or in a separate js file.
	// Wait for window load
	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
	
        var second=document.getElementsByClassName('second');
        


function homeani()
{
    second[0].style.top="0px";
    second[0].style.opacity="1";
}
homeani();
        
	});





var ser=document.getElementsByClassName('ser-ss');
var frmimg=document.getElementsByClassName('frm-imgcon');
window.onscroll = function() {tabsanim()};

  var h = parseInt(window.innerHeight);
        var w = parseInt(window.innerWidth);

function tabsanim() {
    
     if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        for(i=0;i<4;i++){
        ser[i].style.top="0px";
        ser[i].style.opacity="1";}
        
       
      
    }
    
        if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
            frmimg[0].style.opacity="1";
       
            
        }
    
    
    
}







