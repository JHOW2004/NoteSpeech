import "./App.css";
import { Icon } from "@iconify/react";
import { createSpeechlySpeechRecognition } from "@speechly/speech-recognition-polyfill";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const appId = "ac494077-4412-4f96-9670-bf44934e94f0";
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

const App = () => {
  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true });

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser {`doesn't`} support speech recognition.</span>;
  }

  
  function copiarTexto () {
    let textoCopiado = document.getElementById("conteudo")
    textoCopiado.select();
    document.execCommand("copy")
  }

  return (
    <>
      <div className="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>

        <div className="container">
          <div className="aviso">
            {listening ? "🔴" : <button id="bottone5" onClick={copiarTexto}>Copy</button>}
          </div>

          <img
            src="https://firebasestorage.googleapis.com/v0/b/enviodetareas-58e5d.appspot.com/o/Note%20Speech.png?alt=media&token=b0b956ad-da77-4e72-9b7e-153571f11265"
            width="120"
            height="120"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              marginTop: -5,
              marginRight: 20,
            }}
          />

          {listening ? (
            <button
              onTouchStart={startListening}
              onMouseDown={startListening}
              onTouchEnd={SpeechRecognition.stopListening}
              onMouseUp={SpeechRecognition.stopListening}
              className="buttom2"
            >
              <ul class="wave-menu">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </button>
          ) : (
            <button
              onTouchStart={startListening}
              onMouseDown={startListening}
              onTouchEnd={SpeechRecognition.stopListening}
              onMouseUp={SpeechRecognition.stopListening}
              className="buttom"
            >
              <Icon
                icon="game-icons:old-microphone"
                color="white"
                width="60"
                height="60"
              />
            </button>
          )}

          <textarea
            className="input"
            name="text"
            rows="15"
            value={transcript}
            id="conteudo"
            placeholder="Aqui será escrito o conteudo..."
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default App;
