import axios from 'axios';

export const postGuestHouseInfo = (payload) => (dispatch, getState) => {
  const { extraServiceList } = getState().registerGuestHouseInfoReducer;

  const formData = new FormData();
  formData.append('name', payload.name);
  formData.append('mainNumber', payload.mainNumber);
  formData.append('extra', putSeparator(extraServiceList));
  formData.append('image', payload.image);

  axios
    .post(process.env.POST_GUESTHOUSE_INFO, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
    .then((response) => {
      if (response.status === 400) {
        alert("서버 등록 오류! \n'" + response.message + "'\n처음 화면으로 돌아갑니다");
        location.reload();
      }
      if (response.status === 500) {
        alert("서버 등록 오류! \n'" + response.message + "'\n처음 화면으로 돌아갑니다");
        location.reload();
      }
      alert("서버 등록 오류! \n'" + response.status + "'\n처음 화면으로 돌아갑니다");
      location.reload();
    });
};

const putSeparator = (array) => {
  const separator = '☆§♥♨☎';
  return array.join(separator);
};
