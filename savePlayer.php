<?php

    if($_POST != null){
        $str = implode(',', $_POST) ."\n";

        $handle = fopen("save.csv", "a");

        file_put_contents("save.csv", "");

        fwrite($handle, $str);

        fclose($handle);
    }
    else{
        file_put_contents("save.csv", "");
    }

?>