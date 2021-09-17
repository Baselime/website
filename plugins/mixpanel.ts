import mixpanel from "mixpanel-browser";

mixpanel.init("8b0659ecf51726fa9d3e78a44e632ee6", {
  debug: true,
  loaded: function() {
  }
});

export default mixpanel;
