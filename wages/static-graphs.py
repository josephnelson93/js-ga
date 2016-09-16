# -*- coding: utf-8 -*-
"""
Created on Thu Sep 15 21:06:07 2016

@author: JosephNelson
"""


# calculate the per hour wage based on two inputs: salary, hours per week
# remember overtime begins at >40hrs and is 1.5x wage
def realWage(salary, hours):
    if hours<=40:
        return salary/52/hours
    if hours > 40:
        return salary/(2080+(hours-40)*1.5*52) # math

# real income is using the actual per hour calculation to determine what pay should be
def realIncome(salary, hours):
    if hours<=40:
        return hours*52 *realWage(salary, hours)
    if hours >40:
        wage = realWage(salary, hours)
        return wage*40*52 + wage*1.5*(hours-40)*52

def incomes(salary, hr_amounts, income):
    for x in hr_amounts:
        income.append(realIncome(salary, x))
    return income


income = []
weekly_hrs = range(20,50)
incomes(50000, weekly_hrs, income)


import matplotlib.pyplot as plt
%matplotlib inline
plt.rcParams['figure.figsize'] = (8, 6)
plt.rcParams['font.size'] = 14
plt.style.use('fivethirtyeight')    # always FiveThirtyEight

plt.scatter(weekly_hrs, income)
plt.xlabel('Weekly Hours')
plt.ylabel('Real Income')
plt.savefig("demo_plot.png",bbox_inches='tight')

# add a line
plt.plot(weekly_hrs, income, 'b--')
plt.xlabel('Weekly Hours')
plt.ylabel('Real Income')
plt.savefig("demo_plot_line.png",bbox_inches='tight')


# other attempts
print realWage(40000,30)

print realIncome(40000,20)


print 52*39*realWage(40000,39)

print 52*30*realWage(40000,30)

print 52*20*realWage(40000,20)

print 52*10*realWage(40000,10)

print 52*1*realWage(40000,1)

