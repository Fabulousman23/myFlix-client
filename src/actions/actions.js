export const SET_MOVIES = 'SET_MOVIES';
export const SET_FILTER = 'SET_FILTER';
export const SET_USER = 'SET_USER';

export function setMovies(value) {
    return {
        type: SET_MOVIES, value
    };
}

export function setFilter(value) {
    return {
        type: SET_FILTER, value
    };
}
export function setUser(user) {
    return {
        type: SET_USER, user
    };
}


// // this is example code, it's just a draft of our app's state
// {
//     visibilityFilter: string,
//     movies: [
//       {title, description, image path}
//       ...
//     ]
//   }