            import React, {useState} from 'react'
            
            export default function TextForm(props) {
            
                  // ✅ Hooks must be here, at the top
                const [text, setText] = useState("");

                const speak = () => {
                    let msg = new SpeechSynthesisUtterance();
                    msg.text = text;
                    window.speechSynthesis.speak(msg);
                    // button.innerText = "Pause";

                }

                const handleFind = () => {
                    let findText = prompt("Enter the word to find");
                    if (!findText) return;
                    // const position = text.indexOf(findText);
                    let position = text.indexOf(findText);      
                    if(position === -1){
                        props.showAlert("Word not found", "warning");
                    }
                }

                const handleReplace = () => {
                    let findText = prompt("Enter the word to find");
                    if (!findText) return;
                    let replaceText = prompt("Enter the word to replace with");
                    let newText = text.replace(findText, replaceText);
                    setText(newText);
                }

                const handleCopy = () => {
                        navigator.clipboard.writeText(text);
                        props.showAlert("Copied to clipboard!", "success");
                        document.getSelection().removeAllRanges();
                        setTimeout(() => props.showAlert(null), 1500);
            };

                
                const handleUpClick = ()=>{
                    console.log("" + text);
                    // let newtext = text.toUpperCase();
                    setText(text.toUpperCase());
                    // setText(newtext);
                    props.showAlert("Converted to Uppercase!", "success");
                    setTimeout(() => {
                        props.showAlert (null);
                    }, 1500);
                }
                const handleLowClick = ()=>{
                    console.log("" + text);
                    let newtext = text.toLowerCase();
                    setText(newtext);
                    props.showAlert("Converted to Lowercase!", "success");
                     setTimeout(() => {
                        props.showAlert (null);
                    }, 1500);
                }
                const handleClearClick = ()=>{
                    console.log("" + text);
                    let newtext = '';
                    setText(newtext);
                    props.showAlert("Cleared the text!", "success");
                    setTimeout(() => {
                        props.showAlert (null);
                    }, 1500);
                }
                const handleOnChange = (event)=>{
                    console.log("");
                    setText(event.target.value);
                }

                // const [text, setText] = useState("");
                //console.log(useState('Enter text here'));
                // setText("New text");
            return (
                <>
            <div>
                <div className="container " style={{color: props.mode === 'dark' ? 'white' : 'black' }}></div>
                <h1 className = "my-3" style={{color: props.mode === 'dark' ? 'white' : 'black' }}>{props.heading}</h1> 
                <div className="mb-3"/>
                <label htmlFor="myBox" className="form-label"></label>
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} id="myBox" rows="8"></textarea>
                <button disabled = {text.length === 0} className="btn btn-primary mx-3 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-3 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-3 my-2" onClick={handleClearClick}>Clear Text</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-3 my-2" onClick={speak}>Speak</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-3 my-2" onClick={handleFind}>Find</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-3 my-2" onClick={handleReplace}>Replace</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-3 my-2" onClick={handleCopy}>Copy Text</button>

            </div>
            <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter(word => word.trim() !== "").length}: words, {text.length} Characters</p>
                <p>{0.008 * text.split(/\s+/).filter(element => element.trim() !== "").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to preview!"}</p>
            </div>
            </>
            ) 
            }
        
