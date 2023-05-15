import React, {useEffect, useState} from "react";
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
import Images from "./images";


export default function Gallery(){
    const styles = {
        container: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            gridTemplateRows: '1fr 1fr 1fr',
            rowGap: '20px',
        }
    };

    const [animalArray, setAnimalArray] = useState([tiger,
                        flamingo,
                        dog,
                        deer,
                        jiraffe,
                        bird,
                        pugg,
                        lizard,
                        cow,
                        zebra,
                        monkey,
                        panda
    ]);


    const [counter, setCounter] = useState(0);
    const [memory, setMemory] = useState([]);
    const [highScore, setHighScore] = useState(0);

    const gameLogic = (e) => {
        const identifier = e.target.alt
        if (memory.includes(identifier)===false){
            setMemory(memory => [...memory, identifier]);
            setCounter(counter + 1);
        } else if (memory.includes(identifier)=== true){
            console.log('Game Over');
            if (counter > highScore){
                setHighScore(highScore => counter);
                setCounter(0);
                setMemory(memory => []);
            } else if (counter < highScore){
                setCounter(0);
                setMemory(memory => []);
            };   
        };
    }

    const shuffleArray = (array) =>{
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
          }
          return array;
    };

    useEffect(() => {
        setAnimalArray(animalArray => shuffleArray(animalArray));
    },[counter]);

    

    return (
        <div className="images-container" style={styles.container}>
            <Images animal={animalArray[0]} score={gameLogic}></Images>
            <Images animal={animalArray[1]} score={gameLogic}></Images>
            <Images animal={animalArray[2]} score={gameLogic}></Images>
            <Images animal={animalArray[3]} score={gameLogic}></Images>
            <Images animal={animalArray[4]} score={gameLogic}></Images>
            <Images animal={animalArray[5]} score={gameLogic}></Images>
            <Images animal={animalArray[6]} score={gameLogic}></Images>
            <Images animal={animalArray[7]} score={gameLogic}></Images>
            <Images animal={animalArray[8]} score={gameLogic}></Images>
            <Images animal={animalArray[9]} score={gameLogic}></Images>
            <Images animal={animalArray[10]} score={gameLogic}></Images>
            <Images animal={animalArray[11]} score={gameLogic}></Images>
            <div>Current Score: {counter}</div>
            <div>High Score: {highScore}</div>
        </div>
    );

}

