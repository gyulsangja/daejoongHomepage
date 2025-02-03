import { createSlice } from "@reduxjs/toolkit";


const Menu = createSlice({
    name: 'Menu',
    initialState: [
            {
                id: 1,
                name: '대중예배',
                addr: '/worship',
                subMenu: [
                    {
                        id: 101,
                        name: '실시간 예배',
                        addr: '/worship',
                        subMenu: [
                            {
                                id: 10101,
                                name: '실시간 예배',
                                addr: '/worship/live',
                            }
                        ] 
                    },
                    {
                        id: 102,
                        name: '예배',
                        addr: '/worship/sunservice',
                        subMenu: [
                            {
                                id: 10201,
                                name: '주일오전예배',
                                addr: '/worship/sunday',
                            },
                            {
                                id: 10202,
                                name: '주일오후찬양예배',
                                addr: '/worship/praise',
                            },
                            {
                                id: 10203,
                                name: '수요예배',
                                addr: '/worship/web',
                            },
                            {
                                id: 10204,
                                name: '새벽예배',
                                addr: '/worship/morning',
                            },
                            {
                                id: 10205,
                                name: '특별예배',
                                addr: '/worship/speacial',
                            },
                        ] 
                    },
                    {
                        id: 103,
                        name: '설교',
                        addr: '/preaching',
                        subMenu: [
                            {
                                id: 10301,
                                name: '주일오전말씀',
                                addr: '/preaching/sun',
                            },
                            {
                                id: 10302,
                                name: '주일오후말씀',
                                addr: '/preaching/afternoon',
                            },
                            {
                                id: 10303,
                                name: '수요예배말씀',
                                addr: '/preaching/web',
                            },
                            {
                                id: 10304,
                                name: '특강',
                                addr: '/preaching/speacial',
                            },
                            {
                                id: 10305,
                                name: '외부초청',
                                addr: '/preaching/external',
                            },
                        ] 
                    },
                    {
                        id: 104,
                        name: '찬양',
                        addr: '/praise',
                        subMenu: [
                            {
                                id: 10401,
                                name: '할렐루야 찬양대',
                                addr: '/praise/hallelujah',
                            },
                            {
                                id: 10402,
                                name: 'JESUS LOVE',
                                addr: '/praise/jesuslove',
                            },
                            {
                                id: 10403,
                                name: '특별찬양',
                                addr: '/praise/speacial',
                            },
                        ] 
                    }
                ]
            },
            {
                id: 2,
                name: '대중뉴스',
                addr: '/news',
                subMenu: [
                    {
                        id: 201,
                        name: '공지사항',
                        addr: '/news/notice',
                    },
                    {
                        id: 202,
                        name: '주보',
                        addr: '/news/weekly',
                    },
                ]
            },
            {
                id: 3,
                name: '경건생활',
                addr: '/godliness',
                subMenu: [
                    {
                        id: 301,
                        name: 'Q.T',
                        addr: '/godliness/QT',
                    },
                    {
                        id: 302,
                        name: '성경읽기',
                        addr: '/godliness/reading',
                    },
                ]
            },
            {
                id: 4,
                name: '교회안내',
                addr: '/church',
                subMenu: [
                    {
                        id: 401,
                        name: '인사말',
                        addr: '/church/greeting',
                    },
                    {
                        id: 402,
                        name: '성경읽기',
                        addr: '/godliness/reading',
                    },
                ]
            },
            {
                id: 5,
                name: '교회생활',
                addr: '/church',
                subMenu: [
                    {
                        id: 501,
                        name: '인사말',
                        addr: '/church/greeting',
                    },
                    {
                        id: 502,
                        name: '성경읽기',
                        addr: '/godliness/reading',
                    },
                ]
            },
        ],
    reducers: {
    }
})

export default Menu.reducer