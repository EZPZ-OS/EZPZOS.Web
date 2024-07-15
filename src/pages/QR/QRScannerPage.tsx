import React, { useRef, useEffect, useState } from "react";
import jsQR from "jsqr";
import { useNavigate } from "react-router-dom";

const QRScannerPage: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scanning, setScanning] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!video || !canvas || !context) return;

    const handleLoadedMetadata = () => {
      video.play().catch((error) => {
        console.error("Error playing video:", error);
      });
      requestAnimationFrame(tick);
    };

    const startVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" },
        });
        video.srcObject = stream;
        video.setAttribute("playsinline", "true");
        video.addEventListener("loadedmetadata", handleLoadedMetadata);
      } catch (error) {
        console.error("Error accessing camera: ", error);
      }
    };

    const tick = () => {
      if (video.readyState === video.HAVE_ENOUGH_DATA && scanning) {
        canvas.height = video.videoHeight;
        canvas.width = video.videoWidth;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = context.getImageData(
          0,
          0,
          canvas.width,
          canvas.height
        );
        const code = jsQR(imageData.data, imageData.width, imageData.height);
        if (code) {
          setScanning(false);
          const params = new URLSearchParams(code.data);
          const tableNumber = params.get("tableNumber");
          navigate(`/menu?tableNumber=${tableNumber}`);
        } else {
          requestAnimationFrame(tick);
        }
      } else {
        requestAnimationFrame(tick);
      }
    };

    startVideo();

    return () => {
      const stream = video.srcObject as MediaStream;
      const tracks = stream?.getTracks();
      tracks?.forEach((track) => track.stop());
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [scanning, navigate]);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-black">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 bg-gradient-to-r from-[#FFB682F5] via-[#F8A27AF5] to-[#F28C83F5] text-white px-4 py-2 rounded"
      >
        Back
      </button>
      <div className="relative w-full h-full">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
        ></video>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="border-4 border-dashed border-white w-64 h-64"></div>
        </div>
      </div>
      <canvas ref={canvasRef} className="hidden"></canvas>
    </div>
  );
};

export default QRScannerPage;
