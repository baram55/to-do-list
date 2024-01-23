import "./App.css";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [workList, setWorkList] = useState([
    {
      id: Date.now(),
      title: "리액트 공부하기",
      content: "리액트 기초를 공부해봅시다.",
      isDone: true,
    },
  ]);

  const clickAddWorkHandler = () => {
    setWorkList([
      ...workList,
      { id: Date.now(), title, content, isDone: false },
    ]);
    setTitle("");
    setContent("");
  };

  const clickCompleteHandler = (id) => {
    const newWorkList = workList.map((item) => {
      if (item.id === id) {
        item.isDone = true;
      }
      return item;
    });
    setWorkList(newWorkList);
  };

  const clickUncompletedHandler = (id) => {
    const newWorkList = workList.map((item) => {
      if (item.id === id) {
        item.isDone = false;
      }
      return item;
    });
    setWorkList(newWorkList);
  };

  const clickDeleteHandler = (id) => {
    console.log(id);
    const newWorkList = workList.filter((item) => item.id !== id);
    setWorkList(newWorkList);
  };

  return (
    <div className="layout">
      <div className="title">
        <div className="title1">My Todo List</div>
        <div className="title2">React</div>
      </div>
      <div className="inputArea">
        <div className="titleText">제목 :</div>
        <input
          className="inputTitle"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <div className="contentText">내용 :</div>
        <input
          className="inputContent"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <button className="addWork" onClick={clickAddWorkHandler}>
          추가하기
        </button>
      </div>
      <section className="working">
        <h3 className="workingTitle">Working..🔥</h3>
        <div className="workingList">
          {workList
            .filter((item) => item.isDone === false)
            .map((item) => {
              return (
                <div key={item.id} className="workingComponent">
                  <div className="content">
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                  </div>
                  <div className="buttons">
                    <button
                      className="deleteWork"
                      onClick={() => clickDeleteHandler(item.id)}
                    >
                      삭제하기
                    </button>
                    <button
                      className="completeWork"
                      onClick={() => clickCompleteHandler(item.id)}
                    >
                      {item.isDone === true ? "취소" : "완료"}
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
      <section className="done">
        <h3 className="doneTitle">Done..!🎉</h3>
        <div className="doneList">
          {workList
            .filter((item) => item.isDone === true)
            .map((item) => {
              return (
                <div key={item.id} className="doneComponent">
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                  <div className="buttons">
                    <button
                      className="deleteWork"
                      onClick={() => clickDeleteHandler(item.id)}
                    >
                      삭제하기
                    </button>
                    <button
                      className="uncompletedWork"
                      onClick={() => clickUncompletedHandler(item.id)}
                    >
                      {item.isDone === true ? "취소" : "완료"}
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </div>
  );
}

export default App;
