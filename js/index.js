App = new Ext.Application({
	name: "App",
	launch: function(){
		var stopCarousel=false;
		var carousel1 = new Ext.Carousel({
    		items: [{
				html:'<img class="imageFit" src="http://i4.ytimg.com/i/WE7RysNK3lx5liSo7ne97Q/1.jpg" />'
    		},{
				html:'<img class="imageFit" src="http://www.macforensicslab.com/ProductsAndServices/images/icon_apple.jpg" />'
    		},{
				html:'<img class="imageFit" src="http://business2press.com/img/win7.png" />'
    		}],
			listeners:{
				cardswitch: function(){
					if (!stopCarousel) this.setActiveItem((this.getActiveIndex() + 1) % 3);
				
				}
			},
			cardSwitchAnimation:{
				type:'slide',
				duration:200,
				direction:'down'
			},
			activeItem:0
		});
		var carousel2 = new Ext.Carousel({
    		items: [{
				html:'<img class="imageFit" src="http://i4.ytimg.com/i/WE7RysNK3lx5liSo7ne97Q/1.jpg" />'
    		},{
				html:'<img class="imageFit" src="http://www.macforensicslab.com/ProductsAndServices/images/icon_apple.jpg" />'
    		},{
				html:'<img class="imageFit" src="http://business2press.com/img/win7.png" />'
    		}],
			listeners:{
				cardswitch:function(){
					if (!stopCarousel) this.setActiveItem((this.getActiveIndex() + 1) % 3);
				}
			},
			cardSwitchAnimation:{
				type:'slide',
				duration:400,
				direction:'down'
			},
			activeItem:1
		});
		var carousel3 = new Ext.Carousel({
    		items: [{
				html:'<img class="imageFit" src="http://i4.ytimg.com/i/WE7RysNK3lx5liSo7ne97Q/1.jpg" />'
    		},{
				html:'<img class="imageFit" src="http://www.macforensicslab.com/ProductsAndServices/images/icon_apple.jpg" />'
    		},{
				html:'<img class="imageFit" src="http://business2press.com/img/win7.png" />'
    		}],
			listeners:{
				cardswitch:function(){
					if (!stopCarousel) this.setActiveItem((this.getActiveIndex() + 1) % 3);
				}
			},
			cardSwitchAnimation:{
				type:'slide',
				duration:300,
				direction:'down'
			},
			activeItem:2
		});
		var delayedTask=new Ext.util.DelayedTask(function(){
			stopCarousel=true;
			if(carousel1.getActiveIndex()==carousel2.getActiveIndex()&&carousel2.getActiveIndex()==carousel3.getActiveIndex())
				Ext.Msg.alert('Congratulations','You won!',Ext.emptyFn);
		});
		var cmp= new Ext.Panel({
			layout:{
				type:'hbox',
				align:'stretch'
			},
			defaults:{
				flex:1
			},
			dockedItems: [{
				xtype: "toolbar",
				dock: "top",
				title:'Slot Machine',
				items:[{
					xtype:'button',
					text:'Hit',
					handler:function(){
							stopCarousel=false;
							carousel1.setActiveItem((carousel1.getActiveIndex()+1)%3);
							carousel2.setActiveItem((carousel2.getActiveIndex()+1)%3);
							carousel3.setActiveItem((carousel3.getActiveIndex()+1)%3);
							delayedTask.delay(2000);	
					}
				}]
			}],
			items:[carousel1,carousel2,carousel3]
		});
		this.viewport = new Ext.Panel({
		fullscreen: true,
		layout:'fit',
		items:cmp
		});
		
	}
	
});
//end of module

