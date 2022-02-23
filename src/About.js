
const About = () =>{
    return(
        <div class="offset">
            <h2>I was born in a driving rain.</h2>
            <p>Some people say a man is made outta mud
A poor man's made outta muscle and blood
Muscle and blood and skin and bones
A mind that's a-weak and a back that's strong
You load 16 tons, what do you get?
Another day older and deeper in debt
St. Peter, don't you call me 'cause I can't go
I owe my soul to the company store
I was born one mornin' when the sun didn't shine
I picked up my shovel and I walked to the mine
I loaded 16 tons of number nine coal
And the straw boss said, "Well, a-bless my soul"
You load 16 tons, what do you get?
Another day older and deeper in debt
St. Peter, don't you call me 'cause I can't go
I owe my soul to the company store
I was born one mornin', it was drizzlin' rain
Fightin' and trouble are my middle name
I was raised in the canebrake by an ol' mama lion
Can't no high toned woman make me walk the line
You load 16 tons, what do you get?
Another day older and deeper in debt
St. Peter, don't you call me 'cause I can't go
I owe my soul to the company store
If you see me comin', better step aside
A lotta men didn't, a lotta men died
One fist of iron, the other of steel
If the right one don't get you
Then the left one will
You load 16 tons, what do you get?
Another day older and deeper in debt
St. Peter, don't you call me 'cause I can't go
I owe my soul to the company store</p>  
<div class="container">
            <button onClick={()=>{
                    console.log('clicked');
                    if(document.getElementById('request').style.display !== "flex"){
                        document.getElementById('request').style.display = "flex";
                    }
                    else{
                        document.getElementById('request').style.display = "none";
                    }
                }
                }>Request More Info</button>
                <div>
                    <form id="request">
                        <label>Name:</label>
                        <input type="text" required/>
                        <label>Company Name:</label>
                        <input type="text" required/>
                        <label>Email:</label>
                        <input type="text" required/>
                        <button type="submit">Submit</button>
                    </form>
                </div>    
                </div>
        </div>
    );
}

export default About;