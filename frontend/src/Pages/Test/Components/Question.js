function Question(props){
    console.log(props.qid)
    return (
        <div>
            
            <div className="test-question">Who is the founder of Google?</div>
            <div className="test-options">
                <label className="test-option">
                    <input type="radio" name={props.qid} />
                    Aditya Parmar
                </label>
                <label className="test-option">
                    <input type="radio" name={props.qid} />
                    Aditya Parmar
                </label>
                <label className="test-option">
                    <input type="radio" name={props.qid} />
                    Aditya Parmar
                </label>
            </div>
        </div>
    )
}

export default Question