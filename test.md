# Documentation Butterfly Pdf Certificate Generation

## Keywords Trainee

| Keyword            | Example data | Description             |
|--------------------|--------------|-------------------------|
| trainee.firstname | john         | first name of the trainee|
| trainee.lastname  | doe          | last name of the trainee |

## Keywords Inscription

| Keyword                 | Example data | Description              |
|-------------------------|--------------|--------------------------|
| inscription.firstname  | john         | first name of the trainee |
| inscription.lastname   | doe          | last name of the trainee  |

## Keywords formations

| Keyword               | Example data | Description             |
|-----------------------|--------------|-------------------------|
| formation.firstname  | john         | first name of the trainee|
| formation.lastname   | doe          | last name of the trainee |

## Functions



#### Using Functions

Functions are applied by adding their name after the data field, separated by the "|" symbol. You can also chain multiple functions together. Here's how to use them:

- **Single Field Function**:
  - To apply a single function to a data field, simply add the function name after the data field, separated by "|".
  - Example: `trainee.firstname|tolower` will convert the trainee's first name to lowercase.

- **Multiple Functions Chained**:
  - You can chain multiple functions together by separating them with "|". Each function is applied sequentially to the data field.
  - Example: `trainee.firstname|tolower|toupper` applies both the "tolower" and "toupper" functions to the trainee's first name, converting it to lowercase first and then to uppercase.
  

#### List of Available Functions

| Function   | Arguments  | Description                                  | Example                                  |
|------------|------------|----------------------------------------------|------------------------------------------|
| tolower    | None       | Convert text to lowercase                    | `trainee.firstname\|tolower`            |
| dateformat | `Format`   | Change the format of the date. [See formats](https://www.php.net/manual/fr/datetime.format.php) | `trainee.create\|dateformat('d/m/Y')` |

## Conditions

You have the option to implement conditions into the fields of your PDF for more dynamic content. Here's how you can use them:

- **Condition Syntax**:
  - Use the following syntax to implement conditions: 
    ```
    @if(condition) content @else other_content @endif
    ```
    Replace `condition` with the logical condition you want to check. If the condition is true, `content` will be displayed; otherwise, `other_content` will be displayed.

- **Example**:
  - Consider the following example where we display different greetings based on the trainee's first name:
    ```plaintext
    Hello @if("{{ trainee.firstname }}" == "John") Jane @else John @endif Doe
    ```
    In this example, if the trainee's first name is "John", the greeting will be "Hello Jane Doe"; otherwise, it will be "Hello John Doe".
	

## Multi-data Fields

You also have the possibility to combine several data fields into one PDF field. This allows you to merge multiple pieces of information into a single display. Here's how you can do it:

- **Syntax**:
  - Use double curly braces `{{ }}` to enclose each data field you want to combine, separating them with commas or any other desired separators.
    ```
    {{ data_field1 }}, {{ data_field2 }}, ...
    ```

- **Example**:
  - Consider the following example where we combine the trainee's first name and last name into one field:
    ```plaintext
    {{ trainee.firstname }}, {{ trainee.lastname }}
    ```
    In this example, if the trainee's first name is "John" and last name is "Doe", the combined field will display "John, Doe".
