# HCI-Prototype [![Build Status](https://travis-ci.org/bman4789/HCI-Prototype.svg?branch=master)](https://travis-ci.org/bman4789/HCI-Prototype)
A prototype for a trading card game management solution.

Licensed under the MIT license, Brian Mitchell, Isaac Smolund, Justin YaDeau, and Zackary Vink.

## Importing/Exporting MongoDB collections
Run the following commands from a Terminal to export and import states form the MongoDB collection. This is used to reduce time entering data and allow for a collection to be "shared" across multiple development machines. Note: if any entries are edited vs added, they will need to first be removed from the collection. I find it easier to just drop the whole collection and import everything.

```shell
mongoexport -d hciprototype-dev -c cards -o backups/cards.json
```

```shell
mongoimport -d hciprototype-dev -c cards --file backups/cards.json
```

```shell
mongoexport -d hciprototype-dev -c allcards -o backups/allcards.json
```

```shell
mongoimport -d hciprototype-dev -c allcards --file backups/allcards.json
```
