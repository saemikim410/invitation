import React, { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

import './App.css';

import Version1 from './Version1.js';
import Version2 from './Version2.js';

import usePreventZoom from './hooks/usePreventZoom.js';


function App() {
  usePreventZoom();  

  const [activeTab, setActiveTab] = useState('our');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 500
    });

    const body = document.body;
    
    if (activeTab === 'our') {
      body.classList.remove('jeju-mode');
      body.classList.add('studio-mode');
    } else {
      body.classList.remove('studio-mode');
      body.classList.add('jeju-mode');
    }

    return () => {
      body.classList.remove('studio-mode', 'jeju-mode');
    };
  }, [activeTab]);

  const [isChecked, setIsChecked] = useState(false);

  // 2. 버튼 클릭 시 호출될 함수
  const handleUncheckClick = () => {
    // state를 'false'로 변경하여 체크박스를 해제합니다.
    setIsChecked(false);
  };

  // 3. (선택 사항) 사용자가 체크박스를 직접 클릭할 때 상태를 변경하는 함수
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const [isScroll, setIsScroll] = useState(false);
  
    const onScroll = () => {
    setIsScroll(window.scrollY || window.pageYOffset > 0 ? true : false);
  };
  
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isScroll]);


return (
  <div className="wedding-tabs-wrapper">
    <div className="wedding-tabs">
      <div className="sidebar-menu">
        <input type="checkbox" id="menuicon" checked={isChecked} // state와 checked 속성을 연결
          onChange={handleCheckboxChange} // 사용자가 직접 클릭할 수 있도록 연결
          />
          <label htmlFor="menuicon">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <div className="sidebar">
            <ul>
              <li onClick={() => handleCheckboxChange({ target: { checked: false } })}>
                 <a href="#cover_div">커버</a>
                 <a href="#invitation_div">연락하기</a>
                 <a href="#calendar_div">달력</a>
                 <a href="#gallery_div">갤러리</a>
                 <a href="#location_div">오시는 길</a>
                 <a href="#quiz_div">퀴즈</a>
                 <a href="#account_div">마음 전하실 곳</a>
                 <a href="#etc_div">기타 안내</a>
                
              </li>
            </ul>
          </div>
      </div>
      <div
        className={`wedding-tab ${activeTab === 'our' ? 'active' : ''}`}
        onClick={() => setActiveTab('our')}
      >
        우리 둘
      </div>
      <div
        className={`wedding-tab ${activeTab === 'jeju' ? 'active' : ''}`}
        onClick={() => setActiveTab('jeju')}
      >
        그날, 제주
      </div>      
    </div>

    <div className="tab-content">
      {activeTab === 'our' ? (
        <Version1 />
      ) : (
        <Version2 />
      )}
    </div>
  </div>
);
}

export default App;
