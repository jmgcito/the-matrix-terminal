import React from "react";
import { StreamChat } from "stream-chat";
import "./App.css";

function MessageList(props) {
  return (
    <ul className="message">
      {props.messages.map((message) => {
        return (
          <li>
            <div className="green-text">{message.text}</div>
          </li>
        );
      })}
    </ul>
  );
}

function SendMessageForm(props) {
  return (
    <form>
      <input className="green-text" />
    </form>
  );
}

const dummyMessages = [
  { text: "Wake up, Neo..." },
  { text: "The Matrix has you..." },
  { text: "Follow the white rabbit." },
  { text: "Knock, knock, Neo." },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: dummyMessages,
      text: "",
    };
  }

  render() {
    return (
      <main>
        <MessageList messages={this.state.messages} />
        <SendMessageForm />
      </main>
    );
  }
}

export default App;
