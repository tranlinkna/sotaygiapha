import React, { useEffect, useState } from "react";
import "./Modal.module.scss";

type ModalProps = {
    isVisible?: boolean;
    isRenderHeader?: boolean;
    isRenderCloseIcon?: boolean;
    btnOkText?: string;
    btnCancelText?: string;
    onOk?: () => void;
    onCancel?: () => void;
    setVisible?: React.Dispatch<React.SetStateAction<boolean>>;
    renderFooter?: () => JSX.Element;
}

const CLASS_DEFAULT = "modal__wrapper";

const ModalSolution: React.FC<ModalProps> = ({ 
    // isVisible,
    setVisible: any,
    isRenderHeader,
    isRenderCloseIcon,
    btnOkText,
    btnCancelText,
    onOk,
    onCancel,
    renderFooter
}) => {
    const [className, setClassName] = useState(CLASS_DEFAULT);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        function handler(evt: any) {
            if(evt.which === 27)
                onCancel();
        }
        document.addEventListener("keyup", handler);
        return () => {
            document.removeEventListener("keyup", handler);
        }
    }, [])

    // useEffect(() => {
    //     setIsVisible(isVisibleOutside);
    // }, [ isVisibleOutside ])

    useEffect(() => {
        console.log(isVisible);
        if(isVisible === true) {
            setClassName((oldClass) => oldClass + " show");
            document.querySelector("body").classList.add("modal__open");
        } else {
            setClassName(CLASS_DEFAULT);
            document.querySelector("body").classList.remove("modal__open");
        }
    }, [ isVisible ])

    let _onCancel = (): void => {
        onCancel();
        // if(onCancel) {
        //     onCancel();
        // } else {
        // }
        setIsVisible(false);
        // console.log(isVisible);
    }

    const _renderFooter = (): JSX.Element => {
        if(renderFooter) {
            return renderFooter();
        }
        return(
            <>
                <button className="btn btn-secondary" onClick={_onCancel}>{btnCancelText}</button>
                <button className="btn btn-primary" onClick={onOk}>{btnOkText}</button>
            </>
        )
    }

    // if(isVisible === false) return null;
    return (
        <div className={className}>
            <div className="modal__mask" onClick={_onCancel}></div>
            <div className="dialog">
                <div className="modal__content">
                    {
                        isRenderHeader && 
                        <div className="modal__header">
                            <h2>X??c nh???n</h2>
                            {
                                isRenderCloseIcon && 
                                <button onClick={_onCancel} className="modal__close">X</button>
                            }
                        </div>
                    }
                    
                    <div className="modal__body">
                        <p>B???ng c??ch nh???n v??o n??t "?????ng ??" ph??a d?????i, h??? th???ng s??? t???i t???p tin pdf ????? b???n c?? th??? in ra ????ng s???.</p>
                        <p>M???i m???t ?????i s??? ???????c in tr??n 1 trang, s??? trang c??ng l???n th???i gian t???i t???p tin pdf c??ng l??u (100 trang m???t kho???ng 1 ph??t).</p>
                    </div>

                    <div className="modal__footer">
                        { _renderFooter() }
                    </div>
                </div>
            </div>
        </div>
    )
}

ModalSolution.defaultProps = {
    isVisible: true,
    btnCancelText: "Cancel",
    btnOkText: "Ok",
    isRenderHeader: true,
    isRenderCloseIcon: true,
}

export default ModalSolution;