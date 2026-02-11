import data from "../survey.json"
import QCheckbox from "./QCheckbox"
import QRadio from "./QRadio"
import QSelect from "./QSelect"
import QText from "./QText"

const Survey = (props) => {

    const data = props.data

    let answers = {}

    const endSurvey = () => {
        const jsonString = JSON.stringify(answers, null, 2);
        const blob = new Blob([jsonString], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "answers.json";
        link.click();
        URL.revokeObjectURL(url);
    }

    const updateAnswers = (ans) => {
        answers = { ...answers, ...ans }
        console.log(answers)
    }

    return (
        <>
            <hr />
            <h2>{data.title}</h2>
            <h3>{data.description}</h3>
            <hr />
            {
                data.questions.map((q) => {
                    return (
                        <div key={q.id}>
                            <div className="qTitle">{q.id}.{q.text}</div>
                            {q.type == "text" && <QText question={q} onAnswer={updateAnswers} />}
                            {q.type == "radio" && <QRadio question={q} onAnswer={updateAnswers} />}
                            {q.type == "checkbox" && <QCheckbox question={q} onAnswer={updateAnswers} />}
                            {q.type == "select" && <QSelect question={q} onAnswer={updateAnswers} />}
                        </div>
                    )
                })
            }
            <div className="button-wrap">
                <div className="button" onClick={endSurvey}>
                    Закончить опрос и скачать файл с ответами
                </div>
            </div>
        </>
    )
}

export default Survey; 