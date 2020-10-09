# EclassDownloader
----- DESCRIPTION

It is a multiple file downloader designed specifically for downloading files from eclass.uth.gr.
If you want to use this, you should already be a member of eclass.uth.gr

----- COMPATIBLE WITH
EclassDownloader is a browser extension that works ONLY on Chrome and Opera.
If you want to add it on Mozilla Firefox then don't use the chrome extension store.
Download from here and add manually. (See the end of the document)

----- DOWNLOAD
This github version will not be updated in the future.
You can find this extension on 
    https://chrome.google.com/webstore/detail/eclass-downloader/lkmjedjbimbmidehpdeeiijkkkholalc


----- FURTHER DESCRIPTION

Eclass.uth.gr is a website designed for the University of Thessaly.
On that site teachers upload files for the students, and students download these files.
  on 24/6/2020: 
        For a long time now, eclass.uth.gr does not provide functionality for downloading 
        whole folders with files. So, i wrote this extension, which finds all the files 
        under a folder, and lets the user select which of these files they want to download.
  on 1/9/2020:
        Eclass.uth.gr finally started the support of downloading whole folders so this extension
        might not be as useful now.


-----CODE-DESCRIPTION

It uses the source code of the Batch Link Downloader as the GUI of the extension.
First a "mini" web crawler algorithm is implemented, which will fetch every link under a folder.
This "fetch" happens using xmlHTTPrequests. The results are then filtered and the user is presented 
with (only) the files present under the current folder (Batch Link Downloader was showing multiple links
including websites, so this is practically a better version of BTD for eclass only.) 


------Instructions on how to manually add this extension on your browser by downloading it from github:
  
OPERA & CHROME
  - Download the files and save them to a folder, say "example"
  - Go to address about:extensions on your browser.
  - On most browsers, on your right and top will be an option "Developer Mode". Enable it.
  - Find the option "Load unpacked". Click it.
  - Select the folder "example".
  - Happy usage!

MOZILLA
  - You just have to go to settings --> addons, click the small button with the settings icon located 
     at the middle-top of the page and then choose "Add from file". 
