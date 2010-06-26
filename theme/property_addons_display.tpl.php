<?php
/**
 * @param string $property_is_on_promotion
 * @param string $promotional_teaser
 * @param string $promotional_teaser
 * @param string $property_is_for_sale
 * @param string $property_is_featured
 * @param string $property_is_featured_price_point
 */
?>
<div class="property-addons" >
  <?php if ($property_is_on_promotion) : ?>
  <h4>This property is on Promotion</h4>
  <?php endif; ?>
  <?php if ($property_is_on_promotion_price_point && $property_is_on_promotion_price_point != 'CHOOSE' ) : ?>
  <p>$<?php print $property_is_on_promotion_price_point; ?></p>
	<?php endif; ?>
  <?php if ($promotional_teaser) : ?>
  <p class="promotional-teaser"><?php print $promotional_teaser; ?></p>
  <?php endif; ?>
  <?php if ($promotional_details) : ?>
  <p class="promotional-details"><?php print $promotional_details; ?></p>
  <?php endif; ?>
  <?php if ($property_is_for_sale) : ?>
  <h4>This Property Is For Sale</h4>
  <?php endif; ?>
  <?php if ($property_is_for_sale_price_point && $property_is_for_sale_price_point != 'CHOOSE' ) : ?>
  <p>$<?php print $property_is_for_sale_price_point; ?></p>
	<?php endif; ?>
  <?php if ($property_is_featured) : ?>
  <h4>This Property Is Featured</h4>
  <?php endif; ?>
  <?php if ($property_is_featured_price_point && $property_is_featured_price_point != 'CHOOSE' ) : ?>
  <p>$<?php print $property_is_featured_price_point; ?></p>
	<?php endif; ?>
</div>