import { useDispatch, useSelector } from "react-redux";

import {
  selectCurrentModal,
  setCurrentModal,
} from "@/Redux/features/ui/uiSlice";
import { ICurrentModal } from "@/Redux/features/ui/uiSlice.type";

type TModalNames = Required<ICurrentModal>;

export default function useModal(): {
  isOpen: (modalName?: TModalNames) => boolean;
  openModal: (name: TModalNames, props?: any) => void;
  onClose: () => void;
  currentModal: ICurrentModal | null;
} {
  const currentModal = useSelector(selectCurrentModal);
  const dispatch = useDispatch();

  const isOpen = (modalName?: ICurrentModal) =>
    currentModal === modalName || false;

  const openModal = (name: ICurrentModal, props?: any) => {
    const modalData: ICurrentModal = { props };
    dispatch(setCurrentModal(modalData));
  };

  const onClose = () => {
    dispatch(setCurrentModal(null));
  };

  return {
    isOpen,
    openModal,
    onClose,
    currentModal,
  };
}
