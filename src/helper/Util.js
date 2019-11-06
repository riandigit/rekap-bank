const TOKEN_KEY = 'jwt';


export  function login(props) {
    console.log(props);
    sessionStorage.setItem(TOKEN_KEY, props);
}

export const logout = () => {
    sessionStorage.removeItem(TOKEN_KEY);
}

export const isLogin = () => {
    if (sessionStorage.getItem(TOKEN_KEY)) {
        return true;
    }

    return false;
}