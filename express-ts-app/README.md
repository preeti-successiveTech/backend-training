# backend-training
This repository contains step to install Node.Js on Debian-based Linux system
Node.js is a powerful, open-source JavaScript runtime built on Chrome's V8 engine that allows you to run JavaScript code outside the browser, typically on the server.
It’s widely used to build fast, scalable backend applications and APIs thanks to its event-driven, non-blocking I/O model.



## 1.Run the following commands
bash
sudo apt update

sudo apt install curl

## 2.Add NodeSource Repository for Node.js LTS

curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -


## 3.Install Node.js and npm
   sudo apt install nodejs

# 4. Verify Installation
    node -v
    npm -v



## Postman
* It is a popular tool for testing and interacting with APIs
* Allows us to send HTTP requests like GET, POST, DELETE, PUT and see responses in easy to use interface
* We can use is to :
* send test requests to endpoints
* View and debug responses
* check request/response headers
* test error handling and edge cases
* How to use :
* start the server : npm run dev
* open postman and send a get request : http://localhost:3000/
* see the response in the interface