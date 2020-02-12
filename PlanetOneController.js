({
	sendHulk : function(component, event, helper) {
        console.log('In send hulk');
        component.set("v.messageReceived",event.getParam("ProblemMessage"));
        component.set("v.sendHulk",true);
		
	}
})
