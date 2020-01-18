# Objective

Envisioning the next big revolution in technology and science aka Voice Technology, we aim to solve the most encountered airport problems faced by passengers using a voice assistant like Alexa. This issues serve as a great use case for voice assistants given the amount of issues and queries passengers have on a daily basis, therby reducing the manpower required to serve the passengers well, and leverage voice as a solution for the same. While we think Voice is the best and most natural way to converse or interact, Alexa can serve the purpose of directing and helping PAX with various issues like Luggage problems, Flight Details, Assistance for first time travellers, Senior citizens and A-Z of PAX issues.

We look to build the solution in 2 major languages : English and Hindi and adding support for foreign languages like American English, Spanish and few more as well for the foreign passengers.

# Implementation

Proposing of a kiosk enabled with a Alexa device preferably Alexa device with a screen : Echo Show/Show 5.

The passengers would be required or prompted to link their email or phone number once to enhance personalized help regarding their flights.

This kiosk having an Alexa device would have an Alexa Skill named say, Hyderabad Airport for Hyderabad city and so on for other airports, which would be multimodal that is Voice + Screen interaction capabilities.

# Solution/features :

Passenger when taking their flight can link their account before hand by accessing the Alexa app and proceeding with Account linking through phone/email.
Passenger when reaches or checks into the airport, they can proceed with interacting with the kiosk/device as follows:
        i) User: Alexa, open Hyderabad Airport
        ii) Alexa : Welcome to Hyderabad Airport. I can help you with flight information, commercial information, luggage queries and much more. How may I help you?
        iii) User : I dont't know the GATE my flight departs from. Please help.
        iv) Alexa : Sure. Can you tell me your flight number?
        v) User : It's 6E-5990
        vi) Alexa: Flight 6E-5990, from Hyderabad to Delhi, leaves from GATE 52, at 7:30 pm. Can I help you with any other thing ?
        vii ) User: No. Thank you
        vii) Alexa: Hope you have a safe journey today.
This is one use case where the passenger faces issues with changing GATE numbers in case of modifications by the airport. Other problems which can be solved are:

i) User : Alexa, open Delhi Airport
ii) Alexa : Welcome to Delhi Airport. How can I help you today ?
iii) User : I can't find my luggage on the conveyor belt. Can you help me ?
iv) Alexa :  Sure, Can i know your PNR number ?
v) User: LGERXYZ
vi) Alexa: I can see, your baggage is still at the Bangalore Airport. We regret the inconvenience, but should I arrange for the baggage to reach you later?
vii) User: Yes please.
viii Alexa: Okay. I have processed the information and the rest of the details would be shared to you via email. Thank you.


We can ** classify the PAX issues/queries into different categories** for now like

Flight related issues
Baggage Issues
Map and Wayfinding
Commercial Info
Immigration Info
Senior Citizen/ Pregnant Mothers / Special assistance for first time travellers
Medical Assistance
Re-Routing
Miscallenous


# Tech Stack proposed:


1 - Alexa Skills Kit (ASK) for building the Alexa skill

2 - Cloud database - Firebase/AWS DynamoDB

3 - Serverless Compute Service - AWS Lambda/Google Cloud Functions : This would run the code against the user requests of the skill or functionality, in the cloud, which would give seamless and less latency based solution rather than normal servers.

4 - Oauth2.0 - Authentication Service

5- AWS API Gateway - Build Microservices to serve specific purposes/queries

6 - Alexa Echo Show device as an installment on the Kiosk

# Interaction Flow


Over here the passenger will interact with (6), whose requests would be intercepted by (1), which calls (3) to execute the code in response to the request, where (3) refers to (2) and (5) to fetch the data . Passengers can interact with the device via VOICE + Touch Commands, to have a better and hassle free experience.

# Applications/Final Takeaways


1) To improve Passenger service at the airports

2) Reducing man power required to serve the passengers for common issues

3) To provide one stop solution to passengers facing n number of problems under one umbrella

4) To use Voice as a service to be able to deliver passenger satisfaction as naturally as possible

# Future Extensions


1) Integrate the same kiosks onto GMR airport apps to give mobile solution to PAX

2) Use data analysis on the user requests and their interaction path to find out common problems faced by most of the passengers at what point of time, therby helping GMR group to focus more on the critical issues
