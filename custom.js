(function() {
      document.addEventListener('click', function (event) {
        var addStock = '.stock-list__btn--add';
        var removeStock = '.stock-list__btn--remove';
		var buyStock = '.btn-transaction--buy';
		var sellStock = '.btn-transaction--sell';
        var modalOverlayBackground = '.modal__overlay';
		var modalClose = '.modal__close';

        // get event target
        console.log(event.target);
        
        if (event.target.matches(addStock)) {
			event.target.parentElement.parentElement.nextElementSibling.style.display = 'block';
        }
        
        if (event.target.matches(removeStock)) {
        	event.target.parentElement.parentElement.parentElement.style.display = 'none';
        }
        
        if (event.target.matches(buyStock)) {
			document.querySelector('.modal__buy').style.display = 'block';
        }
        
        if (event.target.matches(sellStock)) {
			document.querySelector('.modal__sell').style.display = 'block';
        }
        
        if (event.target.matches(modalOverlayBackground)) {
        	event.target.parentElement.style.display = 'none';
		}
		
        if (event.target.matches(modalClose)) {
        	event.target.parentElement.parentElement.style.display = 'none';
        }
      }, false);
})();