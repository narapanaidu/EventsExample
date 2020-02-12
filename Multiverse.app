<aura:application extends="force:slds" >
    <aura:attribute name="sendAvengers" type="boolean" default="false"></aura:attribute>
     <aura:attribute name="messageReceived" type="String"></aura:attribute>
	<p> 
        
        Multiverse - Dont' Worry ! Avengers are here to Defend the Multiverse Just Send Events
    
    </p>
    <aura:handler name="ThanosAttack" event ="c:ProblemMessage" action="{!c.sendAvengers}"/>
    
    <aura:if isTrue="{!v.sendAvengers}">
    <p> DON'T WORRY!!</p>
    <p> Your Message  : <lightning:formattedText value="{!v.messageReceived}" /> is received!! Avengers are on duty</p>
	<img src="https://media.giphy.com/media/3oxHQpJKupQXsmU1JS/giphy.gif" height="20"/>
    </aura:if>
    
    <p>
        <c:UniverseOne/>
    </p>
    
    <!-- Commenting as we belong to Universe One
    <p>
        <c:UniverseTwo/>
    </p>
     -->
    
</aura:application>
