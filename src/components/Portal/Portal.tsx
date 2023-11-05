import { PortalProps } from "@/Types/Interface/Interface";
import React from "react";
import * as ReactDOM from "react-dom";

const Portal = ({ containerId, children }: PortalProps) => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  if (isMounted) {
    return ReactDOM.createPortal(
      children,
      document.getElementById(containerId) as HTMLElement
    );
  }
  return null;
};

export default Portal;
