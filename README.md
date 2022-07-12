<h1 align="center"> EasyWiki </h1>

<h4 align="center"> an application who get informations from WikiPedia API and show simplified as Json data. </h4>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#credits">Credits</a>
</p>

## Key Features

* Receive data from the user and make a search in WikiPedia API.
* Returns a description about the search and the WikiPedia HTML. 

## How To Use

To clone and run this script, you'll need [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).

### Cloning and installing

```bash
# Clone this repository
$ git clone https://github.com/Lucas-Finatti/BookFlix.git

# Go into the repository folder
$ cd easy-wiki-api

# Install dependencies
$ npm install

```

### Usage exemple


#### Add an title of your search in query parameters:
Below is an example of how to use the script to add or search EasyWiki API.

In an bash or terminal, inside the project root directory runs:

```bash
npm run server
```

The script will run the server, then you just need to send a request as Query Params:

Get Description:
```Request:addres: localhost:3000/description?title=minecraft
{
	"ns": 0,
	"title": "Minecraft",
	"pageid": 27815578,
	"size": 220825,
	"wordcount": 18126,
	"snippet": "<span class=\"searchmatch\">Minecraft</span> is a sandbox video game developed by Mojang. The game was created by Markus &quot;Notch&quot; Persson in the Java programming language. Following several",
	"timestamp": "2022-07-09T08:58:47Z"
}
```
Get HTML page:
```Request:Addres: localhost:3000/description/page?page_id=27815578
{
    "parse": {
        "title": "Minecraft",
        "pageid": 27815578,
        "text": {
            "*": "<div class=\"mw-parser-output\"><div class=\"shortdescription nomobile noexcerpt noprint searchaux\" 
            style=\"display:none\">2011 video game</div>\n<style data-mw-deduplicate=\"TemplateStyles:r1033289096\">.mw-parser-output 
            .hatnote{font-style:italic}.mw-parser-output div.hatnote{padding-left:1.6em;margin-bottom:0.5em}.mw-parser-output 
            .hatnote i{font-style:normal}.mw-parser-output .hatnote+link+.hatnote{margin-top:-0.5em}</style><div role=\"note\" 
            class=\"hatnote navigation-not-searchable\">This article is about the video game. For the franchise, see 
            <a href=\"/wiki/Minecraft_(franchise)\" title=\"Minecraft (franchise)\"><i>Minecraft</i> (franchise)</a>...
    }
}

For get easy your reading the parse.text is not complete, because it is to extensive

## Credits

This software uses the following open source packages:

- [express](https://expressjs.com/pt-br/)
- [axios](https://axios-http.com/ptbr/docs/intro)
- [Wikipedia API](https://www.mediawiki.org/wiki/API:Main_page/pt-br)
