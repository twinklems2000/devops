#!/bin/bash

for i in {1..30}; do
if ([ `expr $i % 3` == 0 ] || [ `expr $i % 5` == 0 ]) && [ `expr $i % 15` != 0 ]; 
then
	echo $i
fi;
done





