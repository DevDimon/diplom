const QSelect = (props) => {

    const question = props.question
    const setAnswer = props.onAnswer;

    const onChangeSelect = (event) => {
        const answer = { [question.id]: event.target.value }
        setAnswer(answer)
    }

    return (
        <select name={question.id} id={question.id} onChange={onChangeSelect} >
            {
                question.variants.map((v) => (
                    <option value={v} key = {v}>{v}</option>                     
                ))
            }
        </select>
    )
}

export default QSelect