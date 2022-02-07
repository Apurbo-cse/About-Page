import React from 'react';
type greet={
    name:string;
}

const Home = (props:greet) => {
  return <div>
      <h1>hello {props.name}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste provident quidem non culpa odio quod voluptate eius, officiis voluptatibus animi.
          
      </p>
  </div>;
};

export default Home;
