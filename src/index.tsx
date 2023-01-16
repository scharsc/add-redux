import React from "react";
import ReactDOM from "react-dom/client";
import "./mystyle.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Database from "./database";
import App from "./components/App";


const button = document.getElementById('button')!;
button.addEventListener("click", 
() =>   
{
  let url = "ws://127.0.0.1:45899/sendto/revit/v1/";
  
  console.log("Connecting Client 1")
  
  let client1 = new WebSocket(url);
  
  client1.onopen = (ev: Event) => {
    console.log("Opening Client 1");
    console.log(ev);
  }
  
  client1.onmessage = (ev: MessageEvent) => {
    console.log("Message Client 1");
    console.log(ev);
  }
  
  
  client1.onclose = (ev: CloseEvent) => {
    console.log("Closing Client 1");
    console.log(ev);
  }
  
  client1.onerror = (ev: Event) => {
    console.log("Error Client 1");
    console.log(ev);
  }
  
}
);

const textContainer = document.getElementById("root")!;

const textRenderRoot = ReactDOM.createRoot(textContainer);

// //  render
// textRenderRoot.render(
//   <Provider store={store}>
//     <App/>
//   </Provider>
// );