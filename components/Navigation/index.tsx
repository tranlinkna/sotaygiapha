import Link from 'next/link';
import React, { useEffect, useState } from "react";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Modal from '../ModalSolution';
import Loading from "../../components/Loading";
import styles from './Navigation.module.scss';

type propsType = {
    isVisible: boolean;
}

const Navigation = () => {

    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        if(openModal === true) {
            document.querySelector("body").classList.add("modal__open");
        } else {
            document.querySelector("body").classList.remove("modal__open");
        }
    }, [ openModal ])

    const [openLoading, setOpenLoading] = useState(false);

    function printDocument() {
        setOpenLoading(true);
        setTimeout(() => {
        const inputs = document.getElementsByClassName('organization');
        const pdf = new jsPDF('l', 'mm', 'A2');
        for (let i = 0; i < inputs.length; i++) {
            let abc = inputs[i] as HTMLCanvasElement;
            html2canvas(abc).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            pdf.addImage(imgData, 'JPEG', 30, 20, 0, 0);
            if (inputs.length - 1 === i) {
                pdf.save('so-gia-pha.pdf');
                setOpenLoading(false);
            } else {
                pdf.addPage();
            }
            });      
        }      
        return ('');
        }, 100);
    }

    return (
        <>
            <div className={styles['navigation']}>
                <h1>SỔ TAY GIA PHẢ</h1>
                <Link href="/">Trang chủ</Link>
                <button className='btn btn-primary' onClick={() => {setOpenModal(true);}}>In sổ gia phả</button>       
            </div>

            <Loading isVisible = {openLoading} />

            {
                openModal &&
                <Modal isVisible={openModal} isRenderCloseIcon={false} btnCancelText="Hủy bỏ" btnOkText="Đồng ý"
                    onOk={() => {
                        setOpenModal(false);
                        setTimeout(() => {
                        printDocument();
                        }, 100);                  
                    }}
                    onCancel={() => {
                        setOpenModal(false);                  
                    }}            
                />                    
            }
        </>
    )
}

export default Navigation;