/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import shortId from 'shortid';
import { faker } from '@faker-js/faker';

// prettier-ignore
export const generateDummyEducation = (num,userId)=>Array(num).fill().map(()=>({
  userId,
  id:shortId.generate(),
  school: faker.helpers.arrayElement(['인하대학교','이화여자대학교','중앙대학교','서울대학교','한양대학교']),
  major :  faker.helpers.arrayElement(['기계공학과','생명공학과','우주공학과','건축공학과', '수학교육과','소프트웨어학과','경영학과']),
  status: faker.helpers.arrayElement(['재학중','학사졸업','석사졸업','박사졸업'])
}));
