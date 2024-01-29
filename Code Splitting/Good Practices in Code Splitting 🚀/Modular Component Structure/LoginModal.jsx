import React from 'react';

// ** import next ui
import { Modal, ModalContent } from '@nextui-org/react';

// ** import shared components
import Typography from '@shared/Typography';
import Button from '@shared/Button';
import Image from '@shared/Image';

// ** import assets
import WarningSvg from '@icons/WarningSvg';
import googleSvg from '@svg/google.svg';

// ** import redux
import { useSelector, useDispatch } from 'react-redux';
import { setLoginModel } from '@redux/slices/utils';

// ** import config
import env from '@src/config';

/**
 * @typedef {'opaque' | 'blur' | 'transparent'} BackdropVariant
 * @typedef {'auto' | 'top' | 'center' | 'bottom' | 'bottom-center' | 'top-center'} placement
 */

/**
 * LoginModal component.
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
 * @returns {JSX.Element} The rendered LoginModal component.
 */
const LoginModal = ({
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
  const { loginModel } = useSelector((state) => state.utils);

  /**
   * Handles the close action.
   */
  const handleClose = () => {
    dispatch(setLoginModel(false));
    if (btnFunction) {
      btnFunction();
    }
  };

  /**
   * redirects to google login
   */
  const redirectToExternalLink = () => {
    try {
      dispatch(setLoginModel(false));
      window.location.href = `${env.BASE_URL}/api/v1/auth/google`;
    } catch (error) {
      console.log("Error at google login", error);
    }
  };

  /**
   * Handles the outside click action.
   */
  const handleOutsideClick = () => {
    if (outsideClickClose) {
      handleClose();
    }
  };

  return (
    <Modal
      backdrop={backdropVariant}
      isOpen={loginModel}
      onOpenChange={handleOutsideClick}
      hideCloseButton={hideCloseButton}
      placement={placement}
      onClose={handleClose}
      isDismissable
    >
      <ModalContent className="p-8 text-center w-[90%] !max-w-[362px] !max-h-[290px] md:!max-h-[300px]">

        <div className="mx-auto mb-4">
          <WarningSvg className="mx-auto" />
        </div>

        <Typography variant="P_SemiBold_H5" className="pb-2 text-primary-black">
          {title ?? 'Login required'}
        </Typography>

        <Typography
          variant="P_Regular_H6"
          className="block text-mid-black pb-6"
        >
          {description ?? 'Please login to enjoy special features'}
        </Typography>
        <div className="flex">
          <div className=" w-full md:w-11/12 mx-auto ">
            <Button
              variant="outline"
              className="w-full px-0"
              onClick={redirectToExternalLink}
            >
              <img src={googleSvg} />
              <Typography variant="P_SemiBold_H6" className="ml-2 whitespace-nowrap">
                Continue with google
              </Typography>
            </Button>
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default LoginModal;
