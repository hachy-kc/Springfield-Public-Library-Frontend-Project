function register({username, email, password}) {
    return fetch('/api/register', {
        method: 'POST',