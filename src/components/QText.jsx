const QText = (props) => {

const question = props.question
const setAnswer = props.onAnswer;

const onTextChange = (event) => {
    console.log(event.target.value)
    const answer = {[question.id]: event.target.value}
    console.log(answer)
    setAnswer(answer)
}

    return (
        <input type = "text" onBlur={onTextChange}/>
    )
}

export default QText;