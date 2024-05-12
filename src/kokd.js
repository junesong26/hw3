// 새로운 카드 데이터 배열
const departments = [
  {
    name: "전자과",
    image: "https://home.sejong.ac.kr/~eedpt/main/eedpt.jpg",
    description: "오지마세요"
  },
  {
    name: "컴공",
    image: "https://cdn.inflearn.com/public/courses/329605/cover/7f7d4d9a-e739-482c-8e16-71081b4793b5/329605-eng.jpg",
    description: "오지마세요"
  },
  {
    name: "신소재공학과",
    image: "https://post-phinf.pstatic.net/MjAxOTA0MTBfMjI5/MDAxNTU0ODU2Mzk4MjQx.ziQdIuvx_er0olpJF7vfcAES02Y_Nni8F6cVEFB8DDEg.NG7fGxpAXIINaxn1VXVSX_VuyYJgQJD2ZCEsh0a1oQ0g.GIF/12.gif?type=w500_q75",
    description: "오지마세요"
  },
  {
    name: "화학공학과",
    image: "https://www.gnu.ac.kr/images/web/ce/sub_cnt/img_depa15.png",
    description: "오지마세요"
  },
  {
    name: "기계공학과",
    image: "https://cdn.edujin.co.kr/news/photo/202207/39199_79157_5732.png",
    description: "오지마세요"
  },
  {
    name: "산업공학과",
    image: "https://cdn.edujin.co.kr/news/photo/202007/33363_61144_3225.jpg",
    description: "오지마세요"
  },
  {
    name: "건축공학과",
    image: "https://mblogthumb-phinf.pstatic.net/MjAyMDAyMjFfMjM5/MDAxNTgyMjYzMzI3Mzk4.LsHPKazmtqL3SAIDfFS34v4DyjKgi_yHul_frOOu-yMg.SGsKHuBo2fOnufX3gE9rGWvq14UG1GkdaPXJ-f4YitYg.JPEG.camtoblog/GettyImages-1185082246.jpg?type=w800",
    description: "오지마세요"
  },
  {
    name: "생명공학과",
    image: "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/w0d/image/4ZVT_r85d1kAM0TuGHz23cOUfKY.bmp",
    description: "오지마세요"
  }
];

// container 요소 가져오기
const container = document.querySelector('.container');

// 각 부서 데이터로 카드 생성 및 추가
departments.forEach(department => {
  // 새로운 card 요소 생성
  const card = document.createElement('div');
  card.classList.add('card');

  // 이미지 요소 생성
  const img = document.createElement('img');
  img.src = department.image;

  // 제목 요소 생성
  const title = document.createElement('h4');
  title.textContent = department.name;

  // 설명 요소 생성
  const description = document.createElement('p');
  description.textContent = department.description;

  // card에 이미지, 제목, 설명 요소 추가
  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(description);

  // container에 card 추가
  container.appendChild(card);
});
