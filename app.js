let allButtons=document.querySelectorAll('button')//select all buttons
let allContent=document.querySelectorAll('.content')///select all content

allButtons.forEach(item=>{//list all buttons
    item.addEventListener('click',(e)=>{///add event listener to all buttons
     allButtons.forEach(item=>{
        if(item!=e.currentTarget){///if button is not the current button
            item.classList.remove('active')///remove active class
        }
     })
     allContent.forEach(item=>{///list all content
         let id=item.getAttribute('id')///fint id of the content
         let buttonDataSet=e.currentTarget.getAttribute('data-id')//fint data-id of the clicked button
         if(id!=buttonDataSet){///if id and data-id is not the same
             item.classList.remove('active')//remove active class
         }else{
             item.classList.add('active')//else add active class
         }

     })
        if(!item.classList.contains('active')){//if clicked button doesm't have active class then add active class
            item.classList.add('active')
        
            
        }
    })
})