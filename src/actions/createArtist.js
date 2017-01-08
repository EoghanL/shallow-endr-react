import $ from 'jquery'

export default function createArtist(artist){
    const request = $.ajax({
      url: "https://shallow-endr-rails.herokuapp.com/artists",
      type: 'POST',
      data: {artist: { mb_id: artist.mb_id, name: artist.name, display_name: artist.display_name } },
      headers: { authorization: localStorage.jwt }
    })

    return (dispatch) => {
      dispatch({type: 'FETCH_SONGS'})
      request.done((response) => {
        return dispatch({type: 'GET_SONGS', payload: response})
      })
    }
  }
