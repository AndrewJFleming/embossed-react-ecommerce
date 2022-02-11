<div id="top"></div>
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/AndrewJFleming/embossed-react-ecommerce">
    <img src="client/src/images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Embossed React Ecommerce</h3>

  <p align="center">
    An ecommerce project built with the MERN stack.
    <br />
    <br />
    <a href="https://github.com/AndrewJFleming/embossed-dummy-data-admin">Demo Admin Repo</a>
    ·
    <a href="https://www.linkedin.com/in/andrew-j-fleming-web-dev">My LinkedIn</a>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

The Embossed React Ecommerce app is an online shop app built with the MERN stack. There are three directories in the project's root directory: client, admin and server.

The client app will be the one users will be using to browse for and add products to carts. 

The admin app is only accessible to users with admin creds and serves as the dashboard where shop data can be created, updated and deleted.

Both apps use the same server for interacting with the project's MongoDB database.

_Check out the <a href="https://github.com/AndrewJFleming/embossed-dummy-data-admin">Embossed admin demo dashboard repo</a> that uses dummy data instead of MongoDB data._

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [MongoDB](https://www.mongodb.com/)
* [Express.js](https://expressjs.com/)
* [React.js](https://reactjs.org/)
* [Node.js](https://nodejs.org/)
* [Bootstrap](https://getbootstrap.com)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Below you'll find some instructions on what you'll need to run the project locally on your machine, how to install the app and how to get the app running.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

Before you run the admin or client Embossed apps locally, you'll need to install their required dependencies. 


1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```

2. Navigate to the desired directory.
   ```sh
   cd client
   ```
   or
   ```sh
   cd admin
   ```

3. Install NPM packages
   ```sh
   npm install
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage
Both the client and admin app use the same server to interact with this project's MongoDB database. 

1. Start the client or admin app locally.
   ```sh
   npm start
   ```

2. Navigate to the the server directory and start the server with the same command.
   ```sh
   npm start
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Implement planned CRUD functionality.
- [ ] Introduce option to apply sales to more than one product or to all products within a category.
- [ ] Execute get requests using Redux for products and sales.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Andrew Fleming - [My LinkedIn](https://www.linkedin.com/in/andrew-j-fleming-web-dev) - aflemi1@gmail.com

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/andrew-j-fleming-web-dev
[product-screenshot]: images/screenshot.png