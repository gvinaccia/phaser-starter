#!/usr/bin/env bash

REMOTEURL='https://raw.githubusercontent.com/photonstorm/phaser3-docs/master/typescript/phaser.d.ts'
DEST=src/phaser.d.ts

curl $REMOTEURL > $DEST
