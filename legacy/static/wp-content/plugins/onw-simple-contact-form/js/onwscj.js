tinyMCEPopup.requireLangPack();

var onwSCFP = { // define the behavior of the popup
  init: function(){ // Nothing happens at first
  },
  insert: function(){ /*
  The insert function compiles the shortcode and executes the plugin's command to insert it into the editor. the insert function is called with an 'onsubmit' handler for the form in 'onwscp.html'.
  */
    var h = '<div class="onwscf-tinymce-box">[onw_simple_contact_form';
    if(!document.getElementById('onwsc-def-email').checked && document.getElementById('onwsc-email').value != ''){
    // If the box isn't checked and there's a value,
      h += ' to_email="' + document.getElementById('onwsc-email').value +'"';
      // add the 'to_email' attribute to the shortcode
    }
    if(!document.getElementById('onwsc-def-subj').checked && document.getElementById('onwsc-subj').value != ''){
    // If the box isn't checked and there's a value,
      h += ' subject="' + document.getElementById('onwsc-subj').value + '"';
      // add the 'subject' attribute to the shortcode
    }
    h += ']</div>'; // close the shortcode
    // execute the insertion command for the plugin, then...
    tinyMCEPopup.editor.execCommand('onwInsert',false,{cont:h}); 
    // close the popup.
    tinyMCEPopup.close();
  }
}
// Register this popup box.
tinyMCEPopup.onInit.add(onwSCFP.init, onwSCFP);