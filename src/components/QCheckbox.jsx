const QCheckbox = (props) => {

    const question = props.question
    const setAnswer = props.onAnswer;

    let inputs = {};

    const onChangeCheckbox = (event) => {
        const inp = {[event.target.id]: event.target.checked}
        inputs = {...inputs, ...inp}

        console.log(inputs)

        const checked = Object.entries(inputs)
            .filter(([key, value]) => value === true) 
            .map(([key]) => key); 

        const answer = {[question.id]: checked}

        setAnswer(answer)
    }

    return (
        <div className="checkGroup">
            {
                question.variants.map((v) => (
                    <div key = {v}>
                        <input type="checkbox" value={v} id={v} onChange={onChangeCheckbox} />
                        <label >{v}</label>
                    </div>
                ))
            }
        </div>
    )
}

export default QCheckbox