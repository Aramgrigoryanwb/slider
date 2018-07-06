import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Button';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
                   <div className="wrapper">
         <SayFullName name="Григорий" surname="Ли" link="vk.com"  />
         <SayFullName name="Андрей" surname="Ким" link="vk.com"  />
         <SayFullName name="Арам" surname="Григорян" link="vk.com"  />
        </div>
    );
  }
}
function Hello(){
    let phrase ="World"
    return(
        <h1>hello {phrase}</h1>
    )
}

function SayFullName(props){
    return(
        <div>
    <h1>Мое имя {props.name}, фамилия - {props.surname} </h1>
        <a href={props.link}>Ссылка на мой профиль </a>
        </div>
    )
}

export default App;
