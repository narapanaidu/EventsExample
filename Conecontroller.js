({
	callforHulk : function(component, event, helper) {
        //fire the component event
        //Get the reference to our component event
        var hulkcall = component.getEvent("ChemicalWeaponsAttack");
        //Set attribute Value
        hulkcall.setParams({"ProblemMessage":"Please Send Hulk"})
        //fire the event
        hulkcall.fire();
        
		
	},
    callforIronMan:function(component, event, helper) {
        //fire the component event
        //Get the reference to our component event
        var IMcall = component.getEvent("HeavyWeaponsAttack");
        //Set attribute Value
        IMcall.setParams({"ProblemMessage":"Please Send IronMan"})
        //fire the event
       IMcall.fire();	
	},
    callforAvengers:function(component,event,helper){
        //fire the component event
        //Get the reference to our component event
        var AVcall = component.getEvent("ThanosAttack");
        //Set attribute Value
        AVcall.setParams({"ProblemMessage":"Please Send Avengers"})
        //fire the event
       AVcall.fire();
        
    }
})
