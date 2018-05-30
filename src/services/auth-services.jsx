const baseUrl = ' https://tseny.herokuapp.com';

export function signup(userData){
    console.log(userData)
return fetch(baseUrl + '/auth/signup', {
    method:'post',
    headers:{
        "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
})
.then(res=>{
    if(!res.ok) return Promise.reject(res);
    return res.json();
  })
  .then(user=>{
      localStorage.setItem('user', JSON.stringify(user))
      return user;
  });
}

export function login(userData){
  return fetch(baseUrl + '/auth/login', {
      method:'post',
      headers:{
          "Content-Type": "application/json"
      },
      body: JSON.stringify(userData),
      credentials: 'include'
  })
  .then(res=>{
      if(!res.ok) return Promise.reject(res);
      return res.json({message: 'Ya estas logueado'});
  })
  .then(user=>{
      localStorage.setItem('user', JSON.stringify(user))
      return;
      //   return user;
  });
}

export function logout(){
    return fetch(baseUrl + '/auth/logout');
}

export function getUser(id){
    return fetch(baseUrl + '/auth/profile/' + id)
    .then(r=>{
        if(!r.ok) return Promise.reject(r.statusText)
        return r.json();
    })
    .then(user=>{
        return user;
    })
}