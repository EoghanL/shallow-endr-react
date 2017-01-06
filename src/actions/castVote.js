import $ from 'jquery'

export default function castVote(ranking){
  return function(dispatch){
    $.ajax({
      url: "https://shallow-endr-rails.herokuapp.com/rankings",
      type: "POST",
      headers: { authorization: localStorage.jwt },
      data: { ranking: ranking }
    }).done(function(response){
      return dispatch({type: "CAST_VOTE", payload: response})
    })
  }
}
