import React from "react";

// function HelloWorld(){
//     return(
//         <div>
//             <h1>José Eduardo</h1>
//             <h2>Ciência da Computação</h2>
//         </div>
//     )
// }

// const HelloWorld = () => {
//     return(
//         <div>
//             <h1>José Eduardo</h1>
//             <h2>Ciência da Computação</h2>
//         </div>
//     )
// }

// const HelloWorld = () =>
//     <div>
//         <h1>José Eduardo</h1>
//         <h2>Ciência da Computação</h2>
//     </div>

class HelloWorld extends React.Component{
    render(){
        let x = 11;
        return(
            <div>
                <h1>José Eduardo - {x}</h1>
                <h2>Ciência da Computação</h2>
            </div>
        )
    }
}

export default HelloWorld;