# Plant Table


Element | Description | Required | Default Value | Type/Restrictions
------- |------------ | -------  | -------       | -----------------|
plant   | Root element| 1        |               |                  |
_genus  | Genus       | 1        |               |String, Max Length 60     |
_species| Species     | no       |spp.           |String, Max Length 60     |
_cultivar|variety     | no       |               |String, Max Length 60     |
_common_name|Name in native language|no|         |String, Max length 100    |
_height |height in m. |no        |0              |integer, max:100  |
_begin_bloom_date|begins to bloom|no||Date                  |
_end_bloom_date|date that bloom stops|no|        |Date                 |
_edible |does the plant contain edible parts?|no||Boolean           |
_sun_tolerance|toleration of sun?|no||Enumeration: full_sun,part_sun,part_shade,full_shade|
_bloom_color|color of flower|no||Enumeration: red,oragne,yellow,blue,violet,white|
_specimens|has group of specimens|no|||
__specimen|represents an individual specimen|1..*|                   |
__latitude|coord.lat.|no          |    |Decimal|
__longitude|coord.lat.|no          |    |Decimal|
__planted_by|who planted|no          |    |String,Max length: 255|
__comments|additional comments|no          |    |String, Max length: 1024|






