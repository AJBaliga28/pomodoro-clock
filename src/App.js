import { useState } from "react";
import "./App.css";
import Pomodoro from "./components/Pomodoro";
import Footer from "./components/Footer";
import Button from "react-bootstrap/Button";
import { BiFullscreen, BiExitFullscreen } from "react-icons/bi";

function App() {
  const [isFullScreen, setFullScreen] = useState(true);

  const handleFullscreen = () => {
    setFullScreen(false);
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setFullScreen(!isFullScreen);
      }
    }
  };

  return (
    <div className="App">
      <Pomodoro />

      <Button
        onClick={handleFullscreen}
        variant="info"
        size="lg"
        className="fullscreen-button"
      >
        {isFullScreen ? <BiFullscreen /> : <BiExitFullscreen />}
      </Button>

      <Footer />
    </div>
  );
}

export default App;
