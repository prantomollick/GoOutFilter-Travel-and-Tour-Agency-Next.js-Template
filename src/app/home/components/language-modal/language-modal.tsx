"use client";
import Modal from "@/components/modal/modal";
import { useLanguageModal } from "@/context/language-modal-context";
import React from "react";

function LanguageModal() {
  const { state, actions } = useLanguageModal();
  console.log(state);

  return (
    <Modal
      title="Select your language"
      isOpen={state.isOpen}
      onClose={actions.onClose}
    >
      <div>Country Name</div>
    </Modal>
  );
}

export default LanguageModal;
