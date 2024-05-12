import React from 'react';
import './Blog.css'; // CSS 파일의 경로를 정확히 입력하세요.

function Blog() {
    return (
        <div className="container">
            <Card
                img="https://home.sejong.ac.kr/~eedpt/main/eedpt.jpg"
                title="전자과"
                description="오지마세요"
            />
            <Card
                img="https://cdn.inflearn.com/public/courses/329605/cover/7f7d4d9a-e739-482c-8e16-71081b4793b5/329605-eng.jpg"
                title="컴공"
                description="오지마세요"
            />
            <Card
                img="https://post-phinf.pstatic.net/MjAxOTA0MTBfMjI5/MDAxNTU0ODU2Mzk4MjQx.ziQdIuvx_er0olpJF7vfcAES02Y_Nni8F6cVEFB8DDEg.NG7fGxpAXIINaxn1VXVSX_VuyYJgQJD2ZCEsh0a1oQ0g.GIF/12.gif?type=w500_q75"
                title="신소재공학과"
                description="오지마세요"
            />
            <Card
                img="https://www.gnu.ac.kr/images/web/ce/sub_cnt/img_depa15.png"
                title="화학공학과"
                description="오지마세요"
            />
            <Card
                img="https://cdn.edujin.co.kr/news/photo/202207/39199_79157_5732.png"
                title="기계공학과"
                description="오지마세요"
            />
            <Card
                img="https://cdn.edujin.co.kr/news/photo/202007/33363_61144_3225.jpg"
                title="산업공학과"
                description="오지마세요"
            />
            <Card
                img="https://mblogthumb-phinf.pstatic.net/MjAyMDAyMjFfMjM5/MDAxNTgyMjYzMzI3Mzk4.LsHPKazmtqL3SAIDfFS34v4DyjKgi_yHul_frOOu-yMg.SGsKHuBo2fOnufX3gE9rGWvq14UG1GkdaPXJ-f4YitYg.JPEG.camtoblog/GettyImages-1185082246.jpg?type=w800"
                title="건축공학과"
                description="오지마세요"
            />
            <Card
                img="https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/w0d/image/4ZVT_r85d1kAM0TuGHz23cOUfKY.bmp"
                title="생명공학과"
                description="오지마세요"
            />
        </div>
    );
}

function Card({ img, title, description }) {
    return (
        <div className="card">
            <img src={img} alt={title} />
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    );
}

export default Blog;

