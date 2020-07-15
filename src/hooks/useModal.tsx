import { useCallback, useState } from 'react';

export default function useModal() {
  const [modalToggle, setModalToggle] = useState<boolean>(false);

  const onOpenModal = useCallback(() => setModalToggle(true), [setModalToggle]);
  const onCloseModal = useCallback(() => setModalToggle(false), [setModalToggle]);

  return {
    modalToggle,
    onOpenModal,
    onCloseModal,
  };
}