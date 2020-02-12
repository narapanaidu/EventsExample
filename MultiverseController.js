({
     sendAvengers : function(component, event, helper) {
         console.log('In send Avengers');
        component.set("v.messageReceived",event.getParam("ProblemMessage"));
        component.set("v.sendAvengers",true);
	}
})
