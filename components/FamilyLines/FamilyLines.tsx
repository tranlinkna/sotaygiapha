import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './FamilyLines.module.scss';

type propsType = {
  image?: string;
  pageTitle?: string;
};

const FamilyLines = ({image, pageTitle}: propsType) => {
  return (
    <div className={'container ' + styles['family-lines']}>
      <h2>Các dòng họ:</h2>
      <ul>
        <li>
          <Link href="/nguyen-dien-chau">Dòng họ Nguyễn - Diễn Lộc, Diễn Châu, Nghệ An</Link>
        </li>
        <li>
          <Link href="/tran-dinh">Dòng họ Trần Đình - Đức Vĩnh, Đức Thọ, Hà Tĩnh</Link>
        </li>
        {/* <li>
          <Link href="/tran-dinh">Dòng họ Trần Nguyễn - Đức Vĩnh, Đức Thọ, Hà Tĩnh</Link>
        </li> */}
      </ul>      
    </div>
  );
};

export default FamilyLines;
