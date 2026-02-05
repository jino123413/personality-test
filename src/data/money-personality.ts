import { TestData } from '../types';

export const moneyPersonalityTest: TestData = {
  id: 'money-personality',
  title: '금융 성향 테스트',
  subtitle: '당신의 돈 관리 성격은?',
  icon: 'ri-money-dollar-circle-line',
  description:
    '돈을 대하는 나만의 성격을 알아보세요. 10가지 상황 속 당신의 선택은?',

  questions: [
    // Q1: 저축 vs 소비
    {
      id: 1,
      question: '월급이 들어왔다! 가장 먼저 하는 행동은?',
      options: [
        {
          text: '정해진 비율대로 저축 계좌에 자동이체 확인',
          scores: { safety: 3, growth: 1 },
        },
        {
          text: '주식·펀드 계좌에 투자금 추가 매수',
          scores: { growth: 3, freedom: 1 },
        },
        {
          text: '이번 달 가고 싶었던 맛집·공연 예약부터',
          scores: { experience: 3, freedom: 1 },
        },
        {
          text: '고정비 빼고 나머지는 자유롭게 쓸 수 있도록 따로 분리',
          scores: { freedom: 3, experience: 1 },
        },
      ],
    },
    // Q2: 리스크 허용도
    {
      id: 2,
      question: '친구가 "수익률 30% 투자 기회"를 알려줬다면?',
      options: [
        {
          text: '원금 보장이 안 되면 패스, 예적금이 마음 편해',
          scores: { safety: 3, freedom: 1 },
        },
        {
          text: '일단 소액으로 테스트해보고 괜찮으면 추가 투자',
          scores: { growth: 3, safety: 1 },
        },
        {
          text: '그 돈이면 여행 한 번 다녀오는 게 낫지 않나?',
          scores: { experience: 3 },
        },
        {
          text: '올인은 아니지만, 여윳돈 범위에서 과감하게 투자',
          scores: { freedom: 2, growth: 2 },
        },
      ],
    },
    // Q3: 커리어와 돈의 균형
    {
      id: 3,
      question: '연봉 500만원 올려주는 회사 vs 워라밸 좋은 회사, 당신의 선택은?',
      options: [
        {
          text: '당연히 연봉! 돈이 모여야 안정적인 미래가 가능하지',
          scores: { safety: 2, growth: 2 },
        },
        {
          text: '연봉도 중요하지만 성장 가능성이 더 높은 쪽으로',
          scores: { growth: 3, freedom: 1 },
        },
        {
          text: '워라밸이 좋아야 퇴근 후 하고 싶은 것도 할 수 있으니까',
          scores: { experience: 3, freedom: 1 },
        },
        {
          text: '자유로운 근무 환경이 최우선, 리모트가 가능한 곳으로',
          scores: { freedom: 3, experience: 1 },
        },
      ],
    },
    // Q4: 노후 대비
    {
      id: 4,
      question: '은퇴 후 삶을 상상해보면?',
      options: [
        {
          text: '국민연금 + 개인연금 + 퇴직연금, 안정적 노후 소득 확보',
          scores: { safety: 3, growth: 1 },
        },
        {
          text: '부동산·배당주 등 자산에서 나오는 수익으로 여유롭게',
          scores: { growth: 3, safety: 1 },
        },
        {
          text: '세계 여행 다니면서 새로운 경험을 계속하고 싶어',
          scores: { experience: 3, freedom: 1 },
        },
        {
          text: '은퇴 개념 없이 하고 싶은 일 하면서 자유롭게 살고 싶어',
          scores: { freedom: 3, experience: 1 },
        },
      ],
    },
    // Q5: 뜻밖의 돈
    {
      id: 5,
      question: '갑자기 500만원이 생겼다! 어떻게 할까?',
      options: [
        {
          text: '비상금 통장에 넣어두기, 언제 급한 일이 생길지 모르니까',
          scores: { safety: 3 },
        },
        {
          text: 'ETF나 주식에 분산 투자, 돈이 돈을 벌게 해야지',
          scores: { growth: 3 },
        },
        {
          text: '그동안 미뤄뒀던 취미생활이나 여행에 투자!',
          scores: { experience: 3 },
        },
        {
          text: '반은 저축, 반은 나를 위해 쓰면서 균형 맞추기',
          scores: { freedom: 2, safety: 1, experience: 1 },
        },
      ],
    },
    // Q6: 빚에 대한 태도
    {
      id: 6,
      question: '대출에 대한 당신의 생각은?',
      options: [
        {
          text: '빚은 최대한 빨리 갚아야 마음이 편해, 무이자도 싫어',
          scores: { safety: 3, freedom: 1 },
        },
        {
          text: '낮은 금리 대출은 레버리지로 활용 가능, 전략적으로 쓸 수 있어',
          scores: { growth: 3 },
        },
        {
          text: '지금 경험하지 못하면 영영 못할 수도 있으니 합리적 범위에서 OK',
          scores: { experience: 3 },
        },
        {
          text: '빚이 있으면 자유롭지 못하니까 최소한으로만',
          scores: { freedom: 3, safety: 1 },
        },
      ],
    },
    // Q7: 재정 목표
    {
      id: 7,
      question: '1년 뒤 이루고 싶은 재정 목표는?',
      options: [
        {
          text: '비상금 6개월치 + 신용점수 관리 완료',
          scores: { safety: 3, freedom: 1 },
        },
        {
          text: '투자 포트폴리오 수익률 15% 이상 달성',
          scores: { growth: 3 },
        },
        {
          text: '해외여행 2번 + 배우고 싶은 것 하나 마스터',
          scores: { experience: 3 },
        },
        {
          text: '사이드 프로젝트 수익화로 경제적 독립 한 걸음 전진',
          scores: { freedom: 3, growth: 1 },
        },
      ],
    },
    // Q8: 투자 성향
    {
      id: 8,
      question: '가장 끌리는 투자 방식은?',
      options: [
        {
          text: '예금·적금·국채 등 원금 보장 상품 위주',
          scores: { safety: 3 },
        },
        {
          text: '성장주·테마 ETF 등 높은 수익을 노리는 공격적 투자',
          scores: { growth: 3 },
        },
        {
          text: '좋아하는 브랜드나 관심 분야 기업에 소액 투자',
          scores: { experience: 2, growth: 1, freedom: 1 },
        },
        {
          text: '배당주·리츠 등 현금 흐름을 만들어주는 자산',
          scores: { freedom: 3, growth: 1 },
        },
      ],
    },
    // Q9: 라이프스타일 선택
    {
      id: 9,
      question: '주말에 시간이 생겼을 때 돈 쓰는 스타일은?',
      options: [
        {
          text: '집에서 넷플릭스 보면서 배달 한 번 시키는 정도, 아끼는 게 최고',
          scores: { safety: 3 },
        },
        {
          text: '재테크 유튜브 보거나 투자 관련 책 읽기',
          scores: { growth: 3, safety: 1 },
        },
        {
          text: '전시회·팝업스토어·맛집 탐방 등 새로운 경험 찾아다니기',
          scores: { experience: 3 },
        },
        {
          text: '카페에서 사이드 프로젝트 하거나 좋아하는 취미에 시간 투자',
          scores: { freedom: 3, experience: 1 },
        },
      ],
    },
    // Q10: 돈 vs 시간
    {
      id: 10,
      question: '"시간이 곧 돈이다"라는 말에 대한 당신의 생각은?',
      options: [
        {
          text: '맞아, 그래서 꾸준히 모으고 절약하는 게 중요해',
          scores: { safety: 3, growth: 1 },
        },
        {
          text: '맞아, 시간을 돈으로 바꾸는 시스템을 만들어야 해',
          scores: { growth: 3, freedom: 1 },
        },
        {
          text: '돈보다 시간이 더 소중해, 경험에 투자하는 게 진짜 부자',
          scores: { experience: 3, freedom: 1 },
        },
        {
          text: '둘 다 중요하지만 결국 자유를 위해 쓸 수 있어야 의미 있어',
          scores: { freedom: 3 },
        },
      ],
    },
  ],

  results: [
    // 안전제일
    {
      type: 'safety',
      title: '안전제일',
      emoji: '🛡️',
      description:
        '당신은 흔들리지 않는 단단한 재정 기반을 추구하는 사람이에요. 충동적인 소비 대신 계획적인 저축과 안정적인 투자를 선호하죠. 주변 사람들이 "너는 진짜 돈 관리 잘한다"고 말하는 타입, 바로 당신이에요!',
      traits: [
        '계획적인 소비 습관의 소유자',
        '비상금 통장이 늘 든든한 사람',
        '충동구매와는 거리가 먼 이성적 소비러',
        '장기적인 안정을 최우선으로 생각',
      ],
      tips: [
        '너무 아끼기만 하면 삶의 질이 떨어질 수 있어요. 월 예산의 10%는 "나를 위한 소비"로 정해보세요.',
        '안전 자산 위주도 좋지만, 소액으로 인덱스 펀드에 분산 투자해보면 자산 성장에 도움이 돼요.',
        '비상금이 충분하다면, 초과분은 물가상승률 이상의 수익을 낼 수 있는 상품에 넣어보세요.',
      ],
      color: '#1565C0',
      detailedAnalysis: {
        bestMatch: '성장추구',
        bestMatchDescription:
          '안정적인 기반 위에 성장 전략을 더하면 무적의 조합! 당신이 든든하게 지키고, 성장추구형이 수익을 올려주는 환상의 재정 파트너예요.',
        worstMatch: '경험중시',
        worstMatchDescription:
          '"그 돈 저축하면 이자가 얼만데!" vs "인생은 지금이야!" 저축과 경험 소비 사이에서 끝없는 평행선을 달리게 될 수 있어요.',
        celebrity: '김생민',
      },
    },
    // 성장추구
    {
      type: 'growth',
      title: '성장추구',
      emoji: '🚀',
      description:
        '돈이 잠자는 걸 못 참는 당신! 수익을 극대화하고 자산을 불리는 데 누구보다 열정적이에요. 경제 뉴스 체크는 기본이고, 새로운 투자 기회에 항상 귀를 열어두고 있죠. 미래의 워렌 버핏은 바로 당신!',
      traits: [
        '투자 트렌드에 빠삭한 정보통',
        '높은 수익률을 향한 끊임없는 도전',
        '복리의 마법을 믿는 장기 투자자',
        '목표 수익률을 설정하고 달성하는 실행력',
      ],
      tips: [
        '공격적 투자도 좋지만, 전체 자산의 20~30%는 안전 자산으로 보유하는 게 리스크 관리에 좋아요.',
        '투자 수익에만 집중하다 보면 현재의 삶을 놓칠 수 있어요. 분기마다 한 번은 나를 위한 경험에 투자해보세요.',
        '투자 일지를 작성하면 감정적 매매를 줄이고, 나만의 투자 원칙을 세우는 데 큰 도움이 돼요.',
      ],
      color: '#E65100',
      detailedAnalysis: {
        bestMatch: '안전제일',
        bestMatchDescription:
          '공격적인 투자에 안전장치를 달아주는 완벽한 브레이크 역할! 안전제일형이 리스크를 관리해주면 당신은 더 과감하게 도전할 수 있어요.',
        worstMatch: '자유영혼',
        worstMatchDescription:
          '"수익률 극대화가 중요해!" vs "돈보다 자유가 먼저지~" 수익을 향한 열정과 자유를 향한 갈망이 끊임없이 부딪힐 수 있어요.',
        celebrity: '존 리',
      },
    },
    // 경험중시
    {
      type: 'experience',
      title: '경험중시',
      emoji: '✨',
      description:
        '"인생은 한 번뿐이니까!"가 당신의 모토예요. 통장 잔고보다 추억 잔고를 더 소중히 여기는 타입이죠. 새로운 맛집, 여행, 문화생활에 아낌없이 투자하는 당신은 주변에서 가장 이야기가 많은 사람일 거예요.',
      traits: [
        '새로운 경험에 돈을 아끼지 않는 모험가',
        '물건보다 추억에 투자하는 가치 소비러',
        '"해봤어?"라는 질문에 대부분 YES',
        '다양한 경험에서 영감을 얻는 크리에이터',
      ],
      tips: [
        '경험에 투자하는 건 좋지만, 월 경험비 예산을 정해두면 재정 건강도 함께 챙길 수 있어요.',
        '매달 수입의 최소 20%는 자동이체로 저축해두면, 더 큰 경험을 위한 자금도 모을 수 있어요.',
        '경험을 기록하는 습관을 들이면 같은 돈으로도 더 풍성한 만족감을 느낄 수 있어요. 사진 일기 추천!',
      ],
      color: '#7C4DFF',
      detailedAnalysis: {
        bestMatch: '자유영혼',
        bestMatchDescription:
          '함께 경험하고 자유롭게 즐기는 최고의 동반자! 서로 새로운 걸 발견하고 공유하면서 인생을 두 배로 풍성하게 만들어줘요.',
        worstMatch: '안전제일',
        worstMatchDescription:
          '"이번 주말 팝업스토어 가자!" vs "그 돈이면 적금 넣어..." 소비에 대한 근본적인 관점 차이로 대화가 평행선일 수 있어요.',
        celebrity: '곽튜브',
      },
    },
    // 자유영혼
    {
      type: 'freedom',
      title: '자유영혼',
      emoji: '🌊',
      description:
        '경제적 자유를 향해 나아가는 당신! 돈 자체보다 돈이 가져다주는 "자유"에 가치를 두고 있어요. 직장에 얽매이지 않고 하고 싶은 일을 하며 사는 삶을 꿈꾸죠. FIRE족의 마인드를 가진 진정한 자유인이에요.',
      traits: [
        '경제적 독립을 향한 뚜렷한 비전',
        '수입원 다각화에 관심이 많은 멀티 플레이어',
        '돈과 시간의 균형을 중요시하는 균형 감각',
        '남들과 다른 나만의 라이프스타일 추구',
      ],
      tips: [
        '자유를 위한 재정 계획은 구체적일수록 좋아요. "언제까지 얼마"를 숫자로 적어보세요.',
        '사이드 프로젝트도 좋지만, 본업에서의 전문성도 경제적 자유의 든든한 기반이 돼요. 균형을 잡아보세요.',
        '패시브 인컴(배당, 임대 수익 등)을 조금씩 쌓아가면 자유까지의 거리가 확 줄어들어요.',
      ],
      color: '#00BCD4',
      detailedAnalysis: {
        bestMatch: '경험중시',
        bestMatchDescription:
          '삶을 즐기는 방식이 통하는 소울메이트! 경험중시형이 재미있는 곳을 찾아오면 당신은 자유롭게 함께 떠나는 최고의 파트너예요.',
        worstMatch: '성장추구',
        worstMatchDescription:
          '"자유가 최고야!" vs "그래도 수익률은 챙겨야지!" 자유로운 삶의 방식과 수익 극대화 사이에서 가치관 충돌이 올 수 있어요.',
        celebrity: '백종원',
      },
    },
  ],
};
