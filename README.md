# HCI-Prototype [![Build Status](https://travis-ci.org/bman4789/HCI-Prototype.svg?branch=master)](https://travis-ci.org/bman4789/HCI-Prototype)
A prototype for a trading card game management solution.

## Importing/Exporting MongoDB collections
Run the following commands from a Terminal to export and import states form the MongoDB collection. This is used to reduce time entering data and allow for a collection to be "shared" across multiple development machines.

```shell
mongoexport -d hciprototype-dev -c cards -o backups/cards.json
```

```shell
mongoimport -d hciprototype-dev -c cards --file backups/cards.json
```
