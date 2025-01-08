#Build a Lunch Picker Program
In this lab, you'll build a program that helps in managing lunch options. You'll work with an array of lunches, add and remove items from the array, and randomly select a lunch option.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should create a lunches variable and assign it an empty array that will be used to store lunch items.

You should create a function addLunchToEnd that takes a string parameter and adds it to the end of the lunches array and returns a string in the format: "[Lunch Item] added to the end of the lunch menu."

You should create a function addLunchToStart that takes a string parameter and adds it to the start of the lunches array and returns a string in the format: "[Lunch Item] added to the start of the lunch menu."

You should create a function removeLastLunch that removes the last lunch item from the lunches array and:

If successful, returns a string in the format: "[Lunch Item] removed from the end of the lunch menu."
If the lunches array is empty, returns a string: "No lunches to remove."
You should create a function removeFirstLunch that removes the first lunch item from the lunches array and:

If successful, returns a string in the format: "[Lunch Item] removed from the start of the lunch menu."
If the lunches array is empty, returns a string: "No lunches to remove."
You should create a function getRandomLunch that selects a random lunch item from the lunches array and:

If successful, returns a string in the format: "Randomly selected lunch: [Lunch Item]"
If the lunches array is empty, returns a string: "No lunches available."
You should create a function showLunchMenu that:

If there are items in the lunches array, returns a string in the format: "Menu items: [Lunch Item], [Lunch Item]...
If the lunches array is empty, returns a string: "The menu is empty."
