import $ from 'jquery'

export default function signUserUp(obj){
  return function(dispatch){
    $.ajax({
        url: 'https://shallow-endr-rails.herokuapp.com/users/signup',
        type: 'POST',
        data: { user: obj },
        dataType: 'JSON'
    }).done((response) => {
    })
  }
}
