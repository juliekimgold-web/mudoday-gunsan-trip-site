const intro = document.querySelector('#intro');
const enterButton = document.querySelector('#enterButton');
const openingReplay = document.querySelector('#openingReplay');
const routeTransition = document.querySelector('#routeTransition');
const captionButton = document.querySelector('#captionButton');
const broadcastCaption = document.querySelector('#broadcastCaption');
const countdown = document.querySelector('#countdown');
const progressFill = document.querySelector('#progressFill');
const progressLabel = document.querySelector('#progressLabel');
const stages = [...document.querySelectorAll('.stage')];
const timeline = document.querySelector('.timeline');
const viewButtons = [...document.querySelectorAll('.view-button')];
const filterButtons = [...document.querySelectorAll('.filter-button')];
const caseGate = document.querySelector('#caseGate');
const briefcase = document.querySelector('#briefcase');
const caseInspect = document.querySelector('#caseInspect');
const casePeek = document.querySelector('#casePeek');
const comboWheels = [...document.querySelectorAll('.combo-wheel')];
const unlockCase = document.querySelector('#unlockCase');
const caseMessage = document.querySelector('#caseMessage');
const caseCaption = document.querySelector('#caseCaption');
const caseGameCaption = document.querySelector('#caseGameCaption');
const caseReturn = document.querySelector('#caseReturn');
const caseProps = [...document.querySelectorAll('.case-prop')];
const missionModal = document.querySelector('#missionModal');
const missionModalContent = document.querySelector('#missionModalContent');
const missionTitleSplash = document.querySelector('#missionTitleSplash');
const missionCloseButtons = [...document.querySelectorAll('[data-mission-close]')];
const missionStampFeedback = document.querySelector('#missionStampFeedback');
const missionStampImage = document.querySelector('#missionStampImage');
const missionStampText = document.querySelector('#missionStampText');
const lunchChance = document.querySelector('#lunchChance');
const lunchChanceCaption = document.querySelector('#lunchChanceCaption');
const lunchChoiceHelp = document.querySelector('#lunchChoiceHelp');
const lunchEnvelopes = [...document.querySelectorAll('[data-lunch-envelope]')];
const lunchMenuReveal = document.querySelector('#lunchMenuReveal');
const lunchSelectedEnvelope = document.querySelector('#lunchSelectedEnvelope');
const lunchMainIcon = document.querySelector('#lunchMainIcon');
const lunchSideIcon = document.querySelector('#lunchSideIcon');
const lunchMainName = document.querySelector('#lunchMainName');
const lunchSideName = document.querySelector('#lunchSideName');
const lunchChanceClose = document.querySelector('#lunchChanceClose');

const missionContents = {
  princess: {
    theme: 'princess',
    layout: 'princess-story',
    eyebrow: 'TRAIN SESSION 01 · BEAUTY TIME',
    title: '프린세스 메이크업 시크릿 대공개',
    titleImage: 'assets/generated/content/princess-makeup-title.png?v=1',
    captionLabel: '기차 안 프린세스 메이크업',
    caption: '도착 전 서로의 파우치를 열어 오늘의 여행 메이크업을 완성한다.',
    description: '달리는 기차 안에서 편하게 화장할 수 있는 준비 시간. 서로의 파우치에서 한 가지 아이템을 추천하거나 빌려주고, 군산 도착 전에 오늘의 얼굴을 함께 완성한다.',
    steps: ['각자의 화장 파우치 공개', '친구에게 어울릴 아이템 하나 추천', '완성 후 기차 안 출발 인증샷 남기기'],
    heroImage: 'assets/generated/content/princess-makeup-reference.png?v=1',
    heroImageAlt: '무한도전 소문난 칠공주 모나리자 메이크업 참고 장면',
    heroImageCaption: 'REFERENCE CUT · 과감한 색과 장난스러운 포인트를 참고해 Y와 J만의 여행 메이크업 완성하기',
  },
  comma: {
    theme: 'comma',
    layout: 'comma-story',
    eyebrow: 'TRAIN SESSION 02 · SNACK MANITTO',
    title: '소울 푸드',
    titleImage: 'assets/generated/content/soul-food-title.png?v=1',
    captionLabel: '각자 싸 온 간식과 추억 한 입',
    caption: '서로를 생각하며 준비한 기차 간식을 동시에 공개한다.',
    description: '무한도전 쉼표 특집의 마니또 식사 준비에서 영감을 받은 기차 간식 세션. 출발 전 상대에게 주고 싶은 간식을 하나씩 몰래 준비해 와서 기차 안에서 동시에 공개하고 나눠 먹는다.',
    steps: ['출발 전 간식 하나씩 비밀 준비', '기차에서 동시에 꺼내 공개', '첫 입을 바꾸어 먹고 고른 이유 이야기하기'],
    heroImage: 'assets/generated/content/soul-food-reference.png?v=1',
    heroImageAlt: '무한도전 쉼표 특집에서 준비한 소울 푸드 참고 장면',
    heroImageCaption: 'REFERENCE CUT · 거창하지 않아도 상대를 생각하며 준비한 한 접시가 오늘의 소울 푸드',
  },
  partner: {
    theme: 'partner',
    layout: 'partner-story',
    eyebrow: 'FRIENDSHIP RECOVERY PROJECT · GUNSAN',
    title: '2016 우정회복 프로젝트 · 더 친해지길 바래',
    titleImage: 'assets/generated/badges/partner.png?v=2',
    captionLabel: '말랭이마을 계단 우정 가위바위보',
    caption: '하하와 형돈의 그 계단처럼, 두 사람도 한 칸씩 가까워질 수 있을까?',
    description: '말랭이마을 계단에서 서로 떨어져 선 뒤 가위바위보를 진행한다. 이긴 사람은 정해진 칸만큼 올라가고, 마주치는 순간 원본 장면처럼 어색하지만 진지한 우정 상황극을 완성한다.',
    steps: ['계단 아래와 위에 떨어져 서기', '가위바위보 승자는 세 칸 이동', '마주친 순간 “빨리 친해지길 바래” 장면 재현'],
    image: 'assets/generated/content/friendship-stairs-reference.png?v=1',
    imageAlt: '하하와 정형돈이 계단에서 가위바위보를 하는 참고 장면',
    imageCaption: 'REFERENCE CUT · 같은 거리와 구도를 찾아 두 사람만의 장면으로 다시 찍기',
  },
  telepathy: {
    theme: 'telepathy',
    layout: 'telepathy-game',
    eyebrow: 'TRAIN SESSION 03 · TELEPATHY TEST',
    title: '무한도전 6년 우리는 이심전심?',
    titleImage: 'assets/generated/content/telepathy-title.png?v=1',
    captionLabel: '더 크게 전달되는 텔레파시...!',
    caption: 'Y와 J의 사전 답변은 과연 몇 개나 통할까?',
    description: '여행 전에 같은 질문지를 각자 따로 작성해 둔 뒤, 기차 안에서 한 문제씩 동시에 답을 공개한다. 취향과 기억에 관한 10개의 답 중 5개 이상이 일치해야 다음 콘텐츠로 넘어갈 수 있다.',
    steps: ['상의 없이 사전 질문 10개 답하기', '기차에서 한 문제씩 동시에 공개', '5개 이상 일치하면 통과 · 실패하면 보너스 문제'],
  },
  nostalgia: {
    theme: 'nostalgia',
    layout: 'nostalgia-story',
    eyebrow: 'GUNSAN TOY STREET · MEMORY SHOP',
    title: '추억템 사주기',
    titleImage: 'assets/generated/content/nostalgia-toy-title.png?v=1',
    captionLabel: '친구의 추억을 먼저 찾아라!',
    caption: '정해진 예산 안에서 서로에게 어울리는 추억의 장난감을 골라 동시에 공개한다.',
    description: '군산 완구거리에서 잠시 따로 움직이며 친구에게 선물할 추억의 장난감을 고른다. 예전에 좋아했을 것 같은 물건이나 두 사람의 기억을 떠올리게 하는 물건을 선택하고, 다시 만나 동시에 공개한다.',
    steps: ['같은 예산과 제한 시간 정하기', '서로 다른 방향으로 흩어져 추억템 고르기', '동시에 선물하고 고른 이유 설명하기'],
    heroImage: 'assets/generated/content/nostalgia-toy-reference.png?v=1',
    heroImageAlt: '무한도전 명수는 12살 특집에서 추억의 장난감을 들고 있는 참고 장면',
    heroImageCaption: 'REFERENCE CUT · 어린 시절로 돌아간 듯 가장 신나는 표정으로 추억템 인증하기',
  },
  bicycle: {
    theme: 'bicycle',
    layout: 'hometown-story',
    eyebrow: 'GUNSAN BICYCLE SKIT · FIRST MEETING',
    title: '드디어 시작된 Y와 J의 자전거 첫 만남',
    titleImage: 'assets/generated/content/bicycle-first-meeting-title.png?v=1',
    captionLabel: '오래된 친구들의 수상한 첫 만남',
    caption: '서로를 전혀 모르는 사람처럼 자전거 위에서 처음 인사를 건넨다.',
    description: '유재석과 하하가 군산에서 자전거를 타며 처음 만난 사이처럼 대화했던 장면을 패러디한다. 한 사람은 먼저 자전거를 타고 지나가고, 다른 사람이 자연스럽게 합류해 이름과 군산에 온 이유를 처음 듣는 것처럼 상황극을 이어간다.',
    steps: ['자전거길에 카메라를 먼저 고정', '한 명씩 화면에 들어와 우연히 합류', '“처음 뵙겠습니다”로 시작해 1분간 즉흥 대화'],
  },
  hawasu: {
    theme: 'hawasu',
    layout: 'hawasu-story',
    eyebrow: 'CHOWON PHOTO STUDIO · FRIENDSHIP CUT',
    title: '빠질 수 없는 기념촬영',
    titleImage: 'assets/generated/content/essential-photo-title.png?v=1',
    captionLabel: '하와 수처럼, 이번에는 Y와 J',
    caption: '초원사진관에서 장난스러운 한 장과 오래 남길 한 장을 함께 찍는다.',
    description: '정준하와 박명수처럼 서로 다른 표정과 분위기를 살린 우정사진을 남긴다. 한 장은 최대한 진지하게, 다른 한 장은 두 사람다운 포즈와 표정으로 촬영한 뒤 오늘의 대표 사진을 고른다.',
    steps: ['하와 수 참고 장면과 비슷한 자리 찾기', '진지한 버전과 예능 버전 각각 촬영', '둘이 동시에 가장 마음에 드는 한 장 선택'],
    heroImage: 'assets/generated/content/ha-su-friendship-reference.png?v=1',
    heroImageAlt: '정준하와 박명수가 나란히 앉아 촬영한 하와 수 참고 장면',
    heroImageCaption: 'REFERENCE CUT · 나란히 앉은 거리와 시선을 살려 Y와 J 버전으로 재현하기',
  },
  route: {
    theme: 'route',
    layout: 'route',
    eyebrow: 'AUG 22 · SATURDAY · GUNSAN COURSE',
    title: '토토군 군산 하루 코스',
    titleImage: 'assets/generated/badges/gunsan-map.png?v=2',
    routeIntro: '두 번의 기차 미션으로 시작해 군산의 추억 장소를 차례로 지나고, 오후 8시 20분 버스로 돌아오는 확정 코스.',
    stops: [
      { time: '기차 1', name: '공주 특집', note: '30분 메이크업 미션', mapQuery: '군산역' },
      { time: '기차 2', name: '쉼표 · 텔레파시', note: '간식 나눔 · 추억 장소 맞히기', mapQuery: '군산역' },
      { time: '10:00', name: '군산 도착', note: '여행 본편 시작', mapQuery: '군산역' },
      { time: '이른 점심', name: '빈해원', note: '중식 · 짬뽕 면발 내기', mapQuery: '군산 빈해원' },
      { time: '점심 후', name: '진포해양테마공원', note: '산책 · 여섯이 네 고향 패러디', mapQuery: '군산 진포해양테마공원' },
      { time: '오후', name: '초원사진관', note: '하와 수 우정사진', mapQuery: '군산 초원사진관' },
      { time: '오후', name: '말랭이마을', note: '짝꿍 계단 가위바위보', mapQuery: '군산 말랭이마을' },
      { time: '휴식', name: '군산과자조합', note: '카페 타임 · 사진 점검', mapQuery: '군산과자조합' },
      { time: '늦은 오후', name: '경암동철길마을', note: '추억의 장난감 · 군것질', mapQuery: '군산 경암동 철길마을' },
      { time: '저녁', name: '중동호떡', note: '저녁 겸 요깃거리', mapQuery: '군산 중동호떡' },
      { time: '출발 전', name: '군산시외버스터미널', note: '터미널 이동 · 탑승 준비', mapQuery: '군산시외버스터미널' },
      { time: '20:20', name: '버스 출발', note: '사진 정리 · 오늘의 엔딩', mapQuery: '군산시외버스터미널' },
    ],
  },
};

const telepathyDistricts = {
  서울:['강남구','강동구','강북구','강서구','관악구','광진구','구로구','금천구','노원구','도봉구','동대문구','동작구','마포구','서대문구','서초구','성동구','성북구','송파구','양천구','영등포구','용산구','은평구','종로구','중구','중랑구'],
  부산:['강서구','금정구','기장군','남구','동구','동래구','부산진구','북구','사상구','사하구','서구','수영구','연제구','영도구','중구','해운대구'],
  대구:['군위군','남구','달서구','달성군','동구','북구','서구','수성구','중구'],
  인천:['강화군','계양구','남동구','동구','미추홀구','부평구','서구','연수구','옹진군','중구'],
  광주:['광산구','남구','동구','북구','서구'],
  대전:['대덕구','동구','서구','유성구','중구'],
  울산:['남구','동구','북구','울주군','중구'],
  세종:['세종시 전역'],
  경기:['가평군','고양시','과천시','광명시','광주시','구리시','군포시','김포시','남양주시','동두천시','부천시','성남시','수원시','시흥시','안산시','안성시','안양시','양주시','양평군','여주시','연천군','오산시','용인시','의왕시','의정부시','이천시','파주시','평택시','포천시','하남시','화성시'],
  강원:['강릉시','고성군','동해시','삼척시','속초시','양구군','양양군','영월군','원주시','인제군','정선군','철원군','춘천시','태백시','평창군','홍천군','화천군','횡성군'],
  충북:['괴산군','단양군','보은군','영동군','옥천군','음성군','제천시','증평군','진천군','청주시','충주시'],
  충남:['계룡시','공주시','금산군','논산시','당진시','보령시','부여군','서산시','서천군','아산시','예산군','천안시','청양군','태안군','홍성군'],
  전북:['고창군','군산시','김제시','남원시','무주군','부안군','순창군','완주군','익산시','임실군','장수군','전주시','정읍시','진안군'],
  전남:['강진군','고흥군','곡성군','광양시','구례군','나주시','담양군','목포시','무안군','보성군','순천시','신안군','여수시','영광군','영암군','완도군','장성군','장흥군','진도군','함평군','해남군','화순군'],
  경북:['경산시','경주시','고령군','구미시','김천시','문경시','봉화군','상주시','성주군','안동시','영덕군','영양군','영주시','영천시','예천군','울릉군','울진군','의성군','청도군','청송군','칠곡군','포항시'],
  경남:['거제시','거창군','고성군','김해시','남해군','밀양시','사천시','산청군','양산시','의령군','진주시','창녕군','창원시','통영시','하동군','함안군','함양군','합천군'],
  제주:['서귀포시','제주시'],
};

let missionReturnFocus = null;
let missionIntroTimer = null;
let activeMissionKey = null;
let missionClosing = false;
let princessStoryTimers = [];
let princessCountdownInterval = null;
let princessSecondsLeft = 30 * 60;
let princessTimerStarted = false;
let princessTimerStopped = false;
let commaStoryTimers = [];
let hawasuStoryTimers = [];
let hometownStoryTimers = [];
let partnerStoryTimers = [];
let telepathyStoryTimers = [];
let nostalgiaStoryTimers = [];
let lunchChanceTimers = [];
let lunchChancePending = false;
let lunchMenuAssignments = {};
let armedLunchEnvelope = null;
let savedMissionKeys = JSON.parse(localStorage.getItem('totogun-completed-missions') || '[]');
if (!localStorage.getItem('totogun-telepathy-reset-v1')) {
  savedMissionKeys = savedMissionKeys.filter((key) => key !== 'telepathy');
  localStorage.setItem('totogun-completed-missions', JSON.stringify(savedMissionKeys));
  localStorage.setItem('totogun-telepathy-reset-v1', 'done');
}
const completedMissions = new Set(savedMissionKeys);

function updateMissionBadges() {
  caseProps.forEach((prop) => {
    const isComplete = completedMissions.has(prop.dataset.content);
    prop.classList.toggle('is-complete', isComplete);
    if (isComplete) prop.setAttribute('data-complete-label', '인증 완료');
    else prop.removeAttribute('data-complete-label');
  });
}

function showMissionStamp(type) {
  const success = type === 'complete';
  missionStampFeedback.className = `mission-stamp-feedback is-${type}`;
  missionStampImage.src = success
    ? 'assets/generated/stamps/mudori-complete-cutout.png?v=1'
    : 'assets/generated/stamps/mudo-skull.png?v=1';
  missionStampImage.alt = success ? '무도리 미션 완료 도장' : '무한도전 해골 미션 미완료 마크';
  missionStampText.textContent = success ? '미션 완료!' : '미션 미완료';
  missionStampFeedback.hidden = false;
  requestAnimationFrame(() => missionStampFeedback.classList.add('is-showing'));
}

function hideMissionStamp() {
  missionStampFeedback.classList.remove('is-showing');
  window.setTimeout(() => {
    missionStampFeedback.hidden = true;
    missionStampFeedback.className = 'mission-stamp-feedback';
  }, 180);
}

function clearPrincessRuntime() {
  princessStoryTimers.forEach((timer) => window.clearTimeout(timer));
  princessStoryTimers = [];
  window.clearInterval(princessCountdownInterval);
  princessCountdownInterval = null;
  princessSecondsLeft = 30 * 60;
  princessTimerStarted = false;
  princessTimerStopped = false;
}

function clearCommaRuntime() {
  commaStoryTimers.forEach((timer) => window.clearTimeout(timer));
  commaStoryTimers = [];
}

function activateCommaBeat(index) {
  const beats = [...missionModal.querySelectorAll('[data-comma-beat]')];
  beats.forEach((beat, beatIndex) => {
    beat.classList.toggle('is-active', beatIndex === index);
    beat.classList.toggle('is-past', beatIndex < index);
    beat.setAttribute('aria-hidden', beatIndex === index ? 'false' : 'true');
  });
  missionModal.querySelectorAll('[data-comma-dot]').forEach((dot, dotIndex) => {
    dot.classList.toggle('is-active', dotIndex === index);
  });
}

function startCommaStory() {
  const beats = missionModal.querySelectorAll('[data-comma-beat]');
  if (!beats.length) return;
  clearCommaRuntime();
  [0, 1650, 3150, 4350, 5650].forEach((delay, index) => {
    commaStoryTimers.push(window.setTimeout(() => activateCommaBeat(index), delay));
  });
}

function clearHawasuRuntime() {
  hawasuStoryTimers.forEach((timer) => window.clearTimeout(timer));
  hawasuStoryTimers = [];
}

function activateHawasuBeat(index) {
  const beats = [...missionModal.querySelectorAll('[data-hawasu-beat]')];
  beats.forEach((beat, beatIndex) => {
    beat.classList.toggle('is-active', beatIndex === index);
    beat.classList.toggle('is-past', beatIndex < index);
    beat.setAttribute('aria-hidden', beatIndex === index ? 'false' : 'true');
  });
  missionModal.querySelectorAll('[data-hawasu-dot]').forEach((dot, dotIndex) => {
    dot.classList.toggle('is-active', dotIndex === index);
  });
}

function startHawasuStory() {
  const beats = missionModal.querySelectorAll('[data-hawasu-beat]');
  if (!beats.length) return;
  clearHawasuRuntime();
  [0, 1850, 3700, 5550, 7350].forEach((delay, index) => {
    hawasuStoryTimers.push(window.setTimeout(() => activateHawasuBeat(index), delay));
  });
}

function clearHometownRuntime() {
  hometownStoryTimers.forEach((timer) => window.clearTimeout(timer));
  hometownStoryTimers = [];
}

function activateHometownBeat(index) {
  const beats = [...missionModal.querySelectorAll('[data-hometown-beat]')];
  beats.forEach((beat, beatIndex) => {
    beat.classList.toggle('is-active', beatIndex === index);
    beat.classList.toggle('is-past', beatIndex < index);
    beat.setAttribute('aria-hidden', beatIndex === index ? 'false' : 'true');
  });
  missionModal.querySelectorAll('[data-hometown-dot]').forEach((dot, dotIndex) => {
    dot.classList.toggle('is-active', dotIndex === index);
  });
}

function startHometownStory() {
  const beats = missionModal.querySelectorAll('[data-hometown-beat]');
  if (!beats.length) return;
  clearHometownRuntime();
  [0, 1900, 4100, 6400].forEach((delay, index) => {
    hometownStoryTimers.push(window.setTimeout(() => activateHometownBeat(index), delay));
  });
}

function clearPartnerRuntime() {
  partnerStoryTimers.forEach((timer) => window.clearTimeout(timer));
  partnerStoryTimers = [];
}

function activatePartnerBeat(index) {
  const beats = [...missionModal.querySelectorAll('[data-partner-beat]')];
  beats.forEach((beat, beatIndex) => {
    beat.classList.toggle('is-active', beatIndex === index);
    beat.classList.toggle('is-past', beatIndex < index);
    beat.setAttribute('aria-hidden', beatIndex === index ? 'false' : 'true');
  });
  missionModal.querySelectorAll('[data-partner-dot]').forEach((dot, dotIndex) => {
    dot.classList.toggle('is-active', dotIndex === index);
  });
}

function startPartnerStory() {
  const beats = missionModal.querySelectorAll('[data-partner-beat]');
  if (!beats.length) return;
  clearPartnerRuntime();
  [0, 3000, 5400, 7900].forEach((delay, index) => {
    partnerStoryTimers.push(window.setTimeout(() => activatePartnerBeat(index), delay));
  });
}

function clearTelepathyRuntime() {
  telepathyStoryTimers.forEach((timer) => window.clearTimeout(timer));
  telepathyStoryTimers = [];
}

function clearNostalgiaRuntime() {
  nostalgiaStoryTimers.forEach((timer) => window.clearTimeout(timer));
  nostalgiaStoryTimers = [];
}

function activateNostalgiaBeat(index) {
  const beats = [...missionModal.querySelectorAll('[data-nostalgia-beat]')];
  beats.forEach((beat, beatIndex) => {
    beat.classList.toggle('is-active', beatIndex === index);
    beat.classList.toggle('is-past', beatIndex < index);
    beat.setAttribute('aria-hidden', beatIndex === index ? 'false' : 'true');
  });
  missionModal.querySelectorAll('[data-nostalgia-dot]').forEach((dot, dotIndex) => dot.classList.toggle('is-active', dotIndex === index));
}

function startNostalgiaStory() {
  if (!missionModal.querySelector('[data-nostalgia-beat]')) return;
  clearNostalgiaRuntime();
  [0, 2700, 5400, 8100].forEach((delay, index) => {
    nostalgiaStoryTimers.push(window.setTimeout(() => activateNostalgiaBeat(index), delay));
  });
}

function activateTelepathyBeat(index) {
  const beats = [...missionModal.querySelectorAll('[data-telepathy-beat]')];
  beats.forEach((beat, beatIndex) => {
    beat.classList.toggle('is-active', beatIndex === index);
    beat.classList.toggle('is-past', beatIndex < index);
    beat.setAttribute('aria-hidden', beatIndex === index ? 'false' : 'true');
  });
  missionModal.querySelectorAll('[data-telepathy-dot]').forEach((dot, dotIndex) => dot.classList.toggle('is-active', dotIndex === index));
  if (index === 3) missionModal.querySelector('[data-telepathy-game]')?.dispatchEvent(new CustomEvent('telepathy-round-start'));
}

function startTelepathyStory() {
  if (!missionModal.querySelector('[data-telepathy-beat]')) return;
  clearTelepathyRuntime();
  [0, 2600, 5300, 7500].forEach((delay, index) => {
    telepathyStoryTimers.push(window.setTimeout(() => activateTelepathyBeat(index), delay));
  });
}

function setupTelepathyGame(contentKey) {
  const game = missionModal.querySelector('[data-telepathy-game]');
  if (!game) return;
  const coords = {
    서울:[46,31], 부산:[72,78], 대구:[66,61], 인천:[38,32], 광주:[43,72], 대전:[50,52], 울산:[74,68], 세종:[48,47], 경기:[45,35], 강원:[66,27], 충북:[54,45], 충남:[42,50], 전북:[46,62], 전남:[42,77], 경북:[67,48], 경남:[62,72], 제주:[33,91]
  };
  let round = 1;
  let answers = { y:null, j:null };
  const used = new Set();
  const roundEl = game.querySelector('[data-telepathy-round]');
  const status = game.querySelector('[data-telepathy-status]');
  const retry = game.querySelector('[data-telepathy-retry]');
  const markers = { y:game.querySelector('[data-player-marker="y"]'), j:game.querySelector('[data-player-marker="j"]') };
  const gameBeat = game.closest('.telepathy-game-beat');
  const roundCurtain = gameBeat.querySelector('[data-telepathy-round-curtain]');
  let roundCurtainTimer = null;

  function showRoundIntro() {
    window.clearTimeout(roundCurtainTimer);
    roundCurtain.querySelector('strong').textContent = round;
    gameBeat.classList.add('is-round-intro');
    roundCurtain.classList.remove('is-active');
    void roundCurtain.offsetWidth;
    roundCurtain.classList.add('is-active');
    roundCurtainTimer = window.setTimeout(() => {
      gameBeat.classList.remove('is-round-intro');
      roundCurtain.classList.remove('is-active');
    }, 1450);
  }

  function resetMarkers() {
    Object.values(markers).forEach((marker) => { marker.style.left='50%'; marker.style.top='88%'; marker.classList.remove('is-arrived'); });
  }
  function resetRound() {
    answers = { y:null, j:null };
    game.querySelectorAll('[data-player-form]').forEach((form) => {
      form.reset();
      form.classList.remove('is-submitted');
      form.querySelector('button').disabled=false;
      form.elements.district.innerHTML='<option value="">세부 도시·구</option>';
      form.elements.district.disabled=true;
    });
    roundEl.textContent = `ROUND ${round} / 5`;
    status.textContent = '같은 추억의 장소를 떠올려보세요.';
    resetMarkers();
  }
  function finishRound() {
    if (!answers.y || !answers.j) return;
    const same = answers.y.key === answers.j.key;
    if (same) {
      status.textContent = `텔레파시 성공! 두 사람 모두 “${answers.y.place}”`;
      game.classList.add('is-success');
      window.setTimeout(() => completeMissionWithPhoto(contentKey), 1300);
      return;
    }
    used.add(answers.y.key);
    used.add(answers.j.key);
    status.textContent = `Y는 ${answers.y.region} ${answers.y.district}, J는 ${answers.j.region} ${answers.j.district}! 텔레파시 불발…`;
    if (round >= 5) {
      game.classList.add('is-failed');
      retry.hidden = false;
      status.textContent = '5번의 기회 종료! 다시 처음부터 도전할 수 있어요.';
      return;
    }
    round += 1;
    window.setTimeout(() => { resetRound(); showRoundIntro(); }, 1800);
  }
  game.querySelectorAll('[data-player-form]').forEach((form) => {
    form.elements.region.addEventListener('change', () => {
      const district = form.elements.district;
      const options = telepathyDistricts[form.elements.region.value] || [];
      district.innerHTML = `<option value="">세부 도시·구</option>${options.map((name) => `<option>${name}</option>`).join('')}`;
      district.disabled = options.length === 0;
      district.focus();
    });
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const player = form.dataset.playerForm;
      const region = form.elements.region.value;
      const district = form.elements.district.value;
      const place = form.elements.place.value.trim();
      const key = `${region}|${district}|${place.replace(/\s+/g,'').toLowerCase()}`;
      if (!region || !district || !place) { status.textContent='시·도, 세부 도시·구, 장소명을 모두 입력해주세요.'; return; }
      if (used.has(key)) { status.textContent='한 번 쓴 장소는 다시 사용할 수 없어요.'; return; }
      answers[player] = { region, district, place, key };
      form.classList.add('is-submitted');
      form.querySelector('button').disabled = true;
      const [left, top] = coords[region] || [50,50];
      markers[player].style.left = `${left}%`;
      markers[player].style.top = `${top}%`;
      markers[player].classList.add('is-arrived');
      status.textContent = `${player.toUpperCase()} 제출 완료! 다른 친구를 기다리는 중…`;
      finishRound();
    });
  });
  game.addEventListener('telepathy-round-start', showRoundIntro);
  retry.addEventListener('click', () => { round=1; used.clear(); retry.hidden=true; game.classList.remove('is-failed'); resetRound(); showRoundIntro(); });
  resetRound();
}

const lunchMains = {
  water: { name: '물짜장', dish: 'water-jjajang' },
  jjampong: { name: '짬뽕', dish: 'jjampong' },
};

const lunchSides = [
  { name: '탕수육', dish: 'tangsuyuk' },
  { name: '적춘권', dish: 'spring-roll' },
];

function clearLunchChanceRuntime() {
  lunchChanceTimers.forEach((timer) => window.clearTimeout(timer));
  lunchChanceTimers = [];
}

function setLunchChanceCaption(text) {
  if (!lunchChanceCaption) return;
  const caption = lunchChanceCaption.closest('.lunch-pd-caption');
  caption?.classList.remove('is-changing');
  lunchChanceCaption.textContent = text;
  void lunchChanceCaption.offsetWidth;
  caption?.classList.add('is-changing');
}

function setLunchChanceScene(scene) {
  if (!lunchChance) return;
  lunchChance.dataset.scene = scene;
  lunchChance.querySelectorAll('[data-lunch-panel]').forEach((panel) => {
    const panelName = panel.dataset.lunchPanel;
    const isVisible = panelName === scene
      || (panelName === 'envelopes' && (scene === 'envelopes' || scene === 'choose'));
    panel.setAttribute('aria-hidden', isVisible ? 'false' : 'true');
  });
}

function createLunchMenuAssignments() {
  const mainOrder = Math.random() < .5 ? ['water', 'jjampong'] : ['jjampong', 'water'];
  const randomSide = () => lunchSides[Math.floor(Math.random() * lunchSides.length)];
  lunchMenuAssignments = {
    A: { main: lunchMains[mainOrder[0]], side: randomSide() },
    B: { main: lunchMains[mainOrder[1]], side: randomSide() },
  };
}

function startLunchChance() {
  if (!lunchChance) return;
  clearLunchChanceRuntime();
  createLunchMenuAssignments();
  armedLunchEnvelope = null;
  lunchEnvelopes.forEach((envelope) => {
    envelope.disabled = true;
    envelope.classList.remove('is-armed', 'is-selected', 'is-rejected');
    envelope.removeAttribute('aria-pressed');
  });
  lunchMenuReveal.classList.remove('is-revealed');
  lunchMenuReveal.hidden = true;
  lunchChoiceHelp.textContent = '두 봉투 중 하나를 골라주세요.';
  setLunchChanceCaption('잠시 후 점심 찬스타임이 시작됩니다.');
  setLunchChanceScene('logo');
  lunchChance.hidden = false;
  lunchChance.setAttribute('aria-hidden', 'false');
  document.body.classList.add('lunch-chance-open');
  requestAnimationFrame(() => lunchChance.classList.add('is-active'));

  lunchChanceTimers.push(window.setTimeout(() => {
    setLunchChanceScene('restaurant');
    setLunchChanceCaption('자 여러분 이제 점심 먹어야죠?');
  }, 2400));
  lunchChanceTimers.push(window.setTimeout(() => {
    setLunchChanceCaption('오늘의 메뉴는 중식입니다');
  }, 4700));
  lunchChanceTimers.push(window.setTimeout(() => {
    setLunchChanceScene('envelopes');
    setLunchChanceCaption('두개의 봉투가 있는데...');
  }, 7000));
  lunchChanceTimers.push(window.setTimeout(() => {
    setLunchChanceScene('choose');
    setLunchChanceCaption('고르신 봉투 안의 메뉴로 먹어야 합니다!');
    lunchEnvelopes.forEach((envelope) => { envelope.disabled = false; });
    lunchEnvelopes[0]?.focus({ preventScroll: true });
  }, 9300));
}

function revealLunchMenu(envelopeKey) {
  if (lunchChance?.dataset.scene !== 'choose') return;
  const menu = lunchMenuAssignments[envelopeKey];
  if (!menu) return;
  lunchEnvelopes.forEach((envelope) => {
    const isSelected = envelope.dataset.lunchEnvelope === envelopeKey;
    envelope.disabled = true;
    envelope.classList.toggle('is-selected', isSelected);
    envelope.classList.toggle('is-rejected', !isSelected);
    envelope.classList.remove('is-armed');
    envelope.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
  });
  lunchSelectedEnvelope.textContent = envelopeKey;
  lunchMainName.textContent = menu.main.name;
  lunchSideName.textContent = menu.side.name;
  lunchMainIcon.dataset.dish = menu.main.dish;
  lunchSideIcon.dataset.dish = menu.side.dish;
  lunchChoiceHelp.textContent = `${envelopeKey} 봉투를 선택했습니다.`;
  lunchChanceTimers.push(window.setTimeout(() => {
    setLunchChanceScene('reveal');
    lunchMenuReveal.hidden = false;
    requestAnimationFrame(() => {
      lunchMenuReveal.classList.add('is-revealed');
      lunchChanceClose?.focus({ preventScroll: true });
    });
  }, 620));
}

function closeLunchChance() {
  if (!lunchChance || lunchChance.hidden) return;
  clearLunchChanceRuntime();
  lunchChance.classList.remove('is-active');
  document.body.classList.remove('lunch-chance-open');
  window.setTimeout(() => {
    lunchChance.hidden = true;
    lunchChance.setAttribute('aria-hidden', 'true');
    lunchChance.removeAttribute('data-scene');
    lunchMenuReveal.classList.remove('is-revealed');
    lunchMenuReveal.hidden = true;
    document.querySelector('.case-prop[data-content="telepathy"]')?.focus({ preventScroll: true });
  }, 480);
}

lunchEnvelopes.forEach((envelope) => {
  envelope.addEventListener('click', (event) => {
    if (envelope.disabled || lunchChance?.dataset.scene !== 'choose') return;
    const envelopeKey = envelope.dataset.lunchEnvelope;
    const needsTwoTaps = window.matchMedia('(hover: none), (pointer: coarse)').matches && event.detail !== 0;
    if (needsTwoTaps && armedLunchEnvelope !== envelopeKey) {
      armedLunchEnvelope = envelopeKey;
      lunchEnvelopes.forEach((item) => item.classList.toggle('is-armed', item === envelope));
      lunchChoiceHelp.textContent = `${envelopeKey} 봉투를 한 번 더 탭하면 선택됩니다.`;
      return;
    }
    revealLunchMenu(envelopeKey);
  });
});

lunchChanceClose?.addEventListener('click', closeLunchChance);

function completeMissionWithPhoto(contentKey) {
  if (contentKey === 'telepathy') lunchChancePending = true;
  completedMissions.add(contentKey);
  localStorage.setItem('totogun-completed-missions', JSON.stringify([...completedMissions]));
  updateMissionBadges();
  missionClosing = true;
  showMissionStamp('complete');
  window.setTimeout(() => finishMissionClose(), 900);
}

function failPrincessMission(message = '30분 종료! 인증에 실패했습니다.') {
  if (missionClosing) return;
  missionClosing = true;
  window.clearInterval(princessCountdownInterval);
  princessCountdownInterval = null;
  const status = missionModal.querySelector('[data-princess-status]');
  if (status) status.textContent = message;
  showMissionStamp('failed');
  window.setTimeout(() => finishMissionClose(), 900);
}

function formatPrincessTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainder = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(remainder).padStart(2, '0')}`;
}

function activatePrincessBeat(index) {
  const beats = [...missionModal.querySelectorAll('[data-princess-beat]')];
  beats.forEach((beat, beatIndex) => {
    beat.classList.toggle('is-active', beatIndex === index);
    beat.classList.toggle('is-past', beatIndex < index);
    beat.setAttribute('aria-hidden', beatIndex === index ? 'false' : 'true');
  });
  missionModal.querySelectorAll('[data-princess-dot]').forEach((dot, dotIndex) => {
    dot.classList.toggle('is-active', dotIndex === index);
  });
}

function startPrincessStory() {
  const beats = missionModal.querySelectorAll('[data-princess-beat]');
  if (!beats.length) return;
  clearPrincessRuntime();
  [0, 2000, 4000, 6000, 8000].forEach((delay, index) => {
    princessStoryTimers.push(window.setTimeout(() => activatePrincessBeat(index), delay));
  });
}

function setupPrincessMission(contentKey) {
  const startButton = missionModal.querySelector('[data-princess-start]');
  const stopButton = missionModal.querySelector('[data-princess-stop]');
  const timerDisplay = missionModal.querySelector('[data-princess-timer]');
  const status = missionModal.querySelector('[data-princess-status]');
  const upload = missionModal.querySelector('[data-princess-proof]');
  const uploadLabel = missionModal.querySelector('.princess-proof-upload');
  const uploadHint = uploadLabel?.querySelector('small');
  if (!startButton || !stopButton || !timerDisplay || !upload || !uploadLabel) return;

  startButton.addEventListener('click', () => {
    if (princessTimerStarted) return;
    princessTimerStarted = true;
    princessTimerStopped = false;
    princessSecondsLeft = 30 * 60;
    timerDisplay.textContent = formatPrincessTime(princessSecondsLeft);
    startButton.disabled = true;
    stopButton.disabled = false;
    status.textContent = '메이크업 진행 중 · 완성하면 STOP을 누르세요!';
    missionModal.querySelector('.princess-timer-panel')?.classList.add('is-running');
    princessCountdownInterval = window.setInterval(() => {
      princessSecondsLeft -= 1;
      timerDisplay.textContent = formatPrincessTime(Math.max(0, princessSecondsLeft));
      if (princessSecondsLeft <= 0) failPrincessMission();
    }, 1000);
  });

  stopButton.addEventListener('click', () => {
    if (!princessTimerStarted || princessTimerStopped || princessSecondsLeft <= 0) return;
    princessTimerStopped = true;
    window.clearInterval(princessCountdownInterval);
    princessCountdownInterval = null;
    stopButton.disabled = true;
    upload.disabled = false;
    uploadLabel.classList.remove('is-locked');
    if (uploadHint) uploadHint.textContent = '사진을 선택하면 즉시 미션 완료 도장이 찍혀요.';
    missionModal.querySelector('.princess-timer-panel')?.classList.remove('is-running');
    missionModal.querySelector('.princess-timer-panel')?.classList.add('is-stopped');
    status.textContent = 'STOP! 제한 시간 안에 완료했습니다. 이제 인증샷을 올리세요.';
  });

  upload.addEventListener('change', (event) => {
    const [file] = event.target.files;
    if (!princessTimerStopped || !file || !file.type.startsWith('image/')) return;
    completeMissionWithPhoto(contentKey);
  });
}

function openMission(contentKey, trigger) {
  const content = missionContents[contentKey];
  if (!content) return;
  missionReturnFocus = trigger;
  activeMissionKey = contentKey;
  missionClosing = false;
  window.clearTimeout(missionIntroTimer);
  missionModal.dataset.theme = content.theme;
  missionModal.classList.remove('is-content');
  missionTitleSplash.innerHTML = `<img src="${content.titleImage}" alt="" /><span>${content.eyebrow}</span>`;
  missionModalContent.innerHTML = content.layout === 'route' ? `
    <section class="route-poster">
      <header class="route-poster-header">
        <span class="mission-eyebrow">${content.eyebrow}</span>
        <h2 id="missionModalTitle">${content.title}</h2>
        <p>${content.routeIntro}</p>
        <div class="route-poster-meta"><b>2026.08.22 SAT</b><span>ONE DAY · TWO FRIENDS · GUNSAN</span></div>
        <img src="${content.titleImage}" alt="접힌 군산 작전지도" />
      </header>
      <div class="route-stop-grid" aria-label="군산 하루 코스">
        ${content.stops.map((stop, index) => `
          <article class="route-stop">
            <a class="route-map-pin" href="https://map.naver.com/p/search/${encodeURIComponent(stop.mapQuery)}" target="_blank" rel="noopener noreferrer" aria-label="네이버 지도에서 ${stop.name} 보기"><span>${String(index + 1).padStart(2, '0')}</span></a>
            <div class="route-stop-copy">
              <time>${stop.time}</time>
              <strong>${stop.name}</strong>
              <span>${stop.note}</span>
            </div>
            <span class="route-map-label">NAVER MAP ↗</span>
          </article>`).join('')}
      </div>
      <footer class="route-poster-footer">
        <span>시간은 현장 상황에 따라 유동적으로 변경됩니다.</span>
        <button type="button" data-route-detail>상세 타임라인 보기 →</button>
      </footer>
    </section>` : content.layout === 'princess-story' ? `
    <section class="princess-story" aria-label="프린세스 메이크업 미션 스토리">
      <h2 id="missionModalTitle" class="sr-only">${content.title}</h2>
      <div class="princess-story-stage">
        <article class="princess-story-beat princess-character-beat is-noh" data-princess-beat aria-hidden="true">
          <img src="assets/generated/princess/noh-story-cutout.png?v=1" alt="내 미모의 비결을 알려주는 노홍철 프린세스" />
          <i aria-hidden="true">WHOOSH!</i>
        </article>
        <article class="princess-story-beat princess-character-beat is-haha" data-princess-beat aria-hidden="true">
          <img src="assets/generated/princess/haha-story-cutout-v2.png?v=1" alt="처녀가 될 수 있는 비법을 알려주는 하하 프린세스" />
          <i aria-hidden="true">PURE!</i>
        </article>
        <article class="princess-story-beat princess-caption-beat is-secret" data-princess-beat aria-hidden="true">
          <div class="princess-text-caption princess-secret-copy" aria-label="몇 백년 간 감춰온 공주들의 숨은 비법">
            <span>몇 백년 간 감춰온</span>
            <strong>공주들의 <em>숨은 비법</em></strong>
            <i class="sparkle sparkle-a" aria-hidden="true">✦</i><i class="sparkle sparkle-b" aria-hidden="true">✧</i><i class="sparkle sparkle-c" aria-hidden="true">✦</i>
          </div>
        </article>
        <article class="princess-story-beat princess-caption-beat is-makeup" data-princess-beat aria-hidden="true">
          <div class="princess-text-caption princess-makeup-copy" aria-label="프린세스 메이크업 시크릿">
            <strong>프린세스 메이크업</strong>
            <span>시크릿</span>
            <i class="sparkle sparkle-a" aria-hidden="true">✦</i><i class="sparkle sparkle-b" aria-hidden="true">✧</i><i class="sparkle sparkle-c" aria-hidden="true">✦</i><i class="sparkle sparkle-d" aria-hidden="true">✧</i>
          </div>
        </article>
        <article class="princess-story-beat princess-briefing-beat" data-princess-beat aria-hidden="true">
          <div class="princess-step-card">
            <span class="princess-step-kicker">오로라의 모나리자 화장</span>
            <b class="princess-step-number">STEP <em>1</em></b>
            <div class="princess-step-copy">
              <strong>30분 안에 오늘의 여행 메이크업을 완성하라!</strong>
              <p>각자의 파우치를 열고 친구에게 어울릴 포인트 하나를 추천해 함께 완성합니다.</p>
              <small>START → 메이크업 진행 → STOP → 인증샷 업로드</small>
            </div>
          </div>
          <div class="princess-timer-panel">
            <span>BEAUTY MISSION LIMIT</span>
            <time data-princess-timer datetime="PT30M">30:00</time>
            <div class="princess-timer-actions">
              <button type="button" data-princess-start>START</button>
              <button type="button" data-princess-stop disabled>STOP</button>
            </div>
            <p data-princess-status>START를 누르면 30분 타이머가 시작됩니다.</p>
            <label class="princess-proof-upload is-locked">
              <input type="file" accept="image/*" data-princess-proof disabled />
              <strong>인증샷 업로드</strong>
              <small>STOP을 누른 뒤 업로드할 수 있어요.</small>
            </label>
          </div>
        </article>
      </div>
      <div class="princess-story-progress" aria-hidden="true">
        ${Array.from({ length: 5 }, (_, index) => `<i data-princess-dot class="${index === 0 ? 'is-active' : ''}"></i>`).join('')}
      </div>
    </section>` : content.layout === 'comma-story' ? `
    <section class="comma-story" aria-label="소울 푸드 간식 미션 스토리">
      <h2 id="missionModalTitle" class="sr-only">${content.title}</h2>
      <div class="comma-story-stage">
        <article class="comma-story-beat comma-character-beat" data-comma-beat aria-hidden="true">
          <img src="assets/generated/comma/hyungdon-story-cutout.png?v=1" alt="나는 너의 리조또야라고 말하는 정형돈" />
          <span aria-hidden="true">SOUL FOOD?</span>
        </article>
        <article class="comma-story-beat comma-reply-beat" data-comma-beat aria-hidden="true">
          <p><b>리조또</b> 아니고 <em>마니또</em>…</p>
          <i aria-hidden="true">💧</i>
        </article>
        <article class="comma-story-beat comma-question-beat is-prefix" data-comma-beat aria-hidden="true">
          <p><b>서로</b>를 위한</p>
        </article>
        <article class="comma-story-beat comma-question-beat is-full" data-comma-beat aria-hidden="true">
          <p><strong>소울 푸드는?</strong></p>
        </article>
        <article class="comma-story-beat comma-briefing-beat" data-comma-beat aria-hidden="true">
          <div class="comma-hand-caption">
            <span>서로 준비한 <b>간식</b></span>
            <strong>기차에서 <em>나눠먹기</em></strong>
          </div>
          <div class="comma-mission-card">
            <span>TRAIN SESSION 02 · SNACK MANITTO</span>
            <h3>서로 몰래 준비한 간식을<br />기차에서 동시에 공개하라!</h3>
            <ol>
              <li>상대를 생각하며 준비한 간식 꺼내기</li>
              <li>동시에 공개하고 고른 이유 말하기</li>
              <li>첫 입을 나눠 먹고 인증샷 남기기</li>
            </ol>
            <label class="comma-proof-upload">
              <input type="file" accept="image/*" data-mission-proof />
              <strong>${completedMissions.has(contentKey) ? '✓ 인증 완료 · 다시 선택하기' : '인증샷 올리고 미션 완료'}</strong>
              <small>간식 인증 사진을 올리면 무도리 완료 도장이 찍혀요.</small>
            </label>
          </div>
        </article>
      </div>
      <div class="comma-story-progress" aria-hidden="true">
        ${Array.from({ length: 5 }, (_, index) => `<i data-comma-dot class="${index === 0 ? 'is-active' : ''}"></i>`).join('')}
      </div>
    </section>` : content.layout === 'nostalgia-story' ? `
    <section class="nostalgia-story" aria-label="명수는 12살 추억 상점 미션">
      <h2 id="missionModalTitle" class="sr-only">${content.title}</h2>
      <div class="nostalgia-story-stage">
        <article class="nostalgia-story-beat" data-nostalgia-beat aria-hidden="true">
          <div class="nostalgia-paper"><img class="nostalgia-doodle" src="assets/generated/nostalgia/choose-cutout.png?v=1" alt="추억 상점에서 서로의 장난감과 군것질을 고르는 두 친구 낙서" /></div>
          <div class="nostalgia-rule-caption"><img src="assets/generated/content/nostalgia-toy-title.png?v=1" alt="추억의 장난감" /><p>서로와 잠시 떨어져<br /><strong>장난감과 군것질을 하나씩 고른다!</strong></p></div>
        </article>
        <article class="nostalgia-story-beat" data-nostalgia-beat aria-hidden="true">
          <div class="nostalgia-paper"><img class="nostalgia-doodle" src="assets/generated/nostalgia/budget-cutout.png?v=1" alt="오천 원 예산과 질문 금지 규칙 낙서" /></div>
          <div class="nostalgia-rule-caption"><img src="assets/generated/content/nostalgia-toy-title.png?v=1" alt="추억의 장난감" /><p>예산은 각자 <strong>5,000원</strong><br />상대에게 직접 물어보면 안 된다!</p></div>
        </article>
        <article class="nostalgia-story-beat" data-nostalgia-beat aria-hidden="true">
          <div class="nostalgia-paper"><img class="nostalgia-doodle" src="assets/generated/nostalgia/reveal-cutout.png?v=1" alt="선물을 동시에 공개하고 인증사진을 찍는 두 친구 낙서" /></div>
          <div class="nostalgia-rule-caption"><img src="assets/generated/content/nostalgia-toy-title.png?v=1" alt="추억의 장난감" /><p>고른 물건을 동시에 공개하고<br /><strong>인증사진을 찍으면 미션 성공!</strong></p></div>
        </article>
        <article class="nostalgia-story-beat nostalgia-briefing-beat" data-nostalgia-beat aria-hidden="true">
          <div class="nostalgia-briefing">
            <span>GYEONGAMDONG RAILROAD VILLAGE · MEMORY SHOP</span>
            <h3>친구의 어린 시절을 상상해<br />추억 한 봉지를 완성하라!</h3>
            <p>경암동철길마을에서 서로에게 어울리는 장난감 하나와 함께 나눠 먹을 군것질 하나를 고릅니다. 빈해원 면발 게임의 패자가 계산합니다.</p>
            <label class="nostalgia-proof-upload"><input type="file" accept="image/*" data-mission-proof /><strong>${completedMissions.has(contentKey) ? '✓ 인증 완료 · 다시 선택하기' : '장난감·군것질 인증샷 올리기'}</strong><small>사진을 올리면 무도리 완료 도장이 찍혀요.</small></label>
          </div>
        </article>
      </div>
      <div class="nostalgia-story-progress" aria-hidden="true">${Array.from({ length:4 },(_,index)=>`<i data-nostalgia-dot class="${index===0?'is-active':''}"></i>`).join('')}</div>
    </section>` : content.layout === 'telepathy-game' ? `
    <section class="telepathy-story" aria-label="텔레파시 추억 장소 미니게임">
      <h2 id="missionModalTitle" class="sr-only">${content.title}</h2>
      <div class="telepathy-story-stage">
        <article class="telepathy-story-beat telepathy-person is-one" data-telepathy-beat aria-hidden="true"><img src="assets/generated/telepathy/signal-man-cutout.png?v=1" alt="손가락을 관자놀이에 대고 찌릿찌릿 텔레파시를 보내는 출연자와 원본 자막" /></article>
        <article class="telepathy-story-beat telepathy-person is-two" data-telepathy-beat aria-hidden="true"><img src="assets/generated/telepathy/loud-telepathy-cutout.png?v=1" alt="두 귀를 막고 더 크게 전달되는 텔레파시를 느끼는 출연자와 원본 자막" /></article>
        <article class="telepathy-story-beat telepathy-title-beat" data-telepathy-beat aria-hidden="true"><img src="assets/generated/telepathy/title-cutout.png?v=1" alt="우리들의 보이지 않는 연결고리 텔레파시" /></article>
        <article class="telepathy-story-beat telepathy-game-beat" data-telepathy-beat aria-hidden="true">
          <div class="telepathy-round-curtain" data-telepathy-round-curtain aria-live="polite" aria-atomic="true"><span>TELEPATHY GAME</span><b>ROUND</b><strong>1</strong><small>같은 추억 장소를 떠올려라!</small></div>
          <div class="telepathy-game" data-telepathy-game>
            <header><span data-telepathy-round>ROUND 1 / 5</span><h3>우리 둘의 추억 장소를 맞춰라!</h3><p data-telepathy-status>같은 추억의 장소를 떠올려보세요.</p></header>
            <div class="telepathy-playfield">
              <div class="telepathy-map" aria-label="대한민국 지도">
                <span class="telepathy-map-kicker">대한민국 추억 지도</span>
                <svg viewBox="0 0 360 520" role="img" aria-label="시도별 색상으로 구분된 대한민국 지도">
                  <g class="telepathy-regions">
                    <path class="region gyeonggi" d="M114 54 173 20 161 119 198 137 175 174 129 165 104 128 115 104Z" />
                    <path class="region gangwon" d="M173 20 218 48 236 99 275 131 258 183 221 175 198 137 161 119Z" />
                    <path class="region chungnam" d="M104 128 129 165 175 174 170 215 128 240 94 212 121 164Z" />
                    <path class="region chungbuk" d="M175 174 198 137 258 183 237 216 205 235 170 215Z" />
                    <path class="region gyeongbuk" d="M205 235 237 216 285 227 250 273 264 328 225 367 195 333 197 276Z" />
                    <path class="region jeonbuk" d="M94 212 128 240 170 215 197 276 160 305 112 288 121 270Z" />
                    <path class="region jeonnam" d="M112 288 160 305 155 383 150 446 112 407 111 362 73 335Z" />
                    <path class="region gyeongnam" d="M160 305 197 276 225 367 213 432 175 481 150 446 155 383Z" />
                    <ellipse class="region jeju" cx="96" cy="493" rx="44" ry="17" />
                  </g>
                  <g class="telepathy-metro-dots">
                    <circle class="seoul" cx="145" cy="108" r="8"/><circle class="incheon" cx="126" cy="113" r="6"/>
                    <circle class="sejong" cx="151" cy="204" r="5"/><circle class="daejeon" cx="153" cy="226" r="7"/>
                    <circle class="daegu" cx="219" cy="291" r="7"/><circle class="ulsan" cx="244" cy="344" r="7"/>
                    <circle class="busan" cx="224" cy="385" r="8"/><circle class="gwangju" cx="127" cy="337" r="7"/>
                  </g>
                  <g class="telepathy-map-labels">
                    <text x="199" y="94">강원</text><text x="128" y="147">경기</text><text x="132" y="197">충남</text>
                    <text x="201" y="195">충북</text><text x="224" y="261">경북</text><text x="125" y="270">전북</text>
                    <text x="105" y="375">전남</text><text x="183" y="399">경남</text><text x="80" y="498">제주</text>
                    <text class="metro-label" x="132" y="96">서울</text><text class="metro-label" x="137" y="221">대전</text>
                    <text class="metro-label" x="105" y="331">광주</text><text class="metro-label" x="229" y="404">부산</text>
                  </g>
                </svg>
                <span class="telepathy-marker is-y" data-player-marker="y" aria-label="Y 무도리 말"><img src="assets/generated/stamps/mudori-complete-cutout.png?v=1" alt="" /><b>Y</b></span>
                <span class="telepathy-marker is-j" data-player-marker="j" aria-label="J 무도리 말"><img src="assets/generated/stamps/mudori-complete-cutout.png?v=1" alt="" /><b>J</b></span>
              </div>
              <div class="telepathy-forms">
                ${['y','j'].map(player => `<form data-player-form="${player}"><h4><span>${player.toUpperCase()}</span> 무도리의 비밀 답안</h4><div class="telepathy-form-row"><select name="region" required aria-label="시도 선택"><option value="">시·도</option>${Object.keys(telepathyDistricts).map(region=>`<option>${region}</option>`).join('')}</select><select name="district" required disabled aria-label="세부 도시 또는 구 선택"><option value="">세부 도시·구</option></select></div><input name="place" placeholder="정확한 추억 장소명" autocomplete="off" required /><button type="submit">비밀 제출</button></form>`).join('')}
              </div>
            </div>
            <button class="telepathy-retry" data-telepathy-retry hidden>처음부터 다시 도전</button>
            <small>한 번 제출한 장소는 다음 라운드에 다시 쓸 수 없습니다.</small>
          </div>
        </article>
      </div>
      <div class="telepathy-story-progress" aria-hidden="true">${Array.from({ length:4 },(_,index)=>`<i data-telepathy-dot class="${index===0?'is-active':''}"></i>`).join('')}</div>
    </section>` : content.layout === 'partner-story' ? `
    <section class="partner-story" aria-label="짝꿍 우정회복 미션 스토리">
      <h2 id="missionModalTitle" class="sr-only">${content.title}</h2>
      <div class="partner-story-stage">
        <article class="partner-story-beat partner-duo-beat" data-partner-beat aria-hidden="true">
          <img class="partner-hyungdon" src="assets/generated/partner/hyungdon-cutout.png?v=1" alt="왼쪽에서 가위바위보를 내는 정형돈" />
          <img class="partner-haha" src="assets/generated/partner/haha-cutout.png?v=1" alt="오른쪽에서 가위바위보를 내는 하하" />
        </article>
        <article class="partner-story-beat partner-wistful-beat" data-partner-beat aria-hidden="true">
          <p><span>더 이상…</span><strong>친해질 수 없는 걸까?</strong></p>
        </article>
        <article class="partner-story-beat partner-title-beat" data-partner-beat aria-hidden="true">
          <div class="partner-project-title">
            <img src="assets/generated/content/friendship-project-title-2016.png?v=1" alt="2016 우정회복 프로젝트, 더 친해지길 바래" />
            <b class="partner-title-year">2016</b>
            <span class="partner-title-correction" aria-hidden="true"><del></del><ins>더</ins></span>
          </div>
        </article>
        <article class="partner-story-beat partner-briefing-beat" data-partner-beat aria-hidden="true">
          <div class="partner-briefing-copy">
            <span>MALRANGI VILLAGE · FRIENDSHIP RECOVERY</span>
            <h3>계단 가위바위보로<br />한 칸씩 더 가까워져라!</h3>
            <p>말랭이마을 계단에서 서로 멀리 떨어져 시작해 가위바위보 승자만 이동합니다. 마주친 순간 원본처럼 어색하고 진지한 우정 장면을 완성하세요.</p>
            <ol>
              <li>계단 위아래에 떨어져 서기</li>
              <li>가위바위보 승자는 정한 칸만큼 이동하기</li>
              <li>마주친 순간 사진 또는 영상으로 남기기</li>
            </ol>
            <label class="partner-proof-upload">
              <input type="file" accept="image/*,video/*" data-mission-proof />
              <strong>${completedMissions.has(contentKey) ? '✓ 인증 완료 · 다시 선택하기' : '인증사진·영상 올리고 미션 완료'}</strong>
              <small>사진이나 영상을 올리면 무도리 완료 도장이 찍혀요.</small>
            </label>
          </div>
        </article>
      </div>
      <div class="partner-story-progress" aria-hidden="true">
        ${Array.from({ length: 4 }, (_, index) => `<i data-partner-dot class="${index === 0 ? 'is-active' : ''}"></i>`).join('')}
      </div>
    </section>` : content.layout === 'hometown-story' ? `
    <section class="hometown-story" aria-label="여섯이 네고향 자전거 상황극 미션 스토리">
      <h2 id="missionModalTitle" class="sr-only">${content.title}</h2>
      <div class="hometown-story-stage">
        <article class="hometown-story-beat hometown-summer-beat" data-hometown-beat aria-hidden="true">
          <p><span>…그리고</span><strong>어느 여름날…</strong></p>
        </article>
        <article class="hometown-story-beat hometown-rider-beat is-yoo" data-hometown-beat aria-hidden="true">
          <img src="assets/generated/hometown/yoo-bike-cutout.png?v=1" alt="분홍 물방울 옷을 입고 자전거를 탄 유재석" />
          <div class="hometown-dialogue"><span>혼자 왔어요?</span><i aria-hidden="true"></i></div>
        </article>
        <article class="hometown-story-beat hometown-rider-beat is-haha" data-hometown-beat aria-hidden="true">
          <img src="assets/generated/hometown/haha-bike-cutout.png?v=1" alt="분홍 물방울 옷을 입고 자전거를 탄 하하" />
          <div class="hometown-dialogue"><span>아니요<br />친구들이랑 왔는데요?</span><i aria-hidden="true"></i></div>
        </article>
        <article class="hometown-story-beat hometown-briefing-beat" data-hometown-beat aria-hidden="true">
          <div class="hometown-briefing-copy">
            <span>GUNSAN BICYCLE SKIT · FIRST MEETING</span>
            <h3>오래된 친구인데도<br />오늘 처음 만난 척하라!</h3>
            <p>유재석과 하하의 군산 자전거 장면처럼 한 명이 먼저 달리고, 다른 한 명이 우연히 합류해 초면인 듯 대화를 이어갑니다.</p>
            <ol>
              <li>자전거길에 카메라를 먼저 고정하기</li>
              <li>서로 다른 방향에서 자연스럽게 합류하기</li>
              <li>“혼자 왔어요?”부터 1분간 즉흥 상황극 하기</li>
            </ol>
            <label class="hometown-proof-upload">
              <input type="file" accept="image/*" data-mission-proof />
              <strong>${completedMissions.has(contentKey) ? '✓ 인증 완료 · 다시 선택하기' : '상황극 인증샷 올리고 미션 완료'}</strong>
              <small>자전거 상황극 사진을 올리면 무도리 완료 도장이 찍혀요.</small>
            </label>
          </div>
        </article>
      </div>
      <div class="hometown-story-progress" aria-hidden="true">
        ${Array.from({ length: 4 }, (_, index) => `<i data-hometown-dot class="${index === 0 ? 'is-active' : ''}"></i>`).join('')}
      </div>
    </section>` : content.layout === 'hawasu-story' ? `
    <section class="hawasu-story" aria-label="하와수 우정사진 미션 스토리">
      <h2 id="missionModalTitle" class="sr-only">${content.title}</h2>
      <div class="hawasu-story-stage">
        <article class="hawasu-story-beat hawasu-character-beat is-wig" data-hawasu-beat aria-hidden="true">
          <img src="assets/generated/hawasu/wig-pair-cutout.png?v=1" alt="형광색 가발과 커다란 리본을 착용한 하와수" />
          <img class="hawasu-caption-cutout" src="assets/generated/hawasu/captions/daedanhada.png?v=1" alt="대단하다" />
        </article>
        <article class="hawasu-story-beat hawasu-character-beat is-thumbs" data-hawasu-beat aria-hidden="true">
          <img src="assets/generated/hawasu/thumbs-pair-cutout.png?v=1" alt="엄지를 들고 감탄하는 하와수" />
          <img class="hawasu-caption-cutout" src="assets/generated/hawasu/captions/daebak.png?v=1" alt="대박" />
        </article>
        <article class="hawasu-story-beat hawasu-character-beat is-camera" data-hawasu-beat aria-hidden="true">
          <img src="assets/generated/hawasu/camera-cutout.png?v=1" alt="카메라를 들고 사진을 찍는 유재석" />
          <img class="hawasu-caption-cutout" src="assets/generated/hawasu/captions/photo-caption.png?v=1" alt="여행에 남는 건 사진뿐" />
        </article>
        <article class="hawasu-story-beat hawasu-calendar-beat" data-hawasu-beat aria-hidden="true">
          <div class="hawasu-calendar-caption">
            <span aria-hidden="true">📷</span>
            <strong><b>3.</b> 사진 찍기 시간</strong>
            <i aria-hidden="true">saturday</i>
          </div>
        </article>
        <article class="hawasu-story-beat hawasu-briefing-beat" data-hawasu-beat aria-hidden="true">
          <div class="hawasu-briefing-copy">
            <img class="hawasu-chowon-sign" src="assets/generated/hawasu/chowon-sign-cutout.png?v=1" alt="초원사진관 간판" />
            <span>CHOWON PHOTO STUDIO · FRIENDSHIP CUT</span>
            <h3>하와수처럼 어색하고도<br />완벽한 우정사진을 남겨라!</h3>
            <p>초원사진관에서 진지한 한 장과 두 사람다운 예능 한 장을 찍고, 오늘의 대표 사진을 함께 고릅니다.</p>
            <ol>
              <li>나란히 서서 원본 구도 재현하기</li>
              <li>진지한 버전과 장난스러운 버전 촬영하기</li>
              <li>둘이 가장 좋아하는 사진 한 장 선택하기</li>
            </ol>
            <label class="hawasu-proof-upload">
              <input type="file" accept="image/*" data-mission-proof />
              <strong>${completedMissions.has(contentKey) ? '✓ 인증 완료 · 다시 선택하기' : '우정사진 올리고 미션 완료'}</strong>
              <small>촬영한 사진을 올리면 무도리 완료 도장이 찍혀요.</small>
            </label>
          </div>
        </article>
      </div>
      <div class="hawasu-story-progress" aria-hidden="true">
        ${Array.from({ length: 5 }, (_, index) => `<i data-hawasu-dot class="${index === 0 ? 'is-active' : ''}"></i>`).join('')}
      </div>
    </section>` : `
    <header class="mission-modal-header">
      <span class="mission-eyebrow">${content.eyebrow}</span>
      <h2 id="missionModalTitle" class="sr-only">${content.title}</h2>
      <img class="mission-title-image" src="${content.titleImage}" alt="${content.title}" />
    </header>
    <div class="mission-broadcast-strip">
      <strong>${content.captionLabel}</strong>
      <span>${content.caption}</span>
    </div>
    ${content.heroImage ? `<figure class="mission-hero-reference"><img src="${content.heroImage}" alt="${content.heroImageAlt}" /><figcaption>${content.heroImageCaption}</figcaption></figure>` : ''}
    <div class="mission-body">
      <p class="mission-description">${content.description}</p>
      ${content.image ? `<figure class="mission-reference"><img src="${content.image}" alt="${content.imageAlt}" /><figcaption>${content.imageCaption}</figcaption></figure>` : ''}
      <ol class="mission-steps">${content.steps.map((step, index) => `<li><b>STEP ${index + 1}</b><span>${step}</span></li>`).join('')}</ol>
      <label class="mission-proof-upload">
        <input type="file" accept="image/*" data-mission-proof />
        <span>${completedMissions.has(contentKey) ? '✓ 인증 완료 · 사진 다시 선택하기' : '인증 사진 업로드'}</span>
        <small>이 콘텐츠에 맞는 사진을 올리면 완료 도장을 받을 수 있어요.</small>
      </label>
    </div>`;
  missionModal.hidden = false;
  document.body.classList.add('mission-modal-open');
  requestAnimationFrame(() => missionModal.classList.add('is-open'));
  missionIntroTimer = window.setTimeout(() => {
    missionModal.classList.add('is-content');
    missionModal.querySelector('.mission-modal-close')?.focus();
    if (content.layout === 'princess-story') startPrincessStory();
    if (content.layout === 'comma-story') startCommaStory();
    if (content.layout === 'hawasu-story') startHawasuStory();
    if (content.layout === 'hometown-story') startHometownStory();
    if (content.layout === 'partner-story') startPartnerStory();
    if (content.layout === 'nostalgia-story') startNostalgiaStory();
    if (content.layout === 'telepathy-game') { startTelepathyStory(); setupTelepathyGame(contentKey); }
  }, 1450);
  missionModal.querySelector('[data-route-detail]')?.addEventListener('click', () => {
    closeMission({ skipStamp: true });
    window.setTimeout(() => {
      caseGate.classList.remove('active');
      caseGate.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('intro-open');
      document.querySelector('#journey')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      updateTimelineStack();
    }, 240);
  });
  if (content.layout === 'princess-story') setupPrincessMission(contentKey);
  missionModal.querySelector('[data-mission-proof]')?.addEventListener('change', (event) => {
    const [file] = event.target.files;
    const isPartnerMedia = content.layout === 'partner-story'
      && (file?.type.startsWith('image/') || file?.type.startsWith('video/'));
    if (!file || (!file.type.startsWith('image/') && !isPartnerMedia)) return;
    completeMissionWithPhoto(contentKey);
  });
}

function finishMissionClose() {
  const shouldStartLunchChance = lunchChancePending
    && activeMissionKey === 'telepathy'
    && completedMissions.has('telepathy');
  if (shouldStartLunchChance) lunchChancePending = false;
  window.clearTimeout(missionIntroTimer);
  clearPrincessRuntime();
  clearCommaRuntime();
  clearHawasuRuntime();
  clearHometownRuntime();
  clearPartnerRuntime();
  clearTelepathyRuntime();
  clearNostalgiaRuntime();
  missionModal.classList.remove('is-open', 'is-content');
  document.body.classList.remove('mission-modal-open');
  window.setTimeout(() => {
    missionModal.hidden = true;
    missionModalContent.replaceChildren();
    missionTitleSplash.replaceChildren();
    missionReturnFocus?.focus();
    activeMissionKey = null;
    missionClosing = false;
    hideMissionStamp();
    if (shouldStartLunchChance) {
      window.setTimeout(startLunchChance, 320);
    }
  }, 220);
}

function closeMission({ skipStamp = false } = {}) {
  if (missionModal.hidden || missionClosing) return;
  missionClosing = true;
  const needsFailureStamp = !skipStamp
    && activeMissionKey
    && activeMissionKey !== 'route'
    && !completedMissions.has(activeMissionKey);
  if (needsFailureStamp) {
    showMissionStamp('failed');
    window.setTimeout(() => finishMissionClose(), 760);
    return;
  }
  finishMissionClose();
}

updateMissionBadges();

stages.forEach((stage, index) => {
  stage.style.setProperty('--stack-top', `${132 + Math.min(index, 8) * 10}px`);
  stage.style.setProperty('--stack-order', String(index + 1));
});

function updateTimelineStack() {
  if (timeline.classList.contains('compact-view')) {
    stages.forEach((stage) => stage.classList.remove('is-stacked'));
    return;
  }

  stages.forEach((stage) => {
    if (stage.classList.contains('open') || stage.classList.contains('is-filtered')) {
      stage.classList.remove('is-stacked');
      return;
    }
    const stackTop = Number.parseFloat(getComputedStyle(stage).getPropertyValue('--stack-top')) || 132;
    stage.classList.toggle('is-stacked', stage.getBoundingClientRect().top <= stackTop + 2);
  });
}

window.addEventListener('scroll', updateTimelineStack, { passive: true });

const captionLines = [
  ['친구 둘 · 추억 다수', '우정 정상 영업 중'],
  ['같은 시간을 보냈지만', '각자의 편집본은 달랐다'],
  ['계획 담당 1명', '계획에 관심 없는 사람 1명'],
  ['사진은 많이 찍었으나', '정상적인 사진은 거의 없음'],
  ['갑작스러운 진심 토크에', '급격히 어색해진 두 사람'],
  ['그 시절 우리를 웃게 한 장면', '오늘은 우리의 장면으로'],
];

const bikeQuestions = [
  '“가장 오래된 친구는 어떤 사람이에요?”',
  '“그 친구와는 어떻게 친해졌어요?”',
  '“그 친구의 가장 좋은 점은 뭐예요?”',
  '“그 친구에게 못 한 말이 있나요?”',
  '“지금 옆에 있다면 뭐라고 말하고 싶어요?”',
];

const nightQuestions = [
  '“우리가 친해졌다고 느낀 순간은 언제였어?”',
  '“가장 선명하게 기억하는 우리의 장면은?”',
  '“예전과 비교해 내가 가장 달라진 점은?”',
  '“아직도 변하지 않은 점은 뭐라고 생각해?”',
  '“앞으로 어떤 친구로 남았으면 좋겠어?”',
  '“몇 년 뒤 오늘을 어떻게 기억하고 싶어?”',
];

let caseTimer;
let caseMotionTimer;

function setWheelValue(wheel, value) {
  const digit = (value + 10) % 10;
  wheel.dataset.digit = String(digit);
  wheel.textContent = String(digit);
  wheel.setAttribute('aria-label', `${comboWheels.indexOf(wheel) + 1}번째 숫자 ${digit}`);
}

function resetCase() {
  window.clearTimeout(caseTimer);
  window.clearTimeout(caseMotionTimer);
  briefcase.classList.remove('turning', 'inspecting', 'opening', 'unlocked', 'inventory-ready', 'wrong');
  casePeek.hidden = false;
  caseGate.classList.remove('zooming', 'departing');
  caseProps.forEach((prop) => prop.classList.remove('selected'));
  comboWheels.forEach((wheel) => setWheelValue(wheel, 0));
  caseCaption.textContent = '오늘의 여행 작전은 이 가방 안에 있습니다.';
  caseMessage.textContent = '각 숫자를 누르면 다이얼이 돌아갑니다.';
  caseGameCaption.textContent = '가방을 클릭해 잠금장치를 확인하자!';
}

function showCase(opened = false) {
  intro.classList.add('hidden');
  routeTransition.classList.remove('active', 'leaving');
  routeTransition.setAttribute('aria-hidden', 'true');
  resetCase();
  if (opened) {
    [0, 0, 7].forEach((digit, index) => setWheelValue(comboWheels[index], digit));
    briefcase.classList.add('inspecting', 'unlocked', 'inventory-ready');
    casePeek.hidden = true;
    caseCaption.textContent = '가방 속 특집들이 오늘의 여행을 완성합니다.';
    caseGameCaption.textContent = '배지나 군산 작전지도를 선택해 내용을 확인하자!';
  }
  caseGate.classList.add('active');
  caseGate.setAttribute('aria-hidden', 'false');
  document.body.classList.add('intro-open');
}

function closeIntro() {
  window.scrollTo({ top: 0, behavior: 'instant' });
  showCase(false);
}

function replayIntro() {
  window.clearTimeout(caseTimer);
  resetCase();
  caseGate.classList.remove('active');
  caseGate.setAttribute('aria-hidden', 'true');
  routeTransition.classList.remove('active', 'leaving');
  routeTransition.setAttribute('aria-hidden', 'true');
  intro.classList.remove('hidden');
  document.body.classList.add('intro-open');
  intro.querySelectorAll('.intro-film, .intro-placard, .intro-title, .enter-button').forEach((element) => {
    element.style.animation = 'none';
  });
  void intro.offsetWidth;
  intro.querySelectorAll('.intro-film, .intro-placard, .intro-title, .enter-button').forEach((element) => {
    element.style.animation = '';
  });
}

enterButton.addEventListener('click', closeIntro);
openingReplay.addEventListener('click', replayIntro);

caseInspect.addEventListener('click', () => {
  if (briefcase.classList.contains('turning') || briefcase.classList.contains('inspecting')) return;
  briefcase.classList.add('turning');
  caseCaption.textContent = '먼저 잠긴 작전 가방을 열겠습니다.';
  caseGameCaption.textContent = '서 있던 검은 가방이 천천히 앞으로 눕혀지고 있다…';
  caseMotionTimer = window.setTimeout(() => {
    briefcase.classList.remove('turning');
    briefcase.classList.add('inspecting');
    caseCaption.textContent = '비밀번호를 풀면 오늘의 작전이 공개됩니다.';
    caseGameCaption.textContent = '가방이 멈췄다. 비밀번호 007을 입력하자!';
    comboWheels[0]?.focus();
  }, 2100);
});

comboWheels.forEach((wheel) => {
  wheel.addEventListener('click', () => setWheelValue(wheel, Number(wheel.dataset.digit) + 1));
  wheel.addEventListener('wheel', (event) => {
    event.preventDefault();
    setWheelValue(wheel, Number(wheel.dataset.digit) + (event.deltaY > 0 ? 1 : -1));
  }, { passive: false });
  wheel.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') return;
    event.preventDefault();
    setWheelValue(wheel, Number(wheel.dataset.digit) + (event.key === 'ArrowDown' ? 1 : -1));
  });
});

unlockCase.addEventListener('click', () => {
  const code = comboWheels.map((wheel) => wheel.dataset.digit).join('');
  if (code === '007') {
    briefcase.classList.add('opening');
    caseCaption.textContent = '잠금이 풀렸습니다. 작전 가방을 공개합니다.';
    caseGameCaption.textContent = '정답이다! 가방이 열리기 시작했다!';
    caseMotionTimer = window.setTimeout(() => {
      briefcase.classList.remove('turning', 'inspecting', 'opening');
      briefcase.classList.add('unlocked');
      caseCaption.textContent = '가방 속에는 오늘 진행할 특집들이 들어 있습니다.';
      caseMessage.textContent = '가방 안을 자세히 확인해보세요.';
      caseGameCaption.textContent = '가방 안을 확인해보자!';
    }, 1100);
    return;
  }

  briefcase.classList.remove('wrong');
  void briefcase.offsetWidth;
  briefcase.classList.add('wrong');
  caseCaption.textContent = '작전 가방의 암호는 세 자리 숫자입니다.';
  caseMessage.textContent = `${code}은(는) 아닙니다. 힌트는 007!`;
});

caseProps.forEach((prop) => {
  prop.addEventListener('click', () => {
    if (!briefcase.classList.contains('unlocked') || !briefcase.classList.contains('inventory-ready')) return;
    if (prop.dataset.content) {
      openMission(prop.dataset.content, prop);
      return;
    }
    const target = document.querySelector(prop.dataset.target);
    if (!target) return;
    prop.classList.add('selected');
    caseGate.classList.add('zooming');
    caseTimer = window.setTimeout(() => {
      caseGate.classList.add('departing');
      document.body.classList.remove('intro-open');
      target.scrollIntoView({ behavior: 'instant', block: 'start' });
      window.setTimeout(() => {
        caseGate.classList.remove('active', 'zooming', 'departing');
        caseGate.setAttribute('aria-hidden', 'true');
        prop.classList.remove('selected');
        updateTimelineStack();
      }, 430);
    }, 720);
  });
});

casePeek.addEventListener('click', () => {
  if (!briefcase.classList.contains('unlocked') || briefcase.classList.contains('inventory-ready')) return;
  casePeek.hidden = true;
  briefcase.classList.add('inventory-ready');
  caseCaption.textContent = '각 배지는 오늘 진행할 하나의 특집입니다.';
  caseGameCaption.textContent = '확인할 특집 배지나 군산 작전지도를 선택하자!';
});

missionCloseButtons.forEach((button) => button.addEventListener('click', closeMission));
document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  if (!missionModal.hidden) {
    closeMission();
    return;
  }
  if (!lunchChance?.hidden && lunchMenuReveal?.classList.contains('is-revealed')) closeLunchChance();
});

caseReturn.addEventListener('click', () => showCase(true));

const previewParams = new URLSearchParams(window.location.search);
if (previewParams.get('preview') === 'lunch') {
  window.setTimeout(() => {
    showCase(true);
    window.setTimeout(startLunchChance, 520);
  }, 180);
}

function updateCountdown() {
  const target = new Date('2026-08-22T00:00:00+09:00');
  const now = new Date();
  const days = Math.ceil((target - now) / 86400000);
  countdown.textContent = days > 0 ? `D-${days}` : days === 0 ? 'D-DAY' : '기록 중';
}
updateCountdown();

let captionTimer;
let captionIndex = 0;
let captionsOn = true;

function showCaption() {
  if (!captionsOn) return;
  const [small, big] = captionLines[captionIndex % captionLines.length];
  broadcastCaption.innerHTML = `<span>${small}</span><strong>${big}</strong>`;
  broadcastCaption.classList.add('show');
  clearTimeout(captionTimer);
  captionTimer = setTimeout(() => broadcastCaption.classList.remove('show'), 2600);
  captionIndex += 1;
}

captionButton.addEventListener('click', () => {
  captionsOn = !captionsOn;
  captionButton.textContent = `자막 ${captionsOn ? 'ON' : 'OFF'}`;
  if (captionsOn) showCaption();
  else broadcastCaption.classList.remove('show');
});

viewButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const nextView = button.dataset.view;
    timeline.classList.toggle('compact-view', nextView === 'compact');
    timeline.dataset.currentView = nextView;
    requestAnimationFrame(updateTimelineStack);

    viewButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle('active', isActive);
      item.setAttribute('aria-pressed', String(isActive));
    });
  });
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle('active', isActive);
      item.setAttribute('aria-pressed', String(isActive));
    });

    stages.forEach((stage) => {
      const groups = stage.dataset.group?.split(' ') ?? [];
      stage.classList.toggle('is-filtered', filter !== 'all' && !groups.includes(filter));
    });
  });
});

document.querySelectorAll('.stage-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const stage = button.closest('.stage');
    const isOpen = stage.classList.toggle('open');
    button.setAttribute('aria-expanded', String(isOpen));
    requestAnimationFrame(updateTimelineStack);
    if (isOpen) showCaption();
  });
});

function updateProgress() {
  const saved = document.querySelectorAll('.stage.saved').length;
  const total = stages.length;
  progressFill.style.width = `${(saved / total) * 100}%`;
  progressLabel.textContent = `${saved} / ${total} 장면 저장`;
}

document.querySelectorAll('.save-scene').forEach((button) => {
  button.addEventListener('click', () => {
    const stage = button.closest('.stage');
    const saved = stage.classList.toggle('saved');
    button.classList.toggle('saved', saved);
    button.textContent = saved ? '추억 저장 완료 ✓' : '우리의 장면으로 저장';
    updateProgress();
    if (saved) showCaption();
  });
});

document.querySelectorAll('.upload-button input').forEach((input) => {
  input.addEventListener('change', () => {
    const file = input.files?.[0];
    if (!file) return;
    const preview = input.closest('.memory-tools').querySelector('.photo-preview');
    const imageUrl = URL.createObjectURL(file);
    preview.innerHTML = `<img src="${imageUrl}" alt="업로드한 오늘의 사진" />`;
  });
});

function shuffle(items, target) {
  const current = target.textContent;
  const alternatives = items.filter((item) => item !== current);
  target.textContent = alternatives[Math.floor(Math.random() * alternatives.length)];
}

document.querySelector('#bikeQuestion')?.closest('.stage')?.querySelector('.shuffle-question')?.addEventListener('click', () => {
  shuffle(bikeQuestions, document.querySelector('#bikeQuestion'));
});

document.querySelector('#nightShuffle').addEventListener('click', () => {
  shuffle(nightQuestions, document.querySelector('#nightQuestion'));
});

const endingDialog = document.querySelector('#endingDialog');
document.querySelector('#makeEnding').addEventListener('click', () => {
  const sentence = document.querySelector('#finalSentence').value.trim();
  const quote = document.querySelector('#bestQuote').value.trim();
  document.querySelector('#endingSentence').textContent = sentence || '처음 만났어도 결국 친구가 되었을 우리.';
  document.querySelector('#endingQuote').textContent = quote ? `오늘의 명대사 · “${quote}”` : '';
  endingDialog.showModal();
});

document.querySelector('#dialogClose').addEventListener('click', () => endingDialog.close());
endingDialog.addEventListener('click', (event) => {
  if (event.target === endingDialog) endingDialog.close();
});

window.addEventListener('load', () => {
  setTimeout(showCaption, 6500);
});
