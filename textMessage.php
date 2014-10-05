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

/*
    $query = new ParseQuery("GameScore");
    $query->equalTo("playerName", "Dan Stemkoski");
    $results = $query->find();
    echo "Successfully retrieved " . count($results) . " scores.");
    // Do something with the returned ParseObject values
    for ($i = 0; $i < count($results); $i++) { 
      $object = $results[$i];
      echo $object->getObjectId() . ' - ' . $object->get('playerName'));
    }
*/
    $query = new ParseQuery("Messages");
    $query->select("foodItem", "address");
    $results = $query->find();
    // each of results will only have the selected fields available.
    for ($i = 0; $i < count($results); $i++) { 
        $object = $results[$i];
        if ($object->get('address') == "_______"){
            // Add $object->get('foodItem');  to the parachuttes
        }
        
        //echo $object->getObjectId() . ' - ' . $object->get('playerName'));
    }

?>

