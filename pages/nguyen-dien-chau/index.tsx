import Head from 'next/head';
import Link from 'next/link';
import { Footer } from '../../components/Footer';
import styles from './PageStyle.module.scss';
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Navigation from "../../components/Navigation";
import TreeView from 'react-expandable-treeview';

const genData = [ 
  {
    title: 'Đời thứ <1>',
    id: '1',
    info: {
      mName: 'Thủy Tổ: Nguyễn Phúc Tiến',
      mBirthday: '',
      mDeathday: '',
      mNote:'',
      follow: [{
          sName:'Vợ: Bà Phúc Tiến',
          sBirthday:'',
          sDeathday:'',
          sNote:''
      }]      
    },
    children: [
      {
        id: '1-1',
        info: {
          mName: 'Ông: Nguyễn Chính Tâm',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: ',
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
          mName: 'Bà: Nguyễn Thị Hồng Tâm',
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
        children:[]
      },
      {
        id: '1-3',
        info: {
          mName: 'Bà: Nguyễn Thị Hà',
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
        children:[]
      },
      {
        id: '1-4',
        info: {
          mName: 'Bà: Nguyễn Thị Thông',
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
        children:[]
      }
    ]    
  },
  {
    title: 'Đời thứ <2-1>',
    id: '1-1',
    info: {
      mName: 'Ông: Nguyễn Chính Tâm',
      mBirthday: '',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ: ',
        sBirthday: '',
        sDeathday: '',
        sNote: ''
      }],
    },
    children: [
      {
        id: '1-1-1',
        info: {
          mName: 'Ông: Nguyễn Huệ An',
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
        children:[]
      },
      {
        id: '1-1-2',
        info: {
          mName: 'Bà: Nguyễn Thị Hằng',
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
        children:[]
      },
      {
        id: '1-1-3',
        info: {
          mName: 'Bà: Nguyễn Thị Thông',
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
        children:[]
      }
    ]
  }, 
  {
    title: 'Đời thứ <3-1>',
    id: '1-1-1',
    info: {
      mName: 'Ông: Nguyễn Huệ An',
      mBirthday: '',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ: Bà Huệ An',
        sBirthday: '',
        sDeathday: '',
        sNote: ''
      },
      {
        sName: 'Vợ: Nguyễn Thị Hiếu',
        sBirthday: '',
        sDeathday: '',
        sNote: ''
      }]
    },
    children:[
      {
        id: '1-1-1-1',
        info: {
          mName: 'Ông: Nguyễn Hướng Tâm',
          mBirthday: '',
          mDeathday: '',
          mNote: 'Chi trưởng Nho Lâm',
          follow: [{
            sName: 'Vợ:',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children:[]
      },
      {
        id: '1-1-1-2',
        info: {
          mName: 'Ông: Nguyễn An Nhàn',
          mBirthday: '',
          mDeathday: '',
          mNote: 'Chi trưởng Phúc Thiêm',
          follow: [{
            sName: 'Vợ:',
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
    title: 'Đời thứ <4-1>',
    id: '1-1-1-2',
    info: {
      mName: 'Ông: Nguyễn An Nhàn',
      mBirthday: '',
      mDeathday: '',
      mNote: 'Chi trưởng Phúc Thiêm',
      follow: [{
        sName: 'Vợ: Ngô A Nương (Tâm)',
        sBirthday: '',
        sDeathday: '',
        sNote: ''
      }]
    },
    children:[
      {
        id: '1-1-1-2-1',
        info: {
          mName: 'Ông: Ông Ngọc',
          mBirthday: '',
          mDeathday: '',
          mNote: 'Trưởng, ở lại Nho Lâm',
          follow: [{
            sName: 'Vợ:',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        }
      },
      {
        id: '1-1-1-2-2',
        info: {
          mName: 'Ông: Nguyễn Chân Chính',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Ngô A Nương (Nhật)',
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
    title: 'Đời thứ <5-1>',
    id: '1-1-1-2-2',
    info: {
      mName: 'Ông: Nguyễn Chân Chính',
      mBirthday: '',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ: Ngô A Nương (Nhật)',
        sBirthday: '',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-1-1-2-2-1',
        info: {
          mName: 'Ông: Nguyễn Chính Khoan',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Đinh Thị (Bà Khoan)',
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
    title: 'Đời thứ <6-1>',
    id: '1-1-1-2-2-1',
    info: {
      mName: 'Ông: Nguyễn Chính Khoan',
      mBirthday: '',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ: Đinh Thị (Bà Khoan)',
        sBirthday: '',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-1-1-2-2-1-1',
        info: {
          mName: 'Ông: Nguyễn Tượng Điểm',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Phạm Thị An',
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
    title: 'Đời thứ <7-1>',
    id: '1-1-1-2-2-1-1',
    info: {
      mName: 'Ông: Nguyễn Tượng Điểm',
      mBirthday: '',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ: Phạm Thị An',
        sBirthday: '',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-1-1-2-2-1-1-1',
        info: {
          mName: 'Tổ cô: Nguyễn Quý Hoa',
          mBirthday: '',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-2',
        info: {
          mName: 'Bà: Nguyễn Thị',
          mBirthday: '',
          mDeathday: '',
          mNote: 'Tảo sinh',
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
        id: '1-1-1-2-2-1-1-3',
        info: {
          mName: 'Ông: Nguyễn Phong',
          mBirthday: '',
          mDeathday: '',
          mNote: 'Tảo sinh',
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
        id: '1-1-1-2-2-1-1-4',
        info: {
          mName: 'Ông: Nguyễn Chính Thiện',
          mBirthday: '',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5',
        info: {
          mName: 'Ông: Nguyễn Hữu Đớn',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Lê Thị Quang',
            sBirthday: '',
            sDeathday: '',
            sNote: 'Chính thất'
          },
          {
            sName: 'Vợ: Lê Thị Phượng',
            sBirthday: '',
            sDeathday: '',
            sNote: 'Trắc thất'
          }]
        },
        children: []
      },
      {
        id: '1-1-1-2-2-1-1-6',
        info: {
          mName: 'Ông: Thứ Ba',
          mBirthday: '',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-7',
        info: {
          mName: 'Ông: Thứ Tư',
          mBirthday: '',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-8',
        info: {
          mName: 'Ông: Thứ Năm',
          mBirthday: '',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-9',
        info: {
          mName: 'Ông: Thứ Sáu',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: '',
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
    title: 'Đời thứ <8-1>',
    id: '1-1-1-2-2-1-1-5',
    info: {
      mName: 'Ông: Nguyễn Hữu Đớn',
      mBirthday: '',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ: Lê Thị Quang',
        sBirthday: '',
        sDeathday: '',
        sNote: 'Chính thất'
      },
      {
        sName: 'Vợ: Lê Thị Phượng',
        sBirthday: '',
        sDeathday: '',
        sNote: 'Trắc thất'
      }]
    },
    children: [
      {
        id: '1-1-1-2-2-1-1-5-1',
        info: {
          mName: 'Bà: Nguyễn Thị Xuân',
          mBirthday: '',
          mDeathday: '',
          mNote: 'Tảo sinh',
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
        id: '1-1-1-2-2-1-1-5-2',
        info: {
          mName: 'Ông: Nguyễn Duy',
          mBirthday: '',
          mDeathday: '',
          mNote: 'Tảo sinh',
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
        id: '1-1-1-2-2-1-1-5-3',
        info: {
          mName: 'Ông: Nguyễn Phong',
          mBirthday: '',
          mDeathday: '',
          mNote: 'Tảo sinh',
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
        id: '1-1-1-2-2-1-1-5-4',
        info: {
          mName: 'Ông: Nguyễn Phúc Sinh Toàn',
          mBirthday: '',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-5',
        info: {
          mName: 'Ông: Nguyễn Hữu Quốc',
          mBirthday: '',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-6',
        info: {
          mName: 'Ông: Nguyễn Hữu Thích',
          mBirthday: '',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-7',
        info: {
          mName: 'Bà: Nguyễn Thị Thu',
          mBirthday: '',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-8',
        info: {
          mName: 'Ông: Nguyễn Thông',
          mBirthday: '',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9',
        info: {
          mName: 'Ông: Nguyễn Hữu Bình',
          mBirthday: '',
          mDeathday: '08/05 (AL)',
          mNote: '',
          follow: [{
            sName: 'Vợ: Hoàng Thị Diễm',
            sBirthday: '',
            sDeathday: '20/08 (AL)',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-1-1-2-2-1-1-5-10',
        info: {
          mName: 'Ông: Nguyễn Hữu Bích',
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
    title: 'Đời thứ <9-1>',
    id: '1-1-1-2-2-1-1-5-9',
    info: {
      mName: 'Ông: Nguyễn Hữu Bình',
      mBirthday: '',
      mDeathday: '08/05 (AL)',
      mNote: '',
      follow: [{
        sName: 'Vợ: Hoàng Thị Diễm',
        sBirthday: '',
        sDeathday: '20/08 (AL)',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-1-1-2-2-1-1-5-9-1',
        info: {
          mName: 'Bà: Nguyễn Thị Từ',
          mBirthday: '',
          mDeathday: '15/07 (AL)',
          mNote: 'Tảo sinh',
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
        id: '1-1-1-2-2-1-1-5-9-2',
        info: {
          mName: 'Ông: Nguyễn Hữu Cầu',
          mBirthday: '',
          mDeathday: '',
          mNote: 'Tảo sinh',
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
        id: '1-1-1-2-2-1-1-5-9-3',
        info: {
          mName: 'Ông: Nguyễn Hữu Thích',
          mBirthday: '',
          mDeathday: '13/07 (AL)',
          mNote: '',
          follow: [{
            sName: 'Vợ: Phạm Thị Yên',
            sBirthday: '13/08 (AL)',
            sDeathday: '',
            sNote: 'Chính thất'
          },
          {
            sName: 'Vợ: Phạm Thị Ánh',
            sBirthday: '28/09 (AL)',
            sDeathday: '',
            sNote: 'Trắc thất'
          }]
        },
        children: []
      }
    ]
  },
  {
    title: 'Đời thứ <10-1>',
    id: '1-1-1-2-2-1-1-5-9-3',
    info: {
      mName: 'Ông: Nguyễn Hữu Thích',
      mBirthday: '',
      mDeathday: '13/07 (AL)',
      mNote: '',
      follow: [{
        sName: 'Vợ: Phạm Thị Yên',
        sBirthday: '13/08 (AL)',
        sDeathday: '',
        sNote: 'Chính thất'
      },
      {
        sName: 'Vợ: Phạm Thị Ánh',
        sBirthday: '28/09 (AL)',
        sDeathday: '',
        sNote: 'Trắc thất'
      }]
    },
    children: [
      {
        id: '1-1-1-2-2-1-1-5-9-3-1',
        info: {
          mName: 'Ông: Nguyễn Hữu Đán',
          mBirthday: '',
          mDeathday: '',
          mNote: 'Tảo sinh',
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
        id: '1-1-1-2-2-1-1-5-9-3-2',
        info: {
          mName: 'Ông: Nguyễn Hữu Thuật',
          mBirthday: '',
          mDeathday: '10/07 (AL)',
          mNote: '',
          follow: [{
            sName: 'Nguyễn Thị Chân',
            sBirthday: '',
            sDeathday: '15/06 (AL)',
            sNote: ''
          },
          {
            sName: 'Vũ Thị Nghiêm',
            sBirthday: '',
            sDeathday: '09/09 (AL)',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-1-1-2-2-1-1-5-9-3-3',
        info: {
          mName: 'Bà: Nguyễn Thị Lịnh',
          mBirthday: '',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-4',
        info: {
          mName: 'Ông: Nguyễn Hữu Tặng',
          mBirthday: '',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-5',
        info: {
          mName: 'Ông: Nguyễn Hữu Tộ',
          mBirthday: '',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-6',
        info: {
          mName: 'Ông: Nguyễn Hữu Dương',
          mBirthday: '',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-7',
        info: {
          mName: 'Ông: Nguyễn Hữu Vi',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: '',
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
    title: 'Đời thứ <11-1>',
    id: '1-1-1-2-2-1-1-5-9-3-2',
    info: {
      mName: 'Ông: Nguyễn Hữu Thuật',
      mBirthday: '',
      mDeathday: '10/07 (AL)',
      mNote: '',
      follow: [{
        sName: 'Nguyễn Thị Chân',
        sBirthday: '',
        sDeathday: '15/06 (AL)',
        sNote: ''
      },
      {
        sName: 'Vũ Thị Nghiêm',
        sBirthday: '',
        sDeathday: '09/09 (AL)',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-1',
        info: {
          mName: 'Ông: Nguyễn Hữu Hạnh',
          mBirthday: '',
          mDeathday: '16/08 (AL)',
          mNote: 'Tảo sinh',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2',
        info: {
          mName: 'Ông: Nguyễn Hữu Uy',
          mBirthday: '',
          mDeathday: '08/01 (AL)',
          mNote: 'Thọ 82 tuổi, mất năm Đinh Sửu',
          follow: [{
            sName: 'Vợ: Nguyễn Thị Chất',
            sBirthday: '',
            sDeathday: '23/10 (AL)',
            sNote: 'Thọ 74 tuổi, mất năm Kỷ Tỵ'
          }]
        },
        children: []
      },
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-3',
        info: {
          mName: 'Ông: Nguyễn Hữu Vọng',
          mBirthday: '',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-4',
        info: {
          mName: 'Bà: Nguyễn Thị Thông',
          mBirthday: '',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-5',
        info: {
          mName: 'Bà: Nguyễn Thị Thiết',
          mBirthday: '',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-6',
        info: {
          mName: 'Ông: Nguyễn Hữu Sử',
          mBirthday: '',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-7',
        info: {
          mName: 'Ông: Nguyễn Hữu Khoan',
          mBirthday: '',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-8',
        info: {
          mName: 'Ông: Nguyễn Thị Xuân',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: '',
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
    title: 'Đời thứ <12-1>',
    id: '1-1-1-2-2-1-1-5-9-3-2-2',
    info: {
      mName: 'Ông: Nguyễn Hữu Uy',
      mBirthday: '',
      mDeathday: '08/01 (AL)',
      mNote: 'Thọ 82 tuổi, mất năm Đinh Sửu',
      follow: [{
        sName: 'Vợ: Nguyễn Thị Chất',
        sBirthday: '',
        sDeathday: '23/10 (AL)',
        sNote: 'Thọ 74 tuổi, mất năm Kỷ Tỵ'
      }]
    },
    children: [
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1',
        info: {
          mName: 'Ông: Nguyễn Hữu Nghĩa',
          mBirthday: 'năm Mậu Tuất',
          mDeathday: '15/02 (AL)',
          mNote: 'Mất năm Giáp Tuất',
          follow: [{
            sName: 'Vợ: Đinh Thị Cảnh',
            sBirthday: '',
            sDeathday: '18/01 (AL)',
            sNote: 'Mất năm Đinh Dậu, thọ 61 tuổi'
          }]
        },
        children: []
      },
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-2',
        info: {
          mName: 'Ông: Nguyễn Hữu Thạnh',
          mBirthday: '',
          mDeathday: '02/07 (AL)',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-3',
        info: {
          mName: 'Bà: Nguyễn Thị Huỳnh',
          mBirthday: '',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-4',
        info: {
          mName: 'Bà: Nguyễn Thị Hoan',
          mBirthday: '',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-5',
        info: {
          mName: 'Bà: Nguyễn Thị Xuân',
          mBirthday: '',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-6',
        info: {
          mName: 'Bà: Nguyễn Thị Lương',
          mBirthday: '',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-7',
        info: {
          mName: 'Bà: Nguyễn Thị Điểm',
          mBirthday: '',
          mDeathday: '27/09 (AL)',
          mNote: 'Tảo sinh',
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
    title: 'Đời thứ <13-1>',
    id: '1-1-1-2-2-1-1-5-9-3-2-2-1',
    info: {
      mName: 'Ông: Nguyễn Hữu Nghĩa',
      mBirthday: 'năm Mậu Tuất',
      mDeathday: '15/02 (AL)',
      mNote: 'Mất năm Giáp Tuất',
      follow: [{
        sName: 'Vợ: Đinh Thị Cảnh',
        sBirthday: '',
        sDeathday: '18/01 (AL)',
        sNote: 'Mất năm Đinh Dậu, thọ 61 tuổi'
      }]
    },
    children: [
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1',
        info: {
          mName: 'Ông: Nguyễn Hữu Nghị',
          mBirthday: 'năm Kỷ Tỵ',
          mDeathday: '04/03',
          mNote: 'Mất năm Giáp Thìn',
          follow: [{
            sName: 'Vợ: Phan Thị Lệnh',
            sBirthday: '',
            sDeathday: '18/11/1947',
            sNote: 'Thọ 86 tuổi'
          }]
        },
        children: []
      },
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-2',
        info: {
          mName: 'Bà: Nguyễn Thị Bính',
          mBirthday: '',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-3',
        info: {
          mName: 'Bà: Nguyễn Thị Tính',
          mBirthday: '',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-4',
        info: {
          mName: 'Bà: Nguyễn Thị Thuần',
          mBirthday: '',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-5',
        info: {
          mName: 'Bà: Nguyễn Thị Lưu',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: '',
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
    title: 'Đời thứ <14-1>',
    id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1',
    info: {
      mName: 'Ông: Nguyễn Hữu Nghị',
      mBirthday: 'năm Kỷ Tỵ',
      mDeathday: '04/03',
      mNote: 'Mất năm Giáp Thìn',
      follow: [{
        sName: 'Vợ: Phan Thị Lệnh',
        sBirthday: '',
        sDeathday: '18/11/1947',
        sNote: 'Thọ 86 tuổi'
      }]
    },
    children: [
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1',
        info: {
          mName: 'Ông: Nguyễn Tạo',
          mBirthday: 'năm Ất Dậu',
          mDeathday: '15/07/1942 (AL)',
          mNote: '',
          follow: [{
            sName: 'Vợ: Thái Thị Kỷ',
            sBirthday: 'năm Ất Dậu',
            sDeathday: '09/05/1928 (AL)',
            sNote: 'Chính thất'
          },
          {
            sName: 'Vợ: Cao Thị Lường',
            sBirthday: '',
            sDeathday: '20/04 (AL)',
            sNote: 'Kế thất'
          }]
        },
        children: []
      },
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2',
        info: {
          mName: 'Ông: Nguyễn Hữu Hài',
          mBirthday: '1882',
          mDeathday: '26/11/1956 (AL)',
          mNote: 'Thọ 74 tuổi',
          follow: [{
            sName: 'Cao Thị Phương',
            sBirthday: '',
            sDeathday: '16/05/1945 (AL)',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3',
        info: {
          mName: 'Ông: Nguyễn Hữu Ngô',
          mBirthday: '1897',
          mDeathday: '07/09/1977',
          mNote: 'Thọ 81 tuổi',
          follow: [{
            sName: 'Hoàng Thị Cúc',
            sBirthday: '1896',
            sDeathday: '13/10/1960',
            sNote: 'Thọ 64 tuổi'
          }]
        },
        children: []
      },
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-4',
        info: {
          mName: 'Bà: Nguyễn Thị Khoát',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-5',
        info: {
          mName: 'Ông: Nguyễn Cư',
          mBirthday: '',
          mDeathday: '13/08 (AL)',
          mNote: 'Tảo sinh',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-6',
        info: {
          mName: 'Bà: Nguyễn Thị Nguyên',
          mBirthday: '',
          mDeathday: '',
          mNote: 'Tảo sinh',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-7',
        info: {
          mName: 'Ông: Nguyễn Tụy',
          mBirthday: '',
          mDeathday: '??/?? (AL)',
          mNote: 'Tảo sinh',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-8',
        info: {
          mName: 'Ông: Nguyễn Tùy',
          mBirthday: '',
          mDeathday: '??/??',
          mNote: 'Tảo sinh',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-9',
        info: {
          mName: 'Ông: Nguyễn Lưu',
          mBirthday: '',
          mDeathday: '??/??',
          mNote: 'Tảo sinh',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-10',
        info: {
          mName: 'Ông: Nguyễn Khởi',
          mBirthday: '',
          mDeathday: '??/??',
          mNote: 'Tảo sinh',
          follow: [{
            sName: '',
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
    title: 'Đời thứ <15-1>',
    id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1',
    info: {
      mName: 'Ông: Nguyễn Tạo',
      mBirthday: 'năm Ất Dậu',
      mDeathday: '15/07/1942 (AL)',
      mNote: '',
      follow: [{
        sName: 'Vợ: Thái Thị Kỷ',
        sBirthday: 'năm Ất Dậu',
        sDeathday: '09/05/1928 (AL)',
        sNote: 'Chính thất'
      },
      {
        sName: 'Vợ: Cao Thị Lường',
        sBirthday: '',
        sDeathday: '20/04 (AL)',
        sNote: 'Kế thất'
      }]
    },
    children: [
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1-1',
        info: {
          mName: 'Bà: Nguyễn Thị Lịch',
          mBirthday: '',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1-2',
        info: {
          mName: 'Ông: Nguyễn Thông',
          mBirthday: '',
          mDeathday: '??/??',
          mNote: 'Tảo sinh',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1-3',
        info: {
          mName: 'Ông: Nguyễn Văn Đạo',
          mBirthday: '1918',
          mDeathday: '09/07/1988 (AL)',
          mNote: 'Thọ 69 tuổi',
          follow: [{
            sName: 'Vợ: Nguyễn Thị Hảo',
            sBirthday: '1920',
            sDeathday: '26/09/2014',
            sNote: 'Thọ 95 tuổi'
          }]
        },
        children: []
      },
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1-4',
        info: {
          mName: 'Ông: Nguyễn Văn Phùng',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Nguyễn Thị Điều',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          },
          {
            sName: 'Vợ: Phạm Thị Nở',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1-5',
        info: {
          mName: 'Bà: Nguyễn Thị Thiệp',
          mBirthday: '',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1-6',
        info: {
          mName: 'Bà: Nguyễn Thị Tiếp',
          mBirthday: '',
          mDeathday: '13/03 (AL)',
          mNote: 'Tảo sinh',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1-7',
        info: {
          mName: 'Ông: Nguyễn Văn Liên',
          mBirthday: '1933',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Lê Thị Duy',
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
    title: 'Đời thứ <15-2>',
    id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2',
    info: {
      mName: 'Ông: Nguyễn Hữu Hài',
      mBirthday: '1882',
      mDeathday: '26/11/1956 (AL)',
      mNote: 'Thọ 74 tuổi',
      follow: [{
        sName: 'Cao Thị Phương',
        sBirthday: '',
        sDeathday: '16/05/1945 (AL)',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-1',
        info: {
          mName: 'Ông: Nguyễn Thị Đường',
          mBirthday: '',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-2',
        info: {
          mName: 'Ông: Nguyễn Văn Dai',
          mBirthday: '',
          mDeathday: '05/10/1972 (AL)',
          mNote: '',
          follow: [{
            sName: 'Vợ: Cao Thị Hợp',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-3',
        info: {
          mName: 'Ông: Nguyễn Văn Tác',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Đặng Thị Chiêu',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-4',
        info: {
          mName: 'Ông: Nguyễn Văn Nhân',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Nguyễn Thị Ba',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-5',
        info: {
          mName: 'Ông: Nguyễn Niêm',
          mBirthday: '',
          mDeathday: '??/?? (AL)',
          mNote: 'Tảo sinh',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-6',
        info: {
          mName: 'Bà: Nguyễn Thị Thường',
          mBirthday: '',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-7',
        info: {
          mName: 'Ông: Nguyễn Văn Khả',
          mBirthday: '',
          mDeathday: '02/03 (AL)',
          mNote: '',
          follow: [{
            sName: 'Vợ: Đậu Thị Kỷ',
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
    title: 'Đời thứ <15-3>',
    id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3',
    info: {
      mName: 'Ông: Nguyễn Hữu Ngô',
      mBirthday: '1897',
      mDeathday: '07/09/1977',
      mNote: 'Thọ 81 tuổi',
      follow: [{
        sName: 'Vợ: Hoàng Thị Cúc',
        sBirthday: '1896',
        sDeathday: '13/10/1960',
        sNote: 'Thọ 64 tuổi'
      }]
    },
    children: [
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-1',
        info: {
          mName: 'Ông: Nguyễn Văn Đồng',
          mBirthday: '1924',
          mDeathday: '07/07/1987 (AL)',
          mNote: '',
          follow: [{
            sName: 'Vợ: Cao Thị Thảnh',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-2',
        info: {
          mName: 'Ông: Nguyễn Văn Hai',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Phạm Thị Nại',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-3',
        info: {
          mName: 'Ông: Nguyễn Văn Ba',
          mBirthday: '1930',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Võ Thị Lan',
            sBirthday: '1932',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-4',
        info: {
          mName: 'Ông: Nguyễn Văn Hòe',
          mBirthday: '',
          mDeathday: '',
          mNote: 'Tảo sinh',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-5',
        info: {
          mName: 'Bà: Nguyễn Thị Tùng',
          mBirthday: '',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-6',
        info: {
          mName: 'Ông: Nguyễn Văn Mai',
          mBirthday: '15/01/1941 (DL)',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Phan Thị Thảo',
            sBirthday: '1949',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      }
    ]
  },
  {
    title: 'Đời thứ <16-1>',
    id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1-3',
    info: {
      mName: 'Ông: Nguyễn Văn Đạo',
      mBirthday: '1918',
      mDeathday: '09/07/1988 (AL)',
      mNote: 'Thọ 69 tuổi',
      follow: [{
        sName: 'Vợ: Nguyễn Thị Hảo',
        sBirthday: '1920',
        sDeathday: '26/09/2014',
        sNote: 'Thọ 95 tuổi'
      }]
    },
    children: [
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1-3-1',
        info: {
          mName: 'Bà: Nguyễn Thị Yên',
          mBirthday: '',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1-3-2',
        info: {
          mName: 'Bà: Nguyễn Thị Hoàn',
          mBirthday: '',
          mDeathday: '',
          mNote: 'Tảo sinh',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1-3-3',
        info: {
          mName: 'Ông: Nguyễn Văn Đệ',
          mBirthday: '',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1-3-4',
        info: {
          mName: 'Ông: Nguyễn Bình Định',
          mBirthday: '15/08/1960',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Đặng Thị Thành',
            sBirthday: '1961',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1-3-5',
        info: {
          mName: 'Bà: Nguyễn Thị Minh',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: '',
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
    title: 'Đời thứ <16-2>',
    id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1-4',
    info: {
      mName: 'Ông: Nguyễn Văn Phùng',
      mBirthday: '',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ: Nguyễn Thị Điều',
        sBirthday: '',
        sDeathday: '',
        sNote: ''
      },
      {
        sName: 'Vợ: Phạm Thị Nở',
        sBirthday: '',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1-4-1',
        info: {
          mName: 'Bà: Nguyễn Thị Loan',
          mBirthday: '1952',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1-4-2',
        info: {
          mName: 'Ông: Nguyễn Văn Hương',
          mBirthday: '1961',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Cao Thị Hương',
            sBirthday: '1956',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1-4-3',
        info: {
          mName: 'Bà: Nguyễn Thị Phiên',
          mBirthday: '1964',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1-4-4',
        info: {
          mName: 'Bà: Nguyễn Thị Hằng',
          mBirthday: '',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1-4-5',
        info: {
          mName: 'Bà: Nguyễn Thị Nga',
          mBirthday: '',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1-4-6',
        info: {
          mName: 'Ông: Nguyễn Văn Chung',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Hồ Linh',
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
    title: 'Đời thứ <16-3>',
    id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1-7',
    info: {
      mName: 'Ông: Nguyễn Văn Liên',
      mBirthday: '1933',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ: Lê Thị Duy',
        sBirthday: '',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1-7-1',
        info: {
          mName: 'Bà: Nguyễn Thị Miên',
          mBirthday: '1977',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1-7-2',
        info: {
          mName: 'Ông: Nguyễn Văn Thiện',
          mBirthday: '1979',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1-7-3',
        info: {
          mName: 'Ông: Nguyễn Văn Thảo',
          mBirthday: '1982',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: '',
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
    title: 'Đời thứ <16-4>',
    id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-2',
    info: {
      mName: 'Ông: Nguyễn Văn Dai',
      mBirthday: '',
      mDeathday: '05/10/1972 (AL)',
      mNote: '',
      follow: [{
        sName: 'Vợ: Cao Thị Hợp',
        sBirthday: '',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-2-1',
        info: {
          mName: 'Bà: Nguyễn Thị Hòa',
          mBirthday: '',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-2-2',
        info: {
          mName: 'Bà: Nguyễn Thị Thành',
          mBirthday: '1944',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-2-3',
        info: {
          mName: 'Ông: Nguyễn Văn Sỹ',
          mBirthday: '1947',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Nguyễn Thị Truyền',
            sBirthday: '1949',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-2-4',
        info: {
          mName: 'Bà: Nguyễn Thị Tần',
          mBirthday: '',
          mDeathday: '',
          mNote: 'Liệt sỹ',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-2-5',
        info: {
          mName: 'Bà: Nguyễn Thị Nhỏ',
          mBirthday: '1954',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-2-6',
        info: {
          mName: 'Ông: Nguyễn Văn Triêm',
          mBirthday: '',
          mDeathday: '',
          mNote: 'Tảo sinh',
          follow: [{
            sName: '',
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
    title: 'Đời thứ <16-5>',
    id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-3',
    info: {
      mName: 'Ông: Nguyễn Văn Tác',
      mBirthday: '',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ: Đặng Thị Chiêu',
        sBirthday: '',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-3-1',
        info: {
          mName: 'Ông: Nguyễn Văn Chắt',
          mBirthday: '',
          mDeathday: '',
          mNote: 'Tảo sinh',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-3-2',
        info: {
          mName: 'Bà: Nguyễn Thị Long',
          mBirthday: '1954',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-3-3',
        info: {
          mName: 'Bà: Nguyễn Thị Hồng',
          mBirthday: '',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-3-4',
        info: {
          mName: 'Ông: Nguyễn Văn Dũng',
          mBirthday: '1960',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Hoàng Thị Hương',
            sBirthday: '1964',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-3-5',
        info: {
          mName: 'Bà: Nguyễn Thị Diện',
          mBirthday: '1962',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-3-6',
        info: {
          mName: 'Bà: Nguyễn Thị Hiền',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: '',
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
    title: 'Đời thứ <16-6>',
    id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-4',
    info: {
      mName: 'Ông: Nguyễn Văn Nhân',
      mBirthday: '',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ: Nguyễn Thị Ba',
        sBirthday: '',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-4-1',
        info: {
          mName: 'Ông: Nguyễn Văn Nhu',
          mBirthday: '1947',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Phạm Thị Hạnh',
            sBirthday: '1948',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-4-2',
        info: {
          mName: 'Ông: Nguyễn Văn Hai',
          mBirthday: '',
          mDeathday: '',
          mNote: 'Tảo sinh',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-4-3',
        info: {
          mName: 'Ông: Nguyễn Văn Thỉu',
          mBirthday: '',
          mDeathday: '',
          mNote: 'Liệt sỹ',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-4-4',
        info: {
          mName: 'Ông: Nguyễn Huy Biểu',
          mBirthday: '1954',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Nguyễn Thị Vựng',
            sBirthday: '1957',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-4-5',
        info: {
          mName: 'Bà: Nguyễn Thị Hiểu',
          mBirthday: '',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-4-6',
        info: {
          mName: 'Bà: Nguyễn Huy Liệu',
          mBirthday: '1960',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Cao Thị Yến',
            sBirthday: '1962',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-4-7',
        info: {
          mName: 'Ông: Nguyễn Huy Thiệu',
          mBirthday: '1962',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Hoàng Thị Hà',
            sBirthday: '1963',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-4-8',
        info: {
          mName: 'Bà: Nguyễn Thị Phượng',
          mBirthday: '',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-4-9',
        info: {
          mName: 'Bà: Nguyễn Thị Hoàng',
          mBirthday: '',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-4-10',
        info: {
          mName: 'Bà: Nguyễn Thị Út',
          mBirthday: '',
          mDeathday: '',
          mNote: 'Tảo sinh',
          follow: [{
            sName: '',
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
    title: 'Đời thứ <16-7>',
    id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-7',
    info: {
      mName: 'Ông: Nguyễn Văn Khả',
      mBirthday: '',
      mDeathday: '02/03 (AL)',
      mNote: '',
      follow: [{
        sName: 'Vợ: Đậu Thị Kỷ',
        sBirthday: '',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-7-1',
        info: {
          mName: 'Ông: Nguyễn Văn Hà',
          mBirthday: '1957',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Nguyễn Thị Nhu',
            sBirthday: '1961',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-7-2',
        info: {
          mName: 'Ông: Nguyễn Văn Hải',
          mBirthday: '1960',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Nguyễn Thị Duyên',
            sBirthday: '1961',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-7-3',
        info: {
          mName: 'Ông: Nguyễn Văn Hạnh',
          mBirthday: '1964',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Phan Thị Chinh',
            sBirthday: '1971',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-7-4',
        info: {
          mName: 'Ông: Nguyễn Văn Hảo',
          mBirthday: '1968',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-7-5',
        info: {
          mName: 'Ông: Nguyễn Văn Năm',
          mBirthday: '1971',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Hoàng Thị Quy',
            sBirthday: '1966',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      }
    ]
  },
  {
    title: 'Đời thứ <16-8>',
    id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-1',
    info: {
      mName: 'Ông: Nguyễn Văn Đồng',
      mBirthday: '1924',
      mDeathday: '07/07/1987 (AL)',
      mNote: '',
      follow: [{
        sName: 'Vợ: Cao Thị Thảnh',
        sBirthday: '',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-1-1',
        info: {
          mName: 'Bà: Nguyễn Thị Nhung',
          mBirthday: '1959',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-1-2',
        info: {
          mName: 'Ông: Nguyễn Văn Tâm',
          mBirthday: '1960',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Phạm Thị Sáu',
            sBirthday: '1966',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-1-3',
        info: {
          mName: 'Bà: Nguyễn Thị Lý',
          mBirthday: '1963',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-1-4',
        info: {
          mName: 'Bà: Nguyễn Thị Lài',
          mBirthday: '1966',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-1-5',
        info: {
          mName: 'Bà: Nguyễn Thị Liệu',
          mBirthday: '1971',
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
    title: 'Đời thứ <16-9>',
    id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-2',
    info: {
      mName: 'Ông: Nguyễn Văn Hai',
      mBirthday: '',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ: Phạm Thị Nại',
        sBirthday: '',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-2-1',
        info: {
          mName: 'Bà: Nguyễn Thị Thái',
          mBirthday: '1948',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-2-2',
        info: {
          mName: 'Ông: Nguyễn Văn Thai',
          mBirthday: '1952',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Cao Thị Lai',
            sBirthday: '1957',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-2-3',
        info: {
          mName: 'Bà: Nguyễn Thị Tài',
          mBirthday: '1953',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-2-4',
        info: {
          mName: 'Bà: Nguyễn Thị Năng',
          mBirthday: '1955',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-2-5',
        info: {
          mName: 'Bà: Nguyễn Thị Thắng',
          mBirthday: '1957',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-2-6',
        info: {
          mName: 'Ông: Nguyễn Văn Chiến',
          mBirthday: '1959',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Hoàng Thị Khương',
            sBirthday: '1959',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-2-7',
        info: {
          mName: 'Bà: Nguyễn Thị Bảy',
          mBirthday: '1963',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-2-8',
        info: {
          mName: 'Bà: Nguyễn Thị Tám',
          mBirthday: '1966',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-2-9',
        info: {
          mName: 'Ông: Nguyễn Văn Công',
          mBirthday: '1969',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Hoàng Thị Hoa',
            sBirthday: '1972',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      }
    ]
  },
  {
    title: 'Đời thứ <16-10>',
    id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-3',
    info: {
      mName: 'Ông: Nguyễn Văn Ba',
      mBirthday: '1930',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ: Võ Thị Lan',
        sBirthday: '1932',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-3-1',
        info: {
          mName: 'Ông: Nguyễn Văn Vinh',
          mBirthday: '',
          mDeathday: '',
          mNote: 'Tảo sinh',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-3-2',
        info: {
          mName: 'Ông: Nguyễn Văn Quang',
          mBirthday: '1959',
          mDeathday: '',
          mNote: 'Tảo sinh',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-3-3',
        info: {
          mName: 'Bà: Nguyễn Thị Huệ',
          mBirthday: '1963',
          mDeathday: '',
          mNote: 'Tảo sinh',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-3-4',
        info: {
          mName: 'Ông: Nguyễn Văn Giáp',
          mBirthday: '1964',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Nguyễn Thị Hương',
            sBirthday: '1966',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-3-5',
        info: {
          mName: 'Ông: Nguyễn Văn Việt',
          mBirthday: '1967',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Đoàn Thị Niệm',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-3-6',
        info: {
          mName: 'Ông: Nguyễn Văn Triều',
          mBirthday: '1969',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Nguyễn Thị Hai',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-3-7',
        info: {
          mName: 'Bà: Nguyễn Thị Thanh',
          mBirthday: '1972',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-3-8',
        info: {
          mName: 'Bà: Nguyễn Thị Bình',
          mBirthday: '1975',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: '',
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
    title: 'Đời thứ <16-11>',
    id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-6',
    info: {
      mName: 'Ông: Nguyễn Văn Mai',
      mBirthday: '15/01/1941 (DL)',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ: Phan Thị Thảo',
        sBirthday: '1949',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-6-1',
        info: {
          mName: 'Ông: Nguyễn Ngọc Cảnh',
          mBirthday: '19/06/1977 (DL)',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Trần Thị Linh Na',
            sBirthday: '25/02/1982 (DL)',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-6-2',
        info: {
          mName: 'Ông: Nguyễn Ngọc Hưng',
          mBirthday: '1981',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Nguyễn Ngọc Tươi',
            sBirthday: '1983',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-6-3',
        info: {
          mName: 'Bà: Nguyễn Ngọc Thủy',
          mBirthday: '1985',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: '',
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
    title: 'Đời thứ <17-1>',
    id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1-3-4',
    info: {
      mName: 'Ông: Nguyễn Bình Định',
      mBirthday: '15/08/1960',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ: Đặng Thị Thành',
        sBirthday: '1961',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1-3-4-1',
        info: {
          mName: 'Ông: Nguyễn Văn Sơn',
          mBirthday: '28/01/1982',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Phạm Thị Thu',
            sBirthday: '1986',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1-3-4-2',
        info: {
          mName: 'Bà: Nguyễn Thị Lệ Thủy',
          mBirthday: '02/05/1984',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1-3-4-3',
        info: {
          mName: 'Bà: Nguyễn Thị Thúy Vân',
          mBirthday: '10/10/1988',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: '',
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
    title: 'Đời thứ <17-2>',
    id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1-4-2',
    info: {
      mName: 'Ông: Nguyễn Văn Hương',
      mBirthday: '1961',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ: Cao Thị Hương',
        sBirthday: '1956',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1-4-2-1',
        info: {
          mName: 'Ông: Nguyễn Văn Hùng',
          mBirthday: '1982',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: Bùi Thị Bốn',
            sBirthday: '',
            sDeathday: '',
            sNote: ''
          }]
        },
        children: []
      },
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1-4-2-2',
        info: {
          mName: 'Bà: Nguyễn Thị Hải',
          mBirthday: '1985',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: '',
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
    title: 'Đời thứ <17-3>',
    id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1-4-6',
    info: {
      mName: 'Ông: Nguyễn Văn Chung',
      mBirthday: '',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ: Hồ Linh',
        sBirthday: '',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1-4-6-1',
        info: {
          mName: 'Ông: Thứ Nhất',
          mBirthday: '',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1-4-6-2',
        info: {
          mName: 'Ông: Thứ Hai',
          mBirthday: '',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1-4-6-3',
        info: {
          mName: 'Ông: Thứ Ba',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: '',
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
    title: 'Đời thứ <17-4>',
    id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1-7-2',
    info: {
      mName: 'Ông: Nguyễn Văn Thiện',
      mBirthday: '1979',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ: ',
        sBirthday: '',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1-7-2-1',
        info: {
          mName: 'Ông: Thứ Nhất',
          mBirthday: '',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1-7-2-2',
        info: {
          mName: 'Ông: Thứ Hai',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1-7-2-3',
        info: {
          mName: 'Ông: Thứ Ba',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: '',
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
    title: 'Đời thứ <17-5>',
    id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1-7-3',
    info: {
      mName: 'Ông: Nguyễn Văn Thảo',
      mBirthday: '1982',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ: ',
        sBirthday: '',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1-7-3-1',
        info: {
          mName: 'Ông: Thứ Nhất',
          mBirthday: '',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1-7-3-2',
        info: {
          mName: 'Ông: Thứ Hai',
          mBirthday: '',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1-7-3-3',
        info: {
          mName: 'Ông: Thứ Ba',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: '',
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
    title: 'Đời thứ <17-6>',
    id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-2-3',
    info: {
      mName: 'Ông: Nguyễn Văn Sỹ',
      mBirthday: '1947',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ: Nguyễn Thị Truyền',
        sBirthday: '1949',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-2-3-1',
        info: {
          mName: 'Bà: Nguyễn Thị Thanh',
          mBirthday: '',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-2-3-2',
        info: {
          mName: 'Ông: Nguyễn Văn Minh',
          mBirthday: '1975',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-2-3-3',
        info: {
          mName: 'Ông: Nguyễn Văn Bình',
          mBirthday: '1978',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-2-3-4',
        info: {
          mName: 'Ông: Nguyễn Văn An',
          mBirthday: '1980',
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
    title: 'Đời thứ <17-7>',
    id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-3-4',
    info: {
      mName: 'Ông: Nguyễn Văn Dũng',
      mBirthday: '1960',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ: Hoàng Thị Hương',
        sBirthday: '1964',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-3-4-1',
        info: {
          mName: 'Ông: Nguyễn Văn Nam',
          mBirthday: '1986',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-3-4-2',
        info: {
          mName: 'Bà: Nguyễn Thị Oanh',
          mBirthday: '1988',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-3-4-3',
        info: {
          mName: 'Ông: Nguyễn Văn Danh',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-3-4-4',
        info: {
          mName: 'Ông: Nguyễn Văn An',
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
    title: 'Đời thứ <17-8>',
    id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-4-1',
    info: {
      mName: 'Ông: Nguyễn Văn Nhu',
      mBirthday: '1947',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ: Phạm Thị Hạnh',
        sBirthday: '1948',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-4-1-1',
        info: {
          mName: 'Bà: Nguyễn Thị Hương',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-4-1-2',
        info: {
          mName: 'Bà: Nguyễn Thị Hoa',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-4-1-3',
        info: {
          mName: 'Ông: Nguyễn Minh Tuấn',
          mBirthday: '1976',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-4-1-4',
        info: {
          mName: 'Ông: Nguyễn Văn Tú',
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
    title: 'Đời thứ <17-9>',
    id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-4-6',
    info: {
      mName: 'Bà: Nguyễn Huy Liệu',
      mBirthday: '1960',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ: Cao Thị Yến',
        sBirthday: '1962',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-4-6-1',
        info: {
          mName: 'Ông: Nguyễn Hải Huy',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-4-6-2',
        info: {
          mName: 'Ông: Thứ Hai',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: '',
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
    title: 'Đời thứ <17-10>',
    id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-4-7',
    info: {
      mName: 'Ông: Nguyễn Huy Thiệu',
      mBirthday: '1962',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Hoàng Thị Hà',
        sBirthday: '1963',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-4-7-1',
        info: {
          mName: 'Bà: Nguyễn Thị Kỳ',
          mBirthday: '',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-4-7-2',
        info: {
          mName: 'Bà: Nguyễn Thị Mỹ',
          mBirthday: '',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-4-7-3',
        info: {
          mName: 'Ông: Thứ Ba',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: '',
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
    title: 'Đời thứ <17-11>',
    id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-4-4',
    info: {
      mName: 'Ông: Nguyễn Huy Biểu',
      mBirthday: '1954',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Nguyễn Thị Vựng',
        sBirthday: '1957',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-4-4-1',
        info: {
          mName: 'Bà: Nguyễn Thùy Dương',
          mBirthday: '1979',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-4-4-2',
        info: {
          mName: 'Ông: Nguyễn Hải Bằng',
          mBirthday: '1981',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-4-4-3',
        info: {
          mName: 'Bà: Nguyễn Thị Hồng',
          mBirthday: '1983',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: '',
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
    title: 'Đời thứ <17-12>',
    id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-7-1',
    info: {
      mName: 'Ông: Nguyễn Văn Hà',
      mBirthday: '1957',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ: Nguyễn Thị Nhu',
        sBirthday: '1961',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-7-1-1',
        info: {
          mName: 'Bà: Nguyễn Thị Thủy',
          mBirthday: '1987',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-7-1-2',
        info: {
          mName: 'Ông: Nguyễn Văn An',
          mBirthday: '1991',
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
    title: 'Đời thứ <17-13>',
    id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-7-2',
    info: {
      mName: 'Ông: Nguyễn Văn Hải',
      mBirthday: '1960',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ: Nguyễn Thị Duyên',
        sBirthday: '1961',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-7-2-1',
        info: {
          mName: 'Bà: Nguyễn Thị ...',
          mBirthday: '',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-7-2-2',
        info: {
          mName: 'Ông: Nguyễn Văn ...',
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
    title: 'Đời thứ <17-14>',
    id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-7-3',
    info: {
      mName: 'Ông: Nguyễn Văn Hạnh',
      mBirthday: '1964',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ: Phan Thị Chinh',
        sBirthday: '1971',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-7-3-1',
        info: {
          mName: 'Bà: Nguyễn Thị Na',
          mBirthday: '',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-7-3-2',
        info: {
          mName: 'Bà: Nguyễn Thị Ly',
          mBirthday: '',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-7-3-3',
        info: {
          mName: 'Ông: Nguyễn Văn Cao',
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
    title: 'Đời thứ <17-15>',
    id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-7-4',
    info: {
      mName: 'Ông: Nguyễn Văn Hảo',
      mBirthday: '1968',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ: ',
        sBirthday: '',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-7-4-1',
        info: {
          mName: 'Ông:',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-7-4-2',
        info: {
          mName: 'Ông:',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-7-4-3',
        info: {
          mName: 'Ông:',
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
    title: 'Đời thứ <17-16>',
    id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-7-5',
    info: {
      mName: 'Ông: Nguyễn Văn Năm',
      mBirthday: '1971',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ: Hoàng Thị Quy',
        sBirthday: '1966',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-2-7-5-1',
        info: {
          mName: 'Ông: Nguyễn Văn Lộc',
          mBirthday: '2010',
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
    title: 'Đời thứ <17-17>',
    id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-1-2',
    info: {
      mName: 'Ông: Nguyễn Văn Tâm',
      mBirthday: '1960',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ: Phạm Thị Sáu',
        sBirthday: '1966',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-1-2-1',
        info: {
          mName: 'Ông: Nguyễn Văn Trung',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-1-2-2',
        info: {
          mName: 'Bà: Nguyễn Thị Thu',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: '',
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
    title: 'Đời thứ <17-18>',
    id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-2-2',
    info: {
      mName: 'Ông: Nguyễn Văn Thai',
      mBirthday: '1952',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ: Cao Thị Lai',
        sBirthday: '1957',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-2-2-1',
        info: {
          mName: 'Ông: Nguyễn Văn Dương',
          mBirthday: '1982',
          mDeathday: '1999',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-2-2-2',
        info: {
          mName: 'Bà: Nguyễn Thị Lam',
          mBirthday: '1984',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-2-2-3',
        info: {
          mName: 'Bà: Nguyễn Thị Hường',
          mBirthday: '1988',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: '',
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
    title: 'Đời thứ <17-19>',
    id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-2-6',
    info: {
      mName: 'Ông: Nguyễn Văn Chiến',
      mBirthday: '1959',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ: Hoàng Thị Khương',
        sBirthday: '1959',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-2-6-1',
        info: {
          mName: 'Ông: Nguyễn Văn Tuyên',
          mBirthday: '1983',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-2-6-2',
        info: {
          mName: 'Bà: Nguyễn Thị Huấn',
          mBirthday: '1985',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: '',
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
    title: 'Đời thứ <17-20>',
    id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-2-9',
    info: {
      mName: 'Ông: Nguyễn Văn Công',
      mBirthday: '1969',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ: Hoàng Thị Hoa',
        sBirthday: '1972',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-2-9-1',
        info: {
          mName: 'Ông: Nguyễn Văn Tiến',
          mBirthday: '1995',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-2-9-2',
        info: {
          mName: 'Ông: Nguyễn Văn Lực',
          mBirthday: '2000',
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
    title: 'Đời thứ <17-21>',
    id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-3-4',
    info: {
      mName: 'Ông: Nguyễn Văn Giáp',
      mBirthday: '1964',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ: Nguyễn Thị Hương',
        sBirthday: '1966',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '',
        info: {
          mName: 'Ông: Nguyễn Văn Sơn',
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
        id: '',
        info: {
          mName: 'Bà: Nguyễn Thị Huyền Trang',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: '',
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
    title: 'Đời thứ <17-22>',
    id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-3-5',
    info: {
      mName: 'Ông: Nguyễn Văn Việt',
      mBirthday: '1967',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ: Đoàn Thị Niệm',
        sBirthday: '',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-3-5-1',
        info: {
          mName: 'Ông:',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-3-5-2',
        info: {
          mName: 'Ông:',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-3-5-3',
        info: {
          mName: 'Ông:',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-3-5-4',
        info: {
          mName: 'Ông:',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-3-5-5',
        info: {
          mName: 'Ông:',
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
    title: 'Đời thứ <17-23>',
    id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-3-6',
    info: {
      mName: 'Ông: Nguyễn Văn Triều',
      mBirthday: '1969',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ: Nguyễn Thị Hai',
        sBirthday: '',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-3-6-1',
        info: {
          mName: 'Ông:',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-3-6-2',
        info: {
          mName: 'Ông:',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-3-6-3',
        info: {
          mName: 'Ông:',
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
    title: 'Đời thứ <17-24>',
    id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-6-1',
    info: {
      mName: 'Ông: Nguyễn Ngọc Cảnh',
      mBirthday: '19/06/1977 (DL)',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ: Trần Thị Linh Na',
        sBirthday: '25/02/1982 (DL)',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-6-1-1',
        info: {
          mName: 'Bà: Nguyễn Ngọc Linh Giang',
          mBirthday: '26/10/2011 (DL)',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-6-1-2',
        info: {
          mName: 'Ông: Nguyễn Ngọc Khánh Nam',
          mBirthday: '02/07/2013 (DL)',
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
    title: 'Đời thứ <17-25>',
    id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-3-6-2',
    info: {
      mName: 'Ông: Nguyễn Ngọc Hưng',
      mBirthday: '1981',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ: Nguyễn Ngọc Tươi',
        sBirthday: '1983',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '',
        info: {
          mName: 'Ông: Nguyễn Ngọc Sáng',
          mBirthday: '2010',
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
    title: 'Đời thứ <18-1>',
    id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1-3-4-1',
    info: {
      mName: 'Ông: Nguyễn Văn Sơn',
      mBirthday: '28/01/1982',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ: Phạm Thị Thu',
        sBirthday: '1986',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1-3-4-1-1',
        info: {
          mName: 'Bà: Nguyễn Thị Bảo Ngọc',
          mBirthday: '2012',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1-3-4-1-2',
        info: {
          mName: 'Ông: Nguyễn Xuân Phúc',
          mBirthday: '2014',
          mDeathday: '',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1-3-4-1-3',
        info: {
          mName: 'Bà: Nguyễn Gia Hân',
          mBirthday: '2021',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: '',
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
    title: 'Đời thứ <18-2>',
    id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1-4-2-1',
    info: {
      mName: 'Ông: Nguyễn Văn Hùng',
      mBirthday: '1982',
      mDeathday: '',
      mNote: '',
      follow: [{
        sName: 'Vợ: Bùi Thị Bốn',
        sBirthday: '',
        sDeathday: '',
        sNote: ''
      }]
    },
    children: [
      {
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1-4-2-1-1',
        info: {
          mName: 'Ông: Nguyễn Văn Huy',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1-4-2-1-2',
        info: {
          mName: 'Ông: Nguyễn Văn Hoàng',
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
        id: '1-1-1-2-2-1-1-5-9-3-2-2-1-1-1-4-2-1-3',
        info: {
          mName: 'Bà: Nguyễn Thị Trang',
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
  }  
];

let genDataTree = [
  {
    title: 'Đời thứ <1>',
    id: '1',
    info: {
      mName: 'Thủy Tổ: Nguyễn Phúc Tiến',
      mBirthday: '',
      mDeathday: '',
      mNote:'',
      follow: [{
          sName:'Vợ: Bà Phúc Tiến',
          sBirthday:'',
          sDeathday:'',
          sNote:''
      }]      
    },
    children: [
      {
        id: '1-1',
        info: {
          mName: 'Ông: Nguyễn Chính Tâm',
          mBirthday: '',
          mDeathday: '',
          mNote: '',
          follow: [{
            sName: 'Vợ: ',
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
          mName: 'Bà: Nguyễn Thị Hồng Tâm',
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
        children:[]
      },
      {
        id: '1-3',
        info: {
          mName: 'Bà: Nguyễn Thị Hà',
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
        children:[]
      },
      {
        id: '1-4',
        info: {
          mName: 'Bà: Nguyễn Thị Thông',
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
          <title>Dòng họ Nguyễn - Diễn Lộc, Diễn Châu, Nghệ An</title>
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
                    {/* <p>Sinh: {info.mBirthday}</p>
                    <p>Mất: {info.mDeathday}</p> */}
                  </div>
                  {(info.follow).map((el, index) => ( el.sName.length > 0 && 
                    <div key={index} className='secondary-info'>
                      <p>{el.sName}</p>
                      {/* <p>Sinh: {el.sBirthday}</p>
                      <p>Mất: {el.sDeathday}</p> */}
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
                  {el.info.follow.map((el1, index1) => ( el1.sName.length > 0 && 
                    <div key={index1} className='secondary-info'>
                      <p>{el1.sName}</p>
                      <p>Sinh: {el1.sBirthday}</p>
                      <p>Mất: {el1.sDeathday}</p>
                      <p>Tiểu sử: {el1.sNote}</p>
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
                    {el2.info.follow.map((el3, index3) => (el3.sName.length > 0 && 
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