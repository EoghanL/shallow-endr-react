import $ from 'jquery';

export default function getSongs(artist){
  const request = $.ajax({
    url: "https://shallow-endr-rails.herokuapp.com/artists",
    type: "POST",
    data: { artist: artist },
    headers: { authorization: localStorage.jwt }
  });

  return (dispatch) => {
    dispatch({type: 'FETCH_SONGS'})
    request.done((response) => {
      dispatch({type: 'GET_SONGS', payload: response})
    });
  }
}
