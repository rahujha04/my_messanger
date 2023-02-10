import { Button, FormControl, Input, InputLabel } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./App.css";
import Message from "./components/Message";
import { db } from "./firebase";
import firebase from "firebase/compat/app";
import FlipMove from "react-flip-move";

const App = () => {
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([]);

  const [username, setUsername] = useState("");

  const [imageURL, setImageURL] = useState("")

  // useState = variable in REACT
  // useEffect = run code on a condition in REACT

  useEffect(() => {
    // run once when the app component loads
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})));
      });
  }, []);

  useEffect(() => {
    // run code here...
    // if its blank inside [], this code runs once when the app component loads
    // if we have a variable like input, it runs every time input changes

    setUsername(prompt("Please Enter Your Name"));
    setImageURL("https://cdn.pixabay.com/photo/2021/03/02/12/03/messenger-6062240_1280.png");
  }, []); // condition

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection("messages").add({
      text: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <>
      <center>
        <img src={imageURL} alt="messanger" />
        <form>
          <FormControl>
            <InputLabel style={{margin: 'auto'}}>Enter a message</InputLabel>
            <Input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="type..."
            />
            <Button
              type="submit"
              onClick={sendMessage}
              disabled={!input}
              variant="contained"
              color="primary"
            >
              Send
            </Button>
          </FormControl>
        </form>
      </center>

      <FlipMove>
        {messages.map(({id, message}) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </>
  );
};

export default App;
