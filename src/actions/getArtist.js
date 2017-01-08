import $ from 'jquery'

export default function getArtist(id){
    const request = $.ajax({
      url: `https://shallow-endr-rails.herokuapp.com/artists/${id}`,
      type: 'GET',
      headers: { authorization: localStorage.jwt }
    });
    return (dispatch) => {
      request.done((response) => {
        dispatch({type: "GET_SONGS", payload: response})
    });
  }
}
