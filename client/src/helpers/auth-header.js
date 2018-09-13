import Cookies from 'universal-cookie';

const localStorage = new Cookies();

export function authHeader() {
    // return authorization header with jwt token
    // let user = JSON.parse(localStorage.getItem('user'));
    let user = JSON.parse(unescape(localStorage.get('user')));

    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}