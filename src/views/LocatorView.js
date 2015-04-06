define([
  'dojo/_base/declare',
  'dojo/topic',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'dbind/bind',
  'stores/LocatorStore',
  'helpers/NumFormatter',
  'dojo/text!./templates/LocatorView.html'
], function(
  declare, topic,
  _WidgetBase, _TemplatedMixin,
  bind, store, format,
  template
) {

  var fixed = format(3);

  return declare([_WidgetBase, _TemplatedMixin], {
    templateString: template,
    postCreate: function() {
      var numFixed = function(i) {
        return fixed(i);
      };
      var xStore = bind(numFixed).to(store, 'x');
      var yStore = bind(numFixed).to(store, 'y');

      bind(this.yNode).to(yStore);
      bind(this.xNode).to(xStore);
    }
  });

});
