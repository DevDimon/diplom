import Survey from "./components/Survey"
import './App.css'
// import data from "./survey.json"
import React from "react";

function App() {

  const [data, setData] = React.useState({questions:[]});
  const [error, setError] = React.useState(null);

  const fileInputRef = React.useRef(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/json") {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const parsedData = JSON.parse(e.target.result);
          setData(parsedData);
          setError(null);
        } catch (err) {
          setError("Ошибка при разборе JSON файла.");
        }
      };
      reader.readAsText(file);
    } else {
      setError("Пожалуйста, выберите корректный JSON файл.");
    }
  }

  const onClickButton = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }

  return (
    <>
      <div className="main">
        <div className="nav">
          <div className="logo">
            <img src="./assets/logo.svg" alt="logo" />
            <div className="logo-title">Адыгейский государственный университет</div>
          </div>
          <div className="module-title">Модуль онлайн опросов</div>
          <div className="upload">
            <input type="file" accept=".json" onChange={handleFileUpload} ref={fileInputRef}/>
            <div className="button" onClick={onClickButton}>
              Загрузить опрос
            </div>
          </div>
        </div>
        <div className="content-wrap">
          <div className="content">
            {error && <div className="error" >{error}</div>}
            {!error && <Survey data={data} />}
          </div>
        </div>
      </div>
    </>
  )
}

export default App