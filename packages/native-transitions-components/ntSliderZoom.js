Template.body.events({

	'click .nt-slider-zoom .nt-photo': function (event, template) {

			//Get the img, container and content
			var $img = $(event.currentTarget).find('img');
			var $container = $(event.currentTarget).parents('.nt-slider');
			var $content = $(event.currentTarget).parents('.nt-content');

			//Scroll up
			var offsetTop = $container[0].offsetTop;
     		$content.animate({scrollTop: offsetTop }, 200);

			//Check if it's already enlarged
			if ($img.hasClass('nt-enlarged')) {
				//Return to normal
				$img.velocity({
					    width: $img.data('originalWidth'),
					    height: $img.data('originalHeight')
				}, { duration: 200 });

				//Toggle the enlarged class
				$img.removeClass('nt-enlarged');	

			} else {
				//Reduce any other enlarged images
				var $enlarged = $container.find('.nt-enlarged');
				$enlarged.velocity({
					    width: $enlarged.data('originalWidth'),
					    height: $enlarged.data('originalHeight')
				}, { 
					duration: 200,
					complete: function() {
						$(this).removeClass('nt-enlarged');
					} 
				});
				//$enlarged.css('width', $enlarged.data('originalWidth'));
				//$enlarged.css('height', $enlarged.data('originalHeight'));

				//Save the original sizes
				$img.data('originalWidth', $img.width());
				$img.data('originalHeight', $img.height());

				//Calculate the bigger size (100% of the viewport)
				var ratio = $(window).width() / $img.width();
				var newWidth = $(window).width() + 'px';
				var newHeight = ( $img.height() * ratio  ) + 'px';
				//Animate
				$img.velocity({
					    width: newWidth,
					    height: newHeight
				}, { 
					duration: 200,
					complete: function() {
						var offsetLeft = event.currentTarget.offsetLeft;
     					$container.animate({scrollLeft: offsetLeft }, 200);
     					$img.addClass('nt-enlarged');
					}

				});

				// //Scroll into place
				// Meteor.setTimeout(function() {
					
				// }, 500);
				
			}
			
					
		}
});
