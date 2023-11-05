export interface IGeneralProps {
  className?: string;
  style?: React.CSSProperties;
}

export interface IModal extends IGeneralProps {
  children?: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

export interface IModalBodyProps extends IGeneralProps {
  children?: React.ReactNode;
}

export interface IModalHeaderProps extends IGeneralProps {
  title?: string;
  onClose: () => void;
}

export interface PortalProps {
  containerId: string;
  children: React.ReactNode;
}
