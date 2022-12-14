require.config
  paths:
    'login': 'modules/login',
    'donation': 'modules/donation',
    'svg-pie-chart': 'modules/svg-pie-chart',
    'campaigns-map': 'modules/campaigns-map',
    'showHideDiv': 'modules/utils/show-hide-div',
    'loadHtmlContent': 'modules/utils/load-html-content',
    'newContentLoader': 'modules/utils/new-content-loader',
    'who-we-are': 'modules/who-we-are',
    'what-we-do': 'modules/what-we-do',
    'where-we-work': 'modules/where-we-work',
    'way-to-give': 'modules/way-to-give'
    'bower_components': "../bower_components",
    'jquery': '../bower_components/jquery/jquery'
    'main': 'main',
    'GoogleMap': '../bower_components/requirejs-google-maps/dist/GoogleMap',
    'async': '../bower_components/requirejs-plugins/src/async'

unless window.requireTestMode
  require ["main"], ->