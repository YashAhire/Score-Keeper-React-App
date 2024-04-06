
let score = 0;
let wicket = 0;
let ballWise = [];
let hit = 0;
let inpuRef = React.createRef();

function addScore(num){
    hit = num;
    root.render(<App />);
}

function addWicket(){
    hit = "W";
    root.render(<App />);
}

// Score Button Components
const ScoreButton = () => (
    <div>
            <button onClick={() => addScore(0)}>0</button>
            <button onClick={() => addScore(1)}>1</button>
            <button onClick={() => addScore(2)}>2</button>
            <button onClick={() => addScore(3)}>3</button>
            <button onClick={() => addScore(4)}>4</button>
            <button onClick={() => addScore(5)}>5</button>
            <button onClick={() => addScore(6)}>6</button>
            <button onClick={addWicket}>Wicket</button>
        </div>
)

// Diaplay result Component
const Result = () => (
    <div> 
        {ballWise.map((res, index) => (
        <>
            {index % 6 === 0? <br />:null}
            <span key ={index}>{res === 0?<strong>.</strong>:res}&nbsp;</span>
        </>))}
    </div>
)

// Submit Button Component
function handleSubmit(event){
    event.preventDefault();
    if(hit == "W"){
        wicket +=1;
    }else{
        score +=hit;
    }
    ballWise.unshift(
        // <span>{hit}{","}{inpuRef.current.value}</span>
        <span>{`${hit}, ${inpuRef.current.value}`}</span>
        );
    hit = 0;
    inpuRef.current.value = "";
    root.render(<App />);
}

// Form Component
const Form = () => (
    <form onSubmit = {handleSubmit}>
        <input value = {hit} />
        <input placeholder="Add a comment" ref = {inpuRef}/>
        <button>Submit</button>
    </form>
)

const App = () =>(
    
    <>
        <h1>SCORE KEEPER</h1>
        <h2>SCORE: {score}/{wicket}</h2>
        <ScoreButton />
        <br />
        {/* <Result /> */}
        <Form />
        <hr />
        <div>
            {ballWise.map((res, index) => (
                <p key ={index}>{res}</p>
            ))}
        </div>
    </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<><App /></>);
