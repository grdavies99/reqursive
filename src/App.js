import React from 'react';
import './App.css';
import BGImageContainer from './BGImageContainer';

const displayEmojiName = event => alert(event.target.id);
const emojis = [
  {
    emoji: '😀',
    name: "test grinning face"
  },
  {
    emoji: '🎉',
    name: "party popper"
  },
  {
    emoji: '💃',
    name: "woman dancing"
  }
];

function Header(props){
  return(
        <nav>
            <h1 id={props.greeting}>{props.title}</h1>
            <ul>
                <li>Products</li>
                <li>Support</li>
                <li>About</li>
            </ul>
        </nav>
  );
}

function App() {
  const greeting = "greeting";
  const displayAction = false;
  return(
    <div className="container">
      <Header greeting={greeting} title="Reqursive"/>
      {displayAction && <p></p>}
      <BGImageContainer />
      <ul>
        {
          emojis.map(emoji => (
            <li key={emoji.name}>
              <button
                onClick={displayEmojiName}
              >
                <span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App;
