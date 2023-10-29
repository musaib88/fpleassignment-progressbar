const bar=document.querySelector("#loading")



var per=0;
const cbar=document.createElement('div')
cbar.style.position='relative'
cbar.style.borderRadius='50px'
const text=document.createElement('span')
if(per===0){
    cbar.style.width="0px"
    bar.appendChild(cbar)

    text.textContent=`${per}%`
    text.style.color="green"
    text.style.fontSize='18px'
    text.style.position='absolute'
    text.style.left='100%'
    cbar.appendChild(text)  
}



 





const colorbar=()=>{
   


    // alert("hii")
   if(per===0){
    cbar.style.width='0px'
    // cbar.style.height='20px'
    
    


   }
   
    
 
    if(per===10){
        cbar.style.backgroundColor=`red`
        cbar.style.width=`${per*3}px`
        cbar.style.height='20px'
        cbar.style.visibility='visible'
       
        
        
        
        
        
        

        // alert('hwlll')
    }
    if(per===20){
        cbar.style.backgroundColor=`yellow`
        cbar.style.width=`${per*3}px`
        cbar.style.height='20px'
        cbar.style.visibility='visible'
        



    }
    if(per===30){
        cbar.style.backgroundColor=`green`
        cbar.style.width=`${per*3}px`
        cbar.style.height='20px'
        cbar.style.visibility='visible'


    }
    if(per===40){
        cbar.style.backgroundColor=`pink`
        cbar.style.width=`${per*3}px`
        cbar.style.height='20px'
        cbar.style.visibility='visible'


    }
    if(per===50){
        cbar.style.backgroundColor=`blue`
        cbar.style.width=`${per*3}px`
        cbar.style.height='20px'
        cbar.style.visibility='visible'


    }
    if(per===60){
        cbar.style.backgroundColor=`orange`
        cbar.style.width=`${per*3}px`
        cbar.style.height='20px'
        cbar.style.visibility='visible'


    }
    if(per===70){
        cbar.style.backgroundColor=`dragon`
        cbar.style.width=`${per*3}px`
        cbar.style.height='20px'
        cbar.style.visibility='visible'



    }
    if(per===80){
        cbar.style.backgroundColor=`darkblue`
        cbar.style.width=`${per*3}px`
        cbar.style.height='20px'
        cbar.style.visibility='visible'
        

    }
    if(per===90){
        cbar.style.backgroundColor='lightgreen'
        cbar.style.width=`${per*3}px`
        cbar.style.height='20px'
        cbar.style.visibility='visible'


    }
    if(per===100){
        cbar.style.backgroundColor=`darkgreen`
        cbar.style.width=`${per*3}px`
        cbar.style.height='20px'
        cbar.style.visibility='visible'
        
        

    }
    bar.appendChild(cbar)
    text.textContent=`${per}%`
    text.style.color="green"
    text.style.fontSize='18px'
    text.style.position='absolute'
    text.style.left='100%'
    cbar.appendChild(text)
    
    

    



  

    
}

   





const increase=()=>{
    if(per>=0 && per<100)
    per+=10
    
    
    



}

const decrease=()=>{
    if(per>0 && per<=100)
    per-=10;

}
const inscreseButton=document.querySelector("#increase")
 inscreseButton.addEventListener('click',()=>{
    


    
    increase()
    
    // alert(per)
    colorbar()
  
    
 });
 
 const decreaseButton=document.querySelector("#decrease")
 decreaseButton.addEventListener('click',()=>{
    
    decrease()
    // alert(per)
    colorbar()
  
   
 })