# Get project
## Download ZIP
https://chamilo.iut2.univ-grenoble-alpes.fr/main/lp/lp_controller.php?cidReq=INFOMIAMINFO1&id_session=0&gidReq=0&gradebook=0&origin=&action=view&lp_id=2205#
## Run setup commands in unzipped folder
```bash
npm i --force
ionic integrations enable cordova --add
ionic cordova platform add android@9
npm i -D typescript@3.8.* --force
```

## Camera plugin
```bash
ionic cordova plugin add cordova-plugin-camera 
npm install @ionic-native/camera
```

# Start project

## Browser
```bash
ionic serve
```
## Android
```bash
ionic cordova run android
```
