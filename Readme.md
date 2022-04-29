# Transaction Services Apis

## Prerequisite

- Node v12
- MongoDB

## Installation

Install all the dependencies and Dev dependencies and start the server

```
npm i
npm run serve
```

## API Reference

#### Create Customer

```http
    POST /customer
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `firstName` | `string` | **Required**. First Name |
| `lastName` | `string` | **Required**. Last Name |
| `email` | `string` | **Required**. Email **`unique`**|


    Response

```json
    {
    "firstName": "Amey",
    "lastName": "Saple",
    "email": "amey95@gmail.com",
    "_id": "626b9ee5719ccb8375eedf34",
    "version": 0
}
```



#### Create RuleSet

```http
    POST /ruleset
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `startDate` | `date` | **Required**. Start Date **`yyyy-mm-dd`** |
| `endDate` | `date` | **Required**. End Date **`yyyy-mm-dd`**|
| `cashback` | `number` | **Required**. Cashback|
| `redemptionLimit` | `number` | **Required**. Redemption Limit|
| `budget` | `number` | **Required**. Budget|

    Response
```json
{
    "startDate": "2022-04-01T00:00:00.000Z",
    "endDate": "2022-04-30T00:00:00.000Z",
    "cashback": 1,
    "redemptionLimit": 5,
    "minTransactions": 2,
    "budget": 10,
    "_id": "626b93598da5ea6a83e27785",
    "version": 0
}
```

#### Create Transaction

```http
    POST /transaction
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `date` | `date` | **Required**. Date **`yyyy-mm-dd`** |
| `customerId` | `string` | **Required**. Customer Id **`ObjectId`**|

    Response
```json
{
    "date": "2022-04-29T00:00:00.000Z",
    "customerId": "626a416ebb97d1d25526fc4b",
    "_id": "626b93918da5ea6a83e27788",
    "version": 0
}
```

#### Get Cashback

```http
    GET /cashback/${customerId}
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `customerId` | `string` | **Required**. Customer Id **`ObjectId`**|

    Response

```json
    [
        {
            "transactionId": "626a4d9b15cfc2c9bb4d0dde",
            "amount": 2
        },
        {
            "transactionId": "626a430b796fbe2945d9177a",
            "amount": 2
        }
    ]
```


