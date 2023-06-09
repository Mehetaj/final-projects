/* 
1. install stripe and react stripe js
2. create a checkout form with card element (card element contains: card number, exp date, cvs , zip)
3. create account on stripe and get the pk
4. get card information
5. create a patment method
6. use test card to test payment
7. on the server side : install stripe: npm i stripe
8. create a paymeny intent api with payment method types: ['card]
make sure you provide amount in cents (multiply price with 100)
9. call payment intent api to get client secret and store it in a state
10. use confirmCardPayment api with client secretcard info
11. display confirm card error 
12. display confirm card success
13. do things after payment --->

*/