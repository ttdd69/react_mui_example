import React from "react";

const IsTouchDevice = () => {
    const [isTouchDevice, setIsTouchDevice] = React.useState(false);
    React.useEffect(() => {
        if (!window.matchMedia) return;
        setIsTouchDevice(window.matchMedia("(pointer:coarse)").matches);
      }, []);
    return isTouchDevice;
}

export default IsTouchDevice;