import "./App.css";
import { Icon } from "@iconify/react";
import { createSpeechlySpeechRecognition } from "@speechly/speech-recognition-polyfill";
import SpeechRecognition, {useSpeechRecognition,} from "react-speech-recognition";
import Loading from "./loading";


const appId = "ac494077-4412-4f96-9670-bf44934e94f0";
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

const App = () => {
  const { transcript, listening, browserSupportsSpeechRecognition } = useSpeechRecognition();
  const startListening = () => SpeechRecognition.startListening({ continuous: true });

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser {`doesn't`} support speech recognition.</span>;
  }

  function copiarTexto() {
    let textoCopiado = document.getElementById("conteudo");
    textoCopiado.select();
    document.execCommand("copy");
  }

  const img = "https://firebasestorage.googleapis.com/v0/b/enviodetareas-58e5d.appspot.com/o/Note%20Speech%202.png?alt=media&token=804e3e5f-ad1a-4505-9798-45bf78242622";

  return (
    <>
      <div className="total">
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
              {listening ? (
                "🔴"
              ) : (
                <button id="bottone5" onClick={copiarTexto}>
                  Copy
                </button>
              )}
            </div>

            <img src={img} style={{position: "absolute", top: 0, right: 0, marginTop: 0, marginRight: 12, width:100, height:100 }} alt=""/>

            {listening ? (
              <button onClick={SpeechRecognition.stopListening} className="buttom2">
                <Loading/>
              </button>
            ) : (
              <button onClick={startListening} className="buttom">
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
      </div>
    </>
  );
};

export default App;
