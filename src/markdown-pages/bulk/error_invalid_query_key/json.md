## Error: Invalid query key

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
    "whereWOLF":{
      "ID":"Scope:0"
    }
  }
}
```

#### HTTP Response

Expect a result similar to this:

```json
{
	"requestId": "ed472bd1-18db-48c0-a2e3-3adf91a9f03b",
	"createdDate": "2020-07-23T16:19:38.8076045Z",
	"completedDate": "2020-07-23T16:19:38.8451237Z",
	"duration": "00:00:00.0375192",
	"durationSeconds": 0.037519199999999996,
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
					"whereWOLF": {
						"ID": "Scope:0"
					}
				},
				"error": {
					"message": "Invalid key at node(s): root->whereWOLF",
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

* Notice that the message returns the `commandFailures.commands[0].error.message` property and displays the path to the incorrect key node. In this example, you could correct the node name to reference an accepted query key.
