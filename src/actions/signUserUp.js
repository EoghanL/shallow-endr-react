import $ from 'jquery';
import logUserIn from './logUserIn';

export default function signUserUp(obj){
  return function(dispatch){
    $.ajax({
        url: 'http://localhost:3000/users/signup',
        type: 'POST',
        data: { user: obj },
        dataType: 'JSON'
    }).done(function(response){
      //need to log user in here if they successfully sign up
      //importing and trying to use the logUserIn function isn't working correctly
      debugger
      //response returns the user_id as response.id, need to change this into a jwt and let app know someone
      //is logged in?
    })
  }
}
