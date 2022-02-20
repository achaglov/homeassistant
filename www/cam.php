<?php
//set_time_limit(0);
header('Content-Type: image/jpeg');
//header('Content-Type: multipart/x-mixed-replace;boundary=ipcamera'); 
readfile("http://admin:w7cdmtq@192.168.1.50:5914/snapshot.cgi");
?>