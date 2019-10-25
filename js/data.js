// const aboutObject = {
//     "items": [
//         {
//             "no": 1,
//             "data": "안녕하세요! 저의 포트폴리오 사이트에 방문해 주셔서 감사합니다. " +
//                 "저는 개발자와 엔지니어로 근무를 했었습니다. 환경구축 부터 배포까지 "
//         },
//
//
//     ]
// };
//
// summary = new Vue({el: "#about", data: aboutObject});

$(document).ready(function () {
    var text = "방문 해주셔서 감사합니다!";
    var i = 0;
    var y = "";

    function typeWriter() {
        if (i < text.length) {
            $("#typing").text(y += text[i]);
            i++;
            setTimeout(typeWriter, 200);
        }
    }
    typeWriter();
});

const portfolioObject = {
    "items": [
        {
            "no": 1,
            "projectName": "답변형 게시판",
            "comment": "답변형 게시판을 구현 하였습니다.",
            "link": "https://github.com/ekgus419/WebBoard",
        },
        {
            "no": 2,
            "projectName": "미니 쇼핑몰",
            "comment": "쇼핑몰 사이트에서 가장 많이 사용되는 로직들을 구현 하였습니다.",
            "link": "https://github.com/ekgus419/WebShoppingMall",
        },

    ]
};

portfolio = new Vue({el: "#portfolio", data: portfolioObject});



const deveLifeObject = {
    "items": [
        {
            "no": 1,
            "images" : "img/about/1.png",
            "style" : "",
            "subheading" : "개발 입문",
            "date" : "2015.05 ~ 2015.08",
            "data":  "SK 스타트업 성장 지원 프로그램을 통해 개발을 접하게 되었습니다. " +
                "Bootstrap, HTML/CSS 등의 프론트 작업을 주로 진행하였습니다. 구현은 제대로 되지 않았지만 개발자라는 직업에 대해 생각해본 계기가 되었습니다.",
        },
        {
            "no": 2,
            "images" : "img/about/2.jpg",
            "style" : "timeline-inverted",
            "subheading" : "개발 1년+",
            "date" : "2015.05 ~ 2015.08",
            "data":  "첫 회사에 입사해 솔루션(IPX-VR, IPX-CRS, IPX-FAX)을 유지 보수 하고 게시판 형태의 신규 프로젝트를 진행하였습니다. " +
                "서버와 클라이언트 간 데이터를 주고받는 웹의 기본 동작을 이해하고 개발에 재미를 더하기 시작했습니다.",
        },
        {
            "no": 3,
            "images" : "img/about/3.png",
            "style" : "",
            "subheading" : "엔지니어",
            "date" : "2018.12 ~ 2019.05",
            "data":  "솔루션 구축을 하며 흥미로웠던 점은 동일한 환경임에도 간혹 오류가 발생 한다는 점" +
                "이었습니다. 작게는 사소한 설정 차이로, 크게는 OS 차이로 오류가 발생하기도 하였습니다\n" +
                "환경별로 커스터마이징 하면서 각 운영체제별 특징을 파악 할 수 있었고 서버를 연동하며, " +
                "돌아가는 환경에 대해 관심이 생기게 되었습니다."
        },
        {
            "no": 4,
            "images" : "img/about/4.png",
            "style" : "timeline-inverted",
            "subheading" : "NOW",
            "date" : "2019.06 ~ ",
            "data" : "호기심은 저를 움직이는 원동력입니다. 평소 관심이 가는 사항에 대해 원하는 답을 찾을때까지 끊임없이 생각해보곤 하였습니다. \n" +
                "덕분인지 다른 사람들에 비해 여러 가지 경험을 해볼 수 있었습니다. \n" +
                "개발 일을 할때에도 마찬가지로 새로운 기술을 접하고 나면 해당 기술을 꼭 적용 시켜보곤 하였습니다.\n" +
                "호기심이 많기 때문에 새로운 기술을 사용하는 일이 무척 재미있게 느껴졌습니다."
        },


    ]
};

devLife = new Vue({el: "#devLife", data: deveLifeObject});



