import React from 'react';

// ** import sub components
import SuccessModal from './SuccessModal';
import WarningModal from './WarningModal';
import DangerModal from './DangerModal';
import LoginModal from './LoginModal';

/**
 * @typedef {'success' | 'warning' | 'danger' | 'login'} ModalVariant
 * @typedef {'opaque' | 'blur' | 'transparent'} BackdropVariant
 * @typedef {'auto' | 'top' | 'center' | 'bottom' | 'bottom-center' | 'top-center'} placement
 */

/**
 * Modal component.
 *
 * @param {Object} props - The component props.
 * @param {ModalVariant} props.variant - The variant of the header to render.
 * @param {string} props.title
 * @param {string} props.description
 * @param {string} props.yesText
 * @param {string}props.noText
 * @param {Function} props.btnFunction - The function to call when button is clicked.
 * @param {Function} props.yesFunction - The function to call when 'yes' is clicked.
 * @param {Function} props.noFunction - The function to call when 'no' is clicked.
 * @param {BackdropVariant} props.backdropVariant - The variant of the backdrop to render.
 * @param {boolean} props.hideCloseButton - A boolean indicating whether a close button is present.
 * @param {boolean} props.outsideClickClose - The boolean indicating whether the modal should close when clicking outside the modal
 * @param {placement} props.placement - The placement of the modal
 * @returns {JSX.Element|null} The rendered header component.
 *
 */
const Modal = ({ variant, ...props }) => {
  const variantComponents = {
    success: SuccessModal,
    warning: WarningModal,
    danger: DangerModal,
    login: LoginModal
  };

  const SelectedModal = variantComponents[variant] || null;

  return <div>{SelectedModal && <SelectedModal {...props} />}</div>;
};

export default Modal;
