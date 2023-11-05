import { IGeneralProps } from "@/Types/Interface/Interface";
export interface IPasswordToggler extends IGeneralProps {
  isPasswordVisible: boolean;
  onToggle: (e: React.MouseEvent) => void;
}
