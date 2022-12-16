import ทายาทในกองมรดก from './posts-thai/ทายาทในกองมรดก'
import ผู้จัดการมรดก from './posts-thai/ผู้จัดการมรดก'
import พินัยกรรม from './posts-thai/พินัยกรรม'
import img1 from '../../assets/thai/img_title/ทายาทในกองมรดก.png'
import img2 from '../../assets/thai/img_title/ผู้จัดการมรดก.png'

export const thaiData = [
    {
        id: 1,
        title: 'ทายาทในกองมรดกสามารถเป็นใครได้บ้าง ?',
        category: 'ผู้มีสิทธิรับมรดก',
        subCategory: ['ทายาท', 'การรับมรดก'],
        description: 'ทายาทในกองมรดกมี 2 ประเภท คือ ทายาทโดยธรรม และผู้รับพินัยกรรม',
        content: <ทายาทในกองมรดก />,
        cover: img1,
    },
    {
        id: 2,
        title: 'ผู้จัดการมรดกคือใคร ใครสามารถเป็นได้บ้าง ?',
        category: 'ผู้มีสิทธิรับมรดก',
        subCategory: ['ผู้จัดการมรดก', 'ทายาท'],
        description: 'ผู้จัดการมรดกไม่จำเป็นต้องเป็นทายาท และไม่จำเป็นต้องแต่งตั้งขึ้นมาเพียงคนเดียว สามารถแต่งตั้งได้หลายคน',
        content: <ผู้จัดการมรดก />,
        cover: img2,
    },
    {
        id: 3,
        title: 'Test2',
        category: 'เกี่ยวกับพระภิกษุ',
        subCategory: ['test1', 'test2', 'test3'],
        description: 'ลำดับของทายาทโดยธรรม มี 6 ลำดับ คือ 1 2 3 4 5 6 fvdfvdfvfdvfdfgbvfgbvfgbfgbfgb',
        // content: <Test />,
    },
    {
        id: 4,
        title: 'Test2',
        category: 'การเสียสิทธิรับมรดก',
        subCategory: ['test1', 'test2', 'test3'],
        description: 'ลำดับของทายาทโดยธรรม มี 6 ลำดับ คือ 1 2 3 4 5 6 fvdfvdfvfdvfdfgbvfgbvfgbfgbfgb',
        // content: <Test />,
    },
    {
        id: 5,
        title: 'ทายาทโดยธรรม',
        category: 'การเสียสิทธิรับมรดก',
        subCategory: ['test1', 'test2', 'test3'],
        description: 'ลำดับของทายาทโดยธรรม มี 6 ลำดับ คือ 1 2 3 4 5 6 fvdfvdfvfdvfdfgbvfgbvfgbfgbfgb',
        // content: <Test />,
    },
    {
        id: 6,
        title: 'รูปแบบพินัยกรรม ใครสามารถทำพินัยกรรมได้บ้าง ?',
        category: 'พินัยกรรม',
        subCategory: ['พินัยกรรม'],
        description: 'ดดดลำดับ',
        content: <พินัยกรรม />,
        cover: img1,
    },
]

