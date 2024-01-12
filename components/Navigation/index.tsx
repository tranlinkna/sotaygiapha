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
        pdf.page = 1;
        function footer(){ 
            // var pageA2 = [7,8,11,14,23,26,27]; //Ho Nguyen: pageA2 = [7,8,11,14,23,26,27]  
            // var pageA3 = [10,12,15,16,17,19,21,22]; //Ho Nguyen: pageA3 = [10,12,15,16,17,19,21,22]

            var pageA2 = [11]; //Ho Tran: pageA2 = [11] 
            var pageA3 = [3]; //Ho Tran: pageA3 = [3]
                      
            pdf.setFontSize(10);
            if(pageA2.includes(pdf.page)){
                pdf.text(27, 405, 'Trang ' + pdf.page); //height - 15
            } else {
                if(pageA3.includes(pdf.page)){
                    pdf.text(27, 282, 'Trang ' + pdf.page); // height - 15
                } else {
                    pdf.text(27, 205, 'Trang ' + pdf.page); // height - 5           
                }
            }
            pdf.page ++;
        }
        footer();
        for (let i = 0; i < inputs.length; i++) {
            let abc = inputs[i] as HTMLCanvasElement;
            html2canvas(abc).then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                pdf.addImage(imgData, 'JPEG', 25, 25, 0, 0);
                if (inputs.length - 1 === i) {
                    pdf.save('so-gia-pha.pdf');
                    setOpenLoading(false);
                } else {                    
                    pdf.addPage(); 
                    footer();               
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
                <Link href="/">TRANG CHỦ</Link>
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