## Error: Invalid where clause attribute value

Demonstrates how the API will return a failure when you attempt to use an invalid key within a query.




#### HTTP Request

The following request invokes the behavior:

`POST http://V1Host/V1Instance/api/asset`

##### Payload:
```json
{
  "@user-alias": {
    "from": "Scope",
    "select": [
      "Name"
    ],
    "where":{
      "ID":["Scope:0", "Scope:1"]
    }
  }
}
```

#### HTTP Response

Expect a result similar to this:

```json
{
	"requestId": "e3094710-419a-41a0-b55c-948b02c8d42b",
	"createdDate": "2020-07-23T19:49:54.7620923Z",
	"completedDate": "2020-07-23T19:49:54.7631087Z",
	"duration": "00:00:00.0010164",
	"durationSeconds": 0.0010164,
	"complete": true,
	"processing": false,
	"assetsCreated": {
		"oidTokens": [],
		"count": 0
	},
	"assetsModified": {
		"oidTokens": [],
		"count": 0
	},
	"assetsOperatedOn": {
		"oidTokens": [],
		"count": 0
	},
	"commandFailures": {
		"commands": [
			{
				"@user-alias": {
					"from": "Scope",
					"select": [
						"Name"
					],
					"where": {
						"ID": [
							"Scope:0",
							"Scope:1"
						]
					}
				},
				"error": {
					"message": "Key \"ID\" must have corresponding scalar value\r\nParameter name: ID",
					"sourceCommandIndex": 0
				}
			}
		],
		"count": 1
	},
	"queryResult": {
		"results": [],
		"count": -1
	}
}
```

* Notice that the message returns the `commandFailures.commands[0].error.message` property and displays the offending key name. In this example, you could correct the node value to a supported type.
