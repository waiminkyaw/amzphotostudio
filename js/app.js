// Start Navbar
const navbuttons= document.querySelector('.navbuttons');
navbuttons.addEventListener('click',()=>navbuttons.classList.toggle('changes'));

// for navbar
const navbar=document.querySelector('.navbar');

window.addEventListener('scroll',()=>{
    const getscrolly = window.scrollY;
    // console.log(getscrolly);

    if(getscrolly >= 200){
        navbar.classList.add('navmenus');
    }else{
        navbar.classList.remove('navmenus');
    }
});
// End Navbar

// Start Gallery Section
const gallerylists=document.querySelectorAll('.gallerylists');
const filternews=document.querySelectorAll('.filters.new'),
        filterfrees=document.querySelectorAll('.filters.free'),
        filterpros=document.querySelectorAll('.filters.pro');

    gallerylists.forEach((gallerylist)=>{
    // console.log(gallerylist);

    

    gallerylist.addEventListener('click',(e)=>{
        let datafilter= gallerylist.getAttribute('data-filter');
        // console.log(datafilter);

        removeactiveitem();
        e.target.classList.add('activeitems');

        if(datafilter === "all"){
          

            filternews.forEach(filternew=>{
                filternew.style.display="inline-block";
            });

            filterfrees.forEach(filterfree=>{
                filterfree.style.display="inline-block";
            });

            filterpros.forEach(filterpro=>{
                filterpro.style.display="inline-block";
            });


        }else if(datafilter === "new"){
           

            filternews.forEach(filternew=>{
                filternew.style.display="inline-block";
            });


            filterfrees.forEach(filterfree=>{
                filterfree.style.display="none";
            });

            filterpros.forEach(filterpro=>{
                filterpro.style.display="none";
            });

        }else if(datafilter === "free"){
           

            filternews.forEach(filternew=>{
                filternew.style.display="none";
            });

            filterfrees.forEach(filterfree=>{
                filterfree.style.display="inline-block";
            });

            filterpros.forEach(filterpro=>{
                filterpro.style.display="none";
            });
        }else{
          

            filternews.forEach(filternew=>{
                filternew.style.display="none";
            });

            filterfrees.forEach(filterfree=>{
                filterfree.style.display="none";
            });

            filterpros.forEach(filterpro=>{
                filterpro.style.display="inline-block";
            });
        }
    })
});

// remove current active item
function removeactiveitem(){
    gallerylists.forEach(gallerylist=>{
        gallerylist.classList.remove('activeitems');
    });
}
// End Gallery Section