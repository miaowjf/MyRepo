# useImperativeHandle透传Ref
```javascript
 import React,{useRef,useEffect,useImperativeHandle,forwardRef} from 'react'
 function ChildInputComponent(props,ref){
     const inputRef=useRef(null)
     useImperativeHandle(ref,()=>inputRef.current)
     return <input type="text" name="chile input" ref={inputRef}/>
 }
 const ChildInput=forwardRef(ChildInputComponent)
 function App(){
     const inputRef=useRef(null)
     useEffect(()=>{
         inputRef.current.focus()
     },[])
     return (
         <div>
             <ChildInput ref={inputRef}/>
         </div>
     )
 }

 export default App
```
forwardRef使下个组件能拿到ref，传给子组件。forwardRef是高阶组件，进行包裹后传Ref。