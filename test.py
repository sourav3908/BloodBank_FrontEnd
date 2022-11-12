input2=[44,45,56,3,2,6,17,75]
input4=[54,58]
input2.sort()
input4.sort()
c=0
for x in input4:
    for y in input2:
        if y<x:
            c+=1
print(c)