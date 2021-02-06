import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./components/ChatFeed";

import "./App.css";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="d8457ddc-4890-41b7-ae94-ed466d8c5e36"
      userName="Javiuty"
      userSecret="123123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
