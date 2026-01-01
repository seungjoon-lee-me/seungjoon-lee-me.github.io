/*!
* Start Bootstrap - Stylish Portfolio v6.0.6 (https://startbootstrap.com/theme/stylish-portfolio)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)
*/

// 링크 복사
function copyLink(){
	var url = 'https://seungjoon-lee-me.github.io/';
	var textarea = document.createElement("textarea");
	document.body.appendChild(textarea);
	textarea.value = url;
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
	alert("링크가 복사되었습니다. 널리널리 퍼뜨려주세요💕")
}

// 신랑 계좌번호 복사
function groomAccountNumber() {
    const groom_account = '1002-256-544816 우리은행';

    // 최신 브라우저를 위한 Clipboard API 사용
    navigator.clipboard.writeText(groom_account).then(() => {
        alert("계좌번호가 복사되었습니다.\n" + groom_account);
    }).catch(err => {
        console.error('복사 실패:', err);
        alert("복사에 실패했습니다. 수동으로 복사해 주세요: " + groom_account);
    });
}


// 신랑 어머님 계좌번호 복사 
function groomsMotherAccountNumber(){
    const grooms_mother_account = '432-12-017017 농협';

    // 최신 브라우저를 위한 Clipboard API 사용
    navigator.clipboard.writeText(grooms_mother_account).then(() => {
        alert("계좌번호가 복사되었습니다.\n" + grooms_mother_account);
    }).catch(err => {
        console.error('복사 실패:', err);
        alert("복사에 실패했습니다. 수동으로 복사해 주세요: " + grooms_mother_account);
    });
}

// 신부 계좌번호 복사
function brideAccountNumber(){
	var bride_account = '302-9973-2684-91 농협';

    // 최신 브라우저를 위한 Clipboard API 사용
    navigator.clipboard.writeText(bride_account).then(() => {
        alert("계좌번호가 복사되었습니다.\n" + bride_account);
    }).catch(err => {
        console.error('복사 실패:', err);
        alert("복사에 실패했습니다. 수동으로 복사해 주세요: " + bride_account);
    });
}

// 신부 아버님 계좌번호 복사 
function brideFatherAccountNumber(){
    const bride_father_account = '706-07-084233 우리은행';

    // 최신 브라우저를 위한 Clipboard API 사용
    navigator.clipboard.writeText(bride_father_account).then(() => {
        alert("계좌번호가 복사되었습니다.\n" + bride_father_account);
    }).catch(err => {
        console.error('복사 실패:', err);
        alert("복사에 실패했습니다. 수동으로 복사해 주세요: " + bride_father_account);
    });
}

// 신부 어머님 계좌번호 복사 
function brideMotherAccountNumber(){
    const bride_mother_account = '752-12-026234 농협';

    // 최신 브라우저를 위한 Clipboard API 사용
    navigator.clipboard.writeText(bride_mother_account).then(() => {
        alert("계좌번호가 복사되었습니다.\n" + bride_mother_account);
    }).catch(err => {
        console.error('복사 실패:', err);
        alert("복사에 실패했습니다. 수동으로 복사해 주세요: " + bride_mother_account);
    });
}


// 카카오톡 공유하기
function kakaoShare() {
    Kakao.init('41d078021b55367e7abd127479c25ec1');
    // SDK 초기화 여부를 판단합니다.
    Kakao.isInitialized();
    //console.log(Kakao.isInitialized());
    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
        title: '승준🤍희진 결혼합니다.',
        description: '2026.04.11\n오후 1시 포항 더 퀸 5층',
        imageUrl: 'https://github.com/jaeyun95/jaeyun95.github.io/blob/main/assets/img/main.jpg?raw=true',
        link: {
            mobileWebUrl: 'https://seungjoon-lee-me.github.io/#!',
            webUrl: 'https://seungjoon-lee-me.github.io/#!',
        },
        },
        buttons: [
        {
            title: '모바일 청첩장 보기',
            link: {
            mobileWebUrl: 'https://seungjoon-lee-me.github.io/#!',
            webUrl: 'https://seungjoon-lee-me.github.io/#!',
            },
        },
        ],
        // 카카오톡 미설치 시 카카오톡 설치 경로이동
        installTalk: true,
    })
}

function toggleFoldable() {
    var content = document.querySelector('.foldable-content');
    var toggleIcon = document.getElementById('toggleIcon');

    // 펼치기/접기 상태 변경
    if (content.style.display === 'none') {
        content.style.display = 'block';
        toggleIcon.innerText = '▲';
        // 추가로 펼쳐진 상태에서 수행할 동작 추가 가능
    } else {
        content.style.display = 'none';
        toggleIcon.innerText = '▼';
        // 추가로 접힌 상태에서 수행할 동작 추가 가능
    }
}

function toggleFoldable2() {
    var content = document.querySelector('.foldable-content2');
    var toggleIcon = document.getElementById('toggleIcon2');

    // 펼치기/접기 상태 변경
    if (content.style.display === 'none') {
        content.style.display = 'block';
        toggleIcon.innerText = '▲';
        // 추가로 펼쳐진 상태에서 수행할 동작 추가 가능
    } else {
        content.style.display = 'none';
        toggleIcon.innerText = '▼';
        // 추가로 접힌 상태에서 수행할 동작 추가 가능
    }
}

function toggleFoldable3() {
    var content = document.querySelector('.foldable-content3');
    var toggleIcon = document.getElementById('toggleIcon3');

    // 펼치기/접기 상태 변경
    if (content.style.display === 'none') {
        content.style.display = 'block';
        toggleIcon.innerText = '▲';
        // 추가로 펼쳐진 상태에서 수행할 동작 추가 가능
    } else {
        content.style.display = 'none';
        toggleIcon.innerText = '▼';
        // 추가로 접힌 상태에서 수행할 동작 추가 가능
    }
}