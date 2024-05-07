# Documentation Butterfly Pdf Certificate Generation


## Keywords Trainee

Keyword  | Example data | Desciption
------------- | ------------- | -------------
trainee.firstname | john | first name of the trainee
trainee.lastname  | doe | last name of the trainee


## Keyworda Inscription

Keyword  | Example data | Desciption
------------- | ------------- | -------------
inscription.firstname | john | first name of the trainee
inscription.lastname  | doe | last name of the trainee

## Keywords formations

Keyword  | Example data | Desciption
------------- | ------------- | -------------
formation.firstname | john | first name of the trainee
formation.lastname  | doe | last name of the trainee

## Functions

you have several function that you could use to modify your data, all the function can be use with single data field and multiple data field example : `trainee.firstname|tolower` or `hello, how are you  {{ trainee.firstname|tolower }}`

Function  | Arguments | Desciption | example 
------------- | ------------- | -------------| -------------
tolower | None | first name of the trainee | `trainee.firstname\|tolower`
dateformat  | - `Format` | for the format [see](https://www.php.net/manual/fr/datetime.format.php) | `trainee.create\|dateformat('d/m/Y')`

## Conditions
## Pro tips
