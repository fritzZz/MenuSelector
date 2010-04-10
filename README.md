MenuSelector
===========

MenuSelector is a simple Mootools class that help you to add a nice effect to your menu.

![Screenshot](http://franziale.netsons.org/MenuSelector/screen.png)

How to Use
----------

How you can see, this is a typical list with a div container (nav_wrap) used to apply the script and render the style. I added nav_wrap css class to give it a default style, but you can replace it with another class.
"active_nav" is the name of the class for the selected menu, this class name can be changed in the options of Mootools class. 

### HTML
	<div id="nav_wrap"> 
		<div id="nav"> 
			<ul> 
			<li  id="active_nav" > 
				<a href="http://localhost:8080/fooApp/"> 
					<span>Home</span> 
				</a> 
			</li>  
			<li > 
				<a href="http://localhost:8080/fooApp/Blog"> 
					<span>Blog</span> 
				</a> 
			</li>  
			</ul> 
		</div> 
	</div> 

This is the version of my sample for an orizzontal menu.

### CSS
	/*  NAVIGATION */
	#nav_wrap {
		height: 60px; 
		padding-top: 2em;
		background-image: url(../images/nav/nav_arrow.png); 
		background-repeat: no-repeat;
		background-position: -100px 40px;
	}
	#nav_wrap_sub {
		height: 60px; 
		padding-bottom: 2em;
		background-image: url(../images/nav/nav_arrow_bot_up.png); 
		background-repeat: no-repeat;
		background-position: -100px -90px;
	}
	#nav {
		width: 100%;
		height: 60px;
	}
	
	#nav ul{
		list-style-type: none;
		padding: 0;
		margin: 0;
		margin-left: 10px;
		width: 100%;
		height: auto;
		position: relative;
	}
		
	#nav ul li{
		display: block;
		float: left;
		cursor: pointer;
		
	}
			
	#nav ul li a{
		background-image: url(../images/nav/nav_l.png); 
		background-repeat: no-repeat;
		background-position: left top;
		padding: 0px 0px 13px 15px;
		color: #333333;
		font-size: 1.2em;
		text-decoration: none;
		float:left;
	}
				
	#nav ul li a span{
		background-image: url(../images/nav/nav_r.png); 
		background-repeat: no-repeat;
		padding: 11px 20px 13px 5px;
		background-position: top right;
		float:left;
		cursor: pointer;
	}
				
	#nav ul li a:hover{
		color: white;
	}
						
	#active_nav {
		padding-top: 2px;
	}
	
	#active_nav a{ 
		background-image: url(../images/nav/nav_l_a.png) !important;	 							
	}
	
	#active_nav a span{
		background-image: url(../images/nav/nav_r_a.png) !important; 
		padding-top: 18px;
	}
						
	#active_nav a:hover{
		color: black !important;
	}

You can initialize the menu with the default class constructor. It's better to initialize the menu on 'domready' event of your document

### Javascript
	// menu init
	window.addEvent('domready', function() {
		
		var myMenuSelector = new MenuSelector();
	});
	
It's possibile to use different options to initialize the MenuSelector object, you can specify some option to change the id of container div or layout preferences.

### Javascript

	var opt = { 
	  id : 'nav_wrap_sub',
	  bg_position : '32px'
	}
	// menu init
	window.addEvent('domready', function() {
		var mySubMenuSelector = new MenuSelector(opt);
		
	});	

The possible options are the follows :

### Javascript
	id : container div's id
	active_id : active menu item's id
	bg_position : vertical offset position in px 
	left_pad : left padding of the arrow
	duration : duration of Fx.Transitions.Elastic transition
