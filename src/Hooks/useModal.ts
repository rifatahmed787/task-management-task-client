import { useDispatch, useSelector } from "react-redux";
import { TCurrentModal } from "@/components/ModalsComponent/Register-modal/Register-modal";
import {
  selectCurrentModal,
  setCurrentModal,
} from "@/Redux/features/ui/uiSlice";
import { ICurrentModal } from "@/Redux/features/ui/uiSlice.type";

type TModalNames = Required<TCurrentModal>;

export default function useModal(): {
  isOpen: (modalName?: TModalNames) => boolean;
  openModal: (name: TModalNames, props?: any) => void;
  onClose: () => void;
  currentModal: ICurrentModal | null;
} {
  const currentModal = useSelector(selectCurrentModal);
  const dispatch = useDispatch();

  const isOpen = (modalName?: TCurrentModal) =>
    currentModal?.name === modalName || false;

  const openModal = (name: TCurrentModal, props?: any) => {
    const modalData: ICurrentModal = { name, props };
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
