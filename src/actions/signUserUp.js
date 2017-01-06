import $ from 'jquery';
import { browserHistory } from 'react-router'

export default function signUserUp(obj){
  return function(dispatch){
    $.ajax({
        url: 'https://shallow-endr-rails.herokuapp.com/users/signup',
        type: 'POST',
        data: { user: obj },
        dataType: 'JSON'
    }).done(function(response){
      if(response.errors){
        alert(response.errors)
        dispatch({type: "FAILED_LOGIN", payload: response})
      }
      else{
        localStorage.setItem('jwt', response.jwt)
        browserHistory.push('/home')
        dispatch({type: "LOGGING_IN", payload: response})
      }
    })
  }
}
