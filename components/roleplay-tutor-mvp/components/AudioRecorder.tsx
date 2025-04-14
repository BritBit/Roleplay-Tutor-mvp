"use client";
import { useRecorder } from "@/hooks/useRecorder";

export default function AudioRecorder() {
  const { isRecording, audioURL, startRecording, stopRecording } = useRecorder();

  return (
    <div>
      <button onClick={isRecording ? stopRecording : startRecording}>
        {isRecording ? "Stop Recording" : "Start Recording"}
      </button>

      {audioURL && (
        <div>
          <p>Recording complete:</p>
          <audio src={audioURL} controls />
        </div>
      )}
    </div>
  );
}
