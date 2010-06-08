/**
 * Rates JS
 * Checks for invalid date ranges from the end user, and rebinds after CCK add another item ahah
 */
if (Drupal.jsEnabled) {
	
	$(document).ready( function() {
    
    _rebindElements();
    
    $(document).bind( 'ajaxComplete', function() { //This resets the elements if CCK add another is used. This is compatible for jQuery 1.2.6 +
      
      //Drupal.trace( 'Ajax Complete' );
      _rebindElements();
      
    } );
    
    function _rebindElements() { //@todo I want this to warn you via javascript before you submit the form about validation.
    
    }
    
    //end document ready
    
	} );
  
  //End JS endabled

}