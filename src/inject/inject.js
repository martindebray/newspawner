chrome.extension.sendMessage({}, function (response) {
  if (/Edge/.test(navigator.userAgent)) {
    alert('Déso Nico, faut un vrai browser par contre!')
  }

  var readyStateCheckInterval = setInterval(function () {
    if (document.readyState === 'complete') {
      clearInterval(readyStateCheckInterval)
      console.log('Wesh alors')
    }
  }, 10)
})
