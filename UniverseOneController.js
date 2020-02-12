({
	sendIronMan: function(component, event, helper) {
        console.log('In send IronMan');
        component.set("v.messageReceived",event.getParam("ProblemMessage"));
        component.set("v.sendIM",true);
		
	}
})
