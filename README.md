# One-to-One Video Call using Angular8 and Airtel IQ for Web 

 

This client application in Angular 8 demonstrates how you can implement video calling capabilities in your Web applications using Airtel IQ Toolkit. The application runs on the web browser and utilizes Airtel IQ Web SDK to conduct an RTC session. The sequential tasks performed by the client application to conduct an RTC session are as given below:  

* Fetch token from the application server. 

* Connect to the room using the received token. 

* Publish media streams in the room. 

* Subscribe to remote media streams in the room. 

* Observe and handle session-related events. 

The sample application demonstrates the following advance features along with basic video call: 

* Session Recording 

* Chat 

* Mute/Unmute video 

* Mute/Unmute audio 

* Screen share 

* Disconnect 

 

## 1. Getting Started 

### 1.1 Pre-Requisites 

 
### 1.1.1 Authorization Credentials 

Follow the steps given below to generate API Credentials required to access Airtel IQ:  

* [Create a free account on Airtel IQ](https://portal.videoiq.airtel.in/cpaas/trial-sign-up/)

* Create your Project 

* Get the App ID and App Key generated against the Project. 

### 1.1.2 Requirement 

* [Check your browser compatibility with Airtel IQ.](https://videoiq.airtel.in/developer/video/browser-compatibility-of-airteliq-video/) 

* [Download latest copy of Web SDK (EnxRtc.js)](https://developer.videoiq.airtel.in/wp-content/uploads/EnxRtc.js.v1.9.3.zip?ver=1.9.3) and replace client/js/EnxRtc.js 

### 1.1.3 Clone the repository

Clone this ```git clone https://github.com/ssamanvaya98/One-to-One-Video-Chat-Sample-Angular-Application-Client.git```

### 1.1.4 Sample application server 

While this GitHub repository provides sample client code, you require an application server to provision video room on Airtel IQ server.**Clone or download repository of your choice and configure the server as per the instructions given in the respective README document of the server repository chosen.** Use any of the Repository listed below to setup your application server:

* [Nodejs](https://github.com/airtel/Airtel-IQ-One-to-One-Video-Chat-Sample-Web-Application-NodeJs-Server) 

  

To directly try the sample code without having to configure an application server, you can also use the Airtel IQ test server as explained in section 2. However, it is recommended to configure your own application server to build a video calling web app. 

 

### 1.1.5 Merge the client and server repositories
Once the ReactJs client side repository is cloned inside the server repository, follow the points listed below:

* ```cd One-to-One-Video-Chat-Sample-Angular-Application-Client```
* To install all project modules.Run ```npm install```

## 1.2 Build Application
* Run ```npm start```.
* This loads the application on https://localhost:4200 .
 

## 1.3. Test 

* Go to https://localhost:4200/ to load the application on the browser. 

* If you don't have a Room ID, then create by clicking on the “Create Room” button. The Room ID will get prefilled in the form. 

* Save the Room ID and share it with others along with the URL to join the Same Room.  

* Enter your Name and choose your role, either as a Moderator or a Participant 

* Allow access to the microphone when prompted. 

* You are now in a video call with others, who have joined the same room. 

Note: This sample application creates a virtual room with limited Participants and 1 Moderator for demonstration purposes. 

 

## 2. Pre-configured Test Server 

As mentioned in section 1.1.4 above, you have an option to run your client application on Airtel IQ pre-configured environment instead of setting up your own application server.  

This allows you to quickly test the performance of Airtel IQ audio calls before getting into the development of your application.  

As the Airtel IQ test server has been configured for demonstration purpose only, it only allows to: 

* Conduct a single session with a duration lesser than 10 minutes. 

* Host a multiparty call with less than 3 participants. 

Refer to the [Demo App Server](https://videoiq.airtel.in/developer/video/sample-code/#demo-app-server) for more information.   

Once you have successfully tested your application on the test server, you can set up your application server as explained in section 1.1.3 above. 

 

## 3. Know more about Client API 

The client APIs are called from the Airtel IQ Web SDK (EnxRtc.js) which runs on the client browser. The client APIs are used to communicate with the Airtel IQ video services and monitor the client-side state of the RTC session.  

The client APIs are typically used to: 

* Connect to the desired room using the token received from the application server 

* Manage local audio and video 

* Handle room and stream related events initiated by the user 

The client APIs handle four major entities: 

* Airtel IQ Room: It handles room/session related events like connection, local stream publication, and remote stream subscription. 

* Airtel IQ Stream: It identifies audio/video/data stream published by the user. 

* Events: It represents the events related to the room and the stream. 

* Player: It represents the customizable UI element used to render the audio/video stream in the DOM. 

In addition to the features demonstrated in this sample program, the SDK has many helpful APIs available for the developers to utilize like: 

* File sharing 

* Streaming 

* Annotation 

* Canvas 

And many more such exciting features. 

[Read Web Toolkit Documentation](https://videoiq.airtel.in/developer/video-api/client-api/web-toolkit/) for more details.  

[Download Web Toolkit](https://developer.videoiq.airtel.in/wp-content/uploads/EnxRtc.js.v1.9.3.zip?ver=1.9.3) to get the latest version of Web SDK. 

 

## 4. Support 

Airtel IQ provides a library of Documentations, How-to Guides, and Sample Codes to help software developers, interested in embedding RTC in their applications. 

Refer to the [Complete Developer’s Guide](https://videoiq.airtel.in/developer/video-api/server-api/) for more details. 

You may also write to us for additional support at [support@airteliq.io](). 
