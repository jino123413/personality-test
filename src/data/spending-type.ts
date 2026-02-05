import { TestData } from '../types';

export const spendingTypeTest: TestData = {
  id: 'spending-type',
  title: '소비 유형 테스트',
  subtitle: '당신의 소비 스타일은?',
  icon: 'ri-shopping-bag-3-line',
  description:
    '10가지 질문으로 알아보는 나의 소비 유형! 당신은 알뜰파? 플렉스파?',
  questions: [
    {
      id: 1,
      question: '월급이 들어왔다! 가장 먼저 하는 행동은?',
      options: [
        { text: '적금 자동이체 확인부터', scores: { saver: 3, planner: 1 } },
        {
          text: '이번 달 예산 스프레드시트 업데이트',
          scores: { planner: 3, saver: 1 },
        },
        { text: '위시리스트 탑 아이템 바로 결제', scores: { flexer: 3 } },
        { text: '주식/ETF 매수 주문 넣기', scores: { investor: 3 } },
      ],
    },
    {
      id: 2,
      question: '친구들이랑 저녁 약속! 식당을 고를 때 나는?',
      options: [
        {
          text: '맛집인데 가성비 좋은 곳 검색',
          scores: { saver: 3 },
        },
        {
          text: '이번 달 외식 예산 남은 거 확인 후 결정',
          scores: { planner: 3 },
        },
        {
          text: '분위기 좋은 핫플 예약! 인생은 한 번',
          scores: { flexer: 3, investor: 1 },
        },
        {
          text: '포인트 적립 많이 되는 카드 혜택 식당으로',
          scores: { investor: 2, saver: 2 },
        },
      ],
    },
    {
      id: 3,
      question: '갑자기 보너스 100만 원이 들어왔다면?',
      options: [
        {
          text: '비상금 통장에 바로 넣기',
          scores: { saver: 3 },
        },
        {
          text: '연간 재무 계획에 맞춰 배분',
          scores: { planner: 3, investor: 1 },
        },
        {
          text: '평소 갖고 싶던 거 하나 질렀다!',
          scores: { flexer: 3 },
        },
        {
          text: '수익률 좋은 투자처에 바로 넣기',
          scores: { investor: 3 },
        },
      ],
    },
    {
      id: 4,
      question: '쇼핑몰에서 장바구니에 담아둔 아이템이 30% 할인 중!',
      options: [
        {
          text: '할인해도 비싸면 안 산다. 꾹 참기',
          scores: { saver: 3 },
        },
        {
          text: '이번 달 쇼핑 예산 내면 구매, 아니면 다음 달로',
          scores: { planner: 3 },
        },
        {
          text: '이 기회를 놓칠 수 없지! 바로 결제',
          scores: { flexer: 3 },
        },
        {
          text: '리세일 가치가 있으면 사고, 아니면 패스',
          scores: { investor: 3, planner: 1 },
        },
      ],
    },
    {
      id: 5,
      question: '카페에서 음료를 고를 때 나의 스타일은?',
      options: [
        {
          text: '아아 하나면 충분해 (제일 저렴한 메뉴)',
          scores: { saver: 3 },
        },
        {
          text: '이번 주 커피 예산에서 가능한 선에서 선택',
          scores: { planner: 3, saver: 1 },
        },
        {
          text: '신메뉴 나왔네? 사이즈업에 토핑 추가!',
          scores: { flexer: 3 },
        },
        {
          text: '구독권이나 충전 할인으로 최대한 혜택 챙기기',
          scores: { investor: 2, saver: 2 },
        },
      ],
    },
    {
      id: 6,
      question: '여행 계획을 세울 때 나는?',
      options: [
        {
          text: '최저가 항공권, 게스트하우스 위주로 알뜰 여행',
          scores: { saver: 3 },
        },
        {
          text: '숙박, 교통, 식비, 관광 전부 예산 짜서 관리',
          scores: { planner: 3 },
        },
        {
          text: '좋은 호텔에 맛집 투어! 여행은 아끼면 안 돼',
          scores: { flexer: 3 },
        },
        {
          text: '마일리지, 카드 포인트 최대한 활용해서 비용 절감',
          scores: { investor: 3, planner: 1 },
        },
      ],
    },
    {
      id: 7,
      question: '요즘 가장 관심 있는 재테크 주제는?',
      options: [
        {
          text: '금리 높은 예적금 상품 비교',
          scores: { saver: 3 },
        },
        {
          text: '가계부 앱 추천, 예산 관리 노하우',
          scores: { planner: 3 },
        },
        {
          text: '재테크보다 지금 행복이 중요해',
          scores: { flexer: 3 },
        },
        {
          text: '해외 주식, 코인, 부동산 투자 정보',
          scores: { investor: 3 },
        },
      ],
    },
    {
      id: 8,
      question: '친구 생일 선물을 고를 때 나의 방식은?',
      options: [
        {
          text: '정성스러운 편지 + 부담 없는 가격대 선물',
          scores: { saver: 3, planner: 1 },
        },
        {
          text: '미리 정해둔 선물 예산에 맞춰서 구매',
          scores: { planner: 3 },
        },
        {
          text: '친구가 진짜 좋아할 걸로! 가격은 상관없어',
          scores: { flexer: 3 },
        },
        {
          text: '카드 프로모션, 할인 코드 조합해서 알차게',
          scores: { investor: 2, saver: 2 },
        },
      ],
    },
    {
      id: 9,
      question: '퇴근 후 갑자기 야식이 먹고 싶을 때?',
      options: [
        {
          text: '집에 있는 재료로 간단히 해결',
          scores: { saver: 3 },
        },
        {
          text: '이번 달 배달비 지출 확인 후 가능하면 주문',
          scores: { planner: 3, saver: 1 },
        },
        {
          text: '배달앱 켜고 먹고 싶은 거 다 담기',
          scores: { flexer: 3 },
        },
        {
          text: '쿠폰 있는 곳 위주로, 멤버십 할인까지 챙기기',
          scores: { investor: 2, planner: 1, saver: 1 },
        },
      ],
    },
    {
      id: 10,
      question: '내 통장을 들여다보면 보통 드는 생각은?',
      options: [
        {
          text: '조금만 더 모으면 목표 금액 달성이다!',
          scores: { saver: 3, planner: 1 },
        },
        {
          text: '이번 달 예산 대비 지출 비율을 체크해야겠다',
          scores: { planner: 3 },
        },
        {
          text: '인생은 즐기는 거지~ 다음 달에 아끼자',
          scores: { flexer: 3 },
        },
        {
          text: '잠자는 돈을 굴릴 곳이 어디 없을까',
          scores: { investor: 3, planner: 1 },
        },
      ],
    },
  ],
  results: [
    {
      type: 'saver',
      title: '절약왕',
      emoji: '🏦',
      description:
        '당신은 타고난 절약의 달인! 필요한 곳에만 돈을 쓰고, 불필요한 지출은 단호하게 잘라내는 능력자예요. 티끌 모아 태산을 몸소 실천하는 당신 덕분에 통장 잔고는 늘 든든합니다.',
      traits: [
        '가성비의 제왕',
        '충동구매 면역 체질',
        '할인 정보 수집가',
        '비상금 통장의 든든한 주인',
      ],
      tips: [
        '너무 아끼기만 하면 스트레스가 쌓일 수 있어요. 한 달에 한 번은 작은 보상을 줘보세요.',
        '절약한 돈을 예적금뿐 아니라 소액 투자에도 분산해 보면 자산이 더 빠르게 늘어나요.',
        '가끔은 경험에 투자하는 것도 좋아요. 여행이나 자기계발 강의가 인생을 풍요롭게 만들어줘요.',
      ],
      color: '#4CAF50',
      detailedAnalysis: {
        bestMatch: '계획가',
        bestMatchDescription:
          '절약왕과 계획가가 만나면 가계부 앱 두 개 깔린 커플 탄생! 둘 다 아끼는 걸 좋아하니 통장 잔고가 쑥쑥 올라가요.',
        worstMatch: '플렉서',
        worstMatchDescription:
          '절약왕이 쿠폰 모으는 동안 플렉서는 이미 카드 긁고 옴... 소비 철학이 정반대라 서로 답답할 수 있어요.',
        celebrity: '김생민',
      },
    },
    {
      type: 'planner',
      title: '계획가',
      emoji: '📊',
      description:
        '당신은 재무 관리의 프로! 수입과 지출을 완벽하게 파악하고, 계획에 따라 체계적으로 돈을 관리해요. 월별 예산부터 연간 재무 목표까지, 당신의 스프레드시트는 예술 작품이에요.',
      traits: [
        '예산 스프레드시트 장인',
        '카테고리별 지출 관리 마스터',
        '장기 목표 설정의 달인',
        '감정보다 데이터로 판단',
      ],
      tips: [
        '계획도 좋지만 가끔은 즉흥적인 소비도 즐겨보세요. 예상치 못한 행복을 발견할 수 있어요.',
        '자동화 시스템을 구축하면 관리에 드는 시간을 줄이고 다른 활동에 더 집중할 수 있어요.',
        '비상 상황을 위한 유동 자금을 별도로 확보해 두면 계획에 없던 지출에도 여유 있게 대처할 수 있어요.',
      ],
      color: '#2196F3',
      detailedAnalysis: {
        bestMatch: '투자러',
        bestMatchDescription:
          '계획가의 철저한 분석 + 투자러의 실행력 = 최강 재테크 콤비! 엑셀로 투자 수익률 관리하는 찰떡 조합이에요.',
        worstMatch: '플렉서',
        worstMatchDescription:
          '계획가가 짜둔 월 예산을 플렉서가 하루 만에 날려버릴 수 있어요. 계획 vs 즉흥의 영원한 평행선...',
        celebrity: '유퀴즈 나영석 PD',
      },
    },
    {
      type: 'flexer',
      title: '플렉서',
      emoji: '💎',
      description:
        '당신은 현재의 행복을 아는 사람! 좋아하는 것에는 과감하게 투자하고, 삶의 질을 높이는 소비를 할 줄 알아요. 주변 사람들에게도 넉넉하게 베풀 줄 아는 매력적인 소비 유형이에요.',
      traits: [
        '트렌드 리더',
        '인생은 즐기는 것 마인드',
        '주변 사람에게 관대한 성격',
        '경험 중시형 소비자',
      ],
      tips: [
        '플렉스도 좋지만 월 고정 저축액만큼은 먼저 떼어놓는 습관을 만들어보세요.',
        '큰 지출 전에 24시간 쿨다운 타임을 가져보면 정말 필요한 소비인지 판단하는 데 도움이 돼요.',
        '소비 기록을 한 달만 써보면 의외로 줄일 수 있는 부분이 많이 보여요. 가계부 앱 하나 깔아보세요!',
      ],
      color: '#FF4081',
      detailedAnalysis: {
        bestMatch: '플렉서',
        bestMatchDescription:
          '플렉서끼리 만나면 서로의 지름을 200% 이해해주는 최고의 쇼핑 메이트! 같이 다니면 카드값은 두 배지만 행복도 두 배예요.',
        worstMatch: '절약왕',
        worstMatchDescription:
          '플렉서가 "이거 사야 해!"라고 할 때 절약왕은 "그 돈이면 적금을..."이라고 해요. 대화가 안 통하는 순간이 자주 옵니다.',
        celebrity: '지드래곤',
      },
    },
    {
      type: 'investor',
      title: '투자러',
      emoji: '📈',
      description:
        '당신은 돈이 돈을 벌게 하는 전략가! 소비보다 투자에 관심이 많고, 자산을 불리는 데 탁월한 감각을 가지고 있어요. 복리의 마법을 믿고 꾸준히 실천하는 당신, 미래가 기대돼요.',
      traits: [
        '복리의 마법을 아는 사람',
        '기회비용을 항상 계산',
        '경제 뉴스 매일 체크',
        '장기적 관점의 소유자',
      ],
      tips: [
        '투자에 너무 몰두하면 현재의 삶을 놓칠 수 있어요. 적절한 소비로 지금의 행복도 챙기세요.',
        '분산 투자를 생활화하고, 비상 자금은 반드시 안전 자산으로 따로 확보해 두세요.',
        '투자 수익률뿐 아니라 건강, 인간관계에도 투자하면 더 풍요로운 인생을 만들 수 있어요.',
      ],
      color: '#FF9800',
      detailedAnalysis: {
        bestMatch: '계획가',
        bestMatchDescription:
          '투자러의 대담한 투자 감각에 계획가의 체계적인 리스크 관리가 더해지면? 주식 계좌 수익률이 미소 짓는 드림팀이에요.',
        worstMatch: '절약왕',
        worstMatchDescription:
          '투자러가 "이 종목 올라갈 거야!"라고 하면 절약왕은 "그냥 적금 넣어..."라고 해요. 리스크를 대하는 태도가 너무 달라요.',
        celebrity: '워렌 버핏',
      },
    },
  ],
};
