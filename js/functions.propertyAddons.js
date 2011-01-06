/**
 * Rates JS
 * Checks for invalid date ranges from the end user, and rebinds after CCK add another item ahah
 */
if (Drupal.jsEnabled) {
	
	$(document).ready( function() {
    
    _rebindElements();
    
    $(document).bind( 'ajaxComplete', function() { //This resets the elements if CCK add another is used. This is compatible for jQuery 1.2.6 +
      
      _rebindElements();
      
    } );
    
    function _rebindElements() { //@todo I want this to warn you via javascript before you submit the form about validation. I know this can be reduced, but I am not quite sure of the validation right this second.
      
      var propertyIsAlreadyOnPromotion = $('input.property-addons-is-on-promotion').is(':checked');
      var propertyIsAlreadyOnSale      = $('input.property-addons-is-for-sale').is(':checked');
      var propertyIsAlreadyFeatured    = $('input.property-addons-is-featured').is(':checked');
      
      //Promotions/Specials
      $('input#edit-field-property-addons-0-property-is-on-promotion').bind( 'change', function() { //This adds an alert confirmation for adding a promotion
        
        if ( propertyIsAlreadyOnPromotion === false ) { //If this property is not on promotion, and they are setting it to true, then we need the confirmation
          
          if ( $(this).is(':checked') == true ) {
            
            if ( confirm( 'Do you wish to set this property as a promotion? You will receive an invoice for this transaction.' ) ) {
              
              $(this).attr('checked', true);
              var inputs = $("input[name='field_property_addons[0][property_is_on_promotion_price_point]']");
              inputs.each( function(e) { if ( e == 1 ) { $(this).attr('checked', true); } });
              
            } else {
              
              $(this).attr('checked', false);
              
            }
            
          }
          
        }
        
        if ( propertyIsAlreadyOnPromotion === true ) { //If they have already placed this on promotion, and are changing to off, then flag the message
          
          if ( $(this).is(':checked') == false ) {
            
            if ( confirm( 'Do you wish to remove this property from the promotion? When you save this property, Maya Blue will be notified that you wish to have this property removed from Promotion, and you will not be charged anymore for this add-on.' ) ) {
              
              $(this).attr('checked', false);
              $('input#edit-field-property-addons-0-property-is-on-promotion-price-point-CHOOSE').attr( 'checked', true );
              
            } else {
              
              $(this).attr('checked', true);
              
            }
            
          }
          
        }
        
        //If they uncheck, reset the radio buttons no matter what
        if ( $(this).is(':checked') == false ) {
          $('input#edit-field-property-addons-0-property-is-on-promotion-price-point-CHOOSE').attr( 'checked', true );
        }
        
        return false;
      
      } );
      
      //For Sale
      $('input#edit-field-property-addons-0-property-is-for-sale').bind( 'change', function() { //This adds an alert confirmation for adding an item for sale
        
        if ( propertyIsAlreadyOnSale === false ) { //If this property is not on sale, and they are setting it to true, then we need the confirmation
          
          if ( $(this).is(':checked') == true ) {
            
            if ( confirm( 'Do you wish to set this property as On Sale? You will receive an invoice for this transaction.' ) ) {
              
              $(this).attr('checked', true);
              var inputs = $("input[name='field_property_addons[0][property_is_for_sale_price_point]']");
              inputs.each( function(e) { if ( e == 1 ) { $(this).attr('checked', true); } });
              
            } else {
              
              $(this).attr('checked', false);
              
            }
            
          }
          
        }
        
        if ( propertyIsAlreadyOnSale === true ) { //If they have already placed this on sale, and are changing to off, then flag the message
          
          if ( $(this).is(':checked') == false ) {
            
            if ( confirm( 'Do you wish to remove this property from being On Sale? When you save this property, Maya Blue will be notified that you wish to have this property removed from On Sale, and you will not be charged anymore for this add-on.' ) ) {
              
              $(this).attr('checked', false);
              $('input#edit-field-property-addons-0-property-is-for-sale-price-point-CHOOSE').attr( 'checked', true );
              
            } else {
              
              $(this).attr('checked', true);
              
            }
            
          }
          
        }
        
        //If they uncheck, reset the radio buttons no matter what
        if ( $(this).is(':checked') == false ) {
          $('input#edit-field-property-addons-0-property-is-for-sale-price-point-CHOOSE').attr( 'checked', true );
        }
        
        return false;
      
      } );
      
      //Featured Property
      $('input#edit-field-property-addons-0-property-is-featured').bind( 'change', function() { //This adds an alert confirmation for adding an item featured
        
        if ( propertyIsAlreadyFeatured === false ) { //If this property is not featured, and they are setting it to true, then we need the confirmation
          
          if ( $(this).is(':checked') == true ) {
            
            if ( confirm( 'Do you wish to set this property as a featured property? You will receive an invoice for this transaction.' ) ) {
              
              $(this).attr('checked', true);
              var inputs = $("input[name='field_property_addons[0][property_is_featured_price_point]']");
              inputs.attr( 'checked', true );
              inputs.each( function(e) { if ( e == 1 ) { $(this).attr('checked', true); } });
              
            } else {
              
              $(this).attr('checked', false);
              
            }
            
          }

        }
        
        if ( propertyIsAlreadyFeatured === true ) { //If they have already placed this as featured, and are changing to off, then flag the message
          
          if ( $(this).is(':checked') == false ) {
            
            if ( confirm( 'Do you wish to remove this property from being Featured? When you save this property, Maya Blue will be notified that you wish to have this property removed from the Featured List, and you will not be charged anymore for this add-on.' ) ) {
              
              $(this).attr('checked', false);
              $('input#edit-field-property-addons-0-property-is-featured-price-point-CHOOSE').attr( 'checked', true );
              
            } else {
              
              $(this).attr('checked', true);
              
            }
            
          }
          
        }
        
        //If they uncheck, reset the radio buttons no matter what
        if ( $(this).is(':checked') == false ) {
          $('input#edit-field-property-addons-0-property-is-featured-price-point-CHOOSE').attr( 'checked', true );
        }
        
        return false;
      
      } );
    
    }
    
    //end document ready
    
	} );
  
  //End JS endabled

}