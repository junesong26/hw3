import React, { useState } from 'react';
import './Gallery.css';

function Gallery() {
  const [listItems, setListItems] = useState([]);
  const [inputTitle, setInputTitle] = useState('');
  const [inputAuthor, setInputAuthor] = useState('');
  const [inputDate, setInputDate] = useState('');
  const [inputContent, setInputContent] = useState('');
  const [selectedTitle, setSelectedTitle] = useState(null);

  const handleInputChange = (e, setState) => {
    setState(e.target.value);
  };

  const handleAddList = () => {
    if (inputTitle.trim() === '') {
      alert('제목을 입력해주세요.');
      return;
    }

    // 입력한 정보를 리스트에 추가
    setListItems([
      ...listItems,
      {
        title: inputTitle,
        author: inputAuthor,
        date: inputDate,
        content: inputContent,
        likes: 0,
        dislikes: 0,
      },
    ]);

    // 입력 필드 초기화
    setInputTitle('');
    setInputAuthor('');
    setInputDate('');
    setInputContent('');
  };

  const handleDeleteList = (index) => {
    const newItems = [...listItems];
    newItems.splice(index, 1);
    setListItems(newItems);
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
          onChange={(e) => handleInputChange(e, setInputTitle)}
          placeholder="제목을 입력하세요"
        />
        <input
          type="text"
          value={inputAuthor}
          onChange={(e) => handleInputChange(e, setInputAuthor)}
          placeholder="작성자를 입력하세요"
        />
        
        <input
          type="date"
          value={inputDate}
          onChange={(e) => handleInputChange(e, setInputDate)}
        />
        <textarea
          value={inputContent}
          onChange={(e) => handleInputChange(e, setInputContent)}
          placeholder="내용을 입력하세요"
        />
        <button onClick={handleAddList}>저장</button>
      </div>
      {listItems.map((item, index) => (
        <List
          key={index}
          title={item.title}
          author={item.author}
          date={item.date}
          content={item.content}
          likes={item.likes}
          dislikes={item.dislikes}
          onLike={() => {
            const newItems = [...listItems];
            newItems[index].likes++;
            setListItems(newItems);
          }}
          onDislike={() => {
            const newItems = [...listItems];
            newItems[index].dislikes++;
            setListItems(newItems);
          }}
          onClick={() => setSelectedTitle(index)}
          onDelete={() => handleDeleteList(index)}
        />
      ))}
      {selectedTitle !== null && <Modal title={listItems[selectedTitle].title} content={listItems[selectedTitle].content} />}
    </div>
  );
}

function List({ title, likes, dislikes, onLike, onDislike, onClick, onDelete, date }) {
  return (
    <div className="list">
      <h4 onClick={onClick}>{title}</h4>
      <span onClick={onLike}>👍 {likes}</span>
      <span onClick={onDislike}>👎 {dislikes}</span>
      <button onClick={onDelete}>삭제</button>
      <p>{date}</p>
    </div>
  );
}

function Modal({ title, content }) {
  return (
    <div className="modal">
      <h4>{title}</h4>
      <p>상세내용: {content}</p>
    </div>
  );
}

export default Gallery;
