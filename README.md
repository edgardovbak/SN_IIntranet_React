SN Intranet skin with react

# How to use

- Download or clone package
- Go in to your folder in cmd
- run
```
npm install
```
- run
```
npm start
```
- in webconfig need to ad token key
- in /Root/System/Settings/Portal.settings  add your apps url to the AllowedOriginDomains list in the Portal settings file
```
"AllowedOriginDomains": [
    "localhost",
    ...
  ]
```
- in your_app/src/config.json change domain attribute
```
"domain" : 		"https://site_domain.com",
```
and other attributes ( menu folder path, home page folder path, ...  )


Done!

# Realized in package

- Installed sn-redux and sn-client-core
- Installed react-redux
- Have Login page
- Configurated Routing for this skin
- Connect to [knowledgebase](https://knowledgebase-sn7.test.sensenet.com/)
- Get menu itams from site
- Get articel from site
- Get user info
