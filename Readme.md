# AWS Serverless API with Fauna


This project provides a serverless API for managing an inventory system, built with AWS Lambda and Fauna. It allows basic CRUD operations on inventory items including creation, reading, updating, and deletion.

Following the tutorial for this project here. 

## Requirements

* [AWS CLI](https://aws.amazon.com/cli/)
* [Node.js](https://nodejs.org/en/download/)
* [Serverless Framework](https://www.serverless.com/framework/docs/getting-started/)
* [Fauna Account](https://fauna.com/)

## Setup

- Clone the repository
- Install dependencies with `npm install`
- Setup Fauna account and create a database

## Usage

The API provides the following endpoints:

- Create Inventory Item:
POST / - Adds a new item to the inventory.

- Read All Inventory Items:
GET / - Retrieves all items from the inventory.

- Read Specific Inventory Item:
GET /{id} - Retrieves a specific item by its ID.

- Update Inventory Item:
PUT /{id} - Updates the details of a specific item.

- Delete Inventory Item:
DELETE /{id} - Removes an item from the inventory.

## Local Development

```bash
serverless offline
```

## Deployment

```bash
serverless deploy
```