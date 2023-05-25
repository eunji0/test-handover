import axios from 'axios';

const baseURL = 'http://15.164.244.154/api';
// const baseURL = 'http://handover.p-e.kr/api';

// export const userToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiLrp53rmJAiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjg1ODI0Njc2fQ.L0zzkFRlQmu_kKL9eehFmuRneh7kYSydMMrjzdH0Wsl21A9d3uF0tPK_XnWZouRGbTSF8tlpPtJAxaJuV0bBwg";
// export const userName = "망또";//원래는 로그인 api에서 가져옴

// export const userToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiLsnYDsp4AiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjg1NzM3Njg5fQ.3vqfVxTl4_GtoAPtrtx5_6KREJAiWu7HOgAAdoCdlnzGskkObNqUOyNMYlCDJ_SfkXh1QVeSpKzDJ9WklUpZTg";
// export const userName = "은지";//원래는 로그인 api에서 가져옴

export const userToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyMiIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2ODU5MTI1MTR9.lAzAr1Po9oZE2ea7wJkAOcsk1fPnPitnQT-3TZV4CQSfgbQ1XtVhG-woZ4MrwR9_SyZQ-W1sZStwoqbvX7X59w";
export const userName = "user2";

//전체 데이터 API
export const getMatches = (userToken) => {
  return axios.get(`${baseURL}/matches`, {
    headers: {
      'Authorization': `Bearer ${userToken}`
    }
  });
};

//즐겨찾기 목록 API 
export const getFavoriteMatches = (userToken) => {
  return axios.get(`${baseURL}/matches/favorites`, {
    headers: {
      'Authorization': `Bearer ${userToken}`,
    },
  });
};

//즐겨찾기 추가, 삭제 API
export const toggleFavoriteMatch = (userToken, matchingId) => {
  return axios.post(
    `${baseURL}/matches/${matchingId}/favorites`,
    {},
    {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    }
  );
};

//노인돌봄 데이터 API
export const getElderlyMatches = (userToken) => {
  return axios.get(`${baseURL}/matches/category?category=노인돌봄`, {
    headers: {
      'Authorization': `Bearer ${userToken}`
    }
  });
};

//아이돌봄 데이터 API
export const getKidsMatches = (userToken) => {
  return axios.get(`${baseURL}/matches/category?category=아이돌봄`, {
    headers: {
      'Authorization': `Bearer ${userToken}`
    }
  });
};


//반려동물 데이터 API
export const getPetMatches = (userToken) => {
  return axios.get(`${baseURL}/matches/category?category=반려동물`, {
    headers: {
      'Authorization': `Bearer ${userToken}`
    }
  });
};

//기타 데이터 API
export const getEtcMatches = (userToken) => {
  return axios.get(`${baseURL}/matches/category?category=기타`, {
    headers: {
      'Authorization': `Bearer ${userToken}`
    }
  });
};

//검색 API
export const handleSearch = async (searchTerm, userToken) => {
  try {
    const response = await axios.get(`${baseURL}/matches/search?keyword=${searchTerm}&page=0`, {
      headers: {
        'Authorization': `Bearer ${userToken}`
      }
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

//단건 매칭글 조회
export const getMatchById = async (id) => {
  try {
    const response = await axios.get(`${baseURL}/matches/${id}`, {
      headers: {
        'Authorization': `Bearer ${userToken}`
      }
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

//댓글달기
export const postComment = async (matchingId, text, userToken) => {
  const newComment = {
    matchId: matchingId,
    content: text,
  };

  try {
    const response = await axios.post(
      `${baseURL}/match/comments`,
      newComment,
      {
        headers: {
          'Authorization': `Bearer ${userToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

//댓글 목록
export const getCommentsByMatchId = async (matchId, page, userToken) => {
  try {
    const response = await axios.get(`${baseURL}/match/comments`, {
      params: {
        matchId,
        page,
      },
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("댓글 목록 불러오기 실패:", error);
    throw error;
  }
};

//내가 쓴 매칭글 API
export const getMyMatchingsPosts = async (page, userToken) => {
  try {
    const response = await axios.get(`${baseURL}/matches/posts`, {
      params: {
        page: page
      },
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('매칭글 조회 실패');
  }
};

//매칭상태 변경
export const toggleMatchStatus = async (id, userToken) => {
  try {
    const response = await axios.patch(
      `${baseURL}/matches/${id}/edit/matchStatus`,
      {},
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    );
    const updatedStatus = response.data.matchStatus;
    return updatedStatus;
  } catch (error) {
    console.error('매칭글 상태 변경 실패:', error);
    throw error;
  }
};


//댓글 삭제
export const deleteCommentById = async (commentId, userToken) => {
  try {
    const response = await fetch(`${baseURL}/match/comments/${commentId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });

    if (response.ok) {
      // console.log("댓글 삭제 성공");
    } else {
      // 삭제 실패 시의 처리
      console.error("댓글 삭제 실패");
    }
  } catch (error) {
    console.error("댓글 삭제 실패:", error);
  }
};

//댓글 수정
export const updateCommentById = async (commentId, content, userToken) => {
  const url = `${baseURL}/match/comments/${commentId}`;
  const body = { content };

  try {
    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken}`,
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      console.log('댓글이 수정되었습니다.');
    } else {
      console.error('댓글 수정 실패');
    }
  } catch (error) {
    console.error('댓글 수정 요청 실패:', error);
  }
};

//신고하기
export const reportId = async (reportedMatchId, content, userToken, onClose) => {
  if (content.trim() === '') return;

  try {
    const requestBody = {
      reportedMatchId: reportedMatchId,
      content: content
    };

    const headers = {
      Authorization: `Bearer ${userToken}`
    };

    const response = await axios.post(`${baseURL}/reports/matches`, requestBody, { headers });

    console.log(response.data);
    onClose();
  } catch (error) {
    console.error(error);
  }
};

//프로필 수정하기
export const updateProfile = async (nickname, password, userToken) => {
  try {
    const requestBody = {
      nickname: nickname,
      password: password
    };

    const headers = {
      Authorization: `Bearer ${userToken}`
    };

    const response = await axios.patch(`${baseURL}/members`, requestBody, { headers });

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("프로필 업데이트에 실패했습니다.");
  }
};

//탈퇴하기
export const outProfile = async (userToken, onClose) => {
  try {
    const headers = {
      Authorization: `Bearer ${userToken}`
    };

    const response = await axios.delete(`${baseURL}/members`, { headers });

    console.log(response.data);
    onClose();
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("회원 탈퇴실패.");
  }
};

//쪽지함
export const getLastConversation = async (userToken, currentUser) => {
  try {
    const headers = {
      Authorization: `Bearer ${userToken}`
    };

    const sentMessagesResponse = await axios.get(`${baseURL}/messages/sender`, { headers });
    const lastSentMessage = sentMessagesResponse.data.result.data.messages;

    const receivedMessagesResponse = await axios.get(`${baseURL}/messages/receiver`, { headers });
    const lastReceiveMessage = receivedMessagesResponse.data.result.data.messages;

    // 다른 유저들의 이름 목록을 생성
    const otherUsers = Array.from(new Set(lastSentMessage.concat(lastReceiveMessage).map(message => message.senderUsername !== currentUser ? message.senderUsername : message.receiverUsername)));

    // 각 유저별로 마지막 대화 찾기
    const lastConversations = otherUsers.map(username => {
      const userMessages = lastSentMessage.concat(lastReceiveMessage).filter(message => message.senderUsername === username || message.receiverUsername === username);
      const lastMessage = userMessages.reduce((prev, curr) => (prev.id > curr.id ? prev : curr));
      return {
        username: username,
        content: lastMessage.content,
        time: lastMessage.sentAt
      };
    });

    // console.log(lastConversations);
    return lastConversations;

  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch last conversations.");
  }
};
