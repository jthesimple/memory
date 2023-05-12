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

    const [score, setScore] = useState(0);
    const [memory, setMemory] = useState('');

    const remember = () => {
        


        setScore(score +1);
    }

    return (
        <div className="images-container" style={styles.container}>
            <Images animal={tiger} score={remember}></Images>
            <Images animal={flamingo} score={remember}></Images>
            <Images animal={dog} score={remember}></Images>
            <Images animal={deer} score={remember}></Images>
            <Images animal={jiraffe} score={remember}></Images>
            <Images animal={bird} score={remember}></Images>
            <Images animal={pugg} score={remember}></Images>
            <Images animal={lizard} score={remember}></Images>
            <Images animal={cow} score={remember}></Images>
            <Images animal={zebra} score={remember}></Images>
            <Images animal={monkey} score={remember}></Images>
            <Images animal={panda} score={remember}></Images>
            <div>Current Score: {score}</div>
        </div>
    );

}

