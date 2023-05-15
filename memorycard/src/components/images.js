
export default function Images({animal, score}){
   
    
    return (
        <div className="animal-container">
        <img src={animal} alt={`${animal}`} style={{width: '120px', height: '120px'}} onClick={score}></img>
        </div>
        
    );

}