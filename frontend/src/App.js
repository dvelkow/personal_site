import React, { useState, useEffect, useRef } from 'react';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);
  const [currentLine, setCurrentLine] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [askedInfo, setAskedInfo] = useState({});
  const outputRef = useRef(null);
  const inputRef = useRef(null);

  const personalInfo = {
    location: "I am based in Sofia, Bulgaria. But I am pretty flexible.",
    skills: ["Python, SQL & NoSQL, AWS, Spark, Hadoop, Docker, Bash, Linux, ML.","Or at least those are the relevant ones, I know some JS, React and C++ too but that's besides the point <:"],
    hobbies: ["Right now I'm probably exploring datasets or solving automation problems.","But you can sometimes catch me playing Chess, going to Fitness, betting on US oil prices, or even... reading a book. I know, pretty wild, right?"],
    work_experience: [
      "(2020-2024) Video Editor at Replayed.co, ik it doesn't have much in common with programming, but I learned how to communicate with clients, work around deadlines and function in a work enviroment through it, so I guess there's that.",
      "(2024-present)AI Automation Python Developer at OptimateX, a personal company I started with friends, we are currently automating workflows for companies.",
      "But I am also actively searching for a full-time job, so don't hesitate to hire me."
    ],
    projects: "You can see (some of) them above, by clicking on the links. They have detailed README files in their respective repos, feel free to take a look.",
    hidden: ["How did you even find that? Guess you looked at the code, however you deserve an award, so here is an answer for 1 existential question:", "What is reality? One layer in a stack of infinite simulations, and we're all just NPCs of a higher-level simulation."]
  };

  const handleCommand = (cmd) => {
    const lowerCmd = cmd.toLowerCase();
    switch(lowerCmd) {
      case 'info':
        return ['Choose from: "location", "skills", "hobbies", "work_experience", "projects"'];
      case 'location':
      case 'hidden':
      case 'skills':
      case 'hobbies':
      case 'projects':
      case 'work_experience':
        if (askedInfo[lowerCmd]) {
          setAskedInfo({...askedInfo, [lowerCmd]: askedInfo[lowerCmd] + 1});
          return ["You asked for that already, but sure."].concat(
            Array.isArray(personalInfo[lowerCmd]) 
              ? personalInfo[lowerCmd]
              : [personalInfo[lowerCmd]]
          );
        } else {
          setAskedInfo({...askedInfo, [lowerCmd]: 1});
          return Array.isArray(personalInfo[lowerCmd]) 
            ? personalInfo[lowerCmd]
            : [personalInfo[lowerCmd]];
        }
      case 'clear':
        setOutput([]);
        setAskedInfo({});
        return [];
      default:
        return [`Uhhh, try with a different command. Type "info" to see them.`];
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOutput = handleCommand(input);
    setOutput([...output, `> ${input}`]);
    setInput('');
    setIsTyping(true);
    typeLines(newOutput);
  };

  const typeLines = async (lines) => {
    for (let line of lines) {
      await typeLine(line);
    }
    setIsTyping(false);
  };

  const typeLine = (line) => {
    return new Promise((resolve) => {
      let i = 0;
      setCurrentLine('');
      const intervalId = setInterval(() => {
        setCurrentLine((prev) => prev + line[i]);
        i++;
        if (i === line.length) {
          clearInterval(intervalId);
          setOutput((prev) => [...prev, line]);
          setCurrentLine('');
          resolve();
        }
      }, 30);
    });
  };

  useEffect(() => {
    typeLines(['Hello, Im an asparing Data Engineer, type "info" to learn more about me.']);
  }, []);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
    if (inputRef.current && !isTyping) {
      inputRef.current.focus();
    }
  }, [output, currentLine, isTyping]);

  return (
    <div className="terminal" onClick={() => !isTyping && inputRef.current.focus()}>
      <div className="terminal-output" ref={outputRef}>
        {output.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
        {currentLine && <div>{currentLine}</div>}
        {!isTyping && (
          <div className="input-line">
            <span>{'>'}</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSubmit(e);
                }
              }}
              disabled={isTyping}
            />
          </div>
        )}
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="container">
      <div className="header">
        <div className="profile-image">
          {`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠤⠒⠈⠉⠉⠉⠉⠒⠀⠀⠤⣀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⠁⠀⠀⠀⠀⠀⠀⢀⣄⠀⠀⠀⠀⠑⡄⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠰⠿⠿⠿⠣⣶⣿⡏⣶⣿⣿⠷⠶⠆⠀⠀⠘⠀
⠀⠀⠀⠀⠀⠀⠠⠴⡅⠀⠀⠠⢶⣿⣿⣷⡄⣀⡀⡀⠀⠀⠀⠀⠀⡇⠀
⠀⣰⡶⣦⠀⠀⠀⡰⠀⠀⠸⠟⢸⣿⣿⣷⡆⠢⣉⢀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⢹⣧⣿⣇⠀⠀⡇⠀⢠⣷⣲⣺⣿⣿⣇⠤⣤⣿⣿⠀⢸⠀⣤⣶⠦⠀⠀
⠀⠀⠙⢿⣿⣦⡀⢇⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⡜⣾⣿⡃⠇⢀⣤⡀⠀
⠀⠀⠀⠀⠙⢿⣿⣮⡆⠀⠙⠿⣿⣿⣾⣿⡿⡿⠋⢀⠞⢀⣿⣿⣿⣿⣿⡟⠁
⠀⠀⠀⠀⠀⠀⠛⢿⠇⣶⣤⣄⢀⣰⣷⣶⣿⠁⡰⢃⣴⣿⡿⢋⠏⠉⠁⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠠⢾⣿⣿⣿⣞⠿⣿⣿⢿⢸⣷⣌⠛⠋⠀⠘⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠙⣿⣿⣿⣶⣶⣿⣯⣿⣿⣿⣆⠀⠇
          `}
        </div>
        <div className="profile-info">
          <h1>yo, Dobromir here</h1>
          <p className="quote">"The future is inescapable, but the path you take to get there is not."</p>
        </div>
      </div>
      <div class="binary-line">
      <div class="binary-content">
        01111001 01101111 01110101 00100000 01110010 01100101 01100001 01101100 01101100 01111001 00100000 01100011 01101000 01100101 01100011 01101011 01100101 01100100 00100000 01110111 01101000 01100001 01110100 00100000 01110100 01101000 01100101 00100000 01101101 01100101 01110011 01110011 01100001 01100111 01100101 00100000 01101001 01110011 00101100 00100000 01101000 01110101 01101000 00111111
      </div>
      </div>
      <div className="section">
        <h2>projects</h2>
        <ul className="projects-list">
          <li><a href="https://github.com/dvelkow/real_time_bulgarian_news_aggregator">real_time_bulgarian_news_aggregator</a></li>
          <li><a href="https://github.com/dvelkow/loan_prediction_classification">loan_prediction_classification</a></li>
          <li><a href="https://github.com/dvelkow/x-twitter_sentiment_analysis">x-twitter_sentiment_analysis</a></li>
          <li><a href="https://github.com/dvelkow/barebones_numpy_neural_network">barebones_numpy_neural_network</a></li>
        </ul>
      </div>
      <div className="section">
        <h2>personal-information</h2>
        <Terminal />
      </div>
    </div>
  );
}

export default App;