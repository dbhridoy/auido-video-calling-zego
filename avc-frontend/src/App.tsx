import { useEffect, useRef } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const App = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const myMeeting = async (element: HTMLDivElement) => {
      const roomID = "demo-room";
      const userID = String(Math.floor(Math.random() * 10000));
      const userName = `User_${userID}`;

      const response = await fetch("http://localhost:5000/get-zego-token");
      // method: 'POST',
      // headers: { 'Content-Type': 'application/json' },
      // body: JSON.stringify({ roomID, userID, userName }),

      const { appID, serverSecret } = await response.json();
      //       const { token: kitToken } = await response.json();
      // console.log(kitToken)
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomID,
        userID,
        userName
      );

      const zp = ZegoUIKitPrebuilt.create(kitToken);

      zp.joinRoom({
        container: element,
        scenario: {
          mode: ZegoUIKitPrebuilt.VideoConference,
        },
        sharedLinks: [
          {
            name: "Copy Link",
            url: `${window.location.protocol}//${window.location.host}${window.location.pathname}?roomID=${roomID}`,
          },
        ],
        turnOnCameraWhenJoining: false,
        turnOnMicrophoneWhenJoining: false,
        showMyCameraToggleButton: true,
        showMyMicrophoneToggleButton: true,
        showAudioVideoSettingsButton: true,
      });
    };

    if (containerRef.current) {
      myMeeting(containerRef.current);
    }
  }, []);

  return <div ref={containerRef} style={{ width: "100vw", height: "100vh" }} />;
};

export default App;
