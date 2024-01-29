import React from 'react';

// ** import next ui
import { Modal, ModalContent } from '@nextui-org/react';

// ** import shared components
import Typography from '@shared/Typography';
import Button from '@shared/Button';

// ** import assets
import WarningSvg from '@icons/WarningSvg';

// ** import redux
import { useSelector, useDispatch } from 'react-redux';
import { setAlertModel } from '@redux/slices/utils';

/**
 * @typedef {'opaque' | 'blur' | 'transparent'} BackdropVariant
 * @typedef {'auto' | 'top' | 'center' | 'bottom' | 'bottom-center' | 'top-center'} placement
 */

/**
 * WarningModal component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title for the warning modal.
 * @param {string} props.description - The description for the warning modal.
 * @param {string} props.yesText - The text for the 'Yes' button.
 * @param {string} props.noText - The text for the 'No' button.
 * @param {Function} props.yesFunction - The function to call when 'Yes' is clicked.
 * @param {Function} props.noFunction - The function to call when 'No' is clicked.
 * @param {BackdropVariant} props.backdropVariant - The variant of the backdrop to render.
 * @param {boolean} props.hideCloseButton - A boolean indicating whether a close button is present.
 * @param {placement} props.placement - The placement of the modal
 * @param {boolean} props.outsideClickClose - A boolean indicating whether the outside click closes the modal
 * @returns {JSX.Element} The rendered WarningModal component.
 */
const WarningModal = ({
  title,
  description,
  yesText,
  noText,
  yesFunction,
  noFunction,
  backdropVariant = 'blur', // default backdrop is blur
  hideCloseButton = true, // default hide close button
  placement = 'center', // default placement is center
  outsideClickClose = true, // default outside click true
}) => {
  const dispatch = useDispatch();
  const { alertModel } = useSelector((state) => state.utils);

  /**
   * Function to handle the 'No' button click.
   */
  const cancelFunction = () => {
    dispatch(setAlertModel(false));
    if (noFunction) {
      noFunction();
    }
  };

  /**
   * Function to handle the 'Yes' button click.
   */
  const confirmFunction = () => {
    dispatch(setAlertModel(false));
    if (yesFunction) {
      yesFunction();
    }
  };

  /**
   * Handles the outside click action.
   */
  const handleOutsideClick = () => {
    if (outsideClickClose) {
      cancelFunction();
    }
  };

  return (
    <Modal
      backdrop={backdropVariant}
      isOpen={alertModel}
      onOpenChange={handleOutsideClick}
      hideCloseButton={hideCloseButton}
      placement={placement}
      isDismissable
      onClose={() => dispatch(setAlertModel(false))}
    >
      <ModalContent className="p-8 text-center w-[90%] !max-w-[352px] !max-h-[290px] md:!max-h-[300px]">
        <div className="mx-auto mb-4">
          <WarningSvg className="mx-auto" />
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
        <div className="flex justify-between">
          <Button type="button" className='!py-2 min-w-[139px]' variant="outline" onClick={cancelFunction}>
            {noText ?? 'Cancel'}
          </Button>
          <Button type="button" className='!py-2 min-w-[139px]' onClick={confirmFunction}>
            {yesText ?? 'Continue'}
          </Button>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default WarningModal;
