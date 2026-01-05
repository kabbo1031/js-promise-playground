function run(){
  const result = document.getElementById('result');
  result.innerText = 'Running...';

  const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      const ok = Math.random() > 0.5;
      ok ? resolve('Promise resolved ✅') : reject('Promise rejected ❌');
    }, 1500);
  });

  promise
    .then(msg => result.innerText = msg)
    .catch(err => result.innerText = err);
}
