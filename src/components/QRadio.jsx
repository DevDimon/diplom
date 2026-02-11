const QRadio = (props) => {

    const question = props.question
    const setAnswer = props.onAnswer;

    const onChangeRadio = (event) => {
        const answer = { [question.id]: event.target.attributes.id.value }
        setAnswer(answer)
    }

    return (
        <div className="radioGroup">
            {
                question.variants.map((v) => (
                    <div key={v}>
                        <input type="radio" value={v} name={question.id} id={v} onChange={onChangeRadio} />
                        <label htmlFor={v}>{v}</label>
                    </div>
                ))
            }
        </div>
    )
}

export default QRadio