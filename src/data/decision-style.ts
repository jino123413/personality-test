import { TestData } from '../types';

export const decisionStyleTest: TestData = {
  id: 'decision-style',
  title: '결정 스타일 테스트',
  subtitle: '당신의 선택 방식은?',
  icon: 'ri-compass-3-line',
  description:
    '8가지 상황에서 당신은 어떻게 결정하나요? 나만의 선택 DNA를 알아보세요!',
  questions: [
    {
      id: 1,
      question: '친구들과 저녁 메뉴를 정해야 해요. 당신의 선택법은?',
      options: [
        {
          text: '지나가다 눈에 딱 들어온 식당으로 직행한다',
          scores: { intuitive: 2 },
        },
        {
          text: '네이버 평점, 블로그 리뷰를 꼼꼼히 비교한다',
          scores: { analytical: 2 },
        },
        {
          text: '최근에 먹고 싶었던 게 떠올라서 그걸로 밀어붙인다',
          scores: { emotional: 2 },
        },
        {
          text: '가격 대비 양이 많고 위치도 가까운 곳을 고른다',
          scores: { practical: 2 },
        },
      ],
    },
    {
      id: 2,
      question: '이직 제안이 왔어요. 연봉은 비슷한데 분위기가 다른 회사입니다.',
      options: [
        {
          text: '면접 때 느낀 첫인상과 분위기로 판단한다',
          scores: { intuitive: 2 },
        },
        {
          text: '두 회사의 복지, 성장성, 재무제표까지 비교 분석한다',
          scores: { analytical: 2 },
        },
        {
          text: '그 회사에서 일하는 내 모습을 상상했을 때 설레는 쪽을 고른다',
          scores: { emotional: 2 },
        },
        {
          text: '출퇴근 시간, 야근 빈도, 연차 사용률 등 실질적 조건을 따진다',
          scores: { practical: 2 },
        },
      ],
    },
    {
      id: 3,
      question: '쇼핑몰에서 마음에 드는 옷 두 벌 사이에서 고민 중이에요.',
      options: [
        {
          text: '고민 없이 먼저 손이 간 옷을 집는다',
          scores: { intuitive: 2 },
        },
        {
          text: '소재, 세탁법, 리뷰를 확인하고 활용도를 계산한다',
          scores: { analytical: 1, practical: 1 },
        },
        {
          text: '입었을 때 기분이 더 좋아지는 옷을 고른다',
          scores: { emotional: 2 },
        },
        {
          text: '어떤 옷이랑 더 많이 매치되는지 따져본다',
          scores: { practical: 2 },
        },
      ],
    },
    {
      id: 4,
      question: '여행지를 정해야 해요. 친구가 어디든 좋다고 합니다.',
      options: [
        {
          text: '요즘 SNS에서 자꾸 보이는 곳, 끌리는 곳으로 간다',
          scores: { intuitive: 1, emotional: 1 },
        },
        {
          text: '날씨, 물가, 항공권 가격을 비교한 스프레드시트를 만든다',
          scores: { analytical: 2 },
        },
        {
          text: '전부터 꼭 가보고 싶었던 버킷리스트 장소를 꺼낸다',
          scores: { emotional: 2 },
        },
        {
          text: '휴가 일수와 예산에 딱 맞는 곳을 찾는다',
          scores: { practical: 2 },
        },
      ],
    },
    {
      id: 5,
      question: '친한 친구 두 명이 서로 사이가 틀어졌어요. 당신은?',
      options: [
        {
          text: '직감적으로 누가 더 억울한지 느껴져서 그 쪽 편을 든다',
          scores: { intuitive: 2 },
        },
        {
          text: '양쪽 이야기를 다 듣고 객관적으로 상황을 정리해준다',
          scores: { analytical: 2 },
        },
        {
          text: '둘 다 마음이 아플 테니 각각 만나서 위로해준다',
          scores: { emotional: 2 },
        },
        {
          text: '어색하지 않게 셋이 만날 수 있는 자리를 만들어본다',
          scores: { practical: 1, intuitive: 1 },
        },
      ],
    },
    {
      id: 6,
      question: '소중한 사람에게 줄 생일 선물을 고르는 중이에요.',
      options: [
        {
          text: '쇼핑하다가 "아, 이거다!" 하고 바로 꽂히는 걸 산다',
          scores: { intuitive: 2 },
        },
        {
          text: '선물 추천 글, 가격 비교 사이트를 돌며 최적의 선물을 찾는다',
          scores: { analytical: 2 },
        },
        {
          text: '상대가 좋아할 표정을 상상하며 정성이 담긴 선물을 고른다',
          scores: { emotional: 2 },
        },
        {
          text: '상대가 실제로 자주 쓸 수 있는 실용적인 걸 고른다',
          scores: { practical: 2 },
        },
      ],
    },
    {
      id: 7,
      question: '갑자기 생긴 주말 하루! 어떻게 보낼까요?',
      options: [
        {
          text: '일단 밖에 나가본다. 발길 닿는 대로!',
          scores: { intuitive: 2 },
        },
        {
          text: '할 것 리스트를 만들고 시간대별로 계획을 세운다',
          scores: { analytical: 2 },
        },
        {
          text: '오늘 기분에 맞는 걸 한다. 비 오면 카페, 맑으면 산책',
          scores: { emotional: 1, intuitive: 1 },
        },
        {
          text: '밀린 빨래, 청소부터 하고 남는 시간에 쉰다',
          scores: { practical: 2 },
        },
      ],
    },
    {
      id: 8,
      question: '차, 노트북 같은 큰 금액의 물건을 살 때 당신은?',
      options: [
        {
          text: '디자인 보고 마음에 들면 바로 결제한다',
          scores: { intuitive: 1, emotional: 1 },
        },
        {
          text: '스펙 비교표를 만들고 전문가 리뷰 영상도 다 찾아본다',
          scores: { analytical: 2 },
        },
        {
          text: '이 제품을 쓰는 나의 모습이 행복하게 그려지는 걸 고른다',
          scores: { emotional: 2 },
        },
        {
          text: '가성비, 내구성, 리세일 가치까지 꼼꼼히 따진다',
          scores: { practical: 2 },
        },
      ],
    },
  ],
  results: [
    {
      type: 'intuitive',
      title: '번개처럼 결정하는 직감파',
      emoji: '⚡',
      description:
        '당신은 머리보다 몸이 먼저 반응하는 타입! 복잡한 분석 없이도 핵심을 꿰뚫는 놀라운 촉을 가지고 있어요. 남들이 고민할 때 이미 행동하고 있는 당신, 그 결정력이 바로 최고의 무기입니다.',
      traits: [
        '결단력이 빠르고 행동력이 뛰어남',
        '첫인상과 직감을 신뢰함',
        '선택 후 후회가 적은 편',
        '새로운 상황에서도 당황하지 않음',
      ],
      tips: [
        '큰 결정 전에는 하루만 숙성 시간을 두면 더 좋은 결과가 나와요',
        '직감이 맞았던 경험을 메모해두면 자기 판단에 더 확신이 생겨요',
        '가끔은 주변 사람의 의견을 듣는 것도 시야를 넓혀줄 수 있어요',
      ],
      color: '#FFD600',
    },
    {
      type: 'analytical',
      title: '데이터로 무장한 분석파',
      emoji: '🔍',
      description:
        '스프레드시트는 당신의 친구! 비교, 분석, 검증을 거쳐야 마음이 놓이는 꼼꼼한 전략가예요. 덕분에 당신의 선택은 거의 실패가 없고, 주변 사람들도 당신에게 조언을 구하곤 하죠.',
      traits: [
        '논리적이고 체계적인 사고를 함',
        '리서치와 비교 분석을 즐김',
        '근거 없는 결정을 불편해함',
        '한번 결정하면 자신감이 넘침',
      ],
      tips: [
        '분석 마감 시한을 정해두면 결정 장애를 예방할 수 있어요',
        '모든 걸 데이터화할 수 없다는 점도 받아들이면 마음이 편해져요',
        '80% 확신이 들면 나머지 20%는 경험으로 채워도 충분해요',
      ],
      color: '#1E88E5',
    },
    {
      type: 'emotional',
      title: '마음이 이끄는 감성파',
      emoji: '💗',
      description:
        '당신의 나침반은 바로 마음속 감정이에요! 설렘, 행복, 안정감 같은 감정이 당신을 가장 좋은 선택으로 이끌어줍니다. 사람 냄새 나는 따뜻한 결정으로 주변을 감동시키는 타입이에요.',
      traits: [
        '공감 능력이 뛰어남',
        '감정에 솔직하고 진심을 다함',
        '사람과의 관계를 중요하게 여김',
        '감성적 직관이 정확한 편',
      ],
      tips: [
        '감정이 격할 때는 중요한 결정을 하루 미루는 게 좋아요',
        '감정 일기를 쓰면 나만의 감정 패턴을 파악할 수 있어요',
        '때로는 숫자와 조건도 함께 고려하면 더 만족스러운 결과가 나와요',
      ],
      color: '#EC407A',
    },
    {
      type: 'practical',
      title: '효율 끝판왕 실용파',
      emoji: '⚙️',
      description:
        '시간, 돈, 에너지 낭비는 절대 NO! 현실적인 조건을 정확히 파악하고 가장 효율적인 선택을 하는 똑똑한 살림꾼이에요. 당신 덕분에 모임비는 항상 절약되고, 계획은 착착 진행됩니다.',
      traits: [
        '가성비와 효율을 최우선으로 고려함',
        '현실적이고 실행력이 강함',
        '자원 관리 능력이 탁월함',
        '실패 리스크를 최소화하는 선택을 함',
      ],
      tips: [
        '가끔은 효율을 내려놓고 감성적인 선택도 해보면 삶이 풍요로워져요',
        '실용성만 따지다 보면 놓치는 경험이 있을 수 있으니 가끔 모험도 좋아요',
        '완벽한 가성비보다 "충분히 좋은" 선택도 훌륭한 결정이에요',
      ],
      color: '#546E7A',
    },
  ],
};
