# Devapps
> List of developer apps

Built on HTML, CSS, JavaScript and Electron 🔨

# Install
**You can get packaged app in [/releases/](https://github.com/Kocisov/devapps/releases)**

**Or package/write your own**

```bash
git clone https://github.com/Kocisov/devapps.git yourFolder
cd yourFolder
npm install
npm start
npm run package # for packaging Electron app
```

# Contributing
For adding your app, create pull request with simple js file in **[/apps/](https://github.com/Kocisov/devapps/tree/master/apps)** directory

**Structure:**
```js
const Atom = {
  name: 'Atom',
  url: 'https://www.atom.io/',
  description: 'Popular text editor built by GitHub',
  image: 'https://avatars1.githubusercontent.com/u/1089146?v=3',
  path: '/Applications/Atom.app'
}

module.exports = Atom
```
**Where**

- name: Name of Application
- url: Link to Application (info, download, etc...)
- description: Little description of Application
- image: Url to Application icon image
- path: Path to installed Application, how it should be installed into ~Applications folder
