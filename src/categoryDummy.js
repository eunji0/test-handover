const categoryDummy = [
    {
      ticket_id: 1,
      ticket_name: "라한호텔",
      ticket_date: "2023.05.22 ~2023.05.25",
      ticket_place: "인천 서구 완정로117번길 35",
      ticket_detail: "오션뷰 조식 미포함 11시 체크아웃",
      ticket_price: 250000,
      ticket_state: "판매중",
      seller_ID: "user1",
      post_date: "2023.05.25",
      category: "hotel",
      url:"https://www.naver.com/"
    },
    {
      ticket_id: 123,
      ticket_name: "롯데월드호텔",
      ticket_date: "2023.04.15 ~2023.04.18",
      ticket_place: "서울 송파구 올림픽로 240",
      ticket_detail: "투숙객 한인당 조식 제공",
      ticket_price: 280000,
      ticket_state: "판매중",
      seller_ID: "user2",
      post_date: "2023.05.26",
      category: "hotel",
      url:"https://www.naver.com/"
    },
    {
      ticket_id: 1423,
      ticket_name: "이스타호텔",
      ticket_date: "2023.06.17 ~2023.06.20",
      ticket_place: "서울 강남구 언주로 626",
      ticket_detail: "조식 제공, 수영장 이용 가능",
      ticket_price: 220000,
      ticket_state: "판매중",
      seller_ID: "user3",
      post_date: "2023.05.27",
      category: "hotel",
      url:"https://www.naver.com/"
    },
    {
      ticket_id: 16345,
      ticket_name: "신라호텔",
      ticket_date: "2023.08.11 ~2023.08.14",
      ticket_place: "서울 중구 삼일대로 65",
      ticket_detail: "저녁식사, 수영장 이용 가능",
      ticket_price: 320000,
      ticket_state: "판매중",
      seller_ID: "user4",
      post_date: "2023.05.28",
      category: "hotel",
      url:"https://www.naver.com/"
    },
    {
      ticket_id: 18562,
      ticket_name: "웨스틴조선호텔",
      ticket_date: "2023.08.11 ~2023.08.14",
      ticket_place: "서울 중구 삼일대로 65",
      ticket_detail: "저녁식사, 수영장 이용 가능",
      ticket_price: 320000,
      ticket_state: "판매중",
      seller_ID: "user4",
      post_date: "2023.05.28",
      category: "hotel",
      url:"https://www.naver.com/"
    },
    {
      ticket_id: 12346,
      seller_ID: "user5",
      ticket_name: "오페라의 유령",
      ticket_place: "국립극장",
      ticket_date: "2022-06-15",
      ticket_price: 100000,
      ticket_state: "판매중",
      ticket_detail: "VIP좌석입니다.",
      post_date: "2023.02.22",
      category: "show",
      url:"https://www.naver.com/"
    },
    {
      ticket_id: 1231,
      seller_ID: "user6",
      ticket_name: "라이온 킹",
      ticket_place: "LG아트센터",
      ticket_date: "2022-07-20",
      ticket_price: 80000,
      ticket_state: "판매중",
      ticket_detail: "A석 좌석입니다.",
      post_date: "2023.02.22",
      category: "show",
      url:"https://www.naver.com/"
    },
    {
      ticket_id: 65421,
      seller_ID: "user7",
      ticket_name: "팬텀 오브 더 오페라",
      ticket_place: "충무아트센터",
      ticket_date: "2022-08-05",
      ticket_price: 120000,
      ticket_state: "판매중",
      ticket_detail: "VIP좌석입니다.",
      post_date: "2023.02.22",
      category: "show",
      url:"https://www.naver.com/"
    },
    {
      ticket_id: 75621,
      seller_ID: "user1",
      ticket_name: "우도 캠핑장",
      ticket_place: "제주도 우도",
      ticket_date: "2023-08-05",
      ticket_price: 40000,
      ticket_state: "판매중",
      ticket_detail: "5월드 코너에서 바닥살이 가능한 캠핑장입니다.",
      post_date: "2023.03.12",
      category: "camping",
      url:"https://www.naver.com/"
      },
      {
        ticket_id: 74521,
      seller_ID: "user4",
      ticket_name: "하늘숲 캠핑장",
      ticket_place: "강원도 인제군",
      ticket_date: "2023-06-15",
      ticket_price: 60000,
      ticket_state: "판매중",
      ticket_detail: "숲속에서의 힐링을 즐길 수 있는 캠핑장입니다.",
      post_date: "2023.03.01",
      category: "camping",
      url:"https://www.naver.com/"
      },
      {
        ticket_id: 9821,
      seller_ID: "user8",
      ticket_name: "강릉 오션캠핑장",
      ticket_place: "강원도 강릉시",
      ticket_date: "2023-07-22",
      ticket_price: 90000,
      ticket_state: "판매중",
      ticket_detail: "바다가 보이는 오션캠핑장입니다.",
      post_date: "2023.02.28",
      category: "camping",
      url:"https://www.naver.com/"
      },
      {
        ticket_id: 31,
      seller_ID: "user9",
      ticket_name: "골프 양도",
      ticket_place: "강원도 강릉시",
      ticket_date: "2023-07-22",
      ticket_price: 90000,
      ticket_state: "판매중",
      ticket_detail: "한 자리 비어서 같이 치실 분 구합니다.",
      post_date: "2023.02.28",
      category: "etc",
      url:"https://www.naver.com/"
      }

      
  ];

  export default categoryDummy;

  export const getTicketById = (id) => {
    return categoryDummy.find((categoryDummy) => categoryDummy.ticket_id === parseInt(id));
  }