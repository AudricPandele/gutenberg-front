const request = async (_endpoint, _token = null, _body = null, _method = 'GET') => {
  const response = await fetch('http://localhost:1337/'+_endpoint, {
    method: _method,
    headers: {
      'Authorization': _token
    },
    body: _body
  })
  const json = await response.json();
  return json;
};

export default request;
