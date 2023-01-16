import React from "react";
import ReactDOM from "react-dom/client";
import "./mystyle.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Database from "./database";
import App from "./components/App";


const button = document.getElementById('button')!;
let count: number = 0;
button.addEventListener("click", 
() =>   
{
  let url = "ws://127.0.0.1:45899/sendto/revit/v1/";
  let clientCount = count++;
  console.log("Connecting Client" + clientCount)

  let client1 = new WebSocket(url);
  
  client1.onopen = (ev: Event) => {
    console.log("Opening Client" + clientCount);
    console.log(ev);
  }
  
  client1.onmessage = (ev: MessageEvent) => {
    console.log("Message Client " + clientCount);
    console.log(ev);
  }
  
  
  client1.onclose = (ev: CloseEvent) => {
    console.log("Closing Client " + clientCount);
    console.log(ev);
  }
  
  client1.onerror = (ev: Event) => {
    console.log("Error Client " + clientCount);
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