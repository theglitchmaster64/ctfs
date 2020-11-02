<?php

class lol{

	public $lolvar1 = "supm8\n";
	public $lolvar2 = "rip\n";

	public function lol(){
		echo $this->lolvar1;
	}

	public function test(){
		echo $this->lolvar2;
	}

}

$ob = new lol();
$ob->test();

echo "\n\n" ;

print(serialize($ob));

?>
