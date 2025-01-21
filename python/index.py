# https://www.youtube.com/watch?v=5UOSiCPu5aM&list=PLO_fdPEVlfKqMDNmCFzQISI2H_nJcEDJq&index=4&ab_channel=MachineLearnia
# 5'37

# print(False & True) => AND
# print(False | True) => OR
# print(False ^ True) => XOR

# Peculiar way to create a math function => use lambda
f = lambda x, y: x**2 + y

# print(f(4, 3))

# Usual way to create a function

def e_potential(mass, height, e_limit=100, g=9.81):
    E = mass * height * g
    if E == e_limit:
        print('Limit reached!')
    elif E > e_limit:
        print('Limit exceeded!')
    else:
        print('Push it to the limit!')
    print(E, 'Joules')
    return E

# result = e_potential(mass=200, height=3)

# Control structures : IF / ELIF /  ELSE, WHILE, FOR

def posOrNeg(x: float, y: float):
    if (x > 0) & (y > 0):
        print(x, y, 'Both have a positive value.')
    elif (x == 0) & (y == 0):
        print(x, y, 'Both are equal to zero.')
    elif (x == 0) | (y == 0):
        print(x, y, 'One value is equal to zero.')
    else:
        print(x, y, 'At least one has a negative value.')

# posOrNeg(0, 2)

def sign(x: float):
    if (x > 0):
        print(f'{x} has a positive value.')
    elif (x == 0):
        print(f'{x} is equal to zzero.')
    else:
        print(f'{x} has a negative value.')
    
# for i in range(10, -10, -2):
    # sign(i)
   
# x = 0
# y = 10    
   
# while x < y:
    # print(x)
    # x += 1
    
def fibo(n: float):
    a = 0
    b = 1
    
    list_fibo = []
    
    while a < n:
        list_fibo.append(a)
        a, b = b, a+b
    print(list_fibo)
        
# fibo(1000)

# Data structures: sequences

##### Lists
# list_1 = [1, 3, 7, 9, 12, 16, 30, 65, 86] # May be modified
cities = ['Paris', 'Berlin', 'Londres', 'Bruxelles', 'New York']
# list_2 = [ list_1, cities]

# print(list_2)

### Actions on lists
# Indexing
# print(list_1[0])

# Slicing
# print(cities[0:3]) # Start = 0, end = 3
# print(cities[:3]) # Start = 0, end = 3
# print(cities[2:]) # Start = 2, end = last
# print(cities[::2]) # start = 0, end = last, pas = 2, every two items from start
# print(cities[::-1]) # invert sequence

# Adding an item at the end of a list
# cities.append('La Rochelle')
# print(cities)

# Adding an item at a specific index of a list
# cities.insert(1, 'Moscou')
# print(cities)

# Adding a list at the end of an existing list
# cities_2 = ['Madrid', 'Prague']
# cities.extend(cities_2)
# print(cities)

# Getting the length of a list
# print(len(cities))

# Sort list
# Alphabetically
# cities.sort()

# Anti-alphabetically
# cities.sort(reverse=True)
# print(cities)

# Count the occurrences of a specific item in a list
# nb = cities.count('Paris')
# print(nb)

# if 'Paris' in cities and 'Belfast' in cities:
#     print('Oui')
# else:
#     print('Non')
    
# for i in cities:
    # print(i)
    
# for (index, value) in enumerate(cities):
    # print(index, value)

# for (a, b) in zip(cities, list_1):
#     print(a, b)


##### Tuples
# tuple_1 = (1, 3, 7) # Cannot be modified, rarely used


##### String
# pseudo = 'Pops'


##### Dictionaries

# Create a dico with couple key-value where values are string and number
trad = {
    "chien": "dog",
    "chat": "cat",
    "souris": "mouse",
    "oiseau": "bird",
    }

inventory = {
    "bananas": 2,
    "apples": 3,
    "peach": 4,
    }

# Create a dico with couple key-value where values are dictionaries
dictionary_3 = {
    "dictionary_1": trad,
    "dictionary_2": inventory,
    }

# Print all values (not keys) of a dictionnary
# print(inventory.values())

# Print all keys (not values) of a dictionnary
# print(inventory.keys())

# Add a couple key-value in a dictionary
inventory["orange"] = 5

# print(inventory)

# Get a value from a dictionary
# print(inventory.get("banans", "Not found"))

# Replace the content or fills an existing list with the content of a list as keys and a value associated to each
# print(inventory.fromkeys(cities, "Default"))


# Removes the last element of an array and save the value removed in a variable
# print(inventory)
# tokeep = inventory.pop("orange")
# print(tokeep)

# print(inventory)

# Print all the keys of a list
# for i in inventory:
    # print(i)
    
# Print all the values of a list
# for i in inventory.values():
#     print(i)
    
# Print all the key-value couples in a list
# for a, b in inventory.items():
#     print(a, b)
    
workbook = {
    "positive" : [],
    "negative" : [],
    }

print(workbook)

nb = [-3, -2, -1, 0, 1, 2, 3]

def sortnumbers(destination, nblist):
    for i in nblist:
        if i >= 0:
            destination["positive"].append(i)
        else:
            destination["negative"].append(i)

sortnumbers(workbook, nb)

print(workbook)
