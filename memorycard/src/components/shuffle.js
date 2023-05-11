import {useEffect} from 'react';


export default function Shuffle(){
    useEffect(()=>{

       const animalContainers = document.querySelectorAll('.animal-container');

       animalContainers.forEach((animalContainer)=>{
        animalContainer.addEventListener('click', clickedImage)
       });

       return () => {
        animalContainers.forEach((animalContainer)=>{
            animalContainer.addEventListener('click', clickedImage)
           }); 
       };
    },[]);

    const clickedImage = (e) => {
        console.log(e.target.alt);
        
    };
}

