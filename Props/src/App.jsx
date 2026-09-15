import React from "react";
import Card from "./components/card";


const App = () => {

  return(
    <div className="parent">
      <div className="card">
        <img src="https://images.unsplash.com/photo-1788823294443-23dae4b4d482?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzJ8fHxlbnwwfHx8fHw%3D" alt=""/>
        <h1>Vinay Kumar</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vinay Kumar </p>
        <button>View Profile</button>
      </div>
      <div className="card">
        <img src="https://images.unsplash.com/photo-1788823294443-23dae4b4d482?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzJ8fHxlbnwwfHx8fHw%3D" alt=""/>
        <h1>Vinay Kumar</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vinay Kumar </p>
        <button>View Profile</button>
      </div>
      <div className="card">
        <img src="https://images.unsplash.com/photo-1788823294443-23dae4b4d482?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzJ8fHxlbnwwfHx8fHw%3D" alt=""/>
        <h1>Vinay Kumar</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vinay Kumar </p>
        <button>View Profile</button>
      </div>
      <div className="card">
        <img src="https://images.unsplash.com/photo-1788823294443-23dae4b4d482?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzJ8fHxlbnwwfHx8fHw%3D" alt=""/>
        <h1>Vinay Kumar</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vinay Kumar </p>
        <button>View Profile</button>
      </div>
      <div className="card">
        <img src="https://images.unsplash.com/photo-1788823294443-23dae4b4d482?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzJ8fHxlbnwwfHx8fHw%3D" alt=""/>
        <h1>Vinay Kumar</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vinay Kumar </p>
        <button>View Profile</button>
      </div>
      <div className="card">
        <img src="https://images.unsplash.com/photo-1788823294443-23dae4b4d482?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzJ8fHxlbnwwfHx8fHw%3D" alt=""/>
        <h1>Vinay Kumar</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vinay Kumar </p>
        <button>View Profile</button>

      </div>
      <Card/>
      <Card/>
      <Card user="Shrreyas" age={20} img="https://images.unsplash.com/photo-1789020556572-73ad4226947d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user="Abhishek" age={89} img="https://images.unsplash.com/photo-1787486433112-2ac2bc9f2983?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D"/>
      
      

      

    </div>
  )

    

}

export default App;



