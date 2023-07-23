import { dayjs } from 'element-plus';
export const props = [
  {
    prop: 'publishTime',
    label: '发布时间',
  },
  {
    prop: 'expirationTime',
    label: '过期时间',
  },
  {
    prop: 'notificationTarget',
    label: '通知目标',
  },
  {
    prop: 'announcementContent',
    label: '公告内容',
  },
  {
    prop: 'noticeStatus',
    label: '公告状态',
  },
];

export const data = [
  {
    id: 1,
    publishTime: dayjs(new Date()).format('YYYY-MM-DD '),
    expirationTime: dayjs(new Date()).add(1).format('YYYY-MM-DD '),
    notificationTarget: 'code',
    announcementContent: '今天不上班',
    noticeStatus: '222',
  },
];
