import React, {useState} from 'react'

function TextForms(props) {

    // toUpperCase
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    //toLowerCase
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    //Clear
    const handleClearClick = () => {
        setText("");
    }

    //Sentence Case
    const handleSentClick = () => {
        let newText = text.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
        setText(newText);
    }

    //Copy
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    //Extra Space
    const handleExtraSpace = () => {
        let newText = text.replace(/\s+/g, ' '); // Replace consecutive spaces with a single space
        setText(newText);
    };
    


    const handleOnChange = (event) =>{
        setText(event.target.value)
    }

    const [text, setText] = useState("Enter your text here");
  return (
    <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <form>
                <div className="form-group mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button type="button" className="btn btn-primary mr-3" onClick={handleUpClick}>Convert to Upper case</button>
                <button type="button" className="btn btn-primary mx-3" onClick={handleLowClick}>Convert to Lower case</button>
                <button type="button" className="btn btn-primary mx-3" onClick={handleSentClick}>Convert to Title case</button>
                <button type="button" className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text</button>
                <button type="button" className="btn btn-primary mx-3" onClick={handleExtraSpace}>Remove Extra Space</button>
                <button type="button" className="btn btn-primary mx-3" onClick={handleClearClick}>Clear</button>
            </form>
        </div>
        <div className="container my-4">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>
  )
}

export default TextForms
