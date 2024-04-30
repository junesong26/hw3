import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [글제목, set글제목] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  const [따봉, set따봉] = useState([0, 0, 0]); // 배열로 관리
  const [싫어요, set싫어요] = useState([0, 0, 0]); // 배열로 관리
  const [selectedTitle, setSelectedTitle] = useState(null); 
  const [inputTitle, setInputTitle] = useState('');
  
  const handleInputChange = (e) => {
    setInputTitle(e.target.value);
  };

  // 리스트 추가 함수
  const handleAddList = () => {
    if (inputTitle.trim() === '') {
      alert('제목을 입력해주세요.');
      return;
    }

    // 입력한 제목과 기본 좋아요/싫어요 값인 [0, 0]을 추가
    set글제목([inputTitle, ...글제목]);
    set따봉([0, ...따봉]);
    set싫어요([0, ...싫어요]);

    // 입력한 제목 초기화
    setInputTitle('');
  };

  const handleTitleClick = (index) => {
    if (selectedTitle === index) {
      setSelectedTitle(null);
    } else {
      setSelectedTitle(index);
    }
  };

  const handleDeleteList = (index) => {
    // index에 해당하는 항목을 제거
    const new글제목 = [...글제목];
    new글제목.splice(index, 1);
    set글제목(new글제목);

    const new따봉 = [...따봉];
    new따봉.splice(index, 1);
    set따봉(new따봉);

    const new싫어요 = [...싫어요];
    new싫어요.splice(index, 1);
    set싫어요(new싫어요);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <div>
        <input
          type="text"
          value={inputTitle}
          onChange={handleInputChange}
          placeholder="제목을 입력하세요"
        />
        <button onClick={handleAddList}>저장</button>
      </div>
      {글제목.map((title, index) => (
        <List
          key={index}
          title={title}
          likes={따봉[index]}
          dislikes={싫어요[index]}
          onLike={() => {
            const newLikes = [...따봉];
            newLikes[index]++;
            set따봉(newLikes);
          }}
          onDislike={() => {
            const newDislikes = [...싫어요];
            newDislikes[index]++;
            set싫어요(newDislikes);
          }}
          onClick={() => handleTitleClick(index)}
          onDelete={() => handleDeleteList(index)}
        />
      ))}
      {selectedTitle !== null && <Modal title={글제목[selectedTitle]} />}
    </div>
  );
}

function List({ title, likes, dislikes, onLike, onDislike, onClick, onDelete }) {
  return (
    <div className="list">
      <h4 onClick={onClick}>{title}</h4>
      <span onClick={onLike}>👍 {likes}</span>
      <span onClick={onDislike}>👎 {dislikes}</span>
      <button onClick={onDelete}>삭제</button>
      <p>2월 17일</p>
    </div>
  );
}

function Modal({ title }) {
  return (
    <div className="modal">
      <h4>{title}</h4>
      <p>상세내용: ~~</p>
    </div>
  );
}

export default App;