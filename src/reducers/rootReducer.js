export default function users(state={is_fetching: false}, action){
  switch (action.type) {
    case 'FETCH_USERS':
      return state.concat(action.payload)
    case 'SHOW_USERS':
      return state
    case 'LOGGING_IN':
      return Object.assign({}, state, { user_id: action.payload.user_id, jwt: action.payload.jwt, logged_in: true })
    case 'LOGGING_OUT':
      return Object.assign({}, state, { user_id: action.payload.user_id, logged_in: action.payload.logged_in })
    case 'FAILED_LOGIN':
      return state
    case 'SEARCH_RESULTS':
      return Object.assign({}, state, { existingArtists: action.payload.existing_artists, newArtists: action.payload.new_artists, songs: null, is_fetching: false })
    case 'GET_SONGS':
      return Object.assign({}, state, { artistToSpecify: null, artist: action.payload.artist, songs: action.payload.songs, rankings: action.payload.rankings, existingArtists: [], newArtists: [], is_fetching: false })
    case 'VIEW_SAVED_SONGS':
      return Object.assign({}, state, { savedSongs: action.payload })
    case 'GET_USER_ID':
      return Object.assign({}, state, { user_id: action.payload.user_id })
    case 'CAST_VOTE':
      return Object.assign({}, state, { rankings: action.payload.rankings, songs: action.payload.songs })
    case 'REMOVE_VOTE':
      return Object.assign({}, state, { rankings: action.payload.rankings, songs: action.payload.songs })
    case 'GET_ARTISTS':
      return Object.assign({}, state, { is_fetching: true })
    case 'FETCH_SONGS':
      return Object.assign({}, state, { is_fetching: true })
    default:
      return state
  }
}
