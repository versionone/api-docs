## Preview

`http://V1Host/V1Instance/api/asset?previewonly=true`

#### HTTP Request

The following request will not modify any asset within the system:

##### Payload:
```json
{
    "from": "Story",
    "where":{
      "Number": "S-01004"
    },
    "update": {
        "Name": "Story Name Change"
    }
}
```

#### HTTP Response

Expect a result similar to this:

```json
[
  {
    "@2b9d4588-4e1b-4bcb-b38b-a08ad59539e7": {
      "oid": "Story:1210",
      "update": {
        "Name": {
          "add": [
            "Story Name Change"
          ],
          "remove": []
        }
      }
    }
  }
]
```
