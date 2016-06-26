const fs = require('fs')
const shell = require('electron').shell

let _data = []

let files = fs.readdirSync(`${__dirname}/apps/`)
files.forEach((file) => {
	let w = file.replace(/\..+$/, '')
	_data.push(require(`${__dirname}/apps/${file}`))
})

_data.forEach((f) => {
	fs.access(f.path, fs.R_OK | fs.W_OK, (err) => {
		if(err) {
			aSend(`<div class="item">
				<div class="item-img">
					<img src="${f.image}" alt="">
				</div>
				${f.name} - <a onClick="openLink('${f.url}')">${f.url}</a>
				<div class="item-description">
					${f.description}
				</div>
				<div class="red">
					${f.name} is not installed on your computer!
				</div>
			</div>`)
		} else {
			aSend(`<div class="item">
				<div class="item-img">
					<img src="${f.image}" alt="">
				</div>
				${f.name} - <a onClick="openLink('${f.url}')">${f.url}</a>
				<div class="item-description">
					${f.description}
				</div>
				<div class="green">
					${f.name} is installed on your computer!
				</div>
			</div>`)
		}
	})
})

openLink = (link) => {
	shell.openExternal(link)
}

aSend = (msg) => {
	document.getElementById('apps')
		.innerHTML += msg
}
