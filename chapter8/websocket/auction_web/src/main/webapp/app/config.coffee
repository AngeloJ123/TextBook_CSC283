require.config
  paths:
    'login': 'modules/login',
    'donation': 'modules/donation',
    'svg-pie-chart': 'modules/svg-pie-chart',
    'campaigns-map': 'modules/campaigns-map',
    'showHideDiv': 'modules/utils/show-hide-div',
    'loadHtmlContent': 'modules/utils/load-html-content',
    'newContentLoader': 'modules/utils/new-content-loader',
    'way-to-give': 'modules/way-to-give'
    'bower_components': "../bower_components",
    'main': 'main',
    'GoogleMap': '../bower_components/requirejs-google-maps/dist/GoogleMap',
    'auctionApp': "modules/AuctionApp"

unless window.requireTestMode
  require ["main"], ->