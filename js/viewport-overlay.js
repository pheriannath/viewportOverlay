var viewport_overlay = (function () {
  // baseline object
  var measurements = {
    'viewportWidth': 0,
    'viewportHeight': 0,
    'deviceWidth': 0,
    'deviceHeight': 0,
    'devicePixelRatio': 0
  }

  function _measureViewport () {
    //viewport
    measurements.viewportWidth = window.innerWidth;
    measurements.viewportHeight = window.innerHeight;
    //physical device
    measurements.deviceWidth = window.screen.width;
    measurements.deviceHeight = window.screen.height;
    measurements.devicePixelRatio = window.devicePixelRatio;

    for (prop in measurements) {
      var output = document.querySelector('#' + prop + ' .value');
      output.innerHTML = ' ' + measurements[prop];
    }
  }

  function init () {
    // Create the overlay container
    var viewport_overlay = document.createElement('div');
    viewport_overlay.className = 'viewport-overlay';

    // Create title
    var title = document.createElement('div');
    title.innerHTML = 'Viewport Info';
    title.className = 'title';

    viewport_overlay.appendChild(title);

    // Create property divs
    for (prop in measurements) {
      // Create the div
      var newDiv = document.createElement('div');
      newDiv.id = prop;

      // Create a label
      var label = document.createElement('span');
      label.className = 'label';

      var labelText = document.createTextNode(prop+':');
      label.appendChild(labelText);

      newDiv.appendChild(label);

      // Create a placeholder for the property value
      var value = document.createElement('span');
      value.className = 'value';

      newDiv.appendChild(value);

      // Add the div to the tool container
      viewport_overlay.appendChild(newDiv);
    }

    // Add the tool container to the document body
    document.body.appendChild(viewport_overlay);

    // Add an event listener to resize
    window.addEventListener('resize', _measureViewport);

    // Update the values
    _measureViewport();
  }

  return {
    init: init
  }
})();




