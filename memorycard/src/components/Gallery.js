import React, {useState} from "react";
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

    return (
        <div className="images-container" style={styles.container}>
            <Images animal={tiger} score={gameLogic}></Images>
            <Images animal={flamingo} score={gameLogic}></Images>
            <Images animal={dog} score={gameLogic}></Images>
            <Images animal={deer} score={gameLogic}></Images>
            <Images animal={jiraffe} score={gameLogic}></Images>
            <Images animal={bird} score={gameLogic}></Images>
            <Images animal={pugg} score={gameLogic}></Images>
            <Images animal={lizard} score={gameLogic}></Images>
            <Images animal={cow} score={gameLogic}></Images>
            <Images animal={zebra} score={gameLogic}></Images>
            <Images animal={monkey} score={gameLogic}></Images>
            <Images animal={panda} score={gameLogic}></Images>
            <div>Current Score: {counter}</div>
            <div>High Score: {highScore}</div>
        </div>
    );

}

