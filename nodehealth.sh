#!/bin/bash

################
# Author: Twinkle
# Date: 26th march, 2024

# This script output nodehealth
#
# Version: v1
#
################

set -x # debug mode
set -e # exit the script when there is error
set -o pipefail

df -h

free -g 

nproc

ps -ef | grep "Skype" | awk -F" " '{print $2}'



