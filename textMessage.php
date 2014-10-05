<?php
    header("content-type: text/xml");
    echo("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n");
    
    if (strpos(strtolower($_REQUEST['Body']),'food') !== false) {
        sendText();
    }
    else if (strpos(strtolower($_REQUEST['Body']),'forage') !== false) {
        sendText();
    }

    function sendText(){
        echo("<Response>");
        echo("<Message>There's food at Locker 6: 84 Massachusetts Ave, Cambridge, MA 02139 (Outside of LaVerde's Market)</Message>");
    echo("</Response>");
        
    }

?>

