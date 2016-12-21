import $ from 'jquery'

export default function removeVote(vote_info){
  return function(dispatch){
    $.ajax({
      url: `https://shallow-endr-rails.herokuapp.com/rankings/delete/${vote_info.ranking_id}`,
      type: "POST",
      headers: { authorization: localStorage.jwt },
      data: { ranking: vote_info }
    }).done(function(response){
      return dispatch({type: "REMOVE_VOTE", payload: response})
    })
  }
}
