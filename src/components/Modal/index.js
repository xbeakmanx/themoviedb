'use client';

import './styles.css';
import Close from '../SVG/close';

export default function Modal({ children, showModal, setShowModal, notClosable, className, backdrop }) {
  return showModal ? (
    <>
      <div
        className={`${
          className ? className : ''
        } modal md:max-h-full max-h-[450px] md:overflow-hidden overflow-y-scroll`}
      >
        <div className="modal__body overflow-hidden">
          <div className="modal__content overflow-hidden relative">
            <div className="relative z-50">{children}</div>
            <div
              onClick={() => {
                setShowModal(false);
              }}
              className="cursor-pointer absolute top-2 right-6  w-3 h-3"
            >
              <Close />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`modal__backdrop ${backdrop ? backdrop : 'opacity-70 bg-black'}`}
        onClick={
          notClosable
            ? () => {}
            : () => {
                setShowModal(false);
              }
        }
      ></div>
    </>
  ) : null;
}
