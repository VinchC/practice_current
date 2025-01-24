# https://www.youtube.com/watch?v=mSh4h-J0z1c&list=PLO_fdPEVlfKqMDNmCFzQISI2H_nJcEDJq&index=8&ab_channel=MachineLearnia
# 0'00

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


# Data structures: sequences

##### Lists
# list_1 = [1, 3, 7, 9, 12, 16, 30, 65, 86] # May be modified
# cities = ['Paris', 'Berlin', 'Londres', 'Bruxelles', 'New York']
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
# trad = {
#     "chien": "dog",
#     "chat": "cat",
#     "souris": "mouse",
#     "oiseau": "bird",
#     }

# inventory = {
#     "bananas": 2,
#     "apples": 3,
#     "peach": 4,
#     }

# Create a dico with couple key-value where values are dictionaries
# dictionary_3 = {
#     "dictionary_1": trad,
#     "dictionary_2": inventory,
#     }

# Print all values (not keys) of a dictionnary
# print(inventory.values())

# Print all keys (not values) of a dictionnary
# print(inventory.keys())

# Add a couple key-value in a dictionary
# inventory["orange"] = 5

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
    
# workbook = {
#     "positive" : [],
#     "negative" : [],
#     }

# print(workbook)

# nb = [-3, -2, -1, 0, 1, 2, 3]

# def sortnumbers(destination, nblist):
#     for i in nblist:
#         if i >= 0:
#             destination["positive"].append(i)
#         else:
#             destination["negative"].append(i)
#     return destination

# sortnumbers(workbook, nb)

# print(workbook)


##### List and Dict Comprehension

# list_1 = []

# for i in range(10):
#     list_1.append(i**2)
# print(list_1)

# List Comprehension syntax
# list_2 = [i**2 for i in range(15)]
# print(list_2)

# list_3 = [[i for i in range(3)] for j in range(4)]
# print(list_3)


# Dict Comprehension syntax 
# firstnames = ['Pierre', 'Jean', 'Julie', 'Sophie']

# ages = [16, 17, 18, 19]

# Create a list with a couple k-v via an existing list and k as index
# diconames = { k:v for k, v in enumerate(firstnames)}
# print(diconames)

# Create a list with a couple k-v via two existing lists
# diconameswithages = { firstname:age for firstname, age in zip(firstnames, ages)}
# print(diconameswithages)

# Create a list with a couple k-v via two existing lists with a condition
# dicoadults = { firstname:age for (firstname, age) in zip(firstnames, ages) if age >= 18}
# print(dicoadults)

# Generate an object
# tuple_1 = tuple((i**2 for i in range(20)))
# print(tuple_1)

# Exercise 6/30
# kvdict = { k:v for k, v in enumerate(tuple_1) if k <= 21 }
# kvdict = { str(k): k**2 for k in range(0,20)}
# print(kvdict)

##### Built-in functions (7/30)
# Change type of a variable
# x = 10
# print(type(x))
# print(type(float(x)))
# print(type(str(x)))

# Get specific values or sum of an array
# arraynb = [ 1, 2, 3, 4]
# print(type(arraynb))
# print(max(arraynb))
# print(min(arraynb))
# print(sum(arraynb))

# trueonly = [ True, True, True]
# print(all(trueonly))

# trueandfalse = [ True, True, False]
# print(all(trueandfalse))
# print(any(trueandfalse))

# print(input())


# Print a string with variables
# x = 10
# city = 'Paris'
# message = f'La température est de {x} degrés à {city}'
# message2 = 'La température est de {} degrés à {}'.format(x, city)
# print(message)
# print(message2)

# Create a file in current folder and write in it
# f = open('file.txt', 'w')
# f.write('Hello')
# f.close()

# Open a file in current folder and read its content
# f = open('file.txt', 'r')
# print(f.read())

# Shortcut to avoid opening file for every use
# with open('file.txt', 'r') as f:
#     print(f.read())
    
# with open('file.txt', 'w') as f:
#     for i in range(10):
#         f.write("{}^2 = {} \n".format(i, i**2))

# with open('file.txt', 'r') as f:
#     print(f.read())


# Exercise 7/30
# list_1 = []
# with open('file.txt', 'r') as f:
#     for line in f:
#         line = line.rstrip(' \n')
#         list_1.append(line)

# Correction
# list_1 = [line.strip() for line in open('file.txt', 'r')]
# print(list_1)
        
##### Modules and packages (8/30)

## Imports all variables and functions from a specific file
# import func as p1
        
# p1.fibo(1000)

## Imports a specific function from a specific file
# from func import fibo
        
# fibo(2000)

import math # math (!) - pi, cos, sin, exp etc.
# print(math.cos(2*math.pi))
# print(math.exp(2))

import statistics # mean(= moyenne), variance
list_1 = [ 1, 2, 4, 9]
# print(statistics.mean(list_1))
# print(statistics.variance(list_1))

import random # random values or effects, shuffle (=mélange)
# Chooses a random value in a list
# print(random.choice(list_1))

# print(random.random()) # float value between 0 and 1
# print(random.randint(5, 10)) # integer value between the values as parameters
# print(random.randrange(100)) # integer value in range between 0 and value as parameter
# print(random.sample(range(100), 10)) # select random 10 values in range 100
# print(random.sample(range(100), random.randrange(10))) # select randomly between 0 and 10 random value(s) in range 100
# print(list_1)
# random.shuffle(list_1)
# print(list_1)

import os
# Gets the current working directory
# print(os.getcwd())

# Gets the names of the files in current directory
import glob
# Gets all the files
# print(glob.glob("*"))
# Gets all the files with a specific extension
# print(glob.glob("*.txt"))

# filenames = glob.glob("*.txt")

# Exercise 8/30
# for file in filenames:
#     with open((file), 'r') as f:
#         content = f.read()
#         with open((file), 'w') as g:
#             content = g.write(f"new {content}")
#             g.close()

# Reads the content in all files with a specific extension at once 
# for file in filenames:
#     with open((file), 'r') as f:
#         print(f.read())

##### Pythpn POO and impact on Machine Learning