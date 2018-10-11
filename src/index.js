// import(/* webpackChunkName: "async-bar" */'./async-bar').then(() => console.log('dynamic import success'))
import('./app').then(function() {
  document.getElementById('root').textContent = 'App Loaded!'
})
