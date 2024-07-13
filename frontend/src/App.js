import React, { useState, useEffect, useRef } from 'react';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);
  const [currentLine, setCurrentLine] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const outputRef = useRef(null);
  const inputRef = useRef(null);

  const personalInfo = {
    location: "Sofia, Bulgaria",
    skills: "Python, SQL & NoSQL, AWS, Spark, Hadoop, Docker, Bash, Linux, ML",
    hobbies: "Exploring Datasets, Solving Kaggle Problems, Chess, Fitness, Reading",
    work_experience: [
      "Video Editor at Replayed.co (2020-2024)",
      "AI Automation Python Developer at OptimateX, a personal company (2024-present)"
    ]
  };

  const handleCommand = (cmd) => {
    switch(cmd.toLowerCase()) {
      case 'help':
        return ['Available commands: location, skills, hobbies, work_experience, clear'];
      case 'location':
      case 'skills':
      case 'hobbies':
      case 'work_experience':
        return Array.isArray(personalInfo[cmd]) 
          ? personalInfo[cmd]
          : [personalInfo[cmd]];
      case 'clear':
        setOutput([]);
        return [];
      default:
        return [`Unknown command: ${cmd}. Type "help" for available commands.`];
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
    typeLines(['Welcome! Type "help" to see available commands.']);
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
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠟⠛⠋⠉⠙⠛⠻⢿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣬⡁⠀⠀⠆⡆⠀⢠⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠴⠮⢭⣙⠃⡄⠀⢸⡇⠀⣼⡇⠀⢠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⡿⠿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⣷⣶⣄⠈⠃⣥⢸⣼⡇⠀⣿⡇⠀⣶⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣦⣿⣦⣸⣿⡀⣿⡇⠀⠛⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿
⣿⣿⣷⣶⣯⣽⣻⣿⣿⠀⢀⠀⠀⠀⠀⠀⠀⠀⡀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣤⣤⣤⣈⠀⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣿⣿
⣿⣿⣿⠿⠟⢛⣛⣯⣅⠀⢰⡄⠀⠀⠀⠀⠀⠀⣿⡜⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿
⣻⣽⣷⡿⠿⢟⣛⣭⣥⢠⠀⣦⠀⠀⠀⠀⠀⠀⢸⣿⣌⡛⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⢀⡀⠀⠀⠀⠀⡄⠀⠀⠀⣾⣿⣿⣿⣿
⣛⣭⣶⣾⣿⣿⣿⣿⠿⠘⣃⢹⣄⠀⠀⡄⠀⠀⠀⠹⣿⣷⣜⣷⣮⣝⡻⣿⣿⣿⣿⣿⠟⠡⢐⡛⠀⠀⠀⠀⢘⠃⠀⠀⡄⢿⣿⣿⣿⣿
⣿⣿⣿⣿⡿⢟⣩⣶⣾⡇⢿⡆⢻⣦⡀⢠⠀⠀⠀⣷⡌⢿⣿⣿⣷⣶⣶⣿⡿⠟⢋⣵⡞⣿⣿⠇⠀⠀⠀⠀⣾⡀⠀⠰⢓⠘⣿⣿⣿⣟
⣿⡿⢟⣩⣶⣿⣿⣿⣿⣿⡌⣴⡷⣼⢳⣦⣄⠀⠀⢿⣷⡂⠙⣛⣛⣭⣭⣵⢆⣿⡎⣿⢰⡿⣣⠀⠀⢠⢆⣼⣿⣧⠀⢸⣿⠇⣿⣿⣿⣿
⠋⢶⣿⣿⣿⣿⣿⣿⣿⡿⣸⣿⠟⢃⣿⣿⣿⣦⣱⣼⣿⣿⣷⣟⠻⣿⣿⡏⣾⣿⡷⢠⣶⣾⠋⢀⣴⣯⣾⠿⣡⢏⣶⣾⡇⢸⣿⣿⣿⣿
⡸⡜⢿⣿⣿⣿⡟⣿⣿⣇⣿⡟⠀⣼⣌⠻⣿⣿⡏⣿⣿⣿⣿⣿⣿⣶⢋⣿⣿⣿⠇⣾⣿⣿⣾⡏⣿⢻⡟⣰⢏⣾⣿⣿⠀⣾⣿⣿⣿⣿
⣷⣙⣌⢿⣿⣿⣿⠸⣿⢸⣿⡇⠀⣿⣿⣷⣮⣭⣥⣿⠙⣿⣿⣿⣿⠏⠾⣘⣫⣶⢰⣿⣿⣿⣿⡇⣿⢸⢣⠋⣾⣿⣿⣿⢠⣿⣿⣿⣿⣿
⣿⣿⣿⠓⠙⢿⣿⣇⢿⢸⣿⣿⣦⠹⣿⣿⣿⣿⣿⡿⢷⣌⠿⠟⣡⣾⠿⣿⣿⢣⣿⣿⣿⣿⣿⢣⢹⠈⣠⣷⢻⣿⣿⡇⣼⣿⣿⣿⣿⣿
⣿⣿⣿⣾⣦⣠⣙⢿⡌⢸⣿⣿⢹⣷⡹⣿⣿⣿⣿⣿⠿⠿⠷⠿⣿⣶⣿⣿⡇⢌⡻⣿⣿⣿⡿⣸⡎⢰⣿⣿⢸⣿⣿⠀⣿⣿⣿⣿⣿⣿
          `}
        </div>
        <div className="profile-info">
          <h1>yo, Dobromir here</h1>
          <p className="quote">"The future is inescapable, but the path you take to get there is not."</p>
        </div>
      </div>
      <div className="binary-line">
        <div className="binary-content">
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
        <h2>personal information</h2>
        <Terminal />
      </div>
    </div>
  );
}

export default App;