({
    doInit : function(component, event) {
        var action = component.get("c.findAll");
        action.setCallback(this, function(a) {
            component.set("v.accounts", a.getReturnValue());
            var evt = $A.get("e.c:AccountsLoaded");
            evt.setParams({"accounts": a.getReturnValue()});
            evt.fire();
        });
    $A.enqueueAction(action);
    }
})