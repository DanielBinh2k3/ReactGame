import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Game from './components/Game'


const Footer = ({onNextPhase}) => {
  return (
    <>
    <Game onNextPhase={onNextPhase}/>
    <footer className="footer">
      <div className="footer-container">
        <div className="github">
          <a href="https://github.com/Yeab-Ad" target="_blank">
            <svg
              height="32"
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
              width="32"
              data-view-component="true"
              className="octicon octicon-mark-github v-align-middle"
            >
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2.00.27-1.53-1.03-2.20-.82-2.20-.82-.44 1.10-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.20-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.60-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.90.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.30.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
            </svg>
            <p>Yeab-Ad</p>
          </a>
        </div>
        <div className="website">
          <a href="https://yeabsiras.netlify.app" target="_blank">
            <img
              src="https://yeabsiras.netlify.app/assets/logo/Group%2018998.svg"
              alt="Website Icon"
            />
            <p>Website</p>
          </a>
        </div>
      </div>
    </footer>
  </>
  );
};

export default Footer;
