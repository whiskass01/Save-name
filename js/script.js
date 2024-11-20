var input = document.getElementById('saveServer').value;
localStorage.setItem('server', input);

document.getElementById('saveServer').value = localStorage.getItem('server');
getElementById()