

const curriculum = [
  { 학기: '2019-1', 학수코드: 'AS249', 교과목명: '대학영어1', 이수구분: '언어', 인증구분: '', 학점: 3, 설계학점: 0, 등급: 'A+', 전공: "" },
  { 학기: '2019-1', 학수코드: 'AS371', 교과목명: '사고와표현', 이수구분: '사고', 인증구분: '', 학점: 3, 설계학점: 0, 등급: 'A+', 전공: "" },
  { 학기: '2019-1', 학수코드: 'AS711', 교과목명: '수리논리', 이수구분: '수리', 인증구분: '인선', 학점: 3, 설계학점: 0, 등급: 'B', 전공: "" },
  { 학기: '2019-1', 학수코드: 'AS928', 교과목명: '미분적분학1', 이수구분: '수리', 인증구분: '인선', 학점: 3, 설계학점: 0, 등급: 'B+', 전공: "" },
  { 학기: '2019-1', 학수코드: 'AS955', 교과목명: '일반물리학및실험Ⅰ', 이수구분: '수리', 인증구분: '인선', 학점: 3, 설계학점: 0, 등급: 'B+', 전공: "" },
  { 학기: '2019-1', 학수코드: 'DD032', 교과목명: 'C프로그래밍기초', 이수구분: '컴공', 인증구분: '인선', 학점: 3, 설계학점: 0, 등급: 'A+', 전공: "✅" },
  { 학기: '2019-1', 학수코드: 'DT704', 교과목명: '컴퓨터공학부전공및진로탐색', 이수구분: '전필', 인증구분: '인선', 학점: 1, 설계학점: 0, 등급: 'P', 전공: "" },
  { 학기: '2019-2', 학수코드: 'AS250', 교과목명: '대학영어2', 이수구분: '언어', 인증구분: '', 학점: 3, 설계학점: 0, 등급: 'B+', 전공: "" },
  { 학기: '2019-2', 학수코드: 'AS360', 교과목명: '진리탐구', 이수구분: '진', 인증구분: '', 학점: 2, 설계학점: 0, 등급: 'B+', 전공: "" },
  { 학기: '2019-2', 학수코드: 'AS659', 교과목명: '일반확률론', 이수구분: '수리', 인증구분: '인선', 학점: 3, 설계학점: 0, 등급: 'B', 전공: "" },
  { 학기: '2019-2', 학수코드: 'AS956', 교과목명: '일반물리학및실험Ⅱ', 이수구분: '수리', 인증구분: '인선', 학점: 3, 설계학점: 0, 등급: 'B', 전공: "" },
  { 학기: '2019-2', 학수코드: 'DD746', 교과목명: '창의기초설계', 이수구분: '컴공', 인증구분: '인필', 학점: 3, 설계학점: 3, 등급: 'A+', 전공: "✅" },
  { 학기: '2019-2', 학수코드: 'DD801', 교과목명: 'C프로그래밍', 이수구분: '컴공', 인증구분: '인선', 학점: 3, 설계학점: 0, 등급: 'A+', 전공: "✅" },
  { 학기: '2020-1', 학수코드: 'AS460', 교과목명: '공감소통', 이수구분: '성', 인증구분: '', 학점: 2, 설계학점: 0, 등급: 'A+', 전공: "" },
  { 학기: '2020-1', 학수코드: 'CS343', 교과목명: '자료구조론', 이수구분: '전선', 인증구분: '인선', 학점: 3, 설계학점: 0, 등급: 'A+', 전공: "✅" },
  { 학기: '2020-1', 학수코드: 'DD013', 교과목명: '컴퓨터과학개론', 이수구분: '수리', 인증구분: '인선', 학점: 3, 설계학점: 0, 등급: 'A+', 전공: "" },
  { 학기: '2020-1', 학수코드: 'DD017', 교과목명: '이산수학', 이수구분: '전선', 인증구분: '인필', 학점: 3, 설계학점: 0, 등급: 'A', 전공: "✅" },
  { 학기: '2020-1', 학수코드: 'DD750', 교과목명: '자바프로그래밍', 이수구분: '전선', 인증구분: '인선', 학점: 3, 설계학점: 1, 등급: 'A', 전공: "✅" },
  { 학기: '2020-1', 학수코드: 'DH072', 교과목명: '프로그래밍기초', 이수구분: '수리', 인증구분: '인선', 학점: 3, 설계학점: 0, 등급: 'A+', 전공: "" },
  { 학기: '2020-1', 학수코드: 'EF624', 교과목명: '컴퓨터구조', 이수구분: '전선', 인증구분: '인선', 학점: 3, 설계학점: 0, 등급: 'A+', 전공: "✅" },
  { 학기: '2020-2', 학수코드: 'AS287', 교과목명: '특허와기술개발', 이수구분: '사회', 인증구분: '인필', 학점: 3, 설계학점: 0, 등급: 'A+', 전공: "" },
  { 학기: '2020-2', 학수코드: 'AS502', 교과목명: '직업기초능력의이해', 이수구분: '계발', 인증구분: '', 학점: 2, 설계학점: 0, 등급: 'P', 전공: "" },
  { 학기: '2020-2', 학수코드: 'DD015', 교과목명: '객체지향프로그래밍', 이수구분: '전선', 인증구분: '인선', 학점: 3, 설계학점: 1, 등급: 'A+', 전공: "✅" },
  { 학기: '2020-2', 학수코드: 'DD727', 교과목명: '데이터베이스', 이수구분: '전선', 인증구분: '인선', 학점: 3, 설계학점: 0, 등급: 'A', 전공: "✅" },
  { 학기: '2020-2', 학수코드: 'DD747', 교과목명: '수치계산', 이수구분: '수리', 인증구분: '인선', 학점: 3, 설계학점: 0, 등급: 'A+', 전공: "" },
  { 학기: '2020-2', 학수코드: 'DD771', 교과목명: '계산이론', 이수구분: '컴공', 인증구분: '인선', 학점: 3, 설계학점: 0, 등급: 'B+', 전공: "✅" },
  { 학기: '2020-2', 학수코드: 'EF656', 교과목명: '컴퓨터네트워크', 이수구분: '전선', 인증구분: '인선', 학점: 3, 설계학점: 0, 등급: 'A+', 전공: "✅" },
  { 학기: '2020-2', 학수코드: 'YA029', 교과목명: '창의적문제해결전략', 이수구분: '미래', 인증구분: '인선', 학점: 3, 설계학점: 0, 등급: 'A', 전공: "" },
  { 학기: '2021-1', 학수코드: 'AS916', 교과목명: '공학윤리', 이수구분: '가사', 인증구분: '인필', 학점: 3, 설계학점: 0, 등급: 'A+', 전공: "" },
  { 학기: '2021-1', 학수코드: 'DD316', 교과목명: '소프트웨어공학', 이수구분: '전선', 인증구분: '인선', 학점: 3, 설계학점: 1, 등급: 'A+', 전공: "✅" },
  { 학기: '2021-1', 학수코드: 'DD724', 교과목명: '운영체제', 이수구분: '전선', 인증구분: '인선', 학점: 3, 설계학점: 0, 등급: 'A', 전공: "✅" },
  { 학기: '2021-1', 학수코드: 'DD725', 교과목명: '웹프로그래밍', 이수구분: '컴공', 인증구분: '인선', 학점: 3, 설계학점: 0, 등급: 'A+', 전공: "✅" },
  { 학기: '2021-1', 학수코드: 'DD772', 교과목명: '알고리듬', 이수구분: '전선', 인증구분: '인선', 학점: 3, 설계학점: 0, 등급: 'B+', 전공: "✅" },
  { 학기: '2021-1', 학수코드: 'DD808', 교과목명: '정보보호개론', 이수구분: '전선', 인증구분: '인선', 학점: 3, 설계학점: 0, 등급: 'B+', 전공: "✅" },
  { 학기: '2021-2', 학수코드: 'AS519', 교과목명: '기업가정신과기업가적행동', 이수구분: '취창', 인증구분: '', 학점: 3, 설계학점: 0, 등급: 'P', 전공: "" },
  { 학기: '2021-2', 학수코드: 'DD731', 교과목명: '모바일프로그래밍', 이수구분: '컴공', 인증구분: '인선', 학점: 3, 설계학점: 0, 등급: 'A+', 전공: "✅" },
  { 학기: '2021-2', 학수코드: 'DD755', 교과목명: '분산및병렬처리', 이수구분: '컴공', 인증구분: '인선', 학점: 3, 설계학점: 1.5, 등급: 'A+', 전공: "✅" },
  { 학기: '2021-2', 학수코드: 'DD809', 교과목명: '컴퓨터공학개별진로연구', 이수구분: '컴공', 인증구분: '인선', 학점: 1, 설계학점: 0, 등급: 'P', 전공: "✅" },
  { 학기: '2021-2', 학수코드: 'DD812', 교과목명: '지능웹설계', 이수구분: '컴공', 인증구분: '인선', 학점: 3, 설계학점: 1.5, 등급: 'A+', 전공: "✅" },
  { 학기: '2021-2', 학수코드: 'DD814', 교과목명: '네트워크보안', 이수구분: '컴공', 인증구분: '인선', 학점: 3, 설계학점: 1, 등급: 'A', 전공: "✅" },
  { 학기: '2022-1', 학수코드: 'DD313', 교과목명: '인공지능', 이수구분: '전선', 인증구분: '인선', 학점: 3, 설계학점: 1, 등급: 'B', 전공: "✅" },
  { 학기: '2022-1', 학수코드: 'DD825', 교과목명: '기업용소프트웨어실무', 이수구분: '컴공', 인증구분: '인선', 학점: 3, 설계학점: 0, 등급: 'A', 전공: "✅" },
  { 학기: '2022-1', 학수코드: 'DD826', 교과목명: '차세대프로그래밍언어', 이수구분: '컴공', 인증구분: '인선', 학점: 3, 설계학점: 0, 등급: 'A', 전공: "✅" },
  { 학기: '2022-1', 학수코드: 'DD845', 교과목명: '컴퓨터공학기초캡스톤디자인', 이수구분: '컴공', 인증구분: '인필', 학점: 3, 설계학점: 1.5, 등급: 'A+', 전공: "✅" },
  { 학기: '2022-1', 학수코드: 'DD846', 교과목명: '컴퓨터공학심화캡스톤디자인', 이수구분: '컴공', 인증구분: '인필', 학점: 3, 설계학점: 3, 등급: 'A+', 전공: "✅" },
  { 학기: '2022-2', 학수코드: 'AS309', 교과목명: '실전취업전략', 이수구분: '취창', 인증구분: '', 학점: 2, 설계학점: 0, 등급: 'P', 전공: "" },
  { 학기: '2022-2', 학수코드: 'AS520', 교과목명: '디자인씽킹과창업아이템개발', 이수구분: '취창', 인증구분: '', 학점: 3, 설계학점: 0, 등급: 'P', 전공: "" },
  { 학기: '2022-2', 학수코드: 'DH020', 교과목명: '웹보안', 이수구분: '컴공', 인증구분: '?', 학점: 3, 설계학점: 0, 등급: 'A', 전공: "✅" },
];

export default curriculum;
