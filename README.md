# YouTube WebRTC Tutorial

Here you can find the related source code to my YouTube tutorial:

**Creating a web video call client with WebRTC and Angular** - https://youtu.be/SWhG0VRdiW8

## Description
All configuration is done within environment.ts and environment.prod.ts

If you want to deploy this to a public web server, it's required by WebRTC specification that all transport data is encrypted using TLS.

To support secure websockets, you can configure a reverse proxy with TLS Support.

E.g. for Nginx:

```
server {
    listen 443 ssl;
    ...
    location /ws/ {
        proxy_pass http://localhost:8081;
        ...
    }
    ssl on;
    ...
}
```
And the signalling server will be configured like this in environment.ts:
``wss://server:8081/ws/``

## TURN Server
There are a few public TURN Servers available. See also https://gist.github.com/sagivo/3a4b2f2c7ac6e1b5267c2f1f59ac6c6b

But I'd recommend, that you setup your own TURN Server.
There is an opensource project: coturn, you can use for that purpose.

Configuration for coturn is rather simple. There are only a few settings you'll have to set:

```
external-ip=<external_ip>/<internal_ip>
realm=<your.host.domain>

lt-cred-mech
user=<user>:<password>

cert=/path/to/your/certificate
pkey=/path/to/your/private/key
CA-file=/path/to/a/CA.crt

```

Please note, that you should set up user credentials. Some WebRTC implementations might have problems, if a TURN server does not need credentials. So make sure, you set up some user.

It's also required to setup a valid certificate and private key for TLS encryption.

## Questions

If you need further support, please contact me on http://openvalue.de/
