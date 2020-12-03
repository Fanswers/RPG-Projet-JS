<?php

$filename = "save.csv";

$handle = fopen("save.csv", "r");

if(filesize($filename) < 1){
    echo (false);
}
else{
    $contents = fread($handle, filesize($filename) - 1);
    fclose($handle);
    echo json_encode($contents);
}

?>