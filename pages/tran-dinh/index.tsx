import Head from 'next/head';
import Link from 'next/link';
import { Footer } from '../../components/Footer';
import styles from './PageStyle.module.scss';
import { useEffect } from "react";
import { useRouter } from "next/router";
import Navigation from "../../components/Navigation";



import TreeView from 'react-expandable-treeview';

const genData = [ 
  {
    title: 'Đời thứ <1>',
    id: '1',
    info: {
      mName: 'Đại Tổ',
      mBirthday: '',
      mDeathday: '',
      mNote:'',
      follow: [{
          sName:'Vợ: ',
          sBirthday:'',
          sDeathday:'',
          sNote:''
      }]      
    },
    children: [
      {
        id: '1-1',
        info: {
          mName: 'Ông: Trần Thể',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: ',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }],
        },
        children: []
      },
      {
        id: '1-2',
        info: {
          mName: 'Ông: Trần Hiệu',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Thái Thị Bảy',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children:[]
      },
      {
        id: '1-3',
        info: {
          mName: 'Ông: Trần Đức Tự',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Thái Thị Chín',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children:[]
      },
      {
        id: '1-4',
        info: {
          mName: 'Ông: Trần Gá',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ:',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children:[]
      }
    ]    
  },
  {
    id: '1-1',
    title: 'Đời thứ <2 - 1>',
    info: {
      mName: 'Ông: Trần Thể',
      mBirthday: '',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ: ',
        sBirthday: '',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-1-1',
        info: {
          mName: 'Ông: Trần Thưởng',
          mBirthday: '',
          mDeathday: 'Mất từ bé',
          mNote: '',
          follow: [{
            sName: '',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-1-2',
        info: {
          mName: 'Ông: Trần Hà',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ:',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-1-3',
        info: {
          mName: 'Bà: Trần Trà',
          mBirthday: '',
          mDeathday: '',
          mNote: 'Lấy chồng tại Hải Phòng, đã lạc mất thông tin',
          follow: [{
            sName: 'Chồng:',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-1-4',
        info: {
          mName: 'Ông: Trần Bá',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ:',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      }
    ]    
  }, 
  {
    id: '1-2',
    title: 'Đời thứ <2 - 2>',
    info: {
      mName: 'Ông: Trần Hiệu',
      mBirthday: '',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ: Thái Thị Bảy',
        sBirthday: '',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-2-1',
        info: {
          mName: 'Bà: Trần Huề',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Chồng: ',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-2-2',
        info: {
          mName: 'Ông: Trần Đình Hiến',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Tống Thị Bốn',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-2-3',
        info: {
          mName: 'Ông: Trần Chương',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ:',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-2-4',
        info: {
          mName: 'Bà: Trần Thị Tứ',
          mBirthday: '',
          mDeathday: '16/08/Mất từ bé (AL)',
          mNote: '',
          follow: [{
            sName: 'Chồng:',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-2-5',
        info: {
          mName: 'Ông: Trần Đình Trới',
          mBirthday: '1907',
          mDeathday: '18/08/2002 (AL)',
          mNote: '',
          follow: [{
            sName: 'Vợ: Trần Thị Gái',
            sBirthday: '1911',
            sDeathday: '07/11/1994 (AL)',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-2-6',
        info: {
          mName: 'Bà: Trần Thị Châu',
          mBirthday: '',
          mDeathday: '',
          mNote: 'Lão thành cách mạng',
          follow: [{
            sName: 'Chồng:',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      }
    ]    
  }, 
  {
    title: 'Đời thứ <2 - 3>',
    id: '1-3',
    info: {
      mName: 'Ông: Trần Đức Tự',
      mBirthday: '',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ: Thái Thị Chín',
        sBirthday: '',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id:'1-3-1',
        info: {
          mName: 'Ông: Trần Đức Xuân',
          mBirthday: '1916',
          mDeathday: '03/12/1983 (AL)',
          mNote: '',
          follow: [{
            sName: 'Vợ: Nguyễn Thị Thu',
            sBirthday: '1924',
            sDeathday: '12/04/2012',
            sNote: ''
          }]
        },
        children: []
      }
    ]    
  },
  {
    title: 'Đời thứ <2 - 4>',
    id: '1-4',
    info: {
      mName: 'Ông: Trần Gá',
      mBirthday: '',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ:',
        sBirthday: '',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-4-1',
        info: {
          mName: 'Bà: Trần Tuế',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Chồng:',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-4-2',
        info: {
          mName: 'Ông: Trần Phúc',
          mBirthday: '',
          mDeathday: '',
          mNote: 'Lạc mất thông tin. Có con cháu sống ở Sài Gòn nhưng ko muốn nhận họ',
          follow: [{
            sName: 'Vợ:',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-4-3',
        info: {
          mName: 'Bà: Trần Chắt Tịnh',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Chồng:',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-4-4',
        info: {
          mName: 'Bà: (Sống ở Pháp)',
          mBirthday: '',
          mDeathday: '',
          mNote: 'Định cư tại Pháp, lạc mất thông tin',
          follow: [{
            sName: 'Chồng:',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      }
    ]    
  },
  {
    title: 'Đời thứ <3 - 1>',
    id: '1-1-2',
    info: {
      mName: 'Ông: Trần Hà',
      mBirthday: '',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ:',
        sBirthday: '',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-1-2-1',
        info: {
          mName: 'Bà: Trần Thị Hải',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Chồng: Nguyễn Hoàng',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-1-2-2',
        info: {
          mName: 'Bà: Trần Thị Thủy',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Chồng: Nguyễn Thêm',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      }
    ]    
  },
  {
    title: 'Đời thứ <3 - 2>',
    id: '1-1-4',
    info: {
      mName: 'Ông: Trần Bá',
      mBirthday: '',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ:',
        sBirthday: '',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-1-4-1',
        info: {
          mName: 'Ông: Trần Quân',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Bà Vân',
            sBirthday: '',
            sDeathday: '',
            sNote: 'Sinh sống tại Đức Thọ'
          }]
        },
        children: []
      },
      {
        id: '1-1-4-2',
        info: {
          mName: 'Ông: Trần Nhân',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ:',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-1-4-3',
        info: {
          mName: 'Ông: Trần Lâm',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ:',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      }
    ]    
  },
  {
    title: 'Đời thứ <3 - 3>',
    id: '1-2-2',
    info: {
      mName: 'Ông: Trần Đình Hiến',
      mBirthday: '',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ: Tống Thị Bốn',
        sBirthday: '',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-2-2-1',
        info: {
          mName: 'Ông: Trần Đình Ái',
          mBirthday: '10/1939 (DL)',
          mDeathday: '09/01/2003 (AL)',
          mNote: '',
          follow: [{
            sName: 'Vợ: Nguyễn Thị Mậu',
            sBirthday: '20/10/1948 (DL)',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-2-2-2',
        info: {
          mName: 'Ông: Trần Đình An',
          mBirthday: '10/1943 (DL)',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Trần Thị Nhàn',
            sBirthday: '1952',
            sDeathday: '07/12/2009 (AL)',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-2-2-3',
        info: {
          mName: 'Ông: Trần Văn Việt',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ:',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-2-2-4',
        info: {
          mName: 'Bà: Trần Thị Hoàn',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Chồng:',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-2-2-5',
        info: {
          mName: 'Ông: Trần Viết Thắng',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Nguyễn Thị Thanh',
            sBirthday: '1962',
            sDeathday: '',
            sNote: ''
          },
          {
            sName: 'Vợ: Mai Thị Thanh Bình',
            sBirthday: '1957',
            sDeathday: '',
            sNote: 'Quê quán Hải Dương'
          }]
        },
        children: []
      }
    ]    
  },
  {
    title: 'Đời thứ <3 - 4>',
    id: '1-2-3',
    info: {
      mName: 'Ông: Trần Chương',
      mBirthday: '',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ:',
        sBirthday: '',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-2-3-1',
        info: {
          mName: 'Ông: Trần Khánh',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ:',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-2-3-2',
        info: {
          mName: 'Bà: Trần Thị Kim Quế',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Chồng:',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-2-3-3',
        info: {
          mName: 'Bà: Trần Thị Thanh',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Chồng:',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      }
    ]    
  },
  {
    title: 'Đời thứ <3 - 5>',
    id: '1-2-5',
    info: {
      mName: 'Ông: Trần Đình Trới',
      mBirthday: '1907',
      mDeathday: '18/08/2002 (AL)',
      mNote: '',
      follow: [{
        sName: 'Vợ: Trần Thị Gái',
        sBirthday: '1911',
        sDeathday: '07/11/1994 (AL)',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-2-5-1',
        info: {
          mName: 'Bà: Trần Thị Thuyết',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Chồng:',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-2-5-2',
        info: {
          mName: 'Ông: Trần Anh Hòa',
          mBirthday: '1945',
          mDeathday: '08/04/2014',
          mNote: '',
          follow: [{
            sName: 'Vợ: Dương Thị Bích Lợi',
            sBirthday: '20/07/1947',
            sDeathday: '',
            sNote: ''
          },
          {
            sName: 'Vợ: Phan Thị Hương',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-2-5-3',
        info: {
          mName: 'Ông: Trần Văn Hạnh',
          mBirthday: '1948',
          mDeathday: '05/04/1970',
          mNote: 'Liệt sỹ',
          follow: [{
            sName: '',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-2-5-4',
        info: {
          mName: 'Bà: Trần Thị Diệp',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Chồng: Nguyễn Hồng Sơn',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-2-5-5',
        info: {
          mName: 'Ông: Trần Thanh Nhã',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ:',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      }
    ]    
  },
  {
    title: 'Đời thứ <3 - 6>',
    id:'1-3-1',
    info: {
      mName: 'Ông: Trần Đức Xuân',
      mBirthday: '1916',
      mDeathday: '03/12/1983 (AL)',
      mNote: '',
      follow: [{
        sName: 'Vợ: Nguyễn Thị Thu',
        sBirthday: '1924',
        sDeathday: '12/04/2012',
        sNote: ''
      }]
    },
    children: [
      {
        id:'1-3-1-1',
        info: {
          mName: 'Bà: Trần Thị Cúc',
          mBirthday: 'khoảng 1944',
          mDeathday: 'khoảng 1948',
          mNote: '',
          follow: [{
            sName: '',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id:'1-3-1-2',
        info: {
          mName: 'Ông: Trần Anh Thu',
          mBirthday: '20/01/1949 (DL)',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Dương Lệ Minh',
            sBirthday: '10/09/1950 (DL)',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id:'1-3-1-3',
        info: {
          mName: 'Ông: Trần Đức Đông',
          mBirthday: '1951',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Nguyễn Thị Bông',
            sBirthday: '1953',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id:'1-3-1-4',
        info: {
          mName: 'Bà: Trần Thị Yên',
          mBirthday: '1953',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Chồng: Nguyễn Văn Hoan',
            sBirthday: '1955',
            sDeathday: '',
            sNote: 'Quê quán Hà Nội'
          }]
        },
        children: []
      },
      {
        id:'1-3-1-5',
        info: {
          mName: 'Ông: Trần Đức Tâm',
          mBirthday: '05/04/1956',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Nguyễn Thị Chín',
            sBirthday: '24/01/1962',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id:'1-3-1-6',
        info: {
          mName: 'Ông: Trần Đức Chiến',
          mBirthday: '1958',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Hoàng Thị Kế',
            sBirthday: '1957',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id:'1-3-1-7',
        info: {
          mName: 'Bà: Trần Thị Ngọc Bé',
          mBirthday: '01/09/1960 (DL)',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Chồng: Đinh Văn An',
            sBirthday: '12/04/1962 (DL)',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id:'1-3-1-8',
        info: {
          mName: 'Bà: Trần Thị Như Hoa',
          mBirthday: '1962',
          mDeathday: '',
          mNote: 'Không lấy chồng nhưng có con trai mang họ mẹ',
          follow: [{
            sName: '',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id:'1-3-1-9',
        info: {
          mName: 'Ông: Trần Đức Phương',
          mBirthday: '03/04/1965 (DL)',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Võ Thị Tuyết',
            sBirthday: '1964',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id:'1-3-1-10',
        info: {
          mName: 'Ông: Trần Đức Thành',
          mBirthday: '1972',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Phạm Thị Thu Hiền',
            sBirthday: '1979',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      }
    ]    
  },
  {
    title: 'Đời thứ <4 - 1>',
    id: '1-1-4-1',
    info: {
      mName: 'Ông: Trần Quân',
      mBirthday: '',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ: Bà Vân',
        sBirthday: '',
        sDeathday: '',
        sNote: 'Sinh sống tại Đức Thọ'
      }]
    },
    children: [
      {
        id: '1-1-4-1-1',
        info: {
          mName: 'Ông: Trần Bình',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: ',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-1-4-1-2',
        info: {
          mName: 'Ông:',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ:',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      }
    ]    
  },
  {
    title: 'Đời thứ <4 - 2>',
    id: '1-1-4-2',
    info: {
      mName: 'Ông: Trần Nhân',
      mBirthday: '',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ:',
        sBirthday: '',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-1-4-2-1',
        info: {
          mName: 'Bà: Trần Chi',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Chồng: ',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-1-4-2-2',
        info: {
          mName: 'Ông:',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ:',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      }
    ]    
  },
  {
    title: 'Đời thứ <4 - 3>',
    id: '1-1-4-3',
    info: {
      mName: 'Ông: Trần Lâm',
      mBirthday: '',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ:',
        sBirthday: '',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-1-4-3-1',
        info: {
          mName: 'Bà:',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Chồng: ',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-1-4-3-2',
        info: {
          mName: 'Bà:',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Chồng:',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      }
    ]    
  },
  {
    title: 'Đời thứ <4 - 4>',
    id: '1-2-2-1',
    info: {
      mName: 'Ông: Trần Đình Ái',
      mBirthday: '10/1939 (DL)',
      mDeathday: '09/01/2003 (AL)',
      mNote: '',
      follow: [{
        sName: 'Vợ: Nguyễn Thị Mậu',
        sBirthday: '20/10/1948 (DL)',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-2-2-1-1',
        info: {
          mName: 'Ông: Trần Ngọc Minh',
          mBirthday: '10/08/1970',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Trần Đông Hới',
            sBirthday: '01/04/1980',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-2-2-1-2',
        info: {
          mName: 'Ông: Trần Ngọc Lâm',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Nguyễn Thị Bích Thủy',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-2-2-1-3',
        info: {
          mName: 'Bà: Trần Thị Hồng Giang',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Chồng:',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-2-2-1-4',
        info: {
          mName: 'Ông: Trần Đức Nam',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: ',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
    ]    
  },
  {
    title: 'Đời thứ <4 - 5>',
    id: '1-2-2-2',
    info: {
      mName: 'Ông: Trần Đình An',
      mBirthday: '10/1943 (DL)',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ: Trần Thị Nhàn',
        sBirthday: '1952',
        sDeathday: '07/12/2009 (AL)',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-2-2-2-1',
        info: {
          mName: 'Bà: Trần Thị Hoài Thanh',
          mBirthday: '06/02/1979',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Chồng: Hoàng Quốc Việt',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-2-2-2-2',
        info: {
          mName: 'Bà: Trần Thị Linh Na',
          mBirthday: '25/02/1982 (DL)',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Chồng: Nguyễn Ngọc Cảnh',
            sBirthday: '19/06/1977 (DL)',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-2-2-2-3',
        info: {
          mName: 'Ông: Trần Đức Kiên',
          mBirthday: '18/08/1986',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Nguyễn Thị Xen',
            sBirthday: '02/12/1991',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      }
    ]    
  },
  {
    title: 'Đời thứ <4 - 6>',
    id: '1-2-2-5',
    info: {
      mName: 'Ông: Trần Viết Thắng',
      mBirthday: '',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ: Nguyễn Thị Thanh',
        sBirthday: '1962',
        sDeathday: '',
        sNote: ''
      },
      {
        sName: 'Vợ: Mai Thị Thanh Bình',
        sBirthday: '1957',
        sDeathday: '',
        sNote: 'Quê quán Hải Dương'
      }]
    },
    children: [
      {
        id: '1-2-2-5-1',
        info: {
          mName: 'Bà: Trần Lệ Xuân',
          mBirthday: '24/02/1985',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Chồng: Tạ Đồng Khởi',
            sBirthday: '24/02/1985',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-2-2-5-2',
        info: {
          mName: 'Bà: Trần Anh Thái',
          mBirthday: '27/10/1986 (DL)',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Chồng: Dương Quốc Hưng',
            sBirthday: '',
            sDeathday: '',
            sNote: 'Quê quán Tp Thái Nguyên'
          }]
        },
        children: []
      },
      {
        id: '1-2-2-5-3',
        info: {
          mName: 'Bà: Trần Thị Thu Yên',
          mBirthday: '03/06/1994',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Chồng: Phạm Chí Hiếu',
            sBirthday: '',
            sDeathday: '',
            sNote: 'Quê quán Hải Dương'
          }]
        },
        children: []
      }
    ]    
  },
  {
    title: 'Đời thứ <4 - 7>',
    id: '1-2-5-2',
    info: {
      mName: 'Ông: Trần Anh Hòa',
      mBirthday: '1945',
      mDeathday: '08/04/2014',
      mNote: '',
      follow: [{
        sName: 'Vợ: Dương Thị Bích Lợi',
        sBirthday: '20/07/1947',
        sDeathday: '',
        sNote: ''
      },
      {
        sName: 'Vợ: Phan Thị Hương',
        sBirthday: '',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-2-5-2-1',
        info: {
          mName: 'Bà: Trần Thị Trúc Anh',
          mBirthday: '1972',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Chồng: Vũ Thanh Hải',
            sBirthday: '1973',
            sDeathday: '',
            sNote: ''
          }]
        }
      },
      {
        id: '1-2-5-2-2',
        info: {
          mName: 'Ông: Trần Trung Hiếu',
          mBirthday: '28/07/1976 (DL)',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Nguyễn Thị Thúy Vân',
            sBirthday: '01/06/1978 (DL)',
            sDeathday: '',
            sNote: ''
          }]
        }
      },
      {
        id: '1-2-5-2-3',
        info: {
          mName: 'Ông: Trần Anh Tuấn',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ:',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        }
      },
      {
        id: '1-2-5-2-4',
        info: {
          mName: 'Ông: Trần Tuấn Anh',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ:',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        }
      }
    ]
  },
  {
    title: 'Đời thứ <4 - 8>',
    id: '1-2-5-5',
    info: {
      mName: 'Ông: Trần Thanh Nhã',
      mBirthday: '',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ:',
        sBirthday: '',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-2-5-5-1',
        info: {
          mName: 'Bà: Trần Thị Nhung',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Chồng:',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        }
      },
      {
        id: '1-2-5-5-2',
        info: {
          mName: 'Ông: Trần Linh',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ:',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        }
      } 
    ]
  },
  {
    title: 'Đời thứ <4 - 9>',
    id:'1-3-1-2',
    info: {
      mName: 'Ông: Trần Anh Thu',
      mBirthday: '20/01/1949 (DL)',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ: Dương Lệ Minh',
        sBirthday: '10/09/1950 (DL)',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-3-1-2-1',
        info: {
          mName: 'Bà: Trần Thùy Dương',
          mBirthday: '16/04/1978 (DL)',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Chồng: Hoàng Ngọc Minh',
            sBirthday: '1970',
            sDeathday: '2020',
            sNote: ''
          }]
        }
      },
      {
        id: '1-3-1-2-2',
        info: {
          mName: 'Ông: Trần Nam Thanh',
          mBirthday: '28/04/1987 (DL)',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ:',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        }
      },
      {
        id: '1-3-1-2-3',
        info: {
          mName: 'Bà: Trần Lệ Thuỷ',
          mBirthday: '15/04/1989 (DL)',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Chồng: Đỗ Khắc Tùng',
            sBirthday: '1981',
            sDeathday: '',
            sNote: ''
          }]
        }
      },
      {
        id: '1-3-1-2-4',
        info: {
          mName: 'Bà: Trần Thị Thương',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Chồng: Trần Đại Hoàng',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        }
      }  
    ]
  },
  {
    title: 'Đời thứ <4 - 10>',
    id:'1-3-1-3',
    info: {
      mName: 'Ông: Trần Đức Đông',
      mBirthday: '1951',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ: Nguyễn Thị Bông',
        sBirthday: '1953',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-3-1-3-1',
        info: {
          mName: 'Bà: Trần Thị Ánh Tuyết',
          mBirthday: '14/02/1975 (DL)',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Chồng: Trần Văn Tuyến',
            sBirthday: '13/08/1971 (DL)',
            sDeathday: '',
            sNote: ''
          }]
        }
      },
      {
        id: '1-3-1-3-2',
        info: {
          mName: 'Ông: Trần Thanh Nam',
          mBirthday: '25/09/1976 (DL)',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Đào Thị Phương',
            sBirthday: '11/10/1989',
            sDeathday: '',
            sNote: ''
          }]
        }
      },
      {
        id: '1-3-1-3-3',
        info: {
          mName: 'Ông: Trần Trung Hiếu',
          mBirthday: '04/01/1989 (DL)',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Nguyễn Thị Bé Vân',
            sBirthday: '1995',
            sDeathday: '',
            sNote: ''
          }]
        }
      }
    ]
  },
  {
    title: 'Đời thứ <4 - 11>',
    id:'1-3-1-5',
    info: {
      mName: 'Ông: Trần Đức Tâm',
      mBirthday: '05/04/1956',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ: Nguyễn Thị Chín',
        sBirthday: '24/01/1962',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-3-1-5-1',
        info: {
          mName: 'Bà: Trần Thị Lý',
          mBirthday: '29/01/1982 (DL)',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Chồng: Nguyễn Văn Truy',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        }
      },
      {
        id: '1-3-1-5-2',
        info: {
          mName: 'Bà: Trần Thị Bích Thủy',
          mBirthday: '02/07/1985 (DL)',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Chồng:',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        }
      }
    ]
  },
  {
    title: 'Đời thứ <4 - 12>',
    id:'1-3-1-6',
    info: {
      mName: 'Ông: Trần Đức Chiến',
      mBirthday: '1958',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ: Hoàng Thị Kế',
        sBirthday: '1957',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-3-1-6-1',
        info: {
          mName: 'Ông: Trần Quyết Thắng',
          mBirthday: '1989',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ:',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        }
      },
      {
        id: '1-3-1-6-2',
        info: {
          mName: 'Bà: Trần Thị Phương Thảo',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Chồng:',
            sBirthday: '1993',
            sDeathday: '',
            sNote: ''
          }]
        }
      }
    ]
  },
  {
    title: 'Đời thứ <4 - 13>',
    id:'1-3-1-8',
    info: {
      mName: 'Bà: Trần Thị Như Hoa',
      mBirthday: '1962',
      mDeathday: '',
      mNote: 'Không lấy chồng nhưng có con trai mang họ mẹ',
      follow: [{
        sName: '',
        sBirthday: '',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-3-1-8-1',
        info: {
          mName: 'Ông: Trần Mạnh Hùng',
          mBirthday: '1995',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ:',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        }
      }
    ]
  },
  {
    title: 'Đời thứ <4 - 14>',
    id:'1-3-1-9',
    info: {
      mName: 'Ông: Trần Đức Phương',
      mBirthday: '03/04/1965 (DL)',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ: Võ Thị Tuyết',
        sBirthday: '1964',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-3-1-9-1',
        info: {
          mName: 'Ông: Trần Tuấn',
          mBirthday: '1993',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ:',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        }
      },
      {
        id: '1-3-1-9-1',
        info: {
          mName: 'Ông: Trần Tiến',
          mBirthday: '2007',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ:',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        }
      }
    ]
  },
  {
    title: 'Đời thứ <4 - 15>',
    id:'1-3-1-10',
    info: {
      mName: 'Ông: Trần Đức Thành',
      mBirthday: '1972',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ: Phạm Thị Thu Hiền',
        sBirthday: '1979',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-3-1-10-1',
        info: {
          mName: 'Bà: Trần Thị Khánh Huyền',
          mBirthday: '2000',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Chồng:',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        }
      },
      {
        id: '1-3-1-10-2',
        info: {
          mName: 'Ông:',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ:',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        }
      },
      {
        id: '1-3-1-10-3',
        info: {
          mName: 'Ông:',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ:',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        }
      }
    ]
  }     
];

let genDataTree = [
  {
    title: 'Đời thứ <1>',
    id: '1',
    info: {
      mName: 'Đại Tổ',
      mBirthday: '',
      mDeathday: '',
      mNote:'',
      follow: [{
          sName:'Vợ: ',
          sBirthday:'',
          sDeathday:'',
          sNote:''
      }]      
    },
    children: [
      {
        id: '1-1',
        info: {
          mName: 'Ông: Trần Thể',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: ',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }],
        },
        children: []
      },
      {
        id: '1-2',
        info: {
          mName: 'Ông: Trần Hiệu',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Thái Thị Bảy',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children:[]
      },
      {
        id: '1-3',
        info: {
          mName: 'Ông: Trần Đức Tự',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Thái Thị Chín',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children:[]
      },
      {
        id: '1-4',
        info: {
          mName: 'Ông: Trần Gá',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ:',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children:[]
      }
    ]    
  }
]

genNodeTree();
function genNodeTree() {
  let l = genData.length;  
  for(let i = 1; i<l; i++) {
    let cr = genData[i].children;  
    let id = genData[i].id;
    let arr = id.split('-');
    let d='genDataTree[0]';
    for(let j = 1; j < arr.length; j++) {
      d = d + '.children[' + (parseInt(arr[j]) - 1) + ']';
    }
    d = d + '.children = cr';
    eval(d);
  }; 
}

const FamilyLine = () => {  

  ToTop();
  function ToTop(){
    const router = useRouter();
    useEffect(()=>{
      const handleRouteChange = () => {
        const el = document.getElementById('Hic');
        if(el) {
          document.getElementById('Hic').scrollIntoView({
            behavior: 'auto',
            block: 'center',
            inline: 'center'
          });
        }          
      }
    router.events.on('routeChangeComplete', handleRouteChange)
    },[]);

    return ('');
  }

  return (  
      <div className={'pdf-page ' + styles['family-line-page']}>
        <Head>
          <title>Dòng họ Trần Đình - Đức Vĩnh, Đức Thọ, Hà Tĩnh</title>
        </Head>             
        {/* <div id='Hic'>na</div> */}

        <Navigation />

        <div className={styles['layout']}>
          <div className={styles['family-tree']}>
          <TreeView lineWidth={1} lineAlpha={2}
              data={genDataTree}
              renderNode={({ info }) => (
                <div className={'node'}>
                  <div className='main-info'>
                    <p>{info.mName}</p>
                    <p>Sinh: {info.mBirthday}</p>
                    <p>Mất: {info.mDeathday}</p>
                  </div>
                  {(info.follow).map((el, index) => (
                    <div key={index} className='secondary-info'>
                      <p>{el.sName}</p>
                      <p>Sinh: {el.sBirthday}</p>
                      <p>Mất: {el.sDeathday}</p>
                    </div>
                  ))}
                  
                </div>
              )}
          />
          </div>

          <div className={styles['family-nodes']}>        
            {genData.map((el, index) => (
              <div className='organization' key={index}> 
                <h2>{el.title}</h2>
                <div className='organization-root'>
                  <div className='main-info'>
                    <p>{el.info.mName}</p>
                    <p>Sinh: {el.info.mBirthday}</p>
                    <p>Mất: {el.info.mDeathday}</p>
                    <p>Tiểu sử:  {el.info.mNote} </p>
                  </div>
                  {el.info.follow.map((el1, index1) => (            
                    <div key={index1} className='secondary-info'>
                      <p>{el1.sName}</p>
                      <p>Sinh: {el1.sBirthday}</p>
                      <p>Mất: {el1.sDeathday}</p>
                      <p>Tiểu sử: {el1.sNote}</p>
                      {/* {el.parent.mNote ? (
                        <p>Tiểu sử:  {el.parent.mNote} </p>
                      ) : ''} */}
                    </div>
                  ))}
                </div>
                <ul>
                {el.children.map((el2, index2) => (
                  <li key={index2}>
                    <div className='main-info'>
                      <p>{el2.info.mName}</p>
                      <p>Sinh: {el2.info.mBirthday}</p>
                      <p>Mất: {el2.info.mDeathday}</p>
                      <p>Tiểu sử: {el2.info.mNote} </p>
                    </div>
                    {el2.info.follow.map((el3, index3) => (
                      <div key={index3} className='secondary-info'>
                        <p>{el3.sName}</p>
                        <p>Sinh: {el3.sBirthday}</p>
                        <p>Mất: {el3.sDeathday}</p>
                        <p>Tiểu sử: {el3.sNote}</p>
                      </div>
                    ))}
                  </li>
                ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Footer/>
      </div>
  );

};

export default FamilyLine;