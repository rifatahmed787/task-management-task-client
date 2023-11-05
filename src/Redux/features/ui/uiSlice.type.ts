import { TCurrentModal } from "@/components/ModalsComponent/Register-modal/Register-modal";

export interface ICurrentModal {
  name: TCurrentModal;
  props?: any;
}

export interface IUiState {
  currentModal: ICurrentModal | null;
}
