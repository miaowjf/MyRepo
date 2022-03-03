# useReducer 实现Redux

## 一、useReducer简单使用
```javascript

import React, { useState, useReducer } from "react";

function App() {
  const [count, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "add":
        return state + 1;
      case "sub":
        return state - 1;
      default:
        return state;
    }
  }, 0);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={dispatch({ type: "add" })}>increment</button>
      <button onClick={dispatch({ type: "sub" })}>decremenht</button>
    </div>
  );
}

export default App;

```
## 二、实现Redux

**界面文件**
```javascript
import React,{useContext} from "react";
import {Color,ColorContext,UPDATE_COLOR} from './Color'

function ShowArea() {
    const {color}=useContext(ColorContext)
    return <div style={{ color: color }}>字体颜色为Blue</div>;
}
function ButtonOne() {
    const {dispatch}=useContext(ColorContext)
    return (
        <div>
            <button onClick={()=>dispatch({type:UPDATE_COLOR,color:"red"})}>红色</button>
            <button onClick={()=>dispatch({type:UPDATE_COLOR,color:'green'})}>绿色</button>
        </div>
    );
}

function App(){
    return(
        <div>
            <Color>
                <ShowArea></ShowArea>
                <ButtonOne></ButtonOne>
            </Color>
        </div>
    )
}

export default App
```
Color文件
```javascript
import React,{createContext,useReducer} from 'react'

export const ColorContext=createContext({})
export const UPDATE_COLOR="UPDATE_COLOR"

const reducer=(state,action)=>{
    switch(action.type){
        case UPDATE_COLOR:
            return action.color
        default:
            return state
    }
}

export const Color=props=>{
    const [color,dispatch]=useReducer(reducer,'blue')
    return(
        <ColorContext.Provider value={{color,dispatch}}>
            {props.children}
        </ColorContext.Provider>
    )
}

```

