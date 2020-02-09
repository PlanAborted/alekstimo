# 💻 Personnal Website Git

This git's sole purpose is to host my personnal website on `gh-pages`.
Anyone is free to use it as a template for their own website, don't forget to give credits 😊

## 📖 Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Before anything, you'll need [node](https://nodejs.org/en/) installed (includes [npm](https://www.npmjs.com/))

### Installing

A step by step series of examples that tell you how to get a development env running

1. Clone the project :
   `git clone https://github.com/PlanAborted/alekstimo.git`
2. Install dependencies :
   `npm install`
3. Change the data contained in `src/data.js`
4. Add logos into `src/public` if referenced in `src/data.js`

## Deployment

To deploy on [Github Pages](https://pages.github.com/) :

- Run `npm run deploy`
  _This will create a `gh-pages` branch, generate the static files for your website and push them on the `gh-pages` branch_

Please make sure that Github Pages is activated on your git :

- Go to `Settings`
- Scroll down to `GitHub Pages` section
- The `Source` dropdown should be on `gh-pages branch`

## Built With

- [React JS](https://reactjs.org/) - The web framework used

## Authors

- **Aleksandar TIMOTIJEVIC** - _Initial work_ - [AleksTimo](https://alekstimo.fr)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
