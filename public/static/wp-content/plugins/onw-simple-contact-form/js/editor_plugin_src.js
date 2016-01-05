(function(){
// Create the plugin
tinymce.create('tinymce.plugins.ONWSC', {
  init : function(a, b) { // Initialization function
    a.addCommand('mceONWSC', function(){ // Set how the button acts
      a.windowManager.open({ // open the dialogue
        file: b + '/onwscp.html', // use this file for the dialogue, with the following settings
        width: 300 + parseInt(a.getLang('onwscp.delta_width',0)),
        height: 200 + parseInt(a.getLang('onwscp.delta_height',0)),
        inline: 1
      }, {
        plugin_url : b
      });
    });
    a.addCommand('onwInsert', function(c,d){ // Command to insert shortcode
      //insert the shortcode at the cursor's location
      a.execCommand(tinymce.isGecko?"insertHTML":"mceInsertContent",false,d.cont);
    });
    // Add the button, which will execute the 'mceONWSC' command
    a.addButton('onwscb', {title: 'Add a Simple Contact Form', cmd: 'mceONWSC', image:b+'/onwscfi.gif'});
  },
  getInfo: function(){ // Plugin info
    return {
      longname: 'ONW Simple Contact Form',
      author: 'John P. Bloch',
      authorurl: 'http://www.olympianetworks.com/about-us/developers/john-p-bloch/',
      infourl: 'http://www.olympianetworks.com/projects/wordpress-plugins/onw-simple-contact-form/',
      version : tinymce.majorVersion + "." + tinymce.minorVersion
    };
  }
});
tinymce.PluginManager.add('onwsc',tinymce.plugins.ONWSC);
// register the plugin
})();