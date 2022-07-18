## My first web project !

# EclassDownloader
----- DESCRIPTION

A multiple file downloader designed specifically for downloading files from eclass.uth.gr.
To use this someone needs to either be a member of a domain eclass.*.gr or access public resources  
on any of those domains.

----- COMPATIBLE WITH
Chrome and Opera.
If you want to add it on Mozilla Firefox then download from here and add manually. (See the end of the document)

----- DOWNLOAD
This repo will not be updated in the future.
You can find this extension on 
    https://chrome.google.com/webstore/detail/eclass-downloader/lkmjedjbimbmidehpdeeiijkkkholalc


----- FURTHER DESCRIPTION
Eclass.*.gr are websites designed for various universities of Greece.
On those sites teachers upload course relevant material.
The extension has been tested and was found to be working only on eclass.uth.gr  
  on 24/6/2020: 
        For a long time now, eclass.uth.gr does not provide functionality for downloading 
        whole folders with files. So, i wrote this extension, which finds all the files 
        under a folder, and lets the user select which of these files they want to download.
  on 1/9/2020:
        Eclass.uth.gr finally started the support of downloading whole folders so this extension
        might not be as useful now.


-----CODE-DESCRIPTION
First a "mini" web scraper algorithm is implemented, which will fetch every link under a folder.
This "fetch" happens using xmlHTTPrequests. The results are then filtered and the user is presented 
with the files present under the current folder.

------Instructions on how to manually add this extension on your browser by downloading it from github:  
MOZILLA
  - You just have to go to settings --> addons, click the small button with the settings icon located 
     at the middle-top of the page and then choose "Add from file". 
