import React, { useState, useEffect, useRef } from 'react';

const quotes = [
  "Not everyone who works hard is rewarded. But all who succeed worked hard.",
  "The tide has turned, and so have I. It's a new paradigm!",
  "When enough effort is put in, talent and environment cease to matter.",
  "Run until you can’t run anymore, and then run some more.",
  "What is great in man is that he is a bridge and not an end.",
  "Become who you are.",
  "He who has a why to live can bear almost any how."
];

const Terminal = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);
  const [currentLine, setCurrentLine] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [askedInfo, setAskedInfo] = useState({});
  const outputRef = useRef(null);
  const terminalRef = useRef(null);
  const inputRef = useRef(null);

  const personalInfo = {
    location: "You can find me either in Sofia or Burgas at all times. But I am pretty flexible.",
    skills: ["Python, SQL & NoSQL, React, AWS, Git, Spark, Hadoop, Linux.","Or at least those are the relevant ones, I also a bit of experience in Marking & Video Editing but that's besides the point <:"],
    hobbies: "Honestly, if I'm dedicating any meaningful portion of my time on my hobbies I am probably not in a good spot mentally, but I guess my hobbies are chess, calisthenics, day-trading and most importantly - larping as an American while arguing about politics with actual Americans.",
    hidden : ["Woah, how did you find that? Guess you read the code, but still you deserve a reward, here, you can have this eaten apple:",
    " ,--./,-. ",
    "/,-._.--~ ",
    " __} {_   ",
    "/`-._,-`,",
    "`._,._,'  "],
    work_experience: [
      "(2020-2023) Video Editor at Replayed.co, ik it doesn't have much in common with programming, but I learned how to communicate with clients, work around deadlines and function in a work enviroment through it, so there's that.",
      "(2023-2024) Co-founded a B2B startup with a small team, building automation tools to streamline operational workflows for brick and mortar companies.",
      "(2024-2025) ABAP Developer at KNAPP, where I worked on warehouse management software. It was my first experience with the corpo world, which left a bad taste in my mouth for it.",
      "(2025-present) Growth Developer at Idea Verde, an e-commerce store. I am basically in charge of 100% of our online sales, with the task of increasing them. The cool part is that there are endless things I can do with a role as broad as this - some days I work on new systems, other days I just publish new ads. All in all, I have tons of freedom in it.",
      "I am also always open to new opportunities, so don't hesitate to contact me."
    ],
    projects: "You can see (some of) them above, by clicking on the links. They have detailed README files in their respective repos, check them out.",
    life_philosophy: "I am a Nietzschean futurist. My biggest goal in life is to outcompete everyone on the biggest stage I can put myself on. Or in other words, to find something meaningful and quantifiable I can dedicate my life force into.",
  };

  const handleCommand = (cmd) => {
    const lowerCmd = cmd.toLowerCase();
    switch(lowerCmd) {
      case 'info':
        return ['Choose from: "location", "skills", "hobbies", "work_experience", "projects", "life_philosophy"'];
      case 'location':
      case 'skills':
      case 'hobbies':
      case 'projects':
      case 'hidden':
      case 'life_philosophy':
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
        const char = line[i];
        setCurrentLine((prev) => prev + char);
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
    typeLines(['Hello, you entered my personal website, type "info" to learn more about me.']);
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
    if (inputRef.current && !isTyping) {
      inputRef.current.focus({ preventScroll: true });
    }
  }, [output, currentLine, isTyping]);

  return (
    <div className="terminal" ref={terminalRef} onClick={() => !isTyping && inputRef.current.focus()}>
      <div className="terminal-output" ref={outputRef}>
        {output.map((line, index) =>
          line.startsWith('> ') ? (
            <div key={index} className="input-line">
              <span className="prompt">{'>'}</span>
              <span className="command-text">{line.slice(2)}</span>
            </div>
          ) : (
            <div key={index}>{line}</div>
          )
        )}
        {currentLine && <div>{currentLine}</div>}
        {!isTyping && (
          <div className="input-line">
            <span className="prompt">{'>'}</span>
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
  const [randomQuote, setRandomQuote] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  }, []);
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
          <h1>who_is_dobromir</h1>
        </div>
      </div>
      <p className="quote">"{randomQuote}"</p>
      <div className="binary-line">
        <div className="binary-content">
        </div>
      </div>
      <div className="section">
        <h2>projects</h2>
        <ul className="projects-list">
          <li><a href="https://github.com/dvelkow/real_time_bulgarian_news_aggregator">real_time_bulgarian_news_aggregator</a></li>
          <li><a href="https://github.com/dvelkow/credit_risk_assessment_system_simulation">credit_risk_assessment_system_simulation</a></li>
          <li><a href="https://github.com/dvelkow/Yet_Another_ToDo_but_Trello_Insipred">Yet_Another_ToDo_but_Trello_Insipred</a></li>
          <li><a href="https://github.com/dvelkow/historical-atlas">historical-atlas</a></li>
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