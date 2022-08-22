<p align='center'>
  <img src="./_resources/_images/tasks.png" style="border-radius:50px" alt="project-image" width="80%" />
</p>
<h3 align="center">MarkShare</h3>

### Abstract

A real-time full-stack web application for sharing markdown texts.
Built with an intuitive yet powerful Markdown text editor to boost both your
productivity and creativity as well as providing you with a distract-free
working environment.

### Core Technologies

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

### Workspace Set-up

Front-end Repo - `https://github.com/danielphan-dp/markshare.git` \
Back-end Repo - `https://github.com/danielphan-dp/markshare-be.git`

- Create a new folder in your local machine.

  ```sh
  mkdir <WORKSPACE-NAME>
  ```

- Clone the front-end repository. The front-end repository is this repo.

  ```sh
  git clone https://github.com/danielphan-dp/markshare.git
  ```

- Clone the back-end repository. To access the back-end repository, click [here](https://github.com/danielphan-dp/messanging-platform-server).

  ```sh
  git clone https://github.com/danielphan-dp/markshare-be.git
  ```

### Installation

- Install node modules for the front-end.

  ```sh
  cd <PATH-TO-FRONT-END-REPO>
  npm install
  ```

- Install node modules for the back-end.

  ```sh
  cd <PATH-TO-BACK-END-REPO>
  npm install
  ```

### Run

Start back-end and front-end (recommended 2 terminal windows).

- Start the back-end.

  ```sh
  cd <FOLDER-OF-BACK-END-REPO>
  npm start
  ```

- Start the front-end.

  ```sh
  cd <FOLDER-OF-FRONT-END-REPO>
  npm start
  ```

- Now, the application should be available at `localhost:3000`.


### Features

- [x] User account management
  - [x] Register
  - [x] Log In
  - [x] Forgot password
  - [x] Reset password
- [x] Real-time operations for Markdown posts
  - [x] Create posts
  - [x] Update posts
  - [x] Delete posts
  - [x] Search posts
- [x] Pagination of posts
- [x] Intuitive and responsive GUI compatible with different screen sizes

### Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**. 

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
1. Fork the Project
2. Create your Feature Branch
   ```sh
   git checkout -b feature/<YOUR-AMAZING-PROPOSED-FEATURE>
   ```
3. Commit your Changes
   ```sh
   git commit -m <YOUR-COMMIT-MESSAGE>
   ```
4. Push to the Branch
   ```sh
   git push origin feature/<YOUR-AMAZING-PROPOSED-FEATURE>
   ```
5. Open a Pull Request
