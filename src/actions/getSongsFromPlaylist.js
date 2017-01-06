import $ from 'jquery'

export default function getSongsFromPlaylist(user_id){
  return function(dispatch){
    $.ajax({
      url: 'https://shallow-endr-rails.herokuapp.com/future_songs',
      type: 'GET',
      data: { future_song: { user_id: user_id}},
      headers: { authorization: localStorage.jwt }
    }).done(function(response){
      dispatch({type: 'VIEW_SAVED_SONGS', payload: response})
    })
  }
}
