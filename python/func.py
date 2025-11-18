# -*- coding: utf-8 -*-
"""
Created on Fri Jan 24 13:14:50 2025

@author: Vincent
"""

def fibo(n: float):
    a = 0
    b = 1
    
    list_fibo = []
    
    while a < n:
        list_fibo.append(a)
        a, b = b, a+b
    print(list_fibo)