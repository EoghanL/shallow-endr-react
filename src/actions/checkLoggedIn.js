import getUserId from './getUserId';

export default function checkLoggedIn(){
  if (localStorage.jwt) {
    getUserId()
  }
}
