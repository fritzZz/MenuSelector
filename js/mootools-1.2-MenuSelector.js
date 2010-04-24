/*----------------------------------------------------------------------------\
|                               MenuSelector v0.9                             |
|-----------------------------------------------------------------------------|
|                         Created by Alessandro Franzi                        |
|               (http://franziale.blogspot.com)                               |
|               (http://it.linkedin.com/in/alessandrofranzi)                  |
|-----------------------------------------------------------------------------|
| This software is under GNU General Public License                           |
| - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - |
| GPL - The GNU General Public License    http://www.gnu.org/licenses/gpl.txt |
| Permits anyone the right to use and modify the software without limitations |
| as long as proper  credits are given  and the original  and modified source |
| code are included. Requires  that the final product, software derivate from |
| the original  source or any  software  utilizing a GPL  component, such  as |
| this, is also licensed under the GPL license.                               |
|-----------------------------------------------------------------------------|
| 2010-04-09 | First working version                                          |
|-----------------------------------------------------------------------------|
| Dependencies: mootools 1.2 												  |	
|-----------------------------------------------------------------------------|
| Created 2010-04-09 | All changes are in the log above. | Updated 2010-04-09 |
\----------------------------------------------------------------------------*/
var MenuSelector = new Class({

	Implements: [Events, Options],

	options: {
		id: 'nav_wrap',
		active_id : 'active_nav',
		bg_position : '10px',
		left_pad : '30',
		duration : 1200
	},

	initialize: function(options){
		this.setOptions(options);
		var params = Array.link(arguments, {'container': Element.type, 'options': Object.type, 'togglers': $defined, 'elements': $defined});
		this.youAreHere = new Fx.Tween($(this.options.id), { 
						duration: this.options.duration,
						transition: Fx.Transitions.Elastic.easeOut  
					});
					
		var myDivExt = $(this.options.id);
		if (myDivExt){
			var innerElements = myDivExt.getElements("li");
			if (innerElements){
				innerElements.each(function(item){ 
					item.addEvent('mouseenter', function() { 
						var thisPos = item.getPosition(this.options.id).x  + item.getSize().x - this.options.left_pad; 
						this.youAreHere.cancel();
						this.youAreHere.start('background-position', thisPos + 'px ' + this.options.bg_position + 'px'); 
					}.bind(this));
					item.addEvent('mouseleave', this.currentArrow.bind(this));
				}.bind(this));
			}
		}
		//correct IE rendering problem (without this, it wont go to the active nav onload)
		var elementoActive = myDivExt.getElement('[id='+this.options.active_id+']');
		var activePos = elementoActive.getPosition().x  + elementoActive.getSize().x - this.options.left_pad; 
		$(this.options.id).setStyle('background-position', activePos + 'px ' + this.options.bg_position + 'px');       
	
		//works to set image to starting position in other browsers
		this.currentArrow(); 
	},
	
	currentArrow : function (){
		var elementoActive = $(this.options.id).getElement('[id='+this.options.active_id+']');
		this.youAreHere.cancel();
		var activePos = elementoActive.getPosition(this.options.id).x  + elementoActive.getSize().x - this.options.left_pad; 
		this.youAreHere.start('background-position', activePos + 'px ' + this.options.bg_position + 'px');      
	}
});
