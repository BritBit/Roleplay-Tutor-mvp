import { useEffect, useState } from 'react';

export function useSpeechRecognition() {
  const [transcript, setTranscript] = useState('');
  const [listening, setListening] = useState(false);

  useEffect(() => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.continuous = false;
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      setTranscript(event.results[0][0].transcript);
    };

    recognition.onend = () => {
      setListening(false);
    };

    if (listening) recognition.start();
    else recognition.stop();

    return () => recognition.abort();
  }, [listening]);

  return { transcript, listening, startListening: () => setListening(true) };
}
