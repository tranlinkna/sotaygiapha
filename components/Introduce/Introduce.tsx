import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Introduce.module.scss';

const Introduce = () => {
  return (
    <div className={'container ' + styles['introduce']}>   
      <h2>Sổ tay gia phả giúp bạn:</h2>
      <p><span className={'icon ' + styles['icon-pan_tool_alt']}></span> Tiện cho con cháu xem ngày giỗ của các cụ.</p>
      <p><span className={'icon ' + styles['icon-pan_tool_alt']}></span> Dễ dàng xem phả đồ dòng họ dưới dạng cây gia phả.</p>
      <p><span className={'icon ' + styles['icon-pan_tool_alt']}></span> Xem chi tiết các đời của dòng họ. </p>
      <p><span className={'icon ' + styles['icon-pan_tool_alt']}></span> In quyển đóng sổ gia phả.</p>
      <div className={styles['contact']}>
        Liên hệ: 0914471071
      </div>
    </div>
  );
};

export default Introduce;
