import React from 'react';

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
        01110011 01101111 01101101 01100101 00100000 01100110 01100001 01101110 01100011 01111001 00100000 01101101 01100101 01110011 01110011 01100001 01100111 01100101
        </div>
      </div>
      <div className="section">
        <h2>projects</h2>
        <ul className="projects-list">
          <li><a href="https://github.com/dvelkow/real_time_bulgarian_news_aggregator">real_time_bulgarian_news_aggregator</a></li>
          <li><a href="https://github.com/dvelkow/loan_prediction_classification">loan_prediction_classification</a></li>
          <li><a href="https://github.com/dvelkow/x-twitter_sentiment_analysis"> x-twitter_sentiment_analysis </a></li>
        </ul>
      </div>
      <div className="section activity">
        <h2>today's activity</h2>
        <div className="activity-stats">
          <span>Left Clicks<br/><span id="leftClicks">0</span></span>
          <span>Right Clicks<br/><span id="rightClicks">0</span></span>
          <span>Middle Clicks<br/><span id="middleClicks">0</span></span>
          <span>Keypresses<br/><span id="keypresses">0</span></span>
          <span>Mouse Movement<br/><span id="mouseMovement">0</span> inches</span>
        </div>
        <div className="activity-graph">
          {/*graph placeholder */}
        </div>
      </div>
    </div>
  );
}

export default App;