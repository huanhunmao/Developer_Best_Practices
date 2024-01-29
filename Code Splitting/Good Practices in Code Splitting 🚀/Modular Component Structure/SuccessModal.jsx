import React from 'react';

// ** import next ui
import { Modal, ModalContent } from '@nextui-org/react';

// ** import shared components
import Typography from '@shared/Typography';
import Button from '@shared/Button';

// ** import assets
import SuccessSvg from '@icons/SuccessSvg';

// ** import redux
import { useSelector, useDispatch } from 'react-redux';
import { setAlertModel } from '@redux/slices/utils';

/**
 * @typedef {'opaque' | 'blur' | 'transparent'} BackdropVariant
 * @typedef {'auto' | 'top' | 'center' | 'bottom' | 'bottom-center' | 'top-center'} placement
 */

/**
 * SuccessModal component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title for the modal.
 * @param {string} props.description - The description for the modal.
 * @param {string} props.btnText - The text for the button.
 * @param {Function} props.btnFunction - The function to call when the button is clicked.
 * @param {BackdropVariant} props.backdropVariant - The variant of the backdrop to render.
 * @param {boolean} props.hideCloseButton - A boolean indicating whether a close button is present.
 * @param {placement} props.placement - The placement of the modal
 * @param {boolean} props.outsideClickClose - A boolean indicating whether the outside click closes the modal
 * @returns {JSX.Element} The rendered SuccessModal component.
 */
const SuccessModal = ({
  title,
  description,
  btnText,
  btnFunction,
  backdropVariant = 'blur', // default backdrop is blur
  hideCloseButton = true, // default hide close button
  placement = 'center', // default placement is center
  outsideClickClose = true, // default outside click true
}) => {
  const dispatch = useDispatch();
  const { alertModel } = useSelector((state) => state.utils);

  /**
   * Handles the close action.
   */
  const handleClose = () => {
    dispatch(setAlertModel(false));
    if (btnFunction) {
      btnFunction();
    }
  };

  /**
   * Handles the outside click action.
   */
  const handleOutsideClick = () => {
    if (outsideClickClose) {
      dispatch(setAlertModel(false));
    }
  };

  return (
    <Modal
      backdrop={backdropVariant}
      isOpen={alertModel}
      onOpenChange={handleOutsideClick}
      hideCloseButton={hideCloseButton}
      placement={placement}
    >
       <ModalContent className="p-8 text-center w-[90%] !max-w-[352px] !max-h-[290px] md:!max-h-[300px]">

        <div className="mx-auto mb-4">
          <SuccessSvg className="mx-auto" />
        </div>

        <Typography variant="P_SemiBold_H5" className="pb-2 text-primary-black">
          {title}
        </Typography>

        <Typography
          variant="P_Regular_H6"
          className="block text-mid-black pb-6"
        >
          {description}
        </Typography>
        <div className="flex ">
          <Button type="button" className="w-full" onClick={handleClose}>
            {btnText ?? 'Continue'}
          </Button>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default SuccessModal;
