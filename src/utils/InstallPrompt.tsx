import { useEffect, useState } from "react";

const InstallPrompt = () => {
  const [isShown, setIsShown] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const isDeviceIOS =
      /iPad|iPhone|iPod/.test(window.navigator.userAgent) &&
      !(window as any).MSStream;
    setIsIOS(isDeviceIOS);

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as any);
      setIsShown(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult: { outcome: string }) => {
        if (choiceResult.outcome === "accepted") {
          console.log("사용자가 설치 프롬프트에 동의했습니다.");
        } else {
          console.log("사용자가 설치 프롬프트를 무시했습니다.");
        }
        setDeferredPrompt(null);
        setIsShown(false);
      });
    }
  };

  if (isIOS) {
    // iOS에서는 웹 앱 설치 프롬프트가 지원되지 않으므로, 다른 안내를 제공할 수 있습니다.
    return (
      <div
        style={{
          position: "fixed",
          bottom: "10px",
          right: "10px",
          background: "white",
          padding: "10px",
          borderRadius: "5px",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
        }}
      >
        <p>이 웹앱을 설치하시겠습니까?</p>
        <button onClick={handleInstallClick}>설치</button>
      </div>
    );
  }

  if (!isShown) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        bottom: "10px",
        right: "10px",
        background: "white",
        padding: "10px",
        borderRadius: "5px",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
      }}
    >
      <p>이 웹앱을 설치하시겠습니까?</p>
      <button onClick={handleInstallClick}>설치</button>
    </div>
  );
};

export default InstallPrompt;
