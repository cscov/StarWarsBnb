export const signup = user => (
  $.ajax({
    url: '/api/users',
    method: 'POST',
    data: {user}
  })
);

export const login = user => (
  $.ajax({
    url: 'api/session',
    method: 'POST',
    data: {user}
  })
);

export const logout = () => (
  $.ajax({
    url: 'api/session',
    method: 'DELETE'
  })
);

export const demoLogin = () => (
  $.ajax({
    url: 'api/session',
    method: 'POST',
    data: {user: {first_name: "Leia", email_address: "cscov", password: 123456}}
  })
);
