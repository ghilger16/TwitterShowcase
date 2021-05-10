import React from "react";
import TweetCard from "./TweetCard";

export const Modal = ({ show, tweet }) => {
    return (
        <div className="modal-wrapper">
            <div className="modal-content">
                {show ? <TweetCard tweet={tweet} border={false} /> : null}
            </div>
        </div>
    );
};

export default Modal;
