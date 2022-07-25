<< Developmental Phase>> JWT (Json Web Token) basics
</br>
Restriction of routing
</br>

Basic Concept </br>

There are certain routes that must be avaliable only to certain users.
The following program tries to implement route restriction for dashboard such that
the dashboard should only be avaliable to users that logged in </br>
The JSON Web Token is provided by the API and sent to the user once it matches
the credentials for the user name and password. The token is stored in the front end 
which is passed into the header request as `Authorization: Bearer tokenName` , when
request for the dashboard is made from the front end</br>

*--Learning and implementing from John Smilga--*