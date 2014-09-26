###INSTALLATION
To Install Boilerplate you have to install your Ruby & Node Dependencies 

#####Installing Node Dependencies
    $ npm install

#####Installing Ruby Dependencies
    $ bundle install
    
#####Available Pre-Defined Gulp Tasks
    $ gulp
    $ gulp imagemin
    $ gulp compass
    $ gulp favicons
    $ gulp prod
    
#####Gulp Prod Task
  - Run Compass Compile
  - Run Favicon Generator
  - Runs Imagemin and moves optimized files from src/images/assets -> /images/assets

#####Gulp Default Task
On load runs ['browser-sync', 'compass']
  - Start Browsersync Server
  - Run Compass Compile
  - 
Then Watches
  - sass -> Compass
  - html -> Browser Reload
  - src/images/assets -> Imagemin, Browser Reload
  - /images/assets -> Browser Reload
