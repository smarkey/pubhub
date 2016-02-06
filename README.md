<h1>PubHub App</h1>

<b>Prerequisites</b>
<ul>
	<li><a href="https://evothings.com/doc/build/cordova-install-osx.html">Installation Instructions for OSX</a></code></li>
	<li><code>npm install</code></li>
	<li><code>npm install -g grunt-cli</code></li>
	<li><code>npm install -g cordova</code></li>
	<li><code>gem install sass</code></li>
</ul>

<b>Setup</b>
<ul>
	<li><code>git clone git@github.com:smarkey/pubhub.git</code></li>
	<li><code>cd pubhub</code></li>
	<li><code>grunt watch:build</code> (change a js file to compile the css)</li>
</ul>

<b>Deploy</b>
<ul>
	<li><code>cd pubhub/phonegap</code></li>
	<li><code>phonegap build android</code></li>
	<li><code>phonegap run android</code></li>
	<li><code>phonegap serve</code></li>
</ul>

<b>Access (Phone)</b>
<ul>
	<li>Download the "Phonegap Developer" App from Google Marketplace</li>
	<li>Input the ip:port that phonegap is listening on</li>
	<li>Connect</li>
</ul>

<b>Access (Browser)</b>
<ul>
	<li><code>Python -m SimpleHTTPServer</code></li>
	<li>http://0.0.0.0:8000/phonegap/www/</li>
</ul>