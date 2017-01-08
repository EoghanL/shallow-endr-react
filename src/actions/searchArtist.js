import $ from 'jquery';

export default function searchArtist(searchTerm){
    const request = $.ajax({
      url: "https://shallow-endr-rails.herokuapp.com/search",
      type: "GET",
      data: { artist: { searchTerm: searchTerm } },
      headers: { authorization: localStorage.jwt }
    })

    return (dispatch) => {
      dispatch({type: 'GET_ARTISTS'})
      request.done((response) => {
        if(response.songs){ dispatch({type: 'GET_SONGS', payload: response}) }
        else { dispatch({type: 'SEARCH_RESULTS', payload: response}) }
      })
    }
}
