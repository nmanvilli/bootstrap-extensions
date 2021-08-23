// ------------------------------
// Make Dropdown menu work on hover (CSS also involved)
// ------------------------------
$siteNavDropdowns = $('.navbar .nav-item.dropdown');
$siteNavDropdownMenus = $siteNavDropdowns.find('.dropdown-menu');
$siteNavDroprownElements = $siteNavDropdowns.add($siteNavDropdownMenus);
$siteNavDropdowns.hover(
  function() {
    $current = $(this);
    $currentElements = $current.add( $current.children('.dropdown-menu') );
    $otherElements = $siteNavDroprownElements.not($currentElements)
      .removeClass('hovershow');

    $noclicked = true;
    $siteNavDropdowns.each(function() {
      if ( $(this).hasClass('show') ) {
        $noclicked = false;
        return false; // break
      }
    });

    if ($noclicked) {
      if (document.documentElement.clientWidth >= 992) {
        $siteNavDropdowns.not($current).children('.nav-link').blur();
        $otherElements.removeClass('show');
      }
      $currentElements.addClass('hovershow');
    }
  },
  function() {

    $noclicked = true;
    $siteNavDropdowns.each(function() {
      if ( $(this).hasClass('show') ) {
        $noclicked = false;
        return false; // break
      }
    });

    $current = $(this);
    if ($noclicked) {
      $current.add( $current.children('.dropdown-menu') ).removeClass('hovershow');
      $current.children('.nav-link').blur();
    }
  }
