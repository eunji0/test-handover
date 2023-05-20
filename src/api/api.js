import axios from 'axios';

const baseURL = 'http://15.164.244.154/api';
// const baseURL = 'http://handover.p-e.kr/api';

export const userToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiLsnYDsp4AiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjg1NDEyODIwfQ.Inma1bq4Rzri6ok2ucjvmL6v13K6zv2GIJNDC1UQ-TPni_VSQGGxOe0TWtbu8AojGuI8nrE1rFdxLBIVaNi9pQ";


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
export const getCommentsByMatchId  = async (matchId, page, userToken) => {
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

//판매상태 변경