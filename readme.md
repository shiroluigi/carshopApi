**HOW TO RUN ?**
> to run use "npm i" in the root directory of the project <br><br>
> then type "npm start"


# --IMPORTANT--
## Prerequisites:- 
1. node.js npm installed
2. atlas(mongodb) account for database

__Configuration:__

- make .env in the root folder and type:  `MONGO_URI ="<your mongodb uri>`
- (optional) PORT in .env
- with all these set should be good to go :>

# ALL THIS API DOES IS GET FROM \<IP:PORT>/products so use postman or curl

## Query
| query       | options                   |
|-------------|---------------------------|
|featured     |true/false                 |
|company      |company name               |
|name         |name/name fragment         |
|sort         |name,price,rating,created  |
|numericFilter|rating,price               |

`numericFilter usage:[rating or price][conditional operator][value]`