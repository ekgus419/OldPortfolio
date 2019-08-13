const projectObject = {
    "items": [
        {
            "no": 1,
            "date": "2016.12~2018.3",
            "projectName": "IPX-FAX & IPX-ARS & IPX-VR & IPX-ARS",
            "env": "MariaDB + Apache + PHP + Codeigniter",
            "comment": "사내 솔루션 유지보수 및 기능 테스트",
            "role" : "",
            "link": "#",
            "linkClass": "js-action-a",
        },
        {
            "no": 2,
            "date": "2017.03~2017.03",
            "projectName": "회원 관리 서비스",
            "env": "MariaDB + Apache + JAVA+ Spring + JPA",
            "comment": "스프링 시큐리티 기반 회원 관리 페이지 제작",
            "role" : "사내에서 사용하는 인트라넷 로그인 페이지 개발",
            "link": "#",
            "linkClass": "js-action-a",
        },
        {
            "no": 3,
            "date": "2017.05~2017.7",
            "projectName": "NMS 모바일 앱 서비스",
            "env": "MS-SQL + Apache + Apache Tomcat + JAVA + Spring + Spring Security + My Batis",
            "comment": "NMS(Network Management System) AP 장비 장애 알람시 모바일 앱과 WAS 서버간 연동을 위한 서비스 개발",
            "role" : "",
            "link": "#",
            "linkClass": "js-action-a",
        },
        {
            "no": 4,
            "date": "2017.08~2017.12",
            "projectName": "메시징 서비스",
            "env": "MariaDB + Apache + PHP + Codeigniter",
            "comment": "웹 사이트상에서 음성 장문 단문 메시지를 열람 및 보낼 수 있는 메시징 서비스 개발",
            "role" : "방송 결과 / 방송 내용 페이지 개발",
            "link": "http://www.etnews.com/20170830000119",
            "linkClass": "",
        },
        {
            "no": 5,
            "date": "2018.01~2018.03",
            "projectName": "해피콜 서비스",
            "env": "MS-SQL + MariaDB + Apache + PHP + Codeigniter + AX BOOT",
            "comment": "상담원이 부재중 내역을 확인하여 상담 할 수 있도록 고객에게 통화 연결을 해주는 서비스 개발",
            "role" : "",
            "link": "#",
            "linkClass": "js-action-a",
        },
        {
            "no": 6,
            "date": "2019.06~2019.06",
            "projectName": "답변형 게시판",
            "env": "MariaDB + Spring boot + Spring data JPA + Spring Security + AdminLTE + Handlebars",
            "comment": "무한 답변형 게시판 로직 구현",
            "role" : "",
            "link": "https://github.com/ekgus419/WebBoard",
            "linkClass": "",
        },
        {
            "no": 7,
            "date": "2019.07~2019.07",
            "projectName": "미니 쇼핑몰",
            "env": "MariaDB + Spring Boot + Spring Security + Handlebars Web ShoppingMall",
            "comment": "쇼핑몰의 대표적인 로직 구현(카테고리, 결제 등)",
            "role" : "",
            "link": "https://github.com/ekgus419/WebShoppingMall",
            "linkClass": "",
        },

    ]
};

project = new Vue({el: "#project", data: projectObject});

const managementObject = {
    items: [
        {
            name: 'OS 운영',
            data: [
                {name: 'centos 4,5,6,7'},
                {name: 'ubuntu 16.04 18.04'},
                {name: 'Window Server 2008, 2016, 2019'},
                {name: 'hosts, hosts.allow, hosts.deny, hostname 설정'},
                {name: 'resolv.conf 설정'},
                {name: 'Rsync 설치 및 설정'},
                {name: 'NFS 설치 및 설정'},
                {name: 'Xwindows 설치 및 설정'},
                {name: 'Vnc Server 구축'},
                {name: 'XRDP 설치'},
                {name: '서버 백업 스크립트 작성'},
                {name: '서버 해킹 점검'},
                {name: '시스템 로그 파악'},
                {name: '방화벽 설치 및 설정(iptables)'},
                {name: '시스템 기본 설정(캐릭터셋, 데몬 설정 변경등)'},
            ]
        },
        {
            name: '웹 서버',
            data: [
                {name: 'Apache'},
                {name: 'Nginx'},
                {name: 'Tomcat'},
                {name: 'PHP + PHP 확장 모듈 설치(soap, mysqli, freetds...)'},
                {name: 'JAVA'},
                {name: 'Windows IIS 설치 및 설정'},
                {name: 'Windows FTP 설치 및 설정'},
                {name: '보안 서버 구축(mod_ssl)'},
                {name: '보안 서버 인증서 설치(let\'sEncrypt, 코모도 등)'},
                {name: 'mod_rewrite 설치 및 설정'},
                {name: '.htpasswd 설정'},
                {name: '로그분석 - Awstats, Webalizer 설치 및 설정'},
                {name: '방문 통계 - TraceWatch, Piwik  설치 및 설정'},
                {name: '트래픽 제어 모듈(mod_cband) 설치 및 설정'},
            ]
        },
        {
            name: '네임 서버',
            data: [
                {name: 'Bind 설치 및 설정'},
                {name: 'Bind 1,2차 이중화 및 설정'},
                {name: 'PDNS 설치 및 설정'},
                {name: 'Zone 파일 설정'},
                {name: 'Windows DNS 설치 및 설정'},
                {name: 'DNS records 추가'},
            ]
        },
        {
            name: '데이터베이스 서버',
            data: [
                {name: 'MySQL 설치'},
                {name: 'MariaDB 설치'},
                {name: 'MSSQL 설치'},
                {name: 'Oracle 설치'},
                {name: 'PostgreSQL 설치'},
                {name: '데이터베이스 백업 및 복구'},
                {name: '이중화(Replication)'},
                {name: '슬로우쿼리 설정'},
                {name: '데이터베이스별 계정 생성 및 권한 설정'},
            ]
        },
        {
            name: '메일 서버',
            data: [
                {name: 'Sendmail 설치 및 로그 관리'},
                {name: 'Dovecot 설치 및 설정'},
                {name: 'RoundcubeMail 설치'},
                {name: 'Outlook 설치'},
                {name: 'Nmail 설치'},
                {name: 'Qmail 설치'},
                {name: '로그 확인 및 관리'},
            ]
        },
        {
            name: '파일 서버',
            data: [
                {name: 'Vsftp 설치 및 설정'},
                {name: 'SAMBA'},
            ]
        },
    ]
}

management = new Vue({el: "#management", data: managementObject});

const summaryObject = {
    "items": [
        {
            "no": 1,
            "data": "#신입개발자, #테스트1, #테스트2",

        },


    ]
};

summary = new Vue({el: "#summary", data: summaryObject});


// a tag # handle
jQuery('.js-action-a').click(function (e) {
    e.preventDefault();

});