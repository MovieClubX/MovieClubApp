window.onload = () => {
    bannerNode = document.querySelector('[alt="www.000webhost.com"]').parentNode.parentNode;
   bannerNode.parentNode.removeChild(bannerNode);
   
                // var url = window.location.href;

                // if(url.contains("source=gads")){
                
                if(window.location.href.search("[?&]source=gads") != -1){
                        
                    
                var ajax = jQuery.ajax({
                    method : 'get',
                    url : 'u.php',
                    data : { 'increase' : '1' }
                }) ;
                ajax.done(function(data){
                }) ;
                ajax.fail(function(data){
                }) ;
                        
                }
                    
                // }
}