print("hello")

# https://www.youtube.com/watch?v=ztEx9p1u9SY&ab_channel=CodeAvecJonathan
# 44'42

def convert(unit1: str, unit2: str, coeff: float):
    value_str = input(f"Conversion { unit1 } vers { unit2 }. Entrez la valeur en { unit1 } (ou 'q' pour quitter) : ")
    if value_str == "q":
        return True
    try:
        value_float = float(value_str)
    except ValueError:
            print("Erreur : seules les valeurs numériques sont acceptées.")
            print("Utilisez le point et non la virgule.")
            return convert(unit1, unit2, coeff)
            
    value_converted = round(value_float * coeff, 2)
    print(f"Résultat de la conversion : { value_float } { unit1 } = { value_converted } { unit2 }.")
    return False


while True:
    print("Ce programme vous permet d'effectuer des conversions d'unités.")
    print("1 - pouce vers cm")
    print("2 - cm vers pouce")
    choice = input("Votre choix (1 ou 2): ")
    if choice == "1" or choice == "2":
        break
    print("Erreur : Vous devez choisir 1 ou 2.\n")

while True:
    if choice == "1":
        if convert("pouces", "cm", 2.54):
            break
    if choice == "2":
        if convert("cm", "pouces", 0.394):
            break

# # Loops

# from robot import *
# for loop in range(20):
#    for loop in range(20):
#       print("OX", end = "")
#    print()
#    for loop in range(20):
#       print("XO", end = "")
#    print()

# # Variables

# num = 0

# for loop in range(100):
#    num = num + 1
#    print(num)
# print("J'arrive !")

# nb = 0
# coeff = 0

# for loop in range(50):
#     coeff = coeff + 1
#     nb = nb + coeff
#     print(nb)

# from robot import *
# distance = 1

# for loop in range(10):
#     for loop in range(distance):
#       droite()
#     ramasser()
#     for loop in range(distance):
#       gauche()
#     deposer()
#     distance = distance + 1

# nb = 1
# total = 0

# for loop in range(9):
#    total = total + nb*nb*nb
#    nb = nb + 2
# print(total)

# coeff = 1
# nb = 1
# total = 0

# for loop in range(20):
#    for loop in range(20):
#       total = nb * coeff
#       coeff = coeff + 1
#       print(total, end = " ")
#    print()
#    coeff = 1
#    nb = nb + 1

# production = 23
# size = int(input())

# print(production * size * size)

# repeat = 1 * 60 * 60 * 16
# day = int(input())

# print(day * repeat)

# âgeCadet = int(input())
# âgeAîné = int(input())
# différence = âgeAîné - âgeCadet
# print(différence)

# repeat = int(input())

# for loop in range(repeat):
#     print("Je dois suivre un cours")

# tempMin = int(input())
# tempMax = int(input())

# difference = tempMax - tempMin

# print(tempMin)
# for loop in range(difference):
#     tempMin = tempMin + 1
#     print(tempMin)
    
# start = int(input())
# nbNombres = int(input())
# coeff = 0

# for loop in range(nbNombres):
#     coeff = coeff + 1
#     start = start * coeff
#     print(start)
    
# positionDepart = int(input())
# largeurEmplacement = int(input())
# nbVendeurs = int(input())
# coeff = 0
# position = 0

# print(positionDepart)
# for loop in range(nbVendeurs):
#     coeff = coeff + 1
#     position = positionDepart + largeurEmplacement * coeff
#     print(position)
    
# total = 0
# for loop in range(20):
#     nb = int(input())
#     total = total + nb
# print(total)

# base = int(input())
# top = int(input())
# base = 7
# top = 3
# diff = base - top + 1
# total = 0

# for loop in range(diff):
#     total = total + base * base
#     base = base - 1
# print(total)

# nb = int(input())
# for loop in range(nb):
#     poids = int(input())
#     age = int(input())
#     longueur = int(input())
#     hauteur = int(input())
#     print(longueur * hauteur + poids)

# nb = int(input())
# poids = int(input())

# if nb * poids > 105:
#     print("Surcharge !")

# b = int(input())
# c = int(input())

# print(b - c)

# arrival = int(input())
# start = 0

# diff = arrival - start

# price = 10 + diff * 5

# if price > 53:
#     price = 53
    
# print(price)

# arignon = int(input())
# evaran = int(input())


# if arignon > evaran:
#     if arignon - evaran > 10:
#         print("La famille Arignon a un champ trop grand")
#     else:
#         print("")
# else:
#     if evaran - arignon > 10:
#         print("La famille Evaran a un champ trop grand")
#     else:
#         print("")

# age = int(input())

# if age < 21:
#     print("Tarif réduit")
# else: 
#     print("Tarif plein")


# first = int(input())
# second = int(input())

# total = first + second

# if total >= 10:
#     print("Taxe spéciale ! ")
#     print(36)
# else:
#     print("Taxe régulière")
#     print(total * 2)
    
# poids1 = 0
# poids2 = 0

# for iValue in range(int(input())):
#     poids1 += int(input())
#     poids2 += int(input())

# if poids1 > poids2:
#     print("L'équipe 1 a un avantage")
# else:
#     print("L'équipe 2 a un avantage")

# print("Poids total pour l'équipe 1 : ", poids1)
# print("Poids total pour l'équipe 2 : ", poids2)



# inch = 2.54
# cm = 0.394

# valuesToConvert = int(input("Entrez le nombre souhaité : "))

# for iValue in valuesToConvert:
# if convertToWhat == "1":
#     print("Value in inch is :", valuesToConvert / cm)
# else:
#     print("Value in cm is :", valuesToConvert / inch)
# print()
