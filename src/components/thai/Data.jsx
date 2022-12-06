import Test from './posts-thai/Test'
import Test1 from './posts-thai/Test1'

export const thaiData = [
    {
        id: 1,
        title: 'Test1',
        category: 'ผู้ที่มีสิทธิรับมรดก',
        description: 'post test1',
        content: <Test />,
    },
    {
        id: 2,
        title: 'Test2',
        category: 'การรับมรดกแทนที่',
        description: 'post test2',
        content: <Test1 />,
    },
]

export const thaiNav = [
    {
        name: 'ทั้งหมด'
    },
    {
        name: 'ผู้ที่มีสิทธิรับมรดก'
    },
    {
        name: 'การรับมรดกแทนที่'
    },
    {
        name: 'เกี่ยวกับพระภิกษุ'
    },
    {
        name: 'การเสียสิทธิรับมรดก'
    },
]