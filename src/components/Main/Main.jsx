import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { Context } from "../../context/Context";
import ReactMarkdown from 'react-markdown';

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);
  
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello Dev</span>
              </p>
              <p>How I can help you Today</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Give tips on helping kids finish their homework on time </p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>As a social trend expert, explain a term</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Explain how atoms and molecules interact</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>
                  Brainstorm ideas for a mocktail given specific ingredients
                </p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} />
              <p>{recentPrompt}</p>
            </div>
          <div className="result-data">

      <img src={assets.gemini_icon} alt="" />

    
      {loading ? (
        <div className="loader">
          <hr />
          <hr />
          <hr />
        </div>
      ) : (
     
        <ReactMarkdown className="markdown-content">{resultData}</ReactMarkdown>
      )}
    </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter a prompt here"
            />
            <div>
              <img src={assets.gallery_icon} />
              <img src={assets.mic_icon} />
              <img onClick={() => onSent()} src={assets.send_icon} />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
