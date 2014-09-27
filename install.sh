#!/bin/bash
bold=`tput bold` # Bold Text
normal=`tput sgr0` # Normal Text
resttex='\033[0m'    # Text Reset
greentex='\033[0;32m'



echo "Installing Project Dependencies in, ${bold}$PWD"

echo "${bold}Installing Node Dependencies From NPM"
npm install
echo "${greentex}${bold}Node Dependencies Installed${resttex}"

echo "${bold}Installing Ruby Gem Dependencies through Bundler ${normal}(getting all the right verisons)"
gem install bundler
bundle install
echo "${greentex}${bold}Gems Installed${resttex}"

echo "${bold}Installing Bower Packages ${normal}(because package managers are cool)"
bower install
echo "${greentex}${bold}All Packages Installed${resttex}"

echo "${greentex}${normal}Hey $USER, We Installed Everything, To get started just type 'gulp'\n${bold}Happy Coding${resttex}"
