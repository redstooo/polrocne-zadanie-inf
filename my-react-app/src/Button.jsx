

function Button(){

    // let count = 0;
    // const handleClick = (name) => {
    //     if(count < 10){
    //         count++;
    //         console.log(`${name}, you have clicked me ${count} time/s`);
    //     }
    //     else{
    //         console.log(`${name}, stop clicking me`)
    //     }
    // }

    let x = 0;
    const handleClick = (e) => {
        x++;
        e.target.textContent = `You have clicked me ${x} time/s`;
    }


    return(
        <button className="btn" onDoubleClick={(e) => handleClick(e)}>klikni ma</button>
    );
}

export default Button