chrome.extension.sendMessage({}, function (response) {
  var readyStateCheckInterval = setInterval(function () {
    if (document.readyState === 'complete') {
      clearInterval(readyStateCheckInterval)
      masterPawner()

      console.log(
        'Find out more over there http://djw5nmsmjljcf5reiugq3irwitfo7nx2krjmrxslyhrzfxcspebmotqd.onion'
      )
    }
  }, 10)
})

function masterPawner () {
  ripSatya()

  if (window.location.origin.indexOf('lequipe.fr') > -1) {
    ekipekip()
  }
}

function ripSatya () {
  if (/Edge/.test(navigator.userAgent)) {
    alert('Déso Nico, faut un vrai browser par contre!')
  }
}

function ekipekip () {
  window.addEventListener(
    'scroll',
    function (event) {
      event.stopImmediatePropagation()
    },
    true
  )
}
