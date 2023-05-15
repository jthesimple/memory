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



export default function Images({animal, score}){
    const animalArray = [tiger,
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
                        panda];

    const getImage = () => {


    };

    
    return (
        <div className="animal-container">
        <img src={animal} alt={`${animal}`} style={{width: '120px', height: '120px'}} onClick={score}></img>
        </div>
        
    );

}