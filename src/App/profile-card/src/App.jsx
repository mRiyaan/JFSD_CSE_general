import React from 'react';
import './App.css';
import ProfileCard from './ProfileCard';
import "./index.css";

function App() {
  return (
    <>
    <ProfileCard
    name="John Doe"
    description="A software engineer"
    phone="123-456-7890"
    image="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1200"
     />
    </>
  );
}

export default App;
