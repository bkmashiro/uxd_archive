# Project4 Model Data

Since we don't have a backend database system to fetch model data from yet we stuff the model
data into the DOM so it will be accessible to the views.  We add an object
property named `models` to the DOM that contains the model data for the different views.

* `models.citiesModel()`  - The model for the problem - cities view.

These models can be accessed as:

    window.models.citiesModel()

    window.models.citiesModel()[0] === 'Nanjing'
