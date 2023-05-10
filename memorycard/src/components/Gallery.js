import React, {useEffect} from "react";
import tiger from '../images/tiger.jpeg'
import flamingo from '../images/alejandro-contreras-wTPp323zAEw-unsplash.jpg';
import dog from '../images/alexandru-rotariu-o_QTeyGVWjQ-unsplash.jpg';
import deer from '../images/andreas-dress-Iw12lY3koDk-unsplash.jpg';
import jiraffe from '../images/andy-holmes-D6TqIa-tWRY-unsplash.jpg';
import bird from '../images/david-clode-7_TTPznVIQI-unsplash.jpg';
import pugg from '../images/karsten-winegeart-oU6KZTXhuvk-unsplash.jpg';
import lizard from '../images/mark-stoop-JAUFHzqZPd0-unsplash.jpg';
import cow from '../images/thomas-oldenburger-1SQFd9_zNW4-unsplash.jpg';
import zebra from '../images/redcharlie-redcharlie1-jNtv6K1RFek-unsplash.jpg';
import monkey from '../images/kelly-sikkema-r077pfFsdaU-unsplash.jpg';
import panda from '../images/debbie-molle-6DSID8Ey9-U-unsplash.jpg';





export default function Gallery(){
    const styles = {
        container: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            gridTemplateRows: '1fr 1fr 1fr',
            rowGap: '20px',
        }
    };

    return (
        <div className="images-container" style={styles.container}>
            <Images animal={tiger}></Images>
            <Images animal={flamingo}></Images>
            <Images animal={dog}></Images>
            <Images animal={deer}></Images>
            <Images animal={jiraffe}></Images>
            <Images animal={bird}></Images>
            <Images animal={pugg}></Images>
            <Images animal={lizard}></Images>
            <Images animal={cow}></Images>
            <Images animal={zebra}></Images>
            <Images animal={monkey}></Images>
            <Images animal={panda}></Images>
        </div>
    );

}

function Images({animal}){
    return (
        <div className="animal-container">
        <img src={animal} alt='tiger' style={{width: '120px', height: '120px'}}></img>
        <Shuffle></Shuffle>
        </div>
        
    );

}

function Shuffle(){
    useEffect(()=>{

       const animalContainer = document.querySelector('.animal-container');

       animalContainer.addEventListener('click', clickedImage);

       return () => {
        animalContainer.removeEventListener('click', clickedImage);
       };
    },[]);

    const clickedImage = () => {
        console.log('image clicked');
    };



}





