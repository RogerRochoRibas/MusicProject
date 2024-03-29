<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/RogerRochoRibas/MusicProject">
    <img src="/src/musical-notes.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Musicaster</h3>

  <p align="center">
  This project exists to give you accurate music recommendations by taking advantage of the powerful API from musicovery.com
    <br />
    <a href="https://github.com/RogerRochoRibas/MusicProject"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://rogerrochoribas.github.io/MusicProject/"><strong>Try it yourself »</strong></a>
    <br />
    <br />
    <a href="https://rogerrochoribas.github.io/MusicProject/">View Demo</a>
    ·
    <a href="https://github.com/RogerRochoRibas/MusicProject/issues">Report Bug</a>
    ·
    <a href="https://github.com/RogerRochoRibas/MusicProject/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

### Using the Filter and the Sliders
![Demo](https://user-images.githubusercontent.com/98771907/174484065-2673c6cb-5e42-4c30-8558-1c55f296b329.gif)

### Modifying the Sliders
![Demo](https://user-images.githubusercontent.com/98771907/174484068-40accb3d-628d-4ce7-ba55-8d570466f894.gif)

### Register & Log In
![Demo](https://user-images.githubusercontent.com/98771907/174487322-2328e927-f15d-4e88-8b7f-81c1382ac31c.gif)

### Save your Tracklist
![Demo](https://user-images.githubusercontent.com/98771907/174487516-c002a17f-7da5-41e1-b291-30f37781136a.gif)

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Axios](https://axios-http.com/docs/intro)
* [Classnames](https://www.npmjs.com/package/classnames)
* [Firebase](https://firebase.google.com)
* [React.js](https://reactjs.org/)
* [React Router](https://reactrouter.com)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/RogerRochoRibas/MusicProject.git
   ```
2. Install NPM packages
   ```sh
   npm install axios
   npm install classnames
   npm install react-router-dom
   ```
3. Start the project
   ```sh
   npm start
   ```

   <!-- USAGE -->
### Usage

Either installing it or going to https://rogerrochoribas.github.io/MusicProject/ you will likely face this issue:

The Musicovery API is giving CORS problems, to use the full functionality of the app you can use Google Chrome.<br/>
Create a direct link to your Google Chrome, right click on it and open properties, and at the end of the target field add:
   Windows RUN:
   ```sh
     --disable-web-security --user-data-dir="C:/ChromeDevSession"
   ```
   The end Result will be something like this:
   ```sh
    "C:\Program Files\Google\Chrome\Application\chrome.exe" --disable-web-security --user-data-dir="C:/ChromeDevSession"
   ```
Using this shortcut will open Google Chrome and allow you to use this App without problems, both with a local install and online.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Creating a User Profile page that lets the user see their Tracklist, change their User Name and Password and Delete their Account.
- [ ] Adding new ways to get tracklists through Musicovery.com
- [ ] Improving the Registration and Log In Process.

See the [open issues](https://github.com/RogerRochoRibas/MusicProject/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Roger Rocho - [LinkedIn](https://es.linkedin.com/in/rogerrochoribas) - rogerrochoribas@gmail.com

Project Link: [https://github.com/RogerRochoRibas/MusicProject](https://github.com/RogerRochoRibas/MusicProject)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Luis Vicente](https://github.com/vicenlu)
* [Musicovery API](https://musicovery.com/api/V6/doc/documentation.php#introduction)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/RogerRochoRibas/MusicProject.svg?style=for-the-badge
[contributors-url]: https://github.com/RogerRochoRibas/MusicProject/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/RogerRochoRibas/MusicProject.svg?style=for-the-badge
[forks-url]: https://github.com/RogerRochoRibas/MusicProject/network/members
[stars-shield]: https://img.shields.io/github/stars/RogerRochoRibas/MusicProject.svg?style=for-the-badge
[stars-url]: https://github.com/RogerRochoRibas/MusicProject/stargazers
[issues-shield]: https://img.shields.io/github/issues/RogerRochoRibas/MusicProject.svg?style=for-the-badge
[issues-url]: https://github.com/RogerRochoRibas/MusicProject/issues
[license-shield]: https://img.shields.io/github/license/RogerRochoRibas/MusicProject.svg?style=for-the-badge
[license-url]: https://github.com/RogerRochoRibas/MusicProject/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/rogerrochoribas
[product-screenshot]: images/screenshot.png
